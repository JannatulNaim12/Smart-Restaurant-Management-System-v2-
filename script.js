let orders = [
    { id: 1024, table: "03", item: "Classic Burger", status: "Preparing" },
    { id: 1025, table: "12", item: "Pasta Alfredo", status: "Pending" }
];

const tableBody = document.getElementById('tableBody');
const orderForm = document.getElementById('orderForm');

document.addEventListener('DOMContentLoaded', renderTable);

function renderTable() {
    tableBody.innerHTML = "";
    orders.forEach(order => {
        const row = `
            <tr>
                <td style="color: #999">#${order.id}</td>
                <td><strong>Table ${order.table}</strong></td>
                <td>${order.item}</td>
                <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
                <td>
                    <button class="btn-icon edit-icon" onclick="editOrder(${order.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete-icon" onclick="deleteOrder(${order.id})"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Logic for adding/editing remains the same but with better notification calls
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('editOrderId').value;
    const table = document.getElementById('tableNumber').value;
    const item = document.getElementById('orderItem').value;

    if(id) {
        // Update
        const index = orders.findIndex(o => o.id == id);
        orders[index].table = table;
        orders[index].item = item;
        showToast("Order Updated!");
    } else {
        // Create
        orders.push({ id: Math.floor(Math.random()*9000)+1000, table, item, status: "Pending" });
        showToast("Order Sent to Kitchen!");
    }
    resetForm();
    renderTable();
});

function deleteOrder(id) {
    if(confirm("Cancel this order?")) {
        orders = orders.filter(o => o.id !== id);
        renderTable();
        showToast("Order Removed");
    }
}

function editOrder(id) {
    const order = orders.find(o => o.id === id);
    document.getElementById('editOrderId').value = order.id;
    document.getElementById('tableNumber').value = order.table;
    document.getElementById('orderItem').value = order.item;
    document.getElementById('submitBtn').innerText = "Update Order";
    document.getElementById('formTitle').innerText = "Edit Order #" + id;
    document.getElementById('cancelEdit').classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function resetForm() {
    orderForm.reset();
    document.getElementById('editOrderId').value = "";
    document.getElementById('submitBtn').innerText = "Send to Kitchen";
    document.getElementById('formTitle').innerText = "Place New Order";
    document.getElementById('cancelEdit').classList.add('hidden');
}

function showToast(msg) {
    const toast = document.getElementById('notification');
    toast.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}