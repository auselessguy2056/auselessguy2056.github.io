// combat.js

// This file handles the combat and skill point system.
// It assumes that the 'game' object (from script.js) is available globally
// and exposes a 'resources' object and a 'notify' function.

const COMBAT_CONVERSION_RESOURCE = 'zenithOfCreation'; // The resource to convert for skill points
const SKILL_POINT_CONVERSION_COST = 1000000; // 1 million units of the resource for 1 skill point
const STAT_UPGRADE_COST = 1; // 1 skill point per stat upgrade

// Combat-related resources and stats
let combatResources = {
    skillPoints: 0,
    atk: 1,
    def: 1,
    hp: 100,
    currentHp: 100, // Current health during combat
    monstersDefeated: 0,
    currentMonster: null // The monster currently being fought
};

// Monster definitions
const monsters = [
    { name: "Basic Slime", atk: 5, def: 1, hp: 50, reward: { wood: 1000, skillPoints: 0.1 } },
    { name: "Forest Goblin", atk: 10, def: 5, hp: 80, reward: { wood: 2000, skillPoints: 0.2 } },
    { name: "Cave Troll", atk: 20, def: 10, hp: 150, reward: { stone: 500, skillPoints: 0.5 } },
    { name: "Iron Golem", atk: 30, def: 20, hp: 250, reward: { iron: 200, skillPoints: 0.8 } },
    { name: "Shadow Beast", atk: 50, def: 30, hp: 400, reward: { alloy: 100, skillPoints: 1.2 } },
    { name: "Void Lurker", atk: 75, def: 50, hp: 600, reward: { circuitry: 50, skillPoints: 1.5 } },
    { name: "Cosmic Horror", atk: 100, def: 75, hp: 1000, reward: { aiCore: 20, skillPoints: 2 } },
    { name: "Reality Bender", atk: 150, def: 100, hp: 1500, reward: { realityShard: 10, skillPoints: 3 } },
    { name: "Paradox Anomaly", atk: 200, def: 150, hp: 2500, reward: { paradox: 5, skillPoints: 4 } },
    { name: "Singularity Guardian", atk: 300, def: 200, hp: 4000, reward: { singularity: 2, skillPoints: 5 } }
];

// DOM Elements
const skillPointsCountSpan = document.getElementById('skillPointsCount');
const playerAtkSpan = document.getElementById('playerAtk');
const playerDefSpan = document.getElementById('playerDef');
const playerHpSpan = document.getElementById('playerHp');
const convertZenithToSkillPointBtn = document.getElementById('convertZenithToSkillPoint');
const upgradeAtkBtn = document.getElementById('upgradeAtkBtn');
const upgradeDefBtn = document.getElementById('upgradeDefBtn');
const upgradeHpBtn = document.getElementById('upgradeHpBtn');
const currentMonsterNameSpan = document.getElementById('currentMonsterName');
const monsterHpSpan = document.getElementById('monsterHp');
const fightMonsterBtn = document.getElementById('fightMonsterBtn');
const combatLogParagraph = document.getElementById('combatLog');

