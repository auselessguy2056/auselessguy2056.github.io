// Trạng thái trò chơi
let resources = {
    wood: 0,
    grain: 0,
    gold: 0,
    stone: 0,
    iron: 0,
    researchPoints: 0,
    armor: 0,
    // Thêm giới hạn tài nguyên
    woodCapacity: 500, // Sức chứa ban đầu
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
    soldiers: 0, // Tổng số binh sĩ
    idleSoldiers: 0, // Binh sĩ rảnh rỗi (chưa đi thám hiểm)
    exploringSoldiers: 0 // Binh sĩ đang đi thám hiểm (không còn dùng biến này mà tính từ assignedSoldiers)
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
    // Thêm Nhà Kho
    warehouse: {
        level: 1,
        capacityPerLevel: 500, // Mức tăng sức chứa mỗi cấp
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
        duration: 300
    }
};

let research = {
    unlockedTechnologies: [],
    armorCraftingCost: 50,
    canUnlockArmorCrafting: false
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
        duration: 120, // 2 phút
        assignedSoldiers: 0, // Số binh sĩ được giao cho chuyến thám hiểm này
        baseSuccessRate: 40, // Tỉ lệ thành công cơ bản khi không có binh sĩ
        successRatePerSoldier: 5, // Mỗi binh sĩ tăng 5% tỉ lệ thành công
        maxSuccessRate: 100,
        baseCasualtyRate: 5, // Tỉ lệ tử trận cơ bản (nhẹ)
        casualtyRateDecreasePerSoldier: 0.5 // Mỗi binh sĩ giảm 0.5% tỉ lệ tử trận
    },
    fortress: {
        inProgress: false,
        timeRemaining: 0,
        duration: 300, // 5 phút
        assignedSoldiers: 0, // Số binh sĩ được giao cho chuyến thám hiểm này
        baseSuccessRate: 10,
        successRatePerSoldier: 3,
        maxSuccessRate: 80, // Có thể giới hạn tỉ lệ thành công tối đa ở thành trì
        baseCasualtyRate: 20, // Tỉ lệ tử trận cơ bản (cao)
        casualtyRateDecreasePerSoldier: 0.8
    }
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
    document.getElementById('soldiers').textContent = workers.soldiers; // Tổng số binh sĩ
    
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
    workers.idleSoldiers = workers.soldiers - exploration.emptyLand.assignedSoldiers - exploration.fortress.assignedSoldiers;
    document.getElementById('idle-soldiers-explore-empty').textContent = workers.idleSoldiers;
    document.getElementById('idle-soldiers-explore-fortress').textContent = workers.idleSoldiers;

    // Cập nhật tỉ lệ thành công khi UI được cập nhật
    updateExplorationSuccessRate('emptyLand');
    updateExplorationSuccessRate('fortress');

    // Cập nhật tiến trình thám hiểm Vùng Đất Trống
    const emptyLandCountdownElem = document.getElementById('empty-land-exploration-countdown');
    const emptyLandProgressElem = document.getElementById('empty-land-exploration-progress');
    const emptyLandProgressContainer = document.getElementById('empty-land-exploration-progress-container');

    if (emptyLandCountdownElem && emptyLandProgressElem && emptyLandProgressContainer) { // Kiểm tra sự tồn tại của các phần tử
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

    if (fortressCountdownElem && fortressProgressElem && fortressProgressContainer) { // Kiểm tra sự tồn tại của các phần tử
        fortressCountdownElem.textContent = exploration.fortress.timeRemaining + ' giây';
        const fortressProgressPercent = ((exploration.fortress.duration - exploration.fortress.timeRemaining) / exploration.fortress.duration) * 100;
        fortressProgressElem.style.width = fortressProgressPercent + '%';

        if (exploration.fortress.inProgress) {
            fortressProgressContainer.style.display = 'block';
        } else {
            fortressProgressContainer.style.display = 'none';
        }
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
    } else if (buildingName === 'warehouse') { // Logic nâng cấp Nhà Kho
        const costWood = buildings.warehouse.upgradeCost.wood;
        const costStone = buildings.warehouse.upgradeCost.stone;

        if (resources.wood >= costWood && resources.stone >= costStone) {
            resources.wood -= costWood;
            resources.stone -= costStone;
            buildings.warehouse.level++;
            
            // Tăng giới hạn của tất cả các loại tài nguyên
            resources.woodCapacity += buildings.warehouse.capacityPerLevel;
            resources.grainCapacity += buildings.warehouse.capacityPerLevel;
            resources.goldCapacity += buildings.warehouse.capacityPerLevel;
            resources.stoneCapacity += buildings.warehouse.capacityPerLevel;
            resources.ironCapacity += buildings.warehouse.capacityPerLevel;

            buildings.warehouse.upgradeCost.wood = Math.floor(buildings.warehouse.upgradeCost.wood * 1.6); // Tăng chi phí nâng cấp
            buildings.warehouse.upgradeCost.stone = Math.floor(buildings.warehouse.upgradeCost.stone * 1.6);

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
            workers.idle++; // Trả công nhân đã huấn luyện về trạng thái rảnh
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
            workers.soldiers++;
            workers.idleSoldiers++; // Binh sĩ sau khi huấn luyện xong là rảnh
            workers.idle++; // Trả công nhân đã huấn luyện về trạng thái rảnh
            alert('Một binh sĩ đã hoàn thành khóa huấn luyện!');
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
    // Kiểm tra giới hạn trước khi thêm tài nguyên
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

// Tính toán tỉ lệ thành công và tử trận cho thám hiểm
function calculateExplorationRates(type, soldiersSent) {
    let successRate = 0;
    let casualtyRate = 0;
    const config = exploration[type];

    // Tỉ lệ thành công
    successRate = config.baseSuccessRate + (soldiersSent * config.successRatePerSoldier);
    successRate = Math.min(successRate, config.maxSuccessRate);

    // Tỉ lệ tử trận
    casualtyRate = config.baseCasualtyRate - (soldiersSent * config.casualtyRateDecreasePerSoldier);
    casualtyRate = Math.max(casualtyRate, 0); // Không thể có tỉ lệ tử trận âm

    return { successRate, casualtyRate };
}

// Cập nhật tỉ lệ thành công/tử trận trên UI
function updateExplorationSuccessRate(type) {
    const inputId = type === 'emptyLand' ? 'soldiers-empty-land' : 'soldiers-fortress';
    const successRateSpanId = type === 'emptyLand' ? 'success-rate-empty-land' : 'success-rate-fortress';
    const casualtyRateSpanId = type === 'emptyLand' ? 'casualty-rate-empty-land' : 'casualty-rate-fortress';

    const soldiersInput = document.getElementById(inputId);
    if (!soldiersInput) return; // Đảm bảo phần tử tồn tại trước khi truy cập

    let soldiersSent = parseInt(soldiersInput.value) || 0;

    // Giới hạn số lính có thể cử đi bằng số lính rảnh
    soldiersSent = Math.min(soldiersSent, workers.idleSoldiers + (exploration[type].inProgress ? exploration[type].assignedSoldiers : 0));
    soldiersInput.value = soldiersSent;

    const rates = calculateExplorationRates(type, soldiersSent);
    document.getElementById(successRateSpanId).textContent = `${rates.successRate.toFixed(0)}%`;
    document.getElementById(casualtyRateSpanId).textContent = `${rates.casualtyRate.toFixed(1)}%`;
}

// Bắt đầu thám hiểm
function startExploration(type) {
    if (exploration[type].inProgress) {
        alert(`Đang có đội thám hiểm ở ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'}!`);
        return;
    }

    const inputId = type === 'emptyLand' ? 'soldiers-empty-land' : 'soldiers-fortress';
    const soldiersInput = document.getElementById(inputId);
    let soldiersToAssign = parseInt(soldiersInput.value) || 0;

    if (soldiersToAssign <= 0) {
        alert('Cần cử ít nhất 1 binh sĩ đi thám hiểm!');
        return;
    }
    if (soldiersToAssign > workers.idleSoldiers) {
        alert(`Không đủ binh sĩ rảnh! Bạn có ${workers.idleSoldiers} binh sĩ rảnh.`);
        return;
    }

    // Trừ binh sĩ rảnh và gán vào đội thám hiểm
    workers.idleSoldiers -= soldiersToAssign;
    exploration[type].assignedSoldiers = soldiersToAssign;
    exploration[type].inProgress = true;
    exploration[type].timeRemaining = exploration[type].duration;

    alert(`Đã cử ${soldiersToAssign} binh sĩ đi thám hiểm ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'}!`);
    updateUI(); // Cập nhật UI ngay lập tức để hiển thị thanh tiến trình
}

// Logic tiến trình thám hiểm
function advanceExploration() {
    for (const type in exploration) {
        if (exploration[type].inProgress) {
            exploration[type].timeRemaining--;
            if (exploration[type].timeRemaining <= 0) {
                // Kết thúc thám hiểm
                exploration[type].inProgress = false;
                const soldiersSent = exploration[type].assignedSoldiers;
                const rates = calculateExplorationRates(type, soldiersSent);

                // Xử lý kết quả thám hiểm
                const successRoll = Math.random() * 100; // 0-99.99
                const casualtyRoll = Math.random() * 100;

                let message = `Đội thám hiểm ở ${type === 'emptyLand' ? 'Vùng Đất Trống' : 'Thành Trì Lân Cận'} đã trở về.`;
                let soldiersLost = 0;

                // Tính toán số lính bị thương vong
                if (casualtyRoll < rates.casualtyRate) {
                    soldiersLost = Math.ceil(Math.random() * (soldiersSent * 0.5)); // Mất đến 50% số lính cử đi
                    soldiersLost = Math.min(soldiersLost, soldiersSent); // Không thể mất nhiều hơn số đã cử
                    workers.soldiers -= soldiersLost;
                    message += `\n${soldiersLost} binh sĩ đã hy sinh.`;
                }
                
                // Trả lại binh sĩ còn sống về trạng thái rảnh
                workers.idleSoldiers += (soldiersSent - soldiersLost);
                exploration[type].assignedSoldiers = 0; // Đặt lại số lính đã giao nhiệm vụ

                if (successRoll < rates.successRate) {
                    // Thành công: nhận phần thưởng
                    message += '\nThám hiểm thành công! Bạn nhận được:';
                    if (type === 'emptyLand') {
                        const woodReward = Math.floor(Math.random() * 50) + 20;
                        const grainReward = Math.floor(Math.random() * 50) + 20;
                        resources.wood = Math.min(resources.wood + woodReward, resources.woodCapacity);
                        resources.grain = Math.min(resources.grain + grainReward, resources.grainCapacity);
                        message += `\n+ Gỗ: ${woodReward}\n+ Lúa: ${grainReward}`;
                    } else if (type === 'fortress') {
                        const goldReward = Math.floor(Math.random() * 100) + 50;
                        const ironReward = Math.floor(Math.random() * 70) + 30;
                        resources.gold = Math.min(resources.gold + goldReward, resources.goldCapacity);
                        resources.iron = Math.min(resources.iron + ironReward, resources.ironCapacity);
                        message += `\n+ Vàng: ${goldReward}\n+ Sắt: ${ironReward}`;
                    }
                } else {
                    // Thất bại: không nhận được phần thưởng
                    message += '\nThám hiểm thất bại. Không nhận được tài nguyên.';
                }
                alert(message);
            }
            updateUI(); // Luôn cập nhật UI để hiển thị thời gian giảm
        }
    }
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
        exploration: exploration // Lưu trạng thái thám hiểm
    };
    const jsonString = JSON.stringify(gameState);

    const encodedData = btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    document.getElementById('save-game-data').value = encodedData;
    alert('Game đã được lưu! Sao chép đoạn văn bản để sử dụng sau.');
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
        exploration = loadedState.exploration || { // Đảm bảo exploration có mặc định nếu tải save cũ
            emptyLand: {
                inProgress: false, timeRemaining: 0, duration: 120, assignedSoldiers: 0,
                baseSuccessRate: 40, successRatePerSoldier: 5, maxSuccessRate: 100,
                baseCasualtyRate: 5, casualtyRateDecreasePerSoldier: 0.5
            },
            fortress: {
                inProgress: false, timeRemaining: 0, duration: 300, assignedSoldiers: 0,
                baseSuccessRate: 10, successRatePerSoldier: 3, maxSuccessRate: 80,
                baseCasualtyRate: 20, casualtyRateDecreasePerSoldier: 0.8
            }
        };

        // Đảm bảo các thuộc tính capacity có sẵn nếu tải từ save cũ không có
        buildings.warehouse.capacityPerLevel = buildings.warehouse.capacityPerLevel || 500;
        resources.woodCapacity = resources.woodCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.grainCapacity = resources.grainCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.goldCapacity = resources.goldCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.stoneCapacity = resources.stoneCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
        resources.ironCapacity = resources.ironCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);

        // Đảm bảo workers.soldiers và workers.idleSoldiers được thiết lập đúng
        workers.soldiers = workers.soldiers || 0;
        // Tính toán lại idleSoldiers dựa trên tổng lính và lính đang đi thám hiểm
        workers.idleSoldiers = workers.soldiers - exploration.emptyLand.assignedSoldiers - exploration.fortress.assignedSoldiers;
        if (workers.idleSoldiers < 0) workers.idleSoldiers = 0; // Đảm bảo không âm

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
        clearInterval(gameInterval);
        startGameLoop();
    } catch (e) {
        alert('Dữ liệu tải game không hợp lệ! Vui lòng kiểm tra lại.');
        console.error('Lỗi khi tải game:', e);
    }
}

