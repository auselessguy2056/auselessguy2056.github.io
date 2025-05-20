// Trạng thái trò chơi
let resources = {
    wood: 0,
    grain: 0,
    gold: 0,
    stone: 0,
    iron: 0,
    researchPoints: 0
};

let workers = {
    total: 5,
    idle: 5,
    assigned: {
        forest: 0,
        farm: 0,
        mine: 0,
        quarry: 0,
        ironMine: 0
    },
    researchers: 0,
    idleResearchers: 0,
    assignedResearchers: 0
};

let buildings = {
    house: {
        level: 1,
        maxWorkers: 5,
        upgradeCost: {
            wood: 50,
            stone: 30
        }
    },
    library: {
        level: 0,
        maxResearchers: 0,
        buildCost: {
            wood: 100,
            stone: 70
        },
        upgradeCost: {
            wood: 50,
            stone: 40
        }
    }
};

let training = {
    researcher: {
        inProgress: false,
        timeRemaining: 0,
        cost: {
            grain: 10,
            gold: 5
        },
        duration: 60 // Giây
    }
};

let research = {
    unlockedTechnologies: [],
    // armorCraftingUnlocked: false, // Không còn tự động mở khóa
    armorCraftingCost: 50,
    // Trạng thái công nghệ riêng biệt để kiểm tra đã đạt đủ điểm nghiên cứu chưa
    canUnlockArmorCrafting: false
};

let crafting = {
    armor: {
        count: 0,
        inProgress: false,
        timeRemaining: 0,
        cost: {
            iron: 50
        },
        duration: 60 // Giây
    }
};

