const products = [
    { id: 1, name: 'Shoes', price: 50 },
    { id: 2, name: 'Shirt', price: 25 },
    { id: 3, name: 'Pants', price: 35 },
    { id: 4, name: 'Hat', price: 15 },
    { id: 5, name: 'Socks', price: 5 },
    { id: 6, name: 'Jacket', price: 60 },
    { id: 7, name: 'Gloves', price: 10 },
    { id: 8, name: 'Scarf', price: 20 },
    { id: 9, name: 'Belt', price: 15 },
    { id: 10, name: 'Sunglasses', price: 30 }
  ];
  

let cart = loadCartFromLocalStorage();

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
  
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    saveCartToLocalStorage(cart);
    renderCart();
}
  
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage(cart);
    renderCart();
}
  
function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(newQuantity, 1);
    }
    saveCartToLocalStorage(cart);
    renderCart();
}
  
function saveCartToLocalStorage(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}
  
function loadCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart'));
    return cart || [];
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.trim();
    const discount = couponCode === 'WEB3BRIDGECOHORTx' ? 0.10 : 0;
    
    let total = calculateTotal();
    total = total - (total * discount);
    
    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}
  
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderProducts() {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productListContainer.appendChild(productDiv);
    });
}
  
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItemDiv);
    });

    // Update total
    const total = calculateTotal();
    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}
  
window.onload = function () {
    renderProducts();
    renderCart();
}
  
  