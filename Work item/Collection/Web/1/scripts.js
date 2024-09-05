document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    // Handle Add to Cart button clicks
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            // Add to cart
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            // Update cart display
            updateCartDisplay();
        });
    });

    // Update cart display
    function updateCartDisplay() {
        cartItemsDiv.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
                </div>
            `;
        });

        cartTotalSpan.textContent = total.toFixed(2);
    }

    // Handle checkout button
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Proceeding to checkout.');
            // Implement further checkout logic here
        }
    });

    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            alert('Thank you for your message!');
            // Here you would typically send the form data to a server
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Implement search functionality
    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.service-card').forEach(card => {
            const serviceName = card.getAttribute('data-name').toLowerCase();
            if (serviceName.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