// Cập nhật giao diện người dùng
function updateUI() {
    document.getElementById('wood').textContent = resources.wood;
    document.getElementById('grain').textContent = resources.grain;
    document.getElementById('gold').textContent = resources.gold;
    document.getElementById('stone').textContent = resources.stone;
    document.getElementById('iron').textContent = resources.iron;
    document.getElementById('research-points').textContent = resources.researchPoints;

    document.getElementById('total-workers').textContent = workers.total;
    document.getElementById('idle-workers').textContent = workers.idle;
    document.getElementById('researchers').textContent = workers.researchers;
    document.getElementById('idle-workers-for-training').textContent = workers.idle;

    document.getElementById('workers-forest').textContent = workers.assigned.forest;
    document.getElementById('workers-farm').textContent = workers.assigned.farm;
    document.getElementById('workers-mine').textContent = workers.assigned.mine;
    document.getElementById('workers-quarry').textContent = workers.assigned.quarry;
    document.getElementById('workers-iron-mine').textContent = workers.assigned.ironMine;

    // Cập nhật thông tin Nhà ở
    document.getElementById('house-level').textContent = buildings.house.level;
    document.getElementById('house-max-workers').textContent = buildings.house.maxWorkers;
    document.getElementById('house-upgrade-cost-wood').textContent = buildings.house.upgradeCost.wood;
    document.getElementById('house-upgrade-cost-stone').textContent = buildings.house.upgradeCost.stone;

    // Cập nhật thông tin Thư viện
    document.getElementById('library-level').textContent = buildings.library.level;
    document.getElementById('library-max-researchers').textContent = buildings.library.maxResearchers; // Thay đổi ID

    // Hiển thị/ẩn nút xây/nâng cấp thư viện
    if (buildings.library.level === 0) {
        document.getElementById('build-library-btn').style.display = 'inline-block';
        document.getElementById('upgrade-library-btn').style.display = 'none';
        document.getElementById('library-cost-label').textContent = 'Chi phí xây dựng:';
        document.getElementById('library-cost-wood').textContent = buildings.library.buildCost.wood;
        document.getElementById('library-cost-stone').textContent = buildings.library.buildCost.stone;
    } else {
        document.getElementById('build-library-btn').style.display = 'none';
        document.getElementById('upgrade-library-btn').style.display = 'inline-block';
        document.getElementById('library-cost-label').textContent = 'Chi phí nâng cấp:';
        document.getElementById('library-cost-wood').textContent = buildings.library.upgradeCost.wood;
        document.getElementById('library-cost-stone').textContent = buildings.library.upgradeCost.stone;
    }

    // Cập nhật huấn luyện nhà nghiên cứu
    document.getElementById('researcher-training-countdown').textContent = training.researcher.timeRemaining + ' giây';
    const researcherProgressPercent = ((training.researcher.duration - training.researcher.timeRemaining) / training.researcher.duration) * 100;
    document.getElementById('researcher-training-progress').style.width = researcherProgressPercent + '%';

    if (training.researcher.inProgress) {
        document.getElementById('researcher-training-progress-container').style.display = 'block';
        document.getElementById('train-researcher-btn').disabled = true;
    } else {
        document.getElementById('researcher-training-progress-container').style.display = 'none';
        // Vô hiệu hóa nút nếu không đủ tài nguyên
        const canAffordResearcher = resources.grain >= training.researcher.cost.grain && resources.gold >= training.researcher.cost.gold && workers.idle > 0;
        document.getElementById('train-researcher-btn').disabled = !canAffordResearcher;
    }

    // Cập nhật phân bổ nhà nghiên cứu
    document.getElementById('idle-researchers').textContent = workers.idleResearchers;
    document.getElementById('assigned-researchers').textContent = workers.assignedResearchers;
    document.getElementById('research-points-per-sec').textContent = workers.assignedResearchers;
    document.getElementById('total-research-points').textContent = resources.researchPoints;

    // Cập nhật nút mở khóa công nghệ
    document.getElementById('armor-unlock-cost').textContent = research.armorCraftingCost;
    // Nút mở khóa áo giáp chỉ khả dụng khi đủ điểm và chưa được mở khóa
    const isArmorCraftingUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
    document.getElementById('unlock-armor-crafting-btn').disabled = !research.canUnlockArmorCrafting || isArmorCraftingUnlocked;
    if (isArmorCraftingUnlocked) {
        document.getElementById('unlock-armor-crafting-btn').textContent = 'Đã mở khóa';
    }


    // Cập nhật Lò Rèn
    document.getElementById('armor-count').textContent = crafting.armor.count;
    const isCraftingArmorUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
    document.getElementById('craft-armor-btn').disabled = !isCraftingArmorUnlocked || crafting.armor.inProgress || resources.iron < crafting.armor.cost.iron;

    document.getElementById('armor-crafting-countdown').textContent = crafting.armor.timeRemaining + ' giây';
    const armorProgressPercent = ((crafting.armor.duration - crafting.armor.timeRemaining) / crafting.armor.duration) * 100;
    document.getElementById('armor-crafting-progress').style.width = armorProgressPercent + '%';

    if (crafting.armor.inProgress) {
        document.getElementById('armor-crafting-progress-container').style.display = 'block';
    } else {
        document.getElementById('armor-crafting-progress-container').style.display = 'none';
    }
    
    // Cập nhật danh sách công nghệ đã mở khóa
    const unlockedTechList = document.getElementById('unlocked-technologies');
    unlockedTechList.innerHTML = '';
    if (research.unlockedTechnologies.length === 0) {
        unlockedTechList.innerHTML = '<li>Chưa có công nghệ nào được mở khóa.</li>';
    } else {
        research.unlockedTechnologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            unlockedTechList.appendChild(li);
        });
    }
}

// Gửi công nhân đến một khu vực
function assignWorker(location) {
    if (workers.idle > 0) {
        const totalAssignedWorkers = Object.values(workers.assigned).reduce((sum, current) => sum + current, 0);
        if (totalAssignedWorkers + 1 <= buildings.house.maxWorkers) {
            workers.idle--;
            workers.assigned[location]++;
            updateUI();
        } else {
            alert('Tất cả chỗ làm việc đã đầy! Cần nâng cấp Nhà ở để có thể gửi thêm công nhân.');
        }
    } else {
        alert('Không còn công nhân rảnh!');
    }
}

// Rút công nhân khỏi một khu vực
function removeWorker(location) {
    if (workers.assigned[location] > 0) {
        workers.idle++;
        workers.assigned[location]--;
        updateUI();
    } else {
        alert('Không có công nhân nào ở khu vực này để rút!');
    }
}

// Xây dựng công trình
function buildBuilding(buildingName) {
    if (buildingName === 'library') {
        const costWood = buildings.library.buildCost.wood;
        const costStone = buildings.library.buildCost.stone;

        if (resources.wood >= costWood && resources.stone >= costStone) {
            resources.wood -= costWood;
            resources.stone -= costStone;
            buildings.library.level = 1;
            buildings.library.maxResearchers = 1;
            alert('Thư viện đã được xây dựng!');
            updateUI();
        } else {
            let message = 'Không đủ tài nguyên để xây dựng Thư viện!\n';
            if (resources.wood < costWood) message += `Thiếu Gỗ: ${costWood - resources.wood}\n`;
            if (resources.stone < costStone) message += `Thiếu Đá: ${costStone - resources.stone}\n`;
            alert(message);
        }
    }
}

