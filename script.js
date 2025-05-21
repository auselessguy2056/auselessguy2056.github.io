// Trạng thái trò chơi
let resources = {
    wood: 0,
    grain: 0,
    gold: 0,
    stone: 0,
    iron: 0,
    researchPoints: 0,
    armor: 0,
    woodCapacity: 500,
    grainCapacity: 500,
    goldCapacity: 500,
    stoneCapacity: 500,
    ironCapacity: 500
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
    assignedResearchers: 0,
    soldiers: [], // Thay đổi từ số lượng thành mảng các đối tượng binh sĩ
    idleSoldiers: 0 // Số lính rảnh rỗi (tính từ mảng soldiers)
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
    },
    warehouse: {
        level: 1,
        capacityPerLevel: 1000,
        upgradeCost: {
            wood: 150,
            stone: 100
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
        duration: 60
    },
    soldier: {
        inProgress: false,
        timeRemaining: 0,
        cost: {
            grain: 20,
            gold: 15,
            armor: 1
        },
        duration: 300,
        // Thuộc tính cơ bản của binh sĩ mới huấn luyện
        baseAttack: 5,
        baseDefense: 3,
        baseHealth: 20
    }
};

let research = {
    unlockedTechnologies: [],
    armorCraftingCost: 50,
    canUnlockArmorCrafting: false,
    // Nghiên cứu mới cho binh sĩ
    soldierAttackResearchCost: 100,
    soldierDefenseResearchCost: 100,
    soldierHealthResearchCost: 100,
    unlockedSoldierUpgrades: {
        attack: 0,
        defense: 0,
        health: 0
    }
};

let crafting = {
    armor: {
        inProgress: false,
        timeRemaining: 0,
        cost: {
            iron: 50
        },
        duration: 60
    }
};

let exploration = {
    emptyLand: {
        inProgress: false,
        timeRemaining: 0,
        duration: 120,
        assignedSoldiers: [], // Lưu trữ các đối tượng binh sĩ được giao
        // Định nghĩa các loại kẻ thù có thể xuất hiện, không phải số lượng cụ thể
        enemyTypes: [{ name: 'Quái vật nhỏ', attack: 5, defense: 2, health: 30 }], // Tăng HP để trận đấu kéo dài hơn
        activeEnemiesInstances: [], // Mảng chứa các đối tượng kẻ thù CỤ THỂ đang chiến đấu
        rewards: { wood: { min: 20, max: 50 }, grain: { min: 20, max: 50 } },
        report: [], // Lưu trữ các tin nhắn báo cáo
    },
    fortress: {
        inProgress: false,
        timeRemaining: 0,
        duration: 300,
        assignedSoldiers: [], // Lưu trữ các đối tượng binh sĩ được giao
        enemyTypes: [{ name: 'Lính canh', attack: 8, defense: 5, health: 60 }, { name: 'Thủ lĩnh', attack: 15, defense: 10, health: 120 }], // Tăng HP
        activeEnemiesInstances: [],
        rewards: { gold: { min: 50, max: 100 }, iron: { min: 30, max: 70 } },
        report: [],
    }
};

