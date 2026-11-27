// ========================================
// KAINAN SA SULOK - MENU ITEMS
// ========================================

const menuItems = [
    // COMBO MEALS
    {
        id: 1,
        name: "Adobong Baboy Combo",
        category: "Combo Meals",
        price: 115,
        image: "image/adobong baboy with rice.jpg",
        description: "Pork adobo served with rice and a drink."
    },
    {
        id: 2,
        name: "Adobong Manok Combo",
        category: "Combo Meals",
        price: 100,
        image: "image/adobong manok with rice.jpg",
        description: "Chicken adobo served with rice and a drink."
    },
    {
        id: 3,
        name: "Sinigang na Baboy Combo",
        category: "Combo Meals",
        price: 115,
        image: "image/sinigang na baboy with rice.jpg",
        description: "Pork sinigang served with rice and a drink."
    },
    {
        id: 4,
        name: "Tinolang Manok Combo",
        category: "Combo Meals",
        price: 105,
        image: "image/tinolang manok with rice.jpg",
        description: "Chicken tinola served with rice and a drink."
    },
    {
        id: 5,
        name: "Menudong Baboy Combo",
        category: "Combo Meals",
        price: 100,
        image: "image/menudong baboy with rice.jpg",
        description: "Pork menudo served with rice and a drink."
    },
    {
        id: 6,
        name: "Kalderetang Baka Combo",
        category: "Combo Meals",
        price: 125,
        image: "image/kaderetang baka with rice.jpg",
        description: "Beef kaldereta served with rice and a drink."
    },

    // ULAM ONLY
    {
        id: 7,
        name: "Adobong Baboy",
        category: "Ulam Only",
        price: 65,
        image: "image/adobong baboy.jpg",
        description: "Classic Filipino pork adobo."
    },
    {
        id: 8,
        name: "Adobong Manok",
        category: "Ulam Only",
        price: 60,
        image: "image/adobong manok.jpg",
        description: "Tender chicken cooked in soy sauce and vinegar."
    },
    {
        id: 9,
        name: "Sinigang na Baboy",
        category: "Ulam Only",
        price: 80,
        image: "image/sinigang na baboy.jpg",
        description: "Sour pork soup with fresh vegetables."
    },
    {
        id: 10,
        name: "Tinolang Manok",
        category: "Ulam Only",
        price: 70,
        image: "image/tinolang manok.jpg",
        description: "Warm chicken soup with vegetables."
    },
    {
        id: 11,
        name: "Menudong Baboy",
        category: "Ulam Only",
        price: 65,
        image: "image/menudong baboy.jpg",
        description: "Filipino pork stew with vegetables."
    },
    {
        id: 12,
        name: "Kalderetang Baka",
        category: "Ulam Only",
        price: 90,
        image: "image/kalderetang baka.jpg",
        description: "Beef stew cooked in a rich tomato sauce."
    },
    {
        id: 13,
        name: "Pinakbet",
        category: "Ulam Only",
        price: 55,
        image: "image/pinakbet.jpg",
        description: "Mixed Filipino vegetables."
    },
    {
        id: 14,
        name: "Pritong Bangus",
        category: "Ulam Only",
        price: 50,
        image: "image/pritong bangus.jpg",
        description: "Crispy fried milkfish."
    },

    // RICE
    {
        id: 15,
        name: "Rice",
        category: "Rice",
        price: 15,
        image: "image/rice.jpg",
        description: "Freshly cooked steamed rice."
    },
    {
        id: 16,
        name: "Fried Rice",
        category: "Rice",
        price: 20,
        image: "image/fried rice.jpg",
        description: "Filipino garlic fried rice."
    },

    // DRINKS
    {
        id: 17,
        name: "Iced Tea",
        category: "Drinks",
        price: 20,
        image: "image/iced tea.jpg",
        description: "Refreshing iced tea."
    },
    {
        id: 18,
        name: "Calamansi Juice",
        category: "Drinks",
        price: 25,
        image: "image/calamansi juice.jpg",
        description: "Fresh and refreshing calamansi juice."
    },
    {
        id: 19,
        name: "Gulaman",
        category: "Drinks",
        price: 20,
        image: "image/gulaman.jpg",
        description: "Sweet Filipino gulaman drink."
    },
    {
        id: 20,
        name: "Water",
        category: "Drinks",
        price: 15,
        image: "image/water.jpg",
        description: "Bottled drinking water."
    },

    // DESSERTS
    {
        id: 21,
        name: "Leche Flan",
        category: "Desserts",
        price: 35,
        image: "image/leche flan.jpg",
        description: "Smooth and creamy Filipino custard."
    },
    {
        id: 22,
        name: "Halo-Halo",
        category: "Desserts",
        price: 55,
        image: "image/halo halo.jpg",
        description: "Classic Filipino mixed dessert."
    },
    {
        id: 23,
        name: "Buko Pandan",
        category: "Desserts",
        price: 40,
        image: "image/buko pandan.jpg",
        description: "Creamy coconut and pandan dessert."
    },
    {
        id: 24,
        name: "Mais con Yelo",
        category: "Desserts",
        price: 45,
        image: "image/mais con yelo.jpg",
        description: "Sweet corn dessert with shaved ice."
    },
    {
        id: 25,
        name: "Fruit Salad",
        category: "Desserts",
        price: 45,
        image: "image/fruit salad.jpg",
        description: "Creamy Filipino-style fruit salad."
    }
];

