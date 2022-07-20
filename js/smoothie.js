class Smoothie {
    constructor(name, email, phone, ingredients) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.ingredients = ingredients;
    }
}

let orderSmoothie = function() {
    debugger
    const selectedIngredients = Array
    .from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value).join(", ");

    const name = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
    const phone = document.getElementById('phoneNumber').value;
    const email = document.getElementById('emailAddress').value;
    const smoothie = new Smoothie(name, email, phone, selectedIngredients);
    printOrder(smoothie);
};

function printOrder(smoothie) {
    debugger
    document.getElementById('name').innerText = smoothie.name;
    document.getElementById('contact').innerText = smoothie.email + ", " + smoothie.phone;
    document.getElementById('ingredientsList').innerText = smoothie.ingredients;
    document.getElementById('totalAmount').innerText = `CAD ${total}`;
}

let total = 0;
function calculateTotal(value, id) {
    debugger
    let checkBox = document.getElementById(id);

    if (checkBox.checked){
        total = total + value;
    } else {
        total = total - value;
    }
}
let orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener('click', orderSmoothie, false);