let achievements = {
    warehouseLevel10: false,
    soldiers100: false,
    successfulExplorations50: false,
    successfulExplorationsCount: 0 // Biến để đếm số lần thám hiểm thành công
};
// Cập nhật giao diện người dùng
function updateUI() {
    // Cập nhật hiển thị tài nguyên và giới hạn
    document.getElementById('wood').textContent = `${resources.wood} / ${resources.woodCapacity}`;
    document.getElementById('grain').textContent = `${resources.grain} / ${resources.grainCapacity}`;
    document.getElementById('gold').textContent = `${resources.gold} / ${resources.goldCapacity}`;
    document.getElementById('stone').textContent = `${resources.stone} / ${resources.stoneCapacity}`;
    document.getElementById('iron').textContent = `${resources.iron} / ${resources.ironCapacity}`;
    document.getElementById('research-points').textContent = resources.researchPoints;
    document.getElementById('armor').textContent = resources.armor;

    document.getElementById('total-workers').textContent = workers.total;
    document.getElementById('idle-workers').textContent = workers.idle;
    document.getElementById('researchers').textContent = workers.researchers;

    // Cập nhật tổng số binh sĩ (số lượng phần tử trong mảng)
    document.getElementById('soldiers').textContent = workers.soldiers.length;
    // Cập nhật thông tin binh sĩ trong tab quân đội
    document.getElementById('current-soldiers-info').textContent = `${workers.soldiers.length} (Rảnh: ${workers.idleSoldiers})`;
    
    // Cập nhật binh sĩ rảnh cho huấn luyện
    document.getElementById('idle-workers-for-researcher-training').textContent = workers.idle;
    document.getElementById('idle-workers-for-soldier-training').textContent = workers.idle;

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
    document.getElementById('library-max-researchers').textContent = buildings.library.maxResearchers;

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

    // Cập nhật thông tin Nhà Kho
    document.getElementById('warehouse-level').textContent = buildings.warehouse.level;
    document.getElementById('warehouse-upgrade-cost-wood').textContent = buildings.warehouse.upgradeCost.wood;
    document.getElementById('warehouse-upgrade-cost-stone').textContent = buildings.warehouse.upgradeCost.stone;


    // Cập nhật huấn luyện nhà nghiên cứu
    document.getElementById('researcher-training-countdown').textContent = training.researcher.timeRemaining + ' giây';
    const researcherProgressPercent = ((training.researcher.duration - training.researcher.timeRemaining) / training.researcher.duration) * 100;
    document.getElementById('researcher-training-progress').style.width = researcherProgressPercent + '%';

    if (training.researcher.inProgress) {
        document.getElementById('researcher-training-progress-container').style.display = 'block';
        document.getElementById('train-researcher-btn').disabled = true;
    } else {
        document.getElementById('researcher-training-progress-container').style.display = 'none';
        const canAffordResearcher = resources.grain >= training.researcher.cost.grain && resources.gold >= training.researcher.cost.gold && workers.idle > 0;
        document.getElementById('train-researcher-btn').disabled = !canAffordResearcher;
    }

    // Cập nhật huấn luyện binh sĩ
    document.getElementById('soldier-training-countdown').textContent = training.soldier.timeRemaining + ' giây';
    const soldierProgressPercent = ((training.soldier.duration - training.soldier.timeRemaining) / training.soldier.duration) * 100;
    document.getElementById('soldier-training-progress').style.width = soldierProgressPercent + '%';

    if (training.soldier.inProgress) {
        document.getElementById('soldier-training-progress-container').style.display = 'block';
        document.getElementById('train-soldier-btn').disabled = true;
    } else {
        document.getElementById('soldier-training-progress-container').style.display = 'none';
        const canAffordSoldier = resources.grain >= training.soldier.cost.grain && resources.gold >= training.soldier.cost.gold && resources.armor >= training.soldier.cost.armor && workers.idle > 0;
        document.getElementById('train-soldier-btn').disabled = !canAffordSoldier;
    }

    // Cập nhật phân bổ nhà nghiên cứu
    document.getElementById('idle-researchers').textContent = workers.idleResearchers;
    document.getElementById('assigned-researchers').textContent = workers.assignedResearchers;
    document.getElementById('research-points-per-sec').textContent = workers.assignedResearchers;
    document.getElementById('total-research-points').textContent = resources.researchPoints;

    // Cập nhật nút mở khóa công nghệ
    document.getElementById('armor-unlock-cost').textContent = research.armorCraftingCost;
    const isArmorCraftingUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
    document.getElementById('unlock-armor-crafting-btn').disabled = !research.canUnlockArmorCrafting || isArmorCraftingUnlocked;
    if (isArmorCraftingUnlocked) {
        document.getElementById('unlock-armor-crafting-btn').textContent = 'Đã mở khóa';
    }
    
    // Cập nhật Lò Rèn
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

    // Cập nhật cho tab Thám Hiểm
    // Tính toán lại idleSoldiers dựa trên tổng lính và lính đang đi thám hiểm
    const assignedSoldiersCount = exploration.emptyLand.assignedSoldiers.length + exploration.fortress.assignedSoldiers.length;
    workers.idleSoldiers = workers.soldiers.length - assignedSoldiersCount;
    document.getElementById('idle-soldiers-explore-empty').textContent = workers.idleSoldiers;
    document.getElementById('idle-soldiers-explore-fortress').textContent = workers.idleSoldiers;

    // Cập nhật lại các input soldiersToAssign để nó không bị lỗi khi chuyển tab
    if (exploration.emptyLand.inProgress) {
        document.getElementById('soldiers-empty-land').value = exploration.emptyLand.assignedSoldiers.length;
    } else {
        // Giữ giá trị nếu người dùng đã nhập, nếu không thì đặt về 0.
        const emptyLandInput = document.getElementById('soldiers-empty-land');
        if (parseInt(emptyLandInput.value) === 0 || emptyLandInput.value === '') {
            emptyLandInput.value = 0;
        }
    }
    if (exploration.fortress.inProgress) {
        document.getElementById('soldiers-fortress').value = exploration.fortress.assignedSoldiers.length;
    } else {
        // Giữ giá trị nếu người dùng đã nhập, nếu không thì đặt về 0.
        const fortressInput = document.getElementById('soldiers-fortress');
        if (parseInt(fortressInput.value) === 0 || fortressInput.value === '') {
            fortressInput.value = 0;
        }
    }

    // Cập nhật tiến trình thám hiểm Vùng Đất Trống
    const emptyLandCountdownElem = document.getElementById('empty-land-exploration-countdown');
    const emptyLandProgressElem = document.getElementById('empty-land-exploration-progress');
    const emptyLandProgressContainer = document.getElementById('empty-land-exploration-progress-container');

    if (emptyLandCountdownElem && emptyLandProgressElem && emptyLandProgressContainer) {
        emptyLandCountdownElem.textContent = exploration.emptyLand.timeRemaining + ' giây';
        const emptyLandProgressPercent = ((exploration.emptyLand.duration - exploration.emptyLand.timeRemaining) / exploration.emptyLand.duration) * 100;
        emptyLandProgressElem.style.width = emptyLandProgressPercent + '%';

        if (exploration.emptyLand.inProgress) {
            emptyLandProgressContainer.style.display = 'block';
        } else {
            emptyLandProgressContainer.style.display = 'none';
        }
    }

    // Cập nhật tiến trình thám hiểm Thành Trì Lân Cận
    const fortressCountdownElem = document.getElementById('fortress-exploration-countdown');
    const fortressProgressElem = document.getElementById('fortress-exploration-progress');
    const fortressProgressContainer = document.getElementById('fortress-exploration-progress-container');

    if (fortressCountdownElem && fortressProgressElem && fortressProgressContainer) {
        fortressCountdownElem.textContent = exploration.fortress.timeRemaining + ' giây';
        const fortressProgressPercent = ((exploration.fortress.duration - exploration.fortress.timeRemaining) / exploration.fortress.duration) * 100;
        fortressProgressElem.style.width = fortressProgressPercent + '%';

        if (exploration.fortress.inProgress) {
            fortressProgressContainer.style.display = 'block';
        } else {
            fortressProgressContainer.style.display = 'none';
        }
    }

    // Cập nhật báo cáo thám hiểm
    const reportContent = document.getElementById('exploration-report-content');
    if (reportContent) {
        reportContent.innerHTML = '';
        const allReports = [];
        // Lấy báo cáo từ cả hai loại thám hiểm và gộp lại
        if (exploration.emptyLand.report) {
            allReports.push(...exploration.emptyLand.report);
        }
        if (exploration.fortress.report) {
            allReports.push(...exploration.fortress.report);
        }

        if (allReports.length === 0) {
            reportContent.innerHTML = '<p>Chưa có báo cáo nào.</p>';
        } else {
            // Sắp xếp báo cáo theo thời gian giảm dần (mới nhất lên trên)
            allReports.sort((a, b) => b.timestamp - a.timestamp);
            allReports.forEach(entry => {
                const p = document.createElement('p');
                p.textContent = `[${new Date(entry.timestamp).toLocaleTimeString()}] ${entry.message}`;
                reportContent.appendChild(p);
            });
        }
    }
// Cập nhật Thành Tựu
  // Cập nhật Thành Tựu
    const achievementWarehouseLevel10 = document.getElementById('achievement-warehouse-level-10');
    const achievement100Soldiers = document.getElementById('achievement-100-soldiers');
    const achievement50SuccessfulExplorations = document.getElementById('achievement-50-successful-explorations');

    if (achievementWarehouseLevel10 && achievement100Soldiers && achievement50SuccessfulExplorations) {
        // Kho Báu Vĩ Đại (Nhà kho cấp 10)
        if (buildings.warehouse.level >= 10 && !achievements.warehouseLevel10) {
            achievements.warehouseLevel10 = true;
            alert('Thành tựu mới: Kho Báu Vĩ Đại (Nhà kho cấp 10)!');
        }
        if (achievements.warehouseLevel10) {
            achievementWarehouseLevel10.classList.remove('achievement-locked');
            achievementWarehouseLevel10.classList.add('achievement-unlocked');
            achievementWarehouseLevel10.querySelector('.achievement-icon').classList.add('achievement-unlocked-icon');
        }

        // Đại Quân (100 binh sĩ)
        if (workers.soldiers.length >= 100 && !achievements.soldiers100) {
            achievements.soldiers100 = true;
            alert('Thành tựu mới: Đại Quân (100 binh sĩ)!');
        }
        if (achievements.soldiers100) {
            achievement100Soldiers.classList.remove('achievement-locked');
            achievement100Soldiers.classList.add('achievement-unlocked');
            achievement100Soldiers.querySelector('.achievement-icon').classList.add('achievement-unlocked-icon');
        }

        // Chinh Phục 50 (Hoàn thành 50 chuyến thám hiểm thành công)
        if (achievements.successfulExplorationsCount >= 50 && !achievements.successfulExplorations50) {
            achievements.successfulExplorations50 = true;
            alert('Thành tựu mới: Chinh Phục 50 (Hoàn thành 50 chuyến thám hiểm thành công)!');
        }
        if (achievements.successfulExplorations50) {
            achievement50SuccessfulExplorations.classList.remove('achievement-locked');
            achievement50SuccessfulExplorations.classList.add('achievement-unlocked');
            achievement50SuccessfulExplorations.querySelector('.achievement-icon').classList.add('achievement-unlocked-icon');
        }
    }
} // Đảm bảo dấu đóng ngoặc } này là của hàm updateUI()

