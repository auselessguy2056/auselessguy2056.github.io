// Trạng thái trò chơi
let resources = {
    wood: 0,
    grain: 0,
    gold: 0,
    stone: 0
};

let workers = {
    total: 5,
    idle: 5,
    assigned: {
        forest: 0,
        farm: 0,
        mine: 0,
        quarry: 0
    }
};

let buildings = {
    house: {
        level: 1,
        maxWorkers: 5, // Số công nhân tối đa ban đầu
        upgradeCost: {
            wood: 50,
            stone: 30
        }
    }
    // Có thể thêm các công trình khác ở đây
};

// Cập nhật giao diện người dùng
function updateUI() {
    document.getElementById('wood').textContent = resources.wood;
    document.getElementById('grain').textContent = resources.grain;
    document.getElementById('gold').textContent = resources.gold;
    document.getElementById('stone').textContent = resources.stone;

    document.getElementById('total-workers').textContent = workers.total;
    document.getElementById('idle-workers').textContent = workers.idle;

    document.getElementById('workers-forest').textContent = workers.assigned.forest;
    document.getElementById('workers-farm').textContent = workers.assigned.farm;
    document.getElementById('workers-mine').textContent = workers.assigned.mine;
    document.getElementById('workers-quarry').textContent = workers.assigned.quarry;

    // Cập nhật thông tin Nhà ở
    document.getElementById('house-level').textContent = buildings.house.level;
    document.getElementById('house-max-workers').textContent = buildings.house.maxWorkers;
    document.getElementById('house-upgrade-cost-wood').textContent = buildings.house.upgradeCost.wood;
    document.getElementById('house-upgrade-cost-stone').textContent = buildings.house.upgradeCost.stone;
}

// Gửi công nhân đến một khu vực
function assignWorker(location) {
    if (workers.idle > 0) {
        // Tính tổng số công nhân ĐANG LÀM VIỆC ở tất cả các khu vực
        const totalAssignedWorkers = Object.values(workers.assigned).reduce((sum, current) => sum + current, 0);

        // Nếu gửi thêm 1 công nhân mà tổng số công nhân đang làm việc vẫn không vượt quá giới hạn
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

// Hàm khai thác tài nguyên (chạy định kỳ)
// Hàm khai thác tài nguyên (chạy định kỳ)
function gatherResources() {
    // Tăng tài nguyên dựa trên số công nhân được giao
    resources.wood += workers.assigned.forest * 1;    // 1 gỗ mỗi công nhân
    resources.grain += workers.assigned.farm * 1;     // Đã đổi thành 1 lúa mỗi công nhân
    resources.gold += workers.assigned.mine * 1;      // Đã đổi thành 1 vàng mỗi công nhân
    resources.stone += workers.assigned.quarry * 1;   // Đã đổi thành 1 đá mỗi công nhân

    // Làm tròn tài nguyên (nếu cần)
    // Luôn làm tròn xuống để tránh số thập phân nếu bạn muốn tài nguyên là số nguyên
    resources.wood = Math.floor(resources.wood);
    resources.grain = Math.floor(resources.grain);
    resources.gold = Math.floor(resources.gold);
    resources.stone = Math.floor(resources.stone);

    updateUI();
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
            buildings.house.maxWorkers += 2; // Tăng thêm 2 công nhân mỗi lần nâng cấp
            
            // Tăng chi phí nâng cấp cho lần tiếp theo
            buildings.house.upgradeCost.wood = Math.floor(buildings.house.upgradeCost.wood * 1.5);
            buildings.house.upgradeCost.stone = Math.floor(buildings.house.upgradeCost.stone * 1.5);

            // Tăng tổng số công nhân lên theo maxWorkers của nhà ở khi nâng cấp nhà ở
            // Điều này giả định bạn muốn có công nhân mới tự động khi nâng cấp nhà
            workers.total += 2;
            workers.idle += 2; // Các công nhân mới sẽ ở trạng thái rảnh

            alert(`Nâng cấp Nhà ở lên cấp ${buildings.house.level} thành công!`);
            updateUI();
        } else {
            let message = 'Không đủ tài nguyên để nâng cấp Nhà ở!\n';
            if (resources.wood < costWood) message += `Thiếu Gỗ: ${costWood - resources.wood}\n`;
            if (resources.stone < costStone) message += `Thiếu Đá: ${costStone - resources.stone}\n`;
            alert(message);
        }
    }
    // Có thể thêm logic cho các công trình khác tại đây
}

// Chuyển đổi giữa các tab
function showTab(tabId) {
    // Ẩn tất cả các tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Bỏ trạng thái active của tất cả các nút tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Hiển thị tab content được chọn
    document.getElementById(tabId).classList.add('active');

    // Đặt trạng thái active cho nút tab tương ứng
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Khởi tạo trò chơi
window.onload = () => {
    updateUI();
    // Chạy hàm gatherResources mỗi 1 giây (1000 ms)
    setInterval(gatherResources, 1000);
    // Mặc định hiển thị tab khai thác khi load trang
    showTab('mining-tab');
};