// Translations for combat section (assuming game.translations exists)
const combatTranslations = {
    en: {
        combatSkillsTitle: "Combat & Skills",
        combatSkillsDescription: "Convert advanced resources into Skill Points to enhance your combat abilities and fight monsters!",
        skillPointsLabel: "Skill Points",
        convertBtnText: (cost) => `Convert ${cost} Zenith of Creation to 1 Skill Point`,
        playerStatsTitle: "Your Stats",
        atkLabel: "Attack",
        defLabel: "Defense",
        hpLabel: "Health",
        upgradeBtnText: (cost) => `Upgrade (Cost: ${cost} SP)`,
        monsterCombatTitle: "Monster Combat",
        currentMonsterLabel: "Current Monster",
        monsterHpLabel: "Monster HP",
        fightMonsterBtn: "Fight Monster",
        notEnoughZenith: (cost) => `Not enough Zenith of Creation! You need ${cost} to get 1 Skill Point.`,
        skillPointConversionSuccess: (sp) => `Successfully converted resources! Gained ${sp} Skill Points.`,
        notEnoughSkillPoints: (cost) => `Not enough Skill Points! You need ${cost} SP.`,
        statUpgradeSuccess: (stat) => `Successfully upgraded ${stat}!`,
        noMonsterToFight: "No monster to fight. Generate a new one!",
        monsterEncounter: (monsterName) => `You encounter a ${monsterName}!`,
        playerAttack: (playerAtk, monsterName, damage) => `You attack the ${monsterName} for ${damage} damage!`,
        monsterAttack: (monsterName, monsterAtk, playerDamage) => `The ${monsterName} attacks you for ${playerDamage} damage!`,
        playerDefeatedMonster: (monsterName) => `You defeated the ${monsterName}!`,
        playerLostFight: (monsterName) => `You were defeated by the ${monsterName}.`,
        fightReward: (rewardText) => `You gained: ${rewardText}.`,
        newMonsterSpawned: (monsterName) => `A new monster, ${monsterName}, has appeared!`,
        noMoreMonsters: "You have defeated all known monsters! More will appear later.",
        playerHealthLow: (hp) => `Your health is low (${hp} HP). Consider upgrading HP or healing before fighting!`,
        fightInProgress: "A fight is already in progress!",
        fightStart: "Fight started!",
        fightEnd: "Fight ended."
    },
    vi: {
        combatSkillsTitle: "Chiến Đấu & Kỹ Năng",
        combatSkillsDescription: "Chuyển đổi tài nguyên cao cấp thành Điểm Kỹ Năng để tăng cường khả năng chiến đấu và chiến đấu với quái vật!",
        skillPointsLabel: "Điểm Kỹ Năng",
        convertBtnText: (cost) => `Chuyển đổi ${cost} Đỉnh Cao Sáng Tạo thành 1 Điểm Kỹ Năng`,
        playerStatsTitle: "Chỉ Số Của Bạn",
        atkLabel: "Tấn Công",
        defLabel: "Phòng Thủ",
        hpLabel: "Máu",
        upgradeBtnText: (cost) => `Nâng Cấp (Chi Phí: ${cost} ĐKN)`,
        monsterCombatTitle: "Chiến Đấu Quái Vật",
        currentMonsterLabel: "Quái Vật Hiện Tại",
        monsterHpLabel: "Máu Quái Vật",
        fightMonsterBtn: "Chiến Đấu",
        notEnoughZenith: (cost) => `Không đủ Đỉnh Cao Sáng Tạo! Bạn cần ${cost} để nhận 1 Điểm Kỹ Năng.`,
        skillPointConversionSuccess: (sp) => `Chuyển đổi tài nguyên thành công! Nhận được ${sp} Điểm Kỹ Năng.`,
        notEnoughSkillPoints: (cost) => `Không đủ Điểm Kỹ Năng! Bạn cần ${cost} ĐKN.`,
        statUpgradeSuccess: (stat) => `Nâng cấp ${stat} thành công!`,
        noMonsterToFight: "Không có quái vật để chiến đấu. Tạo một con mới!",
        monsterEncounter: (monsterName) => `Bạn gặp một ${monsterName}!`,
        playerAttack: (playerAtk, monsterName, damage) => `Bạn tấn công ${monsterName} gây ${damage} sát thương!`,
        monsterAttack: (monsterName, monsterAtk, playerDamage) => `Con ${monsterName} tấn công bạn gây ${playerDamage} sát thương!`,
        playerDefeatedMonster: (monsterName) => `Bạn đã đánh bại ${monsterName}!`,
        playerLostFight: (monsterName) => `Bạn đã bị ${monsterName} đánh bại.`,
        fightReward: (rewardText) => `Bạn nhận được: ${rewardText}.`,
        newMonsterSpawned: (monsterName) => `Một quái vật mới, ${monsterName}, đã xuất hiện!`,
        noMoreMonsters: "Bạn đã đánh bại tất cả quái vật đã biết! Sẽ có thêm sau.",
        playerHealthLow: (hp) => `Máu của bạn thấp (${hp} HP). Hãy cân nhắc nâng cấp HP hoặc hồi máu trước khi chiến đấu!`,
        fightInProgress: "Một trận chiến đang diễn ra!",
        fightStart: "Trận chiến bắt đầu!",
        fightEnd: "Trận chiến kết thúc."
    }
};