// Hàm thêm tin nhắn vào báo cáo thám hiểm
function addExplorationReport(type, message) {
    const timestamp = Date.now();
    exploration[type].report.unshift({ timestamp, message }); // Thêm vào đầu để báo cáo mới nhất hiện lên trên
    // Giới hạn số lượng báo cáo để tránh quá tải bộ nhớ
    if (exploration[type].report.length > 50) { // Giữ 50 báo cáo gần nhất
        exploration[type].report.pop();
    }
    updateUI();
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

// Xây dựng công trình (nếu có)
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
    } else if (buildingName === 'warehouse') {
        const costWood = buildings.warehouse.upgradeCost.wood;
        const costStone = buildings.warehouse.upgradeCost.stone;

        if (resources.wood >= costWood && resources.stone >= costStone) {
            resources.wood -= costWood;
            resources.stone -= costStone;
            buildings.warehouse.level++;
            
            resources.woodCapacity += buildings.warehouse.capacityPerLevel;
            resources.grainCapacity += buildings.warehouse.capacityPerLevel;
            resources.goldCapacity += buildings.warehouse.capacityPerLevel;
            resources.stoneCapacity += buildings.warehouse.capacityPerLevel;
            resources.ironCapacity += buildings.warehouse.capacityPerLevel;

            buildings.warehouse.upgradeCost.wood = Math.floor(buildings.warehouse.upgradeCost.wood * 1.4);
            buildings.warehouse.upgradeCost.stone = Math.floor(buildings.warehouse.upgradeCost.stone * 1.4);

            alert(`Nâng cấp Nhà Kho lên cấp ${buildings.warehouse.level} thành công!`);
            updateUI();
        } else {
            let message = 'Không đủ tài nguyên để nâng cấp Nhà Kho!\n';
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
        updateUI();
    } else {
        let message = 'Không đủ tài nguyên để huấn luyện nhà nghiên cứu!\n';
        if (resources.grain < costGrain) message += `Thiếu Lúa: ${costGrain - resources.grain}\n`;
        if (resources.gold < costGold) message += `Thiếu Vàng: ${costGold - resources.gold}\n`;
        alert(message);
    }
}

// Logic tiến trình huấn luyện nhà nghiên cứu
function advanceTrainingResearcher() {
    if (training.researcher.inProgress) {
        training.researcher.timeRemaining--;
        if (training.researcher.timeRemaining <= 0) {
            training.researcher.inProgress = false;
            workers.researchers++;
            workers.idleResearchers++;
           // workers.idle++; // Trả công nhân đã huấn luyện về trạng thái rảnh
            alert('Một nhà nghiên cứu đã hoàn thành khóa huấn luyện!');
        }
        updateUI();
    }
}

// Bắt đầu huấn luyện binh sĩ
function startTrainingSoldier() {
    if (training.soldier.inProgress) {
        alert('Đang có binh sĩ được huấn luyện!');
        return;
    }
    if (workers.idle < 1) {
        alert('Không đủ công nhân rảnh để huấn luyện!');
        return;
    }

    const costGrain = training.soldier.cost.grain;
    const costGold = training.soldier.cost.gold;
    const costArmor = training.soldier.cost.armor;

    if (resources.grain >= costGrain && resources.gold >= costGold && resources.armor >= costArmor) {
        resources.grain -= costGrain;
        resources.gold -= costGold;
        resources.armor -= costArmor;
        workers.idle--;
        training.soldier.inProgress = true;
        training.soldier.timeRemaining = training.soldier.duration;
        updateUI();
    } else {
        let message = 'Không đủ tài nguyên để huấn luyện binh sĩ!\n';
        if (resources.grain < costGrain) message += `Thiếu Lúa: ${costGrain - resources.grain}\n`;
        if (resources.gold < costGold) message += `Thiếu Vàng: ${costGold - resources.gold}\n`;
        if (resources.armor < costArmor) message += `Thiếu Áo Giáp: ${costArmor - resources.armor}\n`;
        alert(message);
    }
}

