# Shopping Cart

A simple shopping cart application built with HTML, CSS, and JavaScript. This project allows users to view products, add them to their cart, apply a discount coupon, and see the total cost.

## Features

- **Product Listing:** Displays a list of products with their prices.
- **Add to Cart:** Adds selected products to the shopping cart with a quantity control.
- **Remove from Cart:** Removes products from the shopping cart.
- **Quantity Adjustment:** Users can increase or decrease the quantity of each product in the cart.
- **Apply Coupon:** A coupon code input allows a discount to be applied to the total price.
- **Local Storage:** Cart data is saved in local storage, so users don't lose their cart when the page is refreshed.

## Technologies Used

- **HTML** - Structure of the app.
- **CSS** - Basic styling (located in `styles.css`).
- **JavaScript** - Logic for adding/removing items, calculating total, and managing local storage (located in `app.js`).

## Setup Instructions

1. Clone this repository or download the files.
2. Open `index.html` in a web browser to run the application.

## Project Structure

```
|-- index.html           # Main HTML file
|-- styles.css           # Styles for the page
|-- app.js               # JavaScript logic for the cart
```

## Usage

### 1. Viewing Products
When the page loads, all available products are displayed with their names, prices, and an "Add to Cart" button.

### 2. Adding Products to the Cart
Click the "Add to Cart" button on any product to add it to your shopping cart. The cart will automatically update, showing the selected product and quantity.

### 3. Adjusting Quantity
In the cart, each product has `+` and `-` buttons to adjust the quantity. Quantities cannot go below 1.

### 4. Removing Products from the Cart
Click the "Remove" button for any item in the cart to remove it.

### 5. Applying a Coupon
Enter a coupon code in the input field below the cart. Use the coupon code `WEB3BRIDGECOHORTx` to get a 10% discount. Press "Apply Coupon" to apply it.

### 6. Viewing Total
The total cost is updated whenever items are added, removed, or the coupon is applied.

## Example Code

Here’s an example of how the cart updates the quantity of products:

```javascript
function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(newQuantity, 1);
    }
    saveCartToLocalStorage(cart);
    renderCart();
}
```
