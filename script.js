let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
        navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
}

window.onscroll = () => {
        navbar.classList.remove('active');
        search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
        header.classList.toggle('shadow', window.scrollY > 0);
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Change text to 
        button.innerText = 'Item added';
        
    
        setTimeout(() => {
            button.innerText = 'Add to cart';
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('#cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update cart count
    function updateCartCount() {
        const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartIcon.setAttribute('data-quantity', cartQuantity);
    }

    // Function to calculate total amount
    function calculateTotal() {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    }

    // Function to update total amount
    function updateTotalAmount() {
        const totalAmount = calculateTotal();
        document.querySelector('#total-amount').innerText = totalAmount;
    }

    // Function to add item to cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateTotalAmount();
    }

    // Add event listeners to "Add to cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const productBox = document.querySelector(`.box[data-id="${id}"]`);
            const product = {
                id,
                name: productBox.querySelector('.product-name').innerText,
                price: parseFloat(productBox.querySelector('.product-price').innerText.replace('€', '')),
                image: productBox.querySelector('img').src
            };
            addToCart(product);
        });
    });

    // Function to render cart items in cart.html
    function renderCart() {
        const cartContainer = document.querySelector('.cart-container');
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty</p>';
            document.querySelector('.cart-total').style.display = 'none';
            return;
        }
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>€${item.price.toFixed(2)} x ${item.quantity} = €${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Add event listeners to "Remove" buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
                updateCartCount();
                updateTotalAmount();
            });
        });

        updateTotalAmount();
        document.querySelector('.cart-total').style.display = 'block';
    }

    // Render cart items if on cart page
    if (window.location.pathname.endsWith('cart.html')) {
        renderCart();
    }

    // Initial cart count update
    updateCartCount();
});

// Function to update cart count
function updateCartCount() {
    const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartIcon = document.querySelector('#cart');
    cartIcon.setAttribute('data-quantity', cartQuantity);
}


fetch('/add_to_cart', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        product_id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    })
})
.then(response => response.json())
.then(data => {
    console.log(data.message); // 
})
.catch(error => {
    console.error('Error:', error);
});