// Function to get current translations (assuming game.resources.language is accessible)
function getCombatTranslation(key, ...args) {
    const lang = game.resources.language || 'en'; // Default to English
    let text = combatTranslations[lang][key];
    if (typeof text === 'function') {
        return text(...args);
    }
    return text;
}

/**
 * Updates the display of combat-related stats.
 */
function updateCombatDisplay() {
    skillPointsCountSpan.textContent = combatResources.skillPoints.toFixed(0);
    playerAtkSpan.textContent = combatResources.atk.toFixed(0);
    playerDefSpan.textContent = combatResources.def.toFixed(0);
    playerHpSpan.textContent = combatResources.currentHp.toFixed(0) + '/' + combatResources.hp.toFixed(0);

    // Update button texts and disable states
    convertZenithToSkillPointBtn.textContent = getCombatTranslation('convertBtnText', SKILL_POINT_CONVERSION_COST);
    convertZenithToSkillPointBtn.disabled = game.resources[COMBAT_CONVERSION_RESOURCE].count < SKILL_POINT_CONVERSION_COST;

    upgradeAtkBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeAtkBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    upgradeDefBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeDefBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    upgradeHpBtn.textContent = getCombatTranslation('upgradeBtnText', STAT_UPGRADE_COST);
    upgradeHpBtn.disabled = combatResources.skillPoints < STAT_UPGRADE_COST;

    if (combatResources.currentMonster) {
        currentMonsterNameSpan.textContent = combatResources.currentMonster.name;
        monsterHpSpan.textContent = combatResources.currentMonster.currentHp.toFixed(0) + '/' + combatResources.currentMonster.hp.toFixed(0);
        fightMonsterBtn.textContent = getCombatTranslation('fightMonsterBtn');
    } else {
        currentMonsterNameSpan.textContent = getCombatTranslation('noMonsterToFight');
        monsterHpSpan.textContent = "N/A";
        fightMonsterBtn.textContent = "Spawn Monster"; // Change button text to spawn
    }

    // Update combat section titles and descriptions
    document.getElementById('combatSkillsTitle').textContent = getCombatTranslation('combatSkillsTitle');
    document.getElementById('combatSkillsDescription').textContent = getCombatTranslation('combatSkillsDescription');
    document.getElementById('skillPointsLabel').textContent = getCombatTranslation('skillPointsLabel');
    document.getElementById('playerStatsTitle').textContent = getCombatTranslation('playerStatsTitle');
    document.getElementById('atkLabel').textContent = getCombatTranslation('atkLabel');
    document.getElementById('defLabel').textContent = getCombatTranslation('defLabel');
    document.getElementById('hpLabel').textContent = getCombatTranslation('hpLabel');
    document.getElementById('monsterCombatTitle').textContent = getCombatTranslation('monsterCombatTitle');
    document.getElementById('currentMonsterLabel').textContent = getCombatTranslation('currentMonsterLabel');
    document.getElementById('monsterHpLabel').textContent = getCombatTranslation('monsterHpLabel');
}

/**
 * Converts the designated resource into skill points.
 */
function convertResourceToSkillPoint() {
    if (game.resources[COMBAT_CONVERSION_RESOURCE].count >= SKILL_POINT_CONVERSION_COST) {
        game.resources[COMBAT_CONVERSION_RESOURCE].count -= SKILL_POINT_CONVERSION_COST;
        combatResources.skillPoints += 1;
        game.notify("success", getCombatTranslation('skillPointConversionSuccess', 1));
        game.saveGame(1); // Save silently
        updateCombatDisplay();
        game.updateDisplay(); // Update main game display for resource count change
    } else {
        game.notify("error", getCombatTranslation('notEnoughZenith', SKILL_POINT_CONVERSION_COST));
    }
}

/**
 * Upgrades a player stat (ATK, DEF, HP).
 * @param {string} statType - 'atk', 'def', or 'hp'.
 */