// Nâng cấp công trình
function upgradeBuilding(buildingName) {
    if (buildingName === 'house') {
        const costWood = buildings.house.upgradeCost.wood;
        const costStone = buildings.house.upgradeCost.stone;

        if (resources.wood >= costWood && resources.stone >= costStone) {
            resources.wood -= costWood;
            resources.stone -= costStone;
            buildings.house.level++;
            buildings.house.maxWorkers += 2;
            
            buildings.house.upgradeCost.wood = Math.floor(buildings.house.upgradeCost.wood * 1.5);
            buildings.house.upgradeCost.stone = Math.floor(buildings.house.upgradeCost.stone * 1.5);

            workers.total += 2;
            workers.idle += 2;

            alert(`Nâng cấp Nhà ở lên cấp ${buildings.house.level} thành công!`);
            updateUI();
        } else {
            let message = 'Không đủ tài nguyên để nâng cấp Nhà ở!\n';
            if (resources.wood < costWood) message += `Thiếu Gỗ: ${costWood - resources.wood}\n`;
            if (resources.stone < costStone) message += `Thiếu Đá: ${costStone - resources.stone}\n`;
            alert(message);
        }
    } else if (buildingName === 'library') {
        if (buildings.library.level === 0) {
            alert('Cần xây dựng Thư viện trước khi nâng cấp!');
            return;
        }
        const costWood = buildings.library.upgradeCost.wood;
        const costStone = buildings.library.upgradeCost.stone;

        if (resources.wood >= costWood && resources.stone >= costStone) {
            resources.wood -= costWood;
            resources.stone -= costStone;
            buildings.library.level++;
            buildings.library.maxResearchers += 1;
            
            buildings.library.upgradeCost.wood = Math.floor(buildings.library.upgradeCost.wood * 1.8);
            buildings.library.upgradeCost.stone = Math.floor(buildings.library.upgradeCost.stone * 1.8);

            alert(`Nâng cấp Thư viện lên cấp ${buildings.library.level} thành công!`);
            updateUI();
        } else {
            let message = 'Không đủ tài nguyên để nâng cấp Thư viện!\n';
            if (resources.wood < costWood) message += `Thiếu Gỗ: ${costWood - resources.wood}\n`;
            if (resources.stone < costStone) message += `Thiếu Đá: ${costStone - resources.stone}\n`;
            alert(message);
        }
    }
}

// Bắt đầu huấn luyện nhà nghiên cứu
function startTrainingResearcher() {
    if (training.researcher.inProgress) {
        alert('Đang có nhà nghiên cứu được huấn luyện!');
        return;
    }
    if (workers.idle < 1) {
        alert('Không đủ công nhân rảnh để huấn luyện!');
        return;
    }
    const costGrain = training.researcher.cost.grain;
    const costGold = training.researcher.cost.gold;

    if (resources.grain >= costGrain && resources.gold >= costGold) {
        resources.grain -= costGrain;
        resources.gold -= costGold;
        workers.idle--;
        training.researcher.inProgress = true;
        training.researcher.timeRemaining = training.researcher.duration;
        updateUI(); // Cập nhật UI ngay để hiển thị progress bar
    } else {
        let message = 'Không đủ tài nguyên để huấn luyện nhà nghiên cứu!\n';
        if (resources.grain < costGrain) message += `Thiếu Lúa: ${costGrain - resources.grain}\n`;
        if (resources.gold < costGold) message += `Thiếu Vàng: ${costGold - resources.gold}\n`;
        alert(message);
    }
}

// Logic tiến trình huấn luyện nhà nghiên cứu
function advanceTraining() {
    if (training.researcher.inProgress) {
        training.researcher.timeRemaining--;
        if (training.researcher.timeRemaining <= 0) {
            training.researcher.inProgress = false;
            workers.researchers++;
            workers.idleResearchers++;
            alert('Một nhà nghiên cứu đã hoàn thành khóa huấn luyện!');
        }
        updateUI();
    }
}