// ========================================
// VARIABLES
// ========================================

let cart = [];
let selectedCategory = "All";

const foodGrid = document.getElementById("foodGrid");
const foodSearch = document.getElementById("foodSearch");
const emptyMessage = document.getElementById("emptyMessage");

const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const subtotalDisplay = document.getElementById("subtotal");
const deliveryFeeDisplay = document.getElementById("deliveryFee");
const totalDisplay = document.getElementById("total");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutFormContainer = document.getElementById("checkoutFormContainer");
const orderConfirmation = document.getElementById("orderConfirmation");

const orderType = document.getElementById("orderType");
const addressField = document.getElementById("addressField");
const customerAddress = document.getElementById("customerAddress");

// ========================================
// FORMAT PRICE
// ========================================

function formatPrice(price) {
    return "₱" + price.toFixed(2);
}

// ========================================
// DISPLAY MENU
// ========================================

function displayMenu() {
    foodGrid.innerHTML = "";

    const searchText = foodSearch.value.toLowerCase();

    const filteredItems = menuItems.filter(item => {
        const matchesCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;

        const matchesSearch =
            item.name.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    emptyMessage.hidden = filteredItems.length !== 0;

    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "food-card";

        const image = document.createElement("img");
        image.className = "food-image";
        image.src = item.image;
        image.alt = item.name;

        image.onerror = function () {
            this.onerror = null;
            this.src = "image/logo.png";
        };

        const info = document.createElement("div");
        info.className = "food-info";

        const category = document.createElement("span");
        category.className = "food-category";
        category.textContent = item.category;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.className = "food-description";
        description.textContent = item.description;

        const bottom = document.createElement("div");
        bottom.className = "food-bottom";

        const price = document.createElement("span");
        price.className = "food-price";
        price.textContent = formatPrice(item.price);

        const button = document.createElement("button");
        button.className = "add-cart-btn";
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(item.id));

        bottom.append(price, button);
        info.append(category, name, description, bottom);
        card.append(image, info);

        foodGrid.appendChild(card);
    });
}

// ========================================
// CATEGORY FILTER
// ========================================

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");
        selectedCategory = this.dataset.category;

        displayMenu();
    });
});

// ========================================
// SEARCH FOOD
// ========================================

foodSearch.addEventListener("input", displayMenu);

// ========================================
// ADD TO CART
// ========================================

function addToCart(itemId) {
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        const product = menuItems.find(item => item.id === itemId);

        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

// ========================================
// CHANGE QUANTITY
// ========================================

function changeQuantity(itemId, amount) {
    const item = cart.find(product => product.id === itemId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== itemId);
    }

    updateCart();
}

// ========================================
// REMOVE ITEM
// ========================================

function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// ========================================
// CALCULATE SUBTOTAL
// ========================================

function calculateSubtotal() {
    return cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}

// ========================================
// DELIVERY FEE
// ========================================

function getDeliveryFee() {
    return orderType.value === "Delivery" && cart.length > 0
        ? 30
        : 0;
}

