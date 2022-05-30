
let id;
function paymetDone() {
    for (let i = 0; i < 1; i++) {
        alert("Your order is accepted ")
        alert("Your order is being Packed")
        alert("Your order is in transit ")
        alert("Your order is out for delivery ")
        alert(" Order delivered")
    }
}
function fillDetails(functionPayment, delay) {
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(function () {
        functionPayment();
    }, delay);
}