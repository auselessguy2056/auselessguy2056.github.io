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
}

// Gửi công nhân đến một khu vực
function assignWorker(location) {
    if (workers.idle > 0) {
        workers.idle--;
        workers.assigned[location]++;
        updateUI();
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
function gatherResources() {
    // Tăng tài nguyên dựa trên số công nhân được giao
    resources.wood += workers.assigned.forest * 1; // 1 gỗ mỗi công nhân
    resources.grain += workers.assigned.farm * 1; // 0.5 lúa mỗi công nhân
    resources.gold += workers.assigned.mine * 1; // 0.2 vàng mỗi công nhân
    resources.stone += workers.assigned.quarry * 1; // 0.8 đá mỗi công nhân

    // Làm tròn tài nguyên (nếu cần)
    resources.wood = Math.floor(resources.wood);
    resources.grain = Math.floor(resources.grain);
    resources.gold = Math.floor(resources.gold);
    resources.stone = Math.floor(resources.stone);

    updateUI();
}

// Khởi tạo trò chơi
window.onload = () => {
    updateUI();
    // Chạy hàm gatherResources mỗi 1 giây (1000 ms)
    setInterval(gatherResources, 1000);
};