function upgradeStat(statType) {
    if (combatResources.skillPoints >= STAT_UPGRADE_COST) {
        combatResources.skillPoints -= STAT_UPGRADE_COST;
        if (statType === 'atk') {
            combatResources.atk += 1; // Increase ATK by 1
        } else if (statType === 'def') {
            combatResources.def += 1; // Increase DEF by 1
        } else if (statType === 'hp') {
            combatResources.hp += 10; // Increase max HP by 10
            combatResources.currentHp += 10; // Also heal current HP
        }
        game.notify("success", getCombatTranslation('statUpgradeSuccess', getCombatTranslation(statType + 'Label')));
        game.saveGame(1); // Save silently
        updateCombatDisplay();
    } else {
        game.notify("error", getCombatTranslation('notEnoughSkillPoints', STAT_UPGRADE_COST));
    }
}

/**
 * Spawns a new random monster based on monsters defeated.
 */
function spawnMonster() {
    if (combatResources.currentMonster) {
        game.notify("info", getCombatTranslation('fightInProgress'));
        return;
    }

    const availableMonsters = monsters.filter((_, index) => index <= combatResources.monstersDefeated);
    if (availableMonsters.length === 0) {
        game.notify("info", getCombatTranslation('noMoreMonsters'));
        return;
    }

    const monsterIndex = Math.floor(Math.random() * availableMonsters.length);
    const newMonster = JSON.parse(JSON.stringify(availableMonsters[monsterIndex])); // Deep copy monster object
    newMonster.currentHp = newMonster.hp; // Initialize current HP for the monster

    combatResources.currentMonster = newMonster;
    combatLogParagraph.textContent = getCombatTranslation('monsterEncounter', newMonster.name);
    game.notify("info", getCombatTranslation('newMonsterSpawned', newMonster.name));
    updateCombatDisplay();
}

/**
 * Simulates a fight turn by turn.
 */
function fightMonster() {
    if (!combatResources.currentMonster) {
        spawnMonster();
        return;
    }

    if (combatResources.currentHp <= 0) {
        game.notify("error", getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0)));
        combatLogParagraph.textContent = getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0));
        return;
    }

    let log = getCombatTranslation('fightStart') + '\n';

    // Player attacks monster
    let playerDamage = Math.max(0, combatResources.atk - combatResources.currentMonster.def);
    combatResources.currentMonster.currentHp -= playerDamage;
    log += getCombatTranslation('playerAttack', combatResources.atk, combatResources.currentMonster.name, playerDamage) + '\n';

    if (combatResources.currentMonster.currentHp <= 0) {
        // Monster defeated
        log += getCombatTranslation('playerDefeatedMonster', combatResources.currentMonster.name) + '\n';
        handleFightWin(combatResources.currentMonster);
        combatResources.currentMonster = null; // Clear monster
        combatResources.monstersDefeated++; // Increment defeated count
        spawnMonster(); // Spawn a new monster
    } else {
        // Monster attacks player
        let monsterDamage = Math.max(0, combatResources.currentMonster.atk - combatResources.def);
        combatResources.currentHp -= monsterDamage;
        log += getCombatTranslation('monsterAttack', combatResources.currentMonster.name, combatResources.currentMonster.atk, monsterDamage) + '\n';

        if (combatResources.currentHp <= 0) {
            // Player defeated
            log += getCombatTranslation('playerLostFight', combatResources.currentMonster.name) + '\n';
            handleFightLoss();
            combatResources.currentMonster = null; // Clear monster
        }
    }

    log += getCombatTranslation('fightEnd');
    combatLogParagraph.textContent = log;
    game.saveGame(1); // Save silently after each turn/fight outcome
    updateCombatDisplay();
}

/**
 * Handles actions after winning a fight.
 * @param {object} defeatedMonster - The monster that was defeated.
 */
function handleFightWin(defeatedMonster) {
    let rewardText = [];
    for (const resType in defeatedMonster.reward) {
        const amount = defeatedMonster.reward[resType];
        if (game.resources[resType]) {
            game.resources[resType].count += amount;
            // Get translated resource name from main game's translations if available
            const displayResName = game.translations[game.resources.language][`${resType}Title`] || resType;
            rewardText.push(`${amount.toFixed(1)} ${displayResName}`);
        } else if (resType === 'skillPoints') {
            combatResources.skillPoints += amount;
            rewardText.push(`${amount.toFixed(1)} ${getCombatTranslation('skillPointsLabel')}`);
        }
    }
    game.notify("success", getCombatTranslation('fightReward', rewardText.join(', ')));
    game.updateDisplay(); // Update main game resource display
}