// Logic tiến trình huấn luyện binh sĩ
function advanceTrainingSoldier() {
    if (training.soldier.inProgress) {
        training.soldier.timeRemaining--;
        if (training.soldier.timeRemaining <= 0) {
            training.soldier.inProgress = false;
            // Tạo một đối tượng binh sĩ mới với thuộc tính từ research upgrades
            const newSoldier = {
                id: Date.now() + Math.random(), // ID duy nhất
                name: `Binh sĩ ${workers.soldiers.length + 1}`, // Đặt tên Binh sĩ 1, Binh sĩ 2, ...
                attack: training.soldier.baseAttack + research.unlockedSoldierUpgrades.attack,
                defense: training.soldier.baseDefense + research.unlockedSoldierUpgrades.defense,
                health: training.soldier.baseHealth + research.unlockedSoldierUpgrades.health,
                currentHealth: training.soldier.baseHealth + research.unlockedSoldierUpgrades.health
            };
            workers.soldiers.push(newSoldier); // Thêm binh sĩ vào mảng
            workers.idleSoldiers++; // Binh sĩ sau khi huấn luyện xong là rảnh
          //  workers.idle++; // Trả công nhân đã huấn luyện về trạng thái rảnh
            alert('Một binh sĩ mới đã hoàn thành khóa huấn luyện!');
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
    resources.wood = Math.min(resources.wood + workers.assigned.forest * 1, resources.woodCapacity);
    resources.grain = Math.min(resources.grain + workers.assigned.farm * 1, resources.grainCapacity);
    resources.gold = Math.min(resources.gold + workers.assigned.mine * 1, resources.goldCapacity);
    resources.stone = Math.min(resources.stone + workers.assigned.quarry * 1, resources.stoneCapacity);
    resources.iron = Math.min(resources.iron + workers.assigned.ironMine * 1, resources.ironCapacity);

    resources.researchPoints += workers.assignedResearchers * 1;
    resources.researchPoints = Math.floor(resources.researchPoints);

    if (resources.researchPoints >= research.armorCraftingCost && !research.unlockedTechnologies.includes('Chế tạo Áo Giáp')) {
        research.canUnlockArmorCrafting = true;
    } else {
        research.canUnlockArmorCrafting = false;
    }

    updateUI();
}

// Mở khóa công nghệ (thủ công)
function unlockTechnology(techName) {
    if (techName === 'armorCrafting') {
        if (resources.researchPoints >= research.armorCraftingCost) {
            const isUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
            if (!isUnlocked) {
                resources.researchPoints -= research.armorCraftingCost;
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
    // Logic cho nghiên cứu binh sĩ có thể được thêm vào đây
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
        updateUI();
    } else {
        alert(`Không đủ tài nguyên để tạo Áo Giáp! Thiếu Sắt: ${costIron - resources.iron}`);
    }
}

// Logic tiến trình tạo Áo Giáp
function advanceCraftingArmor() {
    if (crafting.armor.inProgress) {
        crafting.armor.timeRemaining--;
        if (crafting.armor.timeRemaining <= 0) {
            crafting.armor.inProgress = false;
            resources.armor++;
            alert('Một bộ Áo Giáp đã hoàn thành!');
        }
        updateUI();
    }
}

// Hàm này chủ yếu dùng để đảm bảo các input hiển thị đúng giá trị khi chuyển tab
// và sẽ không có các cập nhật tỉ lệ ước tính nữa.
function updateExplorationSuccessRate(type) {
    // Các logic liên quan đến soldiersInput.value đã được chuyển sang showSubTab
    // và startExploration để tránh việc tự động nhảy số.
    // Hàm này có thể được giữ lại rỗng hoặc xóa bỏ nếu không còn mục đích nào khác.
    // Tuy nhiên, để an toàn, ta giữ lại nhưng không làm gì cả.
}

// Biến tạm để lưu trữ số lính được giao trước khi bắt đầu thám hiểm
// Cần thiết để hiển thị trong báo cáo cuối cùng
let soldiersToAssignCountBeforeExploration = {
    emptyLand: 0,
    fortress: 0
};

// Bắt đầu thám hiểm
function startExploration(type) {
    if (exploration[type].inProgress) {
        alert(`Đang có đội thám hiểm ở ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'}!`);
        return;
    }

    const inputId = type === 'emptyLand' ? 'soldiers-empty-land' : 'soldiers-fortress';
    const soldiersInput = document.getElementById(inputId);
    let soldiersToAssignCount = parseInt(soldiersInput.value) || 0;

    if (soldiersToAssignCount <= 0) {
        alert('Cần cử ít nhất 1 binh sĩ đi thám hiểm!');
        return;
    }
    if (soldiersToAssignCount > workers.idleSoldiers) {
        // Nếu số lính nhập vào lớn hơn số lính rảnh, điều chỉnh lại giá trị input
        soldiersToAssignCount = workers.idleSoldiers;
        soldiersInput.value = soldiersToAssignCount; // Cập nhật input
        alert(`Bạn chỉ có ${workers.idleSoldiers} binh sĩ rảnh. Đã tự động điều chỉnh về số binh sĩ tối đa có thể cử đi.`);
        if (soldiersToAssignCount === 0) { // Nếu không còn lính rảnh, không thể bắt đầu
            alert('Không còn binh sĩ rảnh để cử đi thám hiểm!');
            return;
        }
    }

    // Lấy các binh sĩ rảnh đầu tiên để cử đi
    const assignedSoldiers = [];
    
    // Lấy bản sao của các binh sĩ rảnh để tránh thao tác trực tiếp trên mảng gốc khi lặp
    // Chỉ lấy số lượng binh sĩ cần thiết
    const soldiersToPick = workers.soldiers.filter(s => 
        // Binh sĩ phải còn sống và không đang trong chuyến thám hiểm khác
        s.currentHealth > 0 &&
        !exploration.emptyLand.assignedSoldiers.some(assignedS => assignedS.id === s.id) &&
        !exploration.fortress.assignedSoldiers.some(assignedS => assignedS.id === s.id)
    ).slice(0, soldiersToAssignCount); // Chỉ lấy số lượng binh sĩ cần cử đi

    if (soldiersToPick.length !== soldiersToAssignCount) {
        alert('Có lỗi khi gán binh sĩ. Không đủ binh sĩ rảnh và hợp lệ.');
        return;
    }

    // Gán binh sĩ cho chuyến thám hiểm
    soldiersToPick.forEach(soldier => {
        assignedSoldiers.push(soldier);
        // Reset currentHealth của binh sĩ khi bắt đầu chuyến thám hiểm mới
        soldier.currentHealth = soldier.health; 
    });

    exploration[type].assignedSoldiers = assignedSoldiers;
    exploration[type].inProgress = true;
    exploration[type].timeRemaining = exploration[type].duration;
    exploration[type].report = []; // Xóa báo cáo cũ khi bắt đầu chuyến mới

    // Khởi tạo các cá thể kẻ thù (instances) cho chuyến thám hiểm
    exploration[type].activeEnemiesInstances = [];
    let enemiesSpawnedReport = []; // Để tạo báo cáo tổng hợp

    if (type === 'emptyLand') {
        const enemyCount = Math.floor(Math.random() * 3) + 1; // 1-3 quái vật nhỏ
        for (let i = 0; i < enemyCount; i++) {
            const enemyBase = exploration.emptyLand.enemyTypes[0];
            const uniqueEnemyName = `${enemyBase.name} ${i + 1}`; // Tên duy nhất: "Quái vật nhỏ 1", "Quái vật nhỏ 2", ...
            exploration[type].activeEnemiesInstances.push({
                id: Date.now() + Math.random() + i, // ID duy nhất cho mỗi cá thể kẻ thù
                name: uniqueEnemyName, // Sử dụng tên duy nhất
                attack: enemyBase.attack,
                defense: enemyBase.defense,
                health: enemyBase.health,
                currentHealth: enemyBase.health
            });
            enemiesSpawnedReport.push(uniqueEnemyName); // Thêm vào danh sách báo cáo
        }
        addExplorationReport(type, `Kẻ thù xuất hiện: ${enemiesSpawnedReport.join(', ')}.`);
    } else if (type === 'fortress') {
        const guardCount = Math.floor(Math.random() * 2) + 1; // 1-2 lính canh
        const leaderCount = Math.random() < 0.3 ? 1 : 0; // 30% có thủ lĩnh

        for (let i = 0; i < guardCount; i++) {
            const enemyBase = exploration.fortress.enemyTypes[0];
            const uniqueEnemyName = `${enemyBase.name} ${i + 1}`;
            exploration[type].activeEnemiesInstances.push({
                id: Date.now() + Math.random() + i,
                name: uniqueEnemyName,
                attack: enemyBase.attack,
                defense: enemyBase.defense,
                health: enemyBase.health,
                currentHealth: enemyBase.health
            });
            enemiesSpawnedReport.push(uniqueEnemyName);
        }
        for (let i = 0; i < leaderCount; i++) {
            const enemyBase = exploration.fortress.enemyTypes[1];
            const uniqueEnemyName = `${enemyBase.name} ${i + 1}`;
            exploration[type].activeEnemiesInstances.push({
                id: Date.now() + Math.random() + 100 + i,
                name: uniqueEnemyName,
                attack: enemyBase.attack,
                defense: enemyBase.defense,
                health: enemyBase.health,
                currentHealth: enemyBase.health
            });
            enemiesSpawnedReport.push(uniqueEnemyName);
        }
        addExplorationReport(type, `Kẻ thù xuất hiện: ${enemiesSpawnedReport.join(', ')}.`);
    }
    
    soldiersToAssignCountBeforeExploration[type] = soldiersToAssignCount; // Lưu lại số lính ban đầu
    addExplorationReport(type, `Đã cử ${soldiersToAssignCount} binh sĩ đi thám hiểm ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'}!`);
    updateUI();
}
// Trong hàm advanceExploration()
function advanceExploration() {
    for (const type in exploration) {
        if (exploration[type].inProgress) {
            // Lọc ra các binh sĩ còn sống ở đầu mỗi tick
            let currentActiveSoldiers = exploration[type].assignedSoldiers.filter(s => s.currentHealth > 0);
            
            // Kiểm tra nếu tất cả binh sĩ đã chết
            if (currentActiveSoldiers.length === 0) {
                addExplorationReport(type, 'Tất cả binh sĩ đã hy sinh! Chuyến thám hiểm thất bại.');
                handleExplorationEnd(type, false); // Thất bại
                return; 
            }

            // Kiểm tra nếu tất cả kẻ thù đã chết
            let currentActiveEnemies = exploration[type].activeEnemiesInstances.filter(e => e.currentHealth > 0);
            if (currentActiveEnemies.length === 0) {
                addExplorationReport(type, 'Tất cả kẻ thù đã bị tiêu diệt! Chuyến thám hiểm thành công.');
                handleExplorationEnd(type, true); // Thành công
                return;
            }

            // Vẫn còn cả binh sĩ và kẻ thù, tiếp tục chiến đấu
            exploration[type].timeRemaining--;
            
            // Lượt của Binh sĩ
            // Sử dụng bản sao của mảng currentActiveSoldiers để duyệt
            [...currentActiveSoldiers].forEach(soldier => { // <--- CHỈNH SỬA Ở ĐÂY: sử dụng spread operator để tạo bản sao
                if (soldier.currentHealth <= 0) return; // Binh sĩ đã chết trong lượt này, bỏ qua

                const targetEnemy = currentActiveEnemies[Math.floor(Math.random() * currentActiveEnemies.length)];

                if (targetEnemy) {
                    const damage = Math.max(0, soldier.attack - targetEnemy.defense + Math.floor(Math.random() * 3) - 1);
                    if (damage > 0) {
                        targetEnemy.currentHealth -= damage; // Trừ trực tiếp vào health của đối tượng
                        addExplorationReport(type, `${soldier.name} tấn công ${targetEnemy.name}, gây ${damage} sát thương. ${targetEnemy.name} còn ${Math.max(0, targetEnemy.currentHealth)} HP.`);
                        if (targetEnemy.currentHealth <= 0) {
                            addExplorationReport(type, `${targetEnemy.name} đã bị tiêu diệt.`);
                            // Cập nhật lại danh sách kẻ thù còn sống ngay lập tức
                            currentActiveEnemies = currentActiveEnemies.filter(e => e.currentHealth > 0); 
                        }
                    } else {
                        addExplorationReport(type, `${soldier.name} tấn công ${targetEnemy.name} nhưng trượt hoặc không gây sát thương.`);
                    }
                }
            });

            // Sau lượt tấn công của binh sĩ, kiểm tra lại kẻ thù
            if (currentActiveEnemies.length === 0) {
                addExplorationReport(type, 'Tất cả kẻ thù đã bị tiêu diệt! Chuyến thám hiểm thành công.');
                handleExplorationEnd(type, true);
                return;
            }

            // Lượt của Kẻ thù
            // Sử dụng bản sao của mảng currentActiveEnemies để duyệt
            [...currentActiveEnemies].forEach(enemy => { // <--- CHỈNH SỬA Ở ĐÂY: sử dụng spread operator để tạo bản sao
                if (enemy.currentHealth <= 0) return; // Kẻ thù đã chết trong lượt này, bỏ qua

                // Lọc lại danh sách binh sĩ còn sống trước khi chọn mục tiêu
                currentActiveSoldiers = exploration[type].assignedSoldiers.filter(s => s.currentHealth > 0); // <--- RẤT QUAN TRỌNG: Cập nhật lại mảng binh sĩ sống sót
                if (currentActiveSoldiers.length === 0) {
                    // Nếu không còn binh sĩ nào, kẻ thù không thể tấn công
                    return; 
                }

                const targetSoldier = currentActiveSoldiers[Math.floor(Math.random() * currentActiveSoldiers.length)];

                if (targetSoldier) {
                    const damage = Math.max(0, enemy.attack - targetSoldier.defense + Math.floor(Math.random() * 3) - 1);
                    if (damage > 0) {
                        targetSoldier.currentHealth -= damage;
                        addExplorationReport(type, `${enemy.name} tấn công ${targetSoldier.name}, gây ${damage} sát thương. ${targetSoldier.name} còn ${Math.max(0, targetSoldier.currentHealth)} HP.`);
                        if (targetSoldier.currentHealth <= 0) {
                            addExplorationReport(type, `${targetSoldier.name} đã hy sinh.`);
                            // Cập nhật lại danh sách binh sĩ còn sống ngay lập tức
                            currentActiveSoldiers = currentActiveSoldiers.filter(s => s.currentHealth > 0);
                        }
                    } else {
                        addExplorationReport(type, `${enemy.name} tấn công ${targetSoldier.name} nhưng trượt hoặc bị phòng thủ.`);
                    }
                }
            });

            // Nếu hết thời gian
            if (exploration[type].timeRemaining <= 0) {
                const finalActiveSoldiers = exploration[type].assignedSoldiers.filter(s => s.currentHealth > 0);
                const finalActiveEnemies = exploration[type].activeEnemiesInstances.filter(e => e.currentHealth > 0);

                if (finalActiveSoldiers.length > 0 && finalActiveEnemies.length === 0) {
                    handleExplorationEnd(type, true); // Thành công
                } else {
                    handleExplorationEnd(type, false); // Thất bại (hết giờ mà kẻ thù vẫn còn hoặc lính hết sạch)
                }
            }
            updateUI();
        }
    }
}
// Hàm xử lý kết thúc thám hiểm
function handleExplorationEnd(type, success) {
    exploration[type].inProgress = false;
    
    const initialSoldiersCount = soldiersToAssignCountBeforeExploration[type]; 
    
    const survivingSoldiersInExploration = exploration[type].assignedSoldiers.filter(s => s.currentHealth > 0);
    
    const lostSoldiersCount = initialSoldiersCount - survivingSoldiersInExploration.length;
    
    workers.soldiers = workers.soldiers.filter(soldier => {
        const isAssignedToThisExploration = exploration[type].assignedSoldiers.some(assignedSoldier => assignedSoldier.id === soldier.id);

        if (isAssignedToThisExploration) {
            return soldier.currentHealth > 0;
        } else {
            return true;
        }
    });

    exploration[type].assignedSoldiers = []; // Reset lính được giao cho chuyến này
    exploration[type].activeEnemiesInstances = []; // Reset kẻ thù đang chiến đấu

    let message = `Đội thám hiểm ở ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'} đã trở về.`;
    message += `\nTổng số binh sĩ đã cử đi: ${initialSoldiersCount}`;
    message += `\nBinh sĩ hy sinh: ${lostSoldiersCount}`;


    if (success) {
        achievements.successfulExplorationsCount++; // Tăng số lần thành công
        message += '\nThám hiểm thành công! Bạn nhận được:';
        if (type === 'emptyLand') {
            const woodReward = Math.floor(Math.random() * (exploration[type].rewards.wood.max - exploration[type].rewards.wood.min + 1)) + exploration[type].rewards.wood.min;
            const grainReward = Math.floor(Math.random() * (exploration[type].rewards.grain.max - exploration[type].rewards.grain.min + 1)) + exploration[type].rewards.grain.min;
            resources.wood = Math.min(resources.wood + woodReward, resources.woodCapacity);
            resources.grain = Math.min(resources.grain + grainReward, resources.grainCapacity);
            message += `\n+ Gỗ: ${woodReward}\n+ Lúa: ${grainReward}`;
        } else if (type === 'fortress') {
            const goldReward = Math.floor(Math.random() * (exploration[type].rewards.gold.max - exploration[type].rewards.gold.min + 1)) + exploration[type].rewards.gold.min;
            const ironReward = Math.floor(Math.random() * (exploration[type].rewards.iron.max - exploration[type].rewards.iron.min + 1)) + exploration[type].rewards.iron.min;
            resources.gold = Math.min(resources.gold + goldReward, resources.goldCapacity);
            resources.iron = Math.min(resources.iron + ironReward, resources.ironCapacity);
            message += `\n+ Vàng: ${goldReward}\n+ Sắt: ${ironReward}`;
        }
    } else {
        message += '\nThám hiểm thất bại. Không nhận được tài nguyên.';
    }
    
    addExplorationReport(type, message);
    alert(message);
    updateUI();
}


// Hàm lưu game
function saveGame() {
    const gameState = {
        resources: resources,
        workers: workers,
        buildings: buildings,
        training: training,
        research: research,
        crafting: crafting,
        exploration: exploration,
  	achievements: achievements // THÊM DÒNG NÀY
    };
    const jsonString = JSON.stringify(gameState);

    const encodedData = btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    document.getElementById('save-game-data').value = encodedData;
    alert('Game đã được lưu! Sao chép đoạn văn bản để sử dụng sau.');
}

function copySaveGameData() {
    const saveTextArea = document.getElementById('save-game-data');
    saveTextArea.select();
    saveTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Sử dụng Clipboard API hiện đại
    navigator.clipboard.writeText(saveTextArea.value).then(() => {
        alert('Dữ liệu đã được sao chép vào clipboard!');
    }).catch(err => {
        console.error('Không thể sao chép văn bản: ', err);
        alert('Không thể tự động sao chép. Vui lòng chọn và sao chép thủ công.');
    });
}


// Hàm tải game
function loadGame() {
    const encodedData = document.getElementById('load-game-data').value;
    if (!encodedData) {
        alert('Vui lòng dán dữ liệu game vào ô để tải!');
        return;
    }
    try {
        const jsonString = decodeURIComponent(atob(encodedData).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const loadedState = JSON.parse(jsonString);

        resources = loadedState.resources;
        workers = loadedState.workers;
        buildings = loadedState.buildings;
        training = loadedState.training;
        research = loadedState.research;
        crafting = loadedState.crafting;
           // Đảm bảo achievements được tải, nếu không có thì khởi tạo mặc định
        achievements = loadedState.achievements || {
            warehouseLevel10: false,
            soldiers100: false,
            successfulExplorations50: false,
            successfulExplorationsCount: 0
};
        // Đảm bảo exploration được khởi tạo với cấu trúc mới nếu tải từ save cũ
        exploration = loadedState.exploration || {
            emptyLand: {
                inProgress: false, timeRemaining: 0, duration: 120, assignedSoldiers: [],
                enemyTypes: [{ name: 'Quái vật nhỏ', attack: 5, defense: 2, health: 30 }], // Tăng HP
                activeEnemiesInstances: [], report: []
            },
            fortress: {
                inProgress: false, timeRemaining: 0, duration: 300, assignedSoldiers: [],
                enemyTypes: [{ name: 'Lính canh', attack: 8, defense: 5, health: 60 }, { name: 'Thủ lĩnh', attack: 15, defense: 10, health: 120 }], // Tăng HP
                activeEnemiesInstances: [], report: []
            }
        };

        // Đảm bảo các thuộc tính con trong exploration cũng được khởi tạo
        for (const type in exploration) {
            if (exploration[type].report === undefined) exploration[type].report = [];
            if (exploration[type].assignedSoldiers === undefined) exploration[type].assignedSoldiers = [];
            if (exploration[type].activeEnemiesInstances === undefined) exploration[type].activeEnemiesInstances = [];
            if (exploration[type].enemyTypes === undefined) { // Cập nhật enemyTypes nếu thiếu
                 if (type === 'emptyLand') {
                    exploration[type].enemyTypes = [{ name: 'Quái vật nhỏ', attack: 5, defense: 2, health: 30 }];
                 } else if (type === 'fortress') {
                    exploration[type].enemyTypes = [{ name: 'Lính canh', attack: 8, defense: 5, health: 60 }, { name: 'Thủ lĩnh', attack: 15, defense: 10, health: 120 }];
                 }
            }
        }

        // Đảm bảo research.unlockedSoldierUpgrades tồn tại
        research.unlockedSoldierUpgrades = research.unlockedSoldierUpgrades || { attack: 0, defense: 0, health: 0 };


        // Đảm bảo các thuộc tính capacity có sẵn nếu tải từ save cũ không có
        buildings.warehouse.capacityPerLevel = buildings.warehouse.capacityPerLevel || 500;
        resources.woodCapacity = resources.woodCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.grainCapacity = resources.grainCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.goldCapacity = resources.goldCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.stoneCapacity = resources.stoneCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.ironCapacity = resources.ironCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);

        // Đảm bảo workers.soldiers là một mảng
        if (!Array.isArray(workers.soldiers)) {
            workers.soldiers = []; // Nếu không phải mảng, khởi tạo rỗng
        }
        // Khôi phục currentHealth và gán tên cho binh sĩ nếu bị thiếu (từ save cũ)
        workers.soldiers.forEach((s, index) => { // Thêm index vào đây
            s.currentHealth = s.currentHealth === undefined ? s.health : s.currentHealth;
            // Gán tên nếu binh sĩ chưa có tên
            s.name = s.name || `Binh sĩ ${index + 1}`; // Gán tên Binh sĩ 1, Binh sĩ 2, ...
        });

        // Tính toán lại idleSoldiers dựa trên tổng lính và lính đang đi thám hiểm
        const assignedSoldiersCount = exploration.emptyLand.assignedSoldiers.length + exploration.fortress.assignedSoldiers.length;
        workers.idleSoldiers = workers.soldiers.length - assignedSoldiersCount;
        if (workers.idleSoldiers < 0) workers.idleSoldiers = 0;

        if (research.unlockedTechnologies.includes('Chế tạo Áo Giáp')) {
            document.getElementById('unlock-armor-crafting-btn').textContent = 'Đã mở khóa';
            document.getElementById('unlock-armor-crafting-btn').disabled = true;
        } else {
            document.getElementById('unlock-armor-crafting-btn').textContent = 'Mở khóa Chế tạo Áo Giáp';
            document.getElementById('unlock-armor-crafting-btn').disabled = !research.canUnlockArmorCrafting;
        }
        
        const isCraftingArmorUnlocked = research.unlockedTechnologies.includes('Chế tạo Áo Giáp');
        document.getElementById('craft-armor-btn').disabled = !isCraftingArmorUnlocked || crafting.armor.inProgress || resources.iron < crafting.armor.cost.iron;


        alert('Game đã được tải thành công!');
        updateUI();
        clearInterval(gameInterval); // Dừng game loop cũ
        startGameLoop(); // Bắt đầu game loop mới
    } catch (e) {
        alert('Dữ liệu tải game không hợp lệ! Vui lòng kiểm tra lại.');
        console.error('Lỗi khi tải game:', e);
    }
}

// --- Các hàm Hack (Chỉ dùng cho mục đích test) ---

function hackResources() {
    resources.wood = resources.woodCapacity;
    resources.grain = resources.grainCapacity;
    resources.gold = resources.goldCapacity;
    resources.stone = resources.stoneCapacity;
    resources.iron = resources.ironCapacity;
    resources.researchPoints += 1000;
    resources.armor += 100;
    alert(`Đã làm đầy tài nguyên đến giới hạn (${resources.woodCapacity}), thêm 1000 điểm nghiên cứu và 100 áo giáp!`);
    updateUI();
}

function hackTrainingAndCrafting() {
    if (training.researcher.inProgress) {
        training.researcher.timeRemaining = 1;
        alert('Huấn luyện Nhà nghiên cứu sẽ hoàn thành ngay lập tức!');
    } else {
        workers.researchers++;
        workers.idleResearchers++;
        alert('Đã thêm 1 Nhà nghiên cứu!');
    }

    if (training.soldier.inProgress) {
        training.soldier.timeRemaining = 1;
        alert('Huấn luyện Binh sĩ sẽ hoàn thành ngay lập tức!');
    } else {
        // Tạo một binh sĩ mới với thuộc tính mặc định (hoặc từ nâng cấp nếu muốn hack nâng cấp luôn)
        const newSoldier = {
            id: Date.now() + Math.random(),
            name: `Binh sĩ ${workers.soldiers.length + 1}`, // Đảm bảo binh sĩ hack cũng có tên
            attack: training.soldier.baseAttack,
            defense: training.soldier.baseDefense,
            health: training.soldier.baseHealth,
            currentHealth: training.soldier.baseHealth
        };
        workers.soldiers.push(newSoldier);
        workers.idleSoldiers++;
        alert('Đã thêm 1 Binh sĩ!');
    }

    if (crafting.armor.inProgress) {
        crafting.armor.timeRemaining = 1;
        alert('Chế tạo Áo giáp sẽ hoàn thành ngay lập tức!');
    } else {
        resources.armor++;
        alert('Đã thêm 1 bộ Áo giáp!');
    }
    
    if (!research.unlockedTechnologies.includes('Chế tạo Áo Giáp')) {
        research.unlockedTechnologies.push('Chế tạo Áo Giáp');
        alert('Công nghệ Chế tạo Áo Giáp đã được mở khóa!');
    }

    let explorationHackMessage = '';
    for (const type in exploration) {
        if (exploration[type].inProgress) {
            exploration[type].timeRemaining = 1;
            explorationHackMessage += `\nChuyến thám hiểm ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'} sẽ hoàn thành ngay lập tức!`;
        }
    }
    if (explorationHackMessage !== '') {
        alert(explorationHackMessage);
    } else {
        alert('Hiện không có chuyến thám hiểm nào đang diễn ra để hoàn thành nhanh.');
    }

    updateUI();
}


// Biến để lưu trữ ID của setInterval
let gameInterval;

// Hàm khởi tạo game loop
function startGameLoop() {
    gameInterval = setInterval(() => {
        gatherResources();
        advanceTrainingResearcher();
        advanceTrainingSoldier();
        advanceCraftingArmor();
        advanceExploration();
    }, 1000);
}

// Chuyển đổi giữa các tab chính (Thế Giới, Cài Đặt)
function showMainTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.main-tabs .tab-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.main-tabs .tab-button[onclick="showMainTab('${tabId}')"]`).classList.add('active');

    const resourcesSection = document.querySelector('.resources');
    const workersSection = document.querySelector('.workers');

    if (tabId === 'world-tab') {
        if (resourcesSection) resourcesSection.style.display = 'block';
        if (workersSection) workersSection.style.display = 'block';
        showSubTab('mining-tab');
    } else if (tabId === 'settings-tab') {
        if (resourcesSection) resourcesSection.style.display = 'none';
        if (workersSection) workersSection.style.display = 'none';
    }
}

// Chuyển đổi giữa các tab con (Khai Thác, Công Trình,...)
function showSubTab(tabId) {
    document.querySelectorAll('#world-tab .sub-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.sub-tabs .sub-tab-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.sub-tabs .sub-tab-button[onclick="showSubTab('${tabId}')"]`).classList.add('active');

    // Cập nhật các giá trị input soldiersToAssign để nó không bị lỗi khi chuyển tab
    if (tabId === 'exploration-tab') {
        const emptyLandInput = document.getElementById('soldiers-empty-land');
        if (parseInt(emptyLandInput.value) === 0 || emptyLandInput.value === '') {
            emptyLandInput.value = 0;
        }
        
        const fortressInput = document.getElementById('soldiers-fortress');
        if (parseInt(fortressInput.value) === 0 || fortressInput.value === '') {
            fortressInput.value = 0;
        }
    }
}

// Khởi tạo trò chơi
window.onload = () => {
    buildings.warehouse.capacityPerLevel = buildings.warehouse.capacityPerLevel || 500;
    resources.woodCapacity = resources.woodCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.grainCapacity = resources.grainCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.goldCapacity = resources.goldCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.stoneCapacity = resources.stoneCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.ironCapacity = resources.ironCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);

    // Đảm bảo workers.soldiers là một mảng khi game mới khởi tạo
    workers.soldiers = workers.soldiers || [];
    // Khôi phục currentHealth và gán tên cho binh sĩ nếu nó bị thiếu
    workers.soldiers.forEach((s, index) => { // Thêm index vào đây
        s.currentHealth = s.currentHealth === undefined ? s.health : s.currentHealth;
        s.name = s.name || `Binh sĩ ${index + 1}`; // Gán tên Binh sĩ 1, Binh sĩ 2, ...
    });

    // Đảm bảo exploration được khởi tạo với cấu trúc mới
    exploration = exploration || { // Đảm bảo đối tượng exploration gốc không bị ghi đè nếu đã có
        emptyLand: {
            inProgress: false, timeRemaining: 0, duration: 120, assignedSoldiers: [],
            enemyTypes: [{ name: 'Quái vật nhỏ', attack: 5, defense: 2, health: 30 }],
            activeEnemiesInstances: [], report: []
        },
        fortress: {
            inProgress: false, timeRemaining: 0, duration: 300, assignedSoldiers: [],
            enemyTypes: [{ name: 'Lính canh', attack: 8, defense: 5, health: 60 }, { name: 'Thủ lĩnh', attack: 15, defense: 10, health: 120 }],
            activeEnemiesInstances: [], report: []
        }
    };
    // Đảm bảo các thuộc tính con trong exploration cũng được khởi tạo nếu thiếu khi tải từ save cũ
    for (const type in exploration) {
        if (exploration[type].report === undefined) exploration[type].report = [];
        if (exploration[type].assignedSoldiers === undefined) exploration[type].assignedSoldiers = [];
        if (exploration[type].activeEnemiesInstances === undefined) exploration[type].activeEnemiesInstances = [];
        if (exploration[type].enemyTypes === undefined) {
             if (type === 'emptyLand') {
                exploration[type].enemyTypes = [{ name: 'Quái vật nhỏ', attack: 5, defense: 2, health: 30 }];
             } else if (type === 'fortress') {
                exploration[type].enemyTypes = [{ name: 'Lính canh', attack: 8, defense: 5, health: 60 }, { name: 'Thủ lĩnh', attack: 15, defense: 10, health: 120 }];
             }
        }
        exploration[type].activeEnemiesInstances.forEach(e => { // Khôi phục currentHealth cho kẻ thù
            e.currentHealth = e.currentHealth === undefined ? e.health : e.currentHealth;
        });
    }

    // Tính toán lại idleSoldiers dựa trên tổng lính và lính đang đi thám hiểm
    const assignedSoldiersCount = exploration.emptyLand.assignedSoldiers.length + exploration.fortress.assignedSoldiers.length;
    workers.idleSoldiers = workers.soldiers.length - assignedSoldiersCount;
    if (workers.idleSoldiers < 0) workers.idleSoldiers = 0;

    // Đảm bảo research.unlockedSoldierUpgrades tồn tại
    research.unlockedSoldierUpgrades = research.unlockedSoldierUpgrades || { attack: 0, defense: 0, health: 0 };


    updateUI();
    startGameLoop();
    showMainTab('world-tab');

    // Logic để ẩn phần hack nếu URL chứa '.github.io'
    const developerHackSection = document.getElementById('developer-hack-section');
    if (developerHackSection) {
        if (window.location.hostname.includes('.github.io')) {
            developerHackSection.style.display = 'none';
        } else {
            developerHackSection.style.display = 'block';
        }
    }
};