// Gửi nhà nghiên cứu làm việc (nghiên cứu)
function assignResearcher() {
    if (buildings.library.level === 0) {
        alert('Cần xây dựng Thư viện trước khi phân công nhà nghiên cứu!');
        return;
    }
    if (workers.idleResearchers > 0) {
        if (workers.assignedResearchers < buildings.library.maxResearchers) {
            workers.idleResearchers--;
            workers.assignedResearchers++;
            updateUI();
        } else {
            alert('Thư viện đã đủ nhà nghiên cứu. Nâng cấp Thư viện để có thêm chỗ!');
        }
    } else {
        alert('Không còn nhà nghiên cứu rảnh!');
    }
}

// Rút nhà nghiên cứu
function removeResearcher() {
    if (workers.assignedResearchers > 0) {
        workers.idleResearchers++;
        workers.assignedResearchers--;
        updateUI();
    } else {
        alert('Không có nhà nghiên cứu nào đang làm việc để rút!');
    }
}

// Khai thác tài nguyên (chạy định kỳ)
function gatherResources() {
    resources.wood += workers.assigned.forest * 1;
    resources.grain += workers.assigned.farm * 1;
    resources.gold += workers.assigned.mine * 1;
    resources.stone += workers.assigned.quarry * 1;
    resources.iron += workers.assigned.ironMine * 1;

    resources.wood = Math.floor(resources.wood);
    resources.grain = Math.floor(resources.grain);
    resources.gold = Math.floor(resources.gold);
    resources.stone = Math.floor(resources.stone);
    resources.iron = Math.floor(resources.iron);

    // Tăng điểm nghiên cứu
    resources.researchPoints += workers.assignedResearchers * 1;
    resources.researchPoints = Math.floor(resources.researchPoints);

    // Cập nhật trạng thái có thể mở khóa công nghệ
    if (resources.researchPoints >= research.armorCraftingCost) {
        research.canUnlockArmorCrafting = true;
    } else {
        research.canUnlockArmorCrafting = false;
    }

    updateUI();
}

// Mở khóa công nghệ (thủ công)
function unlockTechnology(techName) {
    if (techName === 'armorCrafting') {
        if (research.canUnlockArmorCrafting) {
            const isUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
            if (!isUnlocked) {
                resources.researchPoints -= research.armorCraftingCost; // Trừ điểm nghiên cứu
                research.unlockedTechnologies.push('Chế tạo Áo Giáp');
                alert('Bạn đã mở khóa công nghệ "Chế tạo Áo Giáp" tại Lò Rèn!');
                updateUI();
            } else {
                alert('Công nghệ "Chế tạo Áo Giáp" đã được mở khóa rồi!');
            }
        } else {
            alert(`Không đủ điểm nghiên cứu để mở khóa! Cần ${research.armorCraftingCost} điểm.`);
        }
    }
}

// Bắt đầu tạo Áo Giáp
function startCraftingArmor() {
    const isUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
    if (!isUnlocked) {
        alert('Chưa mở khóa công nghệ "Chế tạo Áo Giáp"!');
        return;
    }
    if (crafting.armor.inProgress) {
        alert('Đang có áo giáp được tạo!');
        return;
    }
    const costIron = crafting.armor.cost.iron;

    if (resources.iron >= costIron) {
        resources.iron -= costIron;
        crafting.armor.inProgress = true;
        crafting.armor.timeRemaining = crafting.armor.duration;
        updateUI(); // Cập nhật UI ngay để hiển thị progress bar
    } else {
        alert(`Không đủ tài nguyên để tạo Áo Giáp! Thiếu Sắt: ${costIron - resources.iron}`);
    }
}

// Logic tiến trình tạo Áo Giáp
function advanceCrafting() {
    if (crafting.armor.inProgress) {
        crafting.armor.timeRemaining--;
        if (crafting.armor.timeRemaining <= 0) {
            crafting.armor.inProgress = false;
            crafting.armor.count++;
            alert('Một bộ Áo Giáp đã hoàn thành!');
        }
        updateUI();
    }
}

// Chuyển đổi giữa các tab
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Khởi tạo trò chơi
window.onload = () => {
    updateUI();
    // Chạy các hàm cập nhật mỗi giây
    setInterval(() => {
        gatherResources();
        advanceTraining();
        advanceCrafting();
    }, 1000);
    showTab('mining-tab');
};