// --- Các hàm Hack (Chỉ dùng cho mục đích test) ---

function hackResources() {
    // Đặt tài nguyên bằng giới hạn
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
// Hàm Hack (Chỉ dùng cho mục đích test)
function hackTrainingAndCrafting() {
    // Hoàn thành huấn luyện nhà nghiên cứu
    if (training.researcher.inProgress) {
        training.researcher.timeRemaining = 1;
        alert('Huấn luyện Nhà nghiên cứu sẽ hoàn thành ngay lập tức!');
    } else {
        workers.researchers++;
        workers.idleResearchers++;
        alert('Đã thêm 1 Nhà nghiên cứu!');
    }

    // Hoàn thành huấn luyện binh sĩ
    if (training.soldier.inProgress) {
        training.soldier.timeRemaining = 1;
        alert('Huấn luyện Binh sĩ sẽ hoàn thành ngay lập tức!');
    } else {
        workers.soldiers++;
        workers.idleSoldiers++; // Đảm bảo lính hack cũng rảnh
        alert('Đã thêm 1 Binh sĩ!');
    }

    // Hoàn thành chế tạo Áo giáp
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

    // THÊM LOGIC HOÀN THÀNH NHANH THÁM HIỂM TẠI ĐÂY
    let explorationHackMessage = '';
    for (const type in exploration) {
        if (exploration[type].inProgress) {
            exploration[type].timeRemaining = 1; // Đặt thời gian còn lại về 1 giây
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
        advanceExploration(); // Thêm vào game loop
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

    // Lấy tham chiếu đến các phần tử tài nguyên và công nhân
    const resourcesSection = document.querySelector('.resources');
    const workersSection = document.querySelector('.workers');

    // Logic ẩn/hiện dựa trên tab được chọn
    if (tabId === 'world-tab') {
        // Nếu là tab Thế Giới, hiển thị Tài Nguyên và Công Nhân
        if (resourcesSection) resourcesSection.style.display = 'block';
        if (workersSection) workersSection.style.display = 'block';
        showSubTab('mining-tab'); // Hiển thị tab con Khai Thác mặc định
    } else if (tabId === 'settings-tab') {
        // Nếu là tab Cài Đặt, ẩn Tài Nguyên và Công Nhân
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

    // Cập nhật các giá trị input binh sĩ thám hiểm khi chuyển tab
    if (tabId === 'exploration-tab') {
        // Đảm bảo số lính trong input khớp với số lính được giao nếu đang trong quá trình thám hiểm
        if (exploration.emptyLand.inProgress) {
            document.getElementById('soldiers-empty-land').value = exploration.emptyLand.assignedSoldiers;
        } else {
            document.getElementById('soldiers-empty-land').value = 0; // Đặt về 0 nếu không thám hiểm
        }
        if (exploration.fortress.inProgress) {
            document.getElementById('soldiers-fortress').value = exploration.fortress.assignedSoldiers;
        } else {
            document.getElementById('soldiers-fortress').value = 0; // Đặt về 0 nếu không thám hiểm
        }

        updateExplorationSuccessRate('emptyLand');
        updateExplorationSuccessRate('fortress');
    }
}

// Khởi tạo trò chơi
window.onload = () => {
    // Đảm bảo các thuộc tính capacity được khởi tạo nếu chưa có (khi tải save cũ)
    buildings.warehouse.capacityPerLevel = buildings.warehouse.capacityPerLevel || 500; // Đặt giá trị mặc định nếu không tồn tại
    resources.woodCapacity = resources.woodCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.grainCapacity = resources.grainCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.goldCapacity = resources.goldCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.stoneCapacity = resources.stoneCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);
    resources.ironCapacity = resources.ironCapacity || (500 + (buildings.warehouse.level - 1) * buildings.warehouse.capacityPerLevel);

    // Đảm bảo workers.idleSoldiers được khởi tạo đúng khi tải game hoặc mới bắt đầu
    workers.soldiers = workers.soldiers || 0;
    // Tính toán lại idleSoldiers dựa trên tổng lính và lính đang đi thám hiểm
    workers.idleSoldiers = workers.soldiers - exploration.emptyLand.assignedSoldiers - exploration.fortress.assignedSoldiers;
    if (workers.idleSoldiers < 0) workers.idleSoldiers = 0; // Đảm bảo không âm

    updateUI();
    startGameLoop();
    showMainTab('world-tab');
};