/**
 * Handles actions after losing a fight.
 */
function handleFightLoss() {
    game.notify("error", getCombatTranslation('playerLostFight', combatResources.currentMonster.name));
    // Optionally, reset player HP or apply other penalties
    combatResources.currentHp = combatResources.hp; // Fully heal player after loss
    game.notify("info", getCombatTranslation('playerHealthLow', combatResources.currentHp.toFixed(0))); // Notify healed
}

// Event Listeners for Combat
convertZenithToSkillPointBtn.addEventListener('click', convertResourceToSkillPoint);
upgradeAtkBtn.addEventListener('click', () => upgradeStat('atk'));
upgradeDefBtn.addEventListener('click', () => upgradeStat('def'));
upgradeHpBtn.addEventListener('click', () => upgradeStat('hp'));
fightMonsterBtn.addEventListener('click', fightMonster);

// Initialize combat display when the script loads
// This will be called after script.js init, so game.resources should be available
document.addEventListener('DOMContentLoaded', () => {
    // Attempt to load combat state from localStorage
    try {
        const savedCombatData = localStorage.getItem('incrementalGameCombatSave');
        if (savedCombatData) {
            const parsedCombatData = JSON.parse(savedCombatData);
            Object.assign(combatResources, parsedCombatData);
            // Ensure currentHp doesn't exceed max HP if max HP was reduced in save
            if (combatResources.currentHp > combatResources.hp) {
                combatResources.currentHp = combatResources.hp;
            }
        }
    } catch (e) {
        console.error("Error loading combat save data:", e);
    }
    updateCombatDisplay();
});

// Hook into the main game's save function to also save combat data
// This requires a small modification to script.js to expose a way to save combat data.
// For now, we'll assume `game.saveGame` is called and we can override/extend it.
// A better approach would be to have `game.saveGame` call a `combat.saveCombatData` function.

// Let's add a global save function for combat data that can be called by script.js
window.saveCombatData = () => {
    try {
        localStorage.setItem('incrementalGameCombatSave', JSON.stringify(combatResources));
    } catch (e) {
        console.error("Error saving combat data:", e);
    }
};

// Override the game.init to add combat-specific initialization
// This is a workaround since we cannot directly modify script.js in this response.
// In a real scenario, you'd add this to the game.init function in script.js.
const originalGameInit = game.init;
game.init = () => {
    originalGameInit(); // Call the original init function first
    // Add combat-specific event listeners and initial display updates here if needed
    // However, since we use DOMContentLoaded for combat.js, this might be redundant for listeners.
    // Ensure updateCombatDisplay is called after game.loadGame to reflect loaded state.
    // The DOMContentLoaded listener for combat.js handles this.
};

// If game.saveGame is called, also save combat data
// This is a hacky way to ensure combat data is saved if script.js's saveGame is called.
// A more robust solution would be to modify script.js directly.
const originalSaveGame = game.saveGame;
game.saveGame = (silent) => {
    originalSaveGame(silent);
    window.saveCombatData(); // Call our combat save function
};

// Add combat translations to the main game's translation object
// This allows the main game's updateTextContent to also update combat section texts.
Object.assign(game.translations.en, combatTranslations.en);
Object.assign(game.translations.vi, combatTranslations.vi);

// Ensure updateTextContent is called after translations are merged
// This might need a manual call or a modification in script.js's updateDisplay.
// For now, we'll rely on the existing updateDisplay calls in game.init and gameLoop.
// A more direct approach would be to add `combat.updateCombatDisplay()` to `game.updateDisplay()`.
const originalUpdateDisplay = game.updateDisplay;
game.updateDisplay = () => {
    originalUpdateDisplay();
    updateCombatDisplay(); // Ensure combat stats are always updated with main display
};

// Initial update of combat display
updateCombatDisplay();