// ========================================
// UPDATE CART
// ========================================

function updateCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-cart";
        empty.textContent = "Your cart is currently empty.";
        cartItemsContainer.appendChild(empty);
    }

    cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";

        const details = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent =
            formatPrice(item.price) + " × " + item.quantity;

        const lineTotal = document.createElement("p");
        lineTotal.textContent =
            "Subtotal: " + formatPrice(item.price * item.quantity);

        details.append(name, price, lineTotal);

        const actions = document.createElement("div");
        actions.className = "cart-actions";

        const minus = document.createElement("button");
        minus.className = "quantity-btn";
        minus.textContent = "−";
        minus.addEventListener("click", () => {
            changeQuantity(item.id, -1);
        });

        const quantity = document.createElement("strong");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.className = "quantity-btn";
        plus.textContent = "+";
        plus.addEventListener("click", () => {
            changeQuantity(item.id, 1);
        });

        const remove = document.createElement("button");
        remove.className = "remove-btn";
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
            removeItem(item.id);
        });

        actions.append(minus, quantity, plus, remove);
        row.append(details, actions);

        cartItemsContainer.appendChild(row);
    });

    const subtotal = calculateSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;

    subtotalDisplay.textContent = formatPrice(subtotal);
    deliveryFeeDisplay.textContent = formatPrice(deliveryFee);
    totalDisplay.textContent = formatPrice(total);

    cartCount.textContent = cart.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);
}

// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// ========================================
// OPEN CHECKOUT
// ========================================

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add food items first.");
        return;
    }

    checkoutFormContainer.hidden = false;
    orderConfirmation.hidden = true;

    checkoutModal.classList.add("show");
});

// ========================================
// CLOSE CHECKOUT
// ========================================

document.getElementById("closeModal").addEventListener("click", () => {
    checkoutModal.classList.remove("show");
});

checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) {
        checkoutModal.classList.remove("show");
    }
});

// ========================================
// ORDER TYPE AND DELIVERY ADDRESS
// ========================================

orderType.addEventListener("change", () => {
    const isDelivery = orderType.value === "Delivery";

    addressField.hidden = !isDelivery;
    customerAddress.required = isDelivery;

    updateCart();
});

// ========================================
// CHECKOUT FORM
// ========================================

checkoutForm.addEventListener("submit", event => {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        checkoutModal.classList.remove("show");
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const type = orderType.value;
    const address = customerAddress.value.trim();
    const payment = document.getElementById("paymentMethod").value;

    if (!name || !phone || !type || !payment) {
        alert("Please complete all required fields.");
        return;
    }

    if (type === "Delivery" && !address) {
        alert("Please enter your delivery address.");
        return;
    }

    const subtotal = calculateSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;

    const details = document.getElementById("confirmationDetails");
    details.innerHTML = "";

    function addDetail(label, value) {
        const paragraph = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = label + ": ";
        paragraph.appendChild(strong);
        paragraph.appendChild(document.createTextNode(value));

        details.appendChild(paragraph);
    }

    addDetail("Customer", name);
    addDetail("Contact", phone);
    addDetail("Order Type", type);

    if (type === "Delivery") {
        addDetail("Address", address);
    }

    addDetail("Payment", payment);

    const heading = document.createElement("h3");
    heading.textContent = "Ordered Items";
    details.appendChild(heading);

    cart.forEach(item => {
        addDetail(
            item.name,
            item.quantity + " × " + formatPrice(item.price)
        );
    });

    addDetail("Subtotal", formatPrice(subtotal));
    addDetail("Delivery Fee", formatPrice(deliveryFee));
    addDetail("Total Amount", formatPrice(total));

    checkoutFormContainer.hidden = true;
    orderConfirmation.hidden = false;
});

// ========================================
// FINISH ORDER
// ========================================

document.getElementById("finishOrder").addEventListener("click", () => {
    cart = [];
    updateCart();

    checkoutForm.reset();

    addressField.hidden = true;
    customerAddress.required = false;

    checkoutFormContainer.hidden = false;
    orderConfirmation.hidden = true;

    checkoutModal.classList.remove("show");
});

// ========================================
// INITIALIZE WEBSITE
// ========================================

displayMenu();
updateCart();
