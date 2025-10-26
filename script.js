// Menu data categorized with updated prices for 2025 inflation (15% increase)
// Added 10 more examples of Mexican food per category
const menuData = {
    "Sopas": [
        { id: 1, name: "Sopa de Tortilla", price: 56.35 },
        { id: 2, name: "Caldo de Pollo", price: 63.25 },
        { id: 3, name: "Sopa de Frijol", price: 51.75 },
        { id: 4, name: "Consomé de Res", price: 69.00 },
        { id: 5, name: "Sopa Azteca", price: 57.50 },
        { id: 31, name: "Sopa de Fideo", price: 46.00 },
        { id: 32, name: "Sopa de Mariscos", price: 80.50 },
        { id: 33, name: "Sopa de Elote", price: 48.30 },
        { id: 34, name: "Sopa de Verduras", price: 51.75 },
        { id: 35, name: "Sopa de Lima", price: 63.25 },
        { id: 61, name: "Sopa de Hongos", price: 57.50 },
        { id: 62, name: "Sopa de Albóndigas", price: 69.00 },
        { id: 63, name: "Sopa de Cebolla", price: 51.75 },
        { id: 64, name: "Sopa de Calabaza", price: 57.50 },
        { id: 65, name: "Sopa de Pescado", price: 80.50 },
        { id: 66, name: "Sopa de Nopal", price: 51.75 },
        { id: 67, name: "Sopa de Camarón", price: 80.50 },
        { id: 68, name: "Sopa de Arroz", price: 46.00 },
        { id: 69, name: "Sopa de Papa", price: 51.75 },
        { id: 70, name: "Sopa de Zanahoria", price: 51.75 }
    ],
    "Entradas": [
        { id: 6, name: "Guacamole", price: 74.75 },
        { id: 7, name: "Queso Fundido", price: 80.50 },
        { id: 8, name: "Flautas", price: 69.00 },
        { id: 9, name: "Tacos Dorados", price: 63.25 },
        { id: 10, name: "Empanadas", price: 57.50 },
        { id: 36, name: "Nachos", price: 74.75 },
        { id: 37, name: "Quesadillas", price: 69.00 },
        { id: 38, name: "Sopes", price: 63.25 },
        { id: 39, name: "Tostadas", price: 57.50 },
        { id: 40, name: "Chalupas", price: 63.25 },
        { id: 71, name: "Ensalada de Nopales", price: 57.50 },
        { id: 72, name: "Gorditas", price: 63.25 },
        { id: 73, name: "Molotes", price: 57.50 },
        { id: 74, name: "Tlacoyos", price: 63.25 },
        { id: 75, name: "Tamales", price: 69.00 },
        { id: 76, name: "Pambazos", price: 69.00 },
        { id: 77, name: "Elote Asado", price: 46.00 },
        { id: 78, name: "Esquites", price: 46.00 },
        { id: 79, name: "Ceviche", price: 80.50 },
        { id: 80, name: "Tacos de Canasta", price: 51.75 }
    ],
    "Plato Fuerte": [
        { id: 11, name: "Mole Oaxaqueño", price: 138.00 },
        { id: 12, name: "Chiles en Nogada", price: 149.50 },
        { id: 13, name: "Enchiladas de Mole", price: 126.50 },
        { id: 14, name: "Pozole Rojo", price: 115.00 },
        { id: 15, name: "Tlayudas", price: 103.50 },
        { id: 41, name: "Barbacoa de Chivo", price: 161.00 },
        { id: 42, name: "Fajitas de Res", price: 132.25 },
        { id: 43, name: "Cochinita Pibil", price: 143.75 },
        { id: 44, name: "Pescado a la Talla", price: 149.50 },
        { id: 45, name: "Tamales Oaxaqueños", price: 109.25 },
        { id: 81, name: "Pescado Veracruzano", price: 149.50 },
        { id: 82, name: "Pollo en Salsa Verde", price: 115.00 },
        { id: 83, name: "Chiles Rellenos", price: 126.50 },
        { id: 84, name: "Carnitas", price: 138.00 },
        { id: 85, name: "Mixiotes", price: 132.25 },
        { id: 86, name: "Birria", price: 143.75 },
        { id: 87, name: "Arrachera", price: 161.00 },
        { id: 88, name: "Pollo al Mole Negro", price: 138.00 },
        { id: 89, name: "Puntas de Res", price: 132.25 },
        { id: 90, name: "Filete de Pescado", price: 138.00 }
    ],
    "Ensaladas": [
        { id: 16, name: "Ensalada César", price: 86.25 },
        { id: 17, name: "Ensalada Mixta", price: 80.50 },
        { id: 18, name: "Ensalada de Pollo", price: 97.75 },
        { id: 19, name: "Ensalada de Atún", price: 92.00 },
        { id: 20, name: "Ensalada de Frutas", price: 74.75 },
        { id: 46, name: "Ensalada Griega", price: 89.70 },
        { id: 47, name: "Ensalada de Espinacas", price: 82.80 },
        { id: 48, name: "Ensalada Tropical", price: 92.00 },
        { id: 49, name: "Ensalada de Aguacate", price: 97.75 },
        { id: 50, name: "Ensalada Caprese", price: 103.50 },
        { id: 91, name: "Ensalada de Nopal", price: 80.50 },
        { id: 92, name: "Ensalada de Quinoa", price: 86.25 },
        { id: 93, name: "Ensalada de Camarón", price: 103.50 },
        { id: 94, name: "Ensalada de Pepino", price: 74.75 },
        { id: 95, name: "Ensalada de Betabel", price: 80.50 },
        { id: 96, name: "Ensalada de Garbanzo", price: 86.25 },
        { id: 97, name: "Ensalada César con Pollo", price: 97.75 },
        { id: 98, name: "Ensalada de Manzana", price: 74.75 },
        { id: 99, name: "Ensalada de Rúcula", price: 80.50 },
        { id: 100, name: "Ensalada de Brócoli", price: 86.25 }
    ],
    "Postres": [
        { id: 21, name: "Flan Napolitano", price: 57.50 },
        { id: 22, name: "Arroz con Leche", price: 51.75 },
        { id: 23, name: "Gelatina", price: 46.00 },
        { id: 24, name: "Pastel Tres Leches", price: 69.00 },
        { id: 25, name: "Churros", price: 63.25 },
        { id: 51, name: "Helado", price: 40.25 },
        { id: 52, name: "Pay de Limón", price: 57.50 },
        { id: 53, name: "Crepas", price: 63.25 },
        { id: 54, name: "Buñuelos", price: 51.75 },
        { id: 55, name: "Natillas", price: 57.50 },
        { id: 101, name: "Dulce de Leche", price: 57.50 },
        { id: 102, name: "Nieve de Garrafa", price: 46.00 },
        { id: 103, name: "Pastel de Chocolate", price: 69.00 },
        { id: 104, name: "Plátanos Fritos", price: 51.75 },
        { id: 105, name: "Jericalla", price: 57.50 },
        { id: 106, name: "Capirotada", price: 63.25 },
        { id: 107, name: "Flan de Coco", price: 57.50 },
        { id: 108, name: "Camotes", price: 46.00 },
        { id: 109, name: "Alegrías", price: 40.25 },
        { id: 110, name: "Empanadas de Fruta", price: 51.75 }
    ],
   "Bebidas": [
    { "id": 26, "name": "Agua de Horchata", "price": 34.50 },
    { "id": 27, "name": "Agua de Jamaica", "price": 34.50 },
    { "id": 28, "name": "Refresco", "price": 28.75 },
    { "id": 29, "name": "Café de Olla", "price": 40.25 },
    { "id": 30, "name": "Chocolate Caliente", "price": 46.00 },
    { "id": 56, "name": "Limonada", "price": 32.20 },
    { "id": 57, "name": "Té Helado", "price": 34.50 },
    { "id": 58, "name": "Agua Mineral", "price": 23.00 },
    { "id": 60, "name": "Jugo de Naranja", "price": 40.25 },
    { "id": 111, "name": "Atole", "price": 46.00 },
    { "id": 112, "name": "Agua de Tamarindo", "price": 34.50 },
    { "id": 113, "name": "Agua de Mango", "price": 34.50 },
    { "id": 114, "name": "Agua de Sandía", "price": 34.50 },
    { "id": 118, "name": "Ponche", "price": 46.00 },
    { "id": 119, "name": "Champurrado", "price": 46.00 },
    { "id": 120, "name": "Agua Fresca del Día", "price": 34.50 },
    { "id": 121, "name": "Sidral", "price": 30.00 },
    { "id": 122, "name": "Agua de Piña", "price": 34.50 },
    { "id": 123, "name": "Jarrito de Sabores", "price": 30.00 }
]

};

let cart = [];
let conversationState = {
    expectingCategory: false,
    expectingItemNumber: false,
    expectingQuantity: false,
    expectingConfirmation: false,
    expectingName: false,
    expectingPhone: false,
    expectingAddress: false,
    expectingNotes: false,
    expectingPaymentMethod: false,
    currentCategoryItems: [],
    selectedItem: null,
    customerName: '',
    customerPhone: '',
    deliveryAddress: '',
    deliveryNotes: '',
    paymentMethod: ''
};

// Initialize chatbot
function initializeChatbot() {
    addChatMessage('bot', '¡Hola! 👋 Bienvenido a **La Cocina Zapoteca**. Por favor, elige una categoría para comenzar:');
    showCategories();
    conversationState.expectingCategory = true;
}

// Show categories
function showCategories() {
    let message = '📚 Categorías:\n';
    const categories = Object.keys(menuData);
    categories.forEach((category, index) => {
        message += `${index + 1}. ${category}\n`;
    });
    addChatMessage('bot', message);
}

// Show items in selected category
function showItemsInCategory(categoryIndex) {
    const categories = Object.keys(menuData);
    const category = categories[categoryIndex];
    if (category) {
        const items = menuData[category];
        conversationState.currentCategoryItems = items;
        let message = `Has seleccionado "${category}". Estas son las opciones disponibles:\n`;
        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)} MXN\n`;
        });
        message += 'Por favor, ingresa el número del plato que deseas ordenar.';
        addChatMessage('bot', message);
        conversationState.expectingItemNumber = true;
        conversationState.expectingCategory = false;
    } else {
        addChatMessage('bot', '❌ Opción inválida. Por favor, selecciona una categoría válida.');
        showCategories();
    }
}

// Add item to cart based on user's selection
function addItemToCart(itemIndex) {
    const items = conversationState.currentCategoryItems;
    const item = items[itemIndex];
    if (item) {
        conversationState.selectedItem = item;
        addChatMessage('bot', `¿Cuántas órdenes de "${item.name}" deseas agregar a tu carrito?`);
        conversationState.expectingQuantity = true;
        conversationState.expectingItemNumber = false;
    } else {
        addChatMessage('bot', '❌ Opción inválida. Por favor, selecciona un número de plato válido.');
    }
}

// Update cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)} MXN
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });
    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)} MXN`;

    // Generate PayPal form with total amount
    updatePayPalForm(total);

    // Update WhatsApp message link
    updateWhatsAppLink();
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Generate PayPal form
function updatePayPalForm(totalAmount) {
    const paypalFormContainer = document.getElementById('paypal-button-container');
    if (!paypalFormContainer) return;

    paypalFormContainer.innerHTML = `
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="gascagtz@gmail.com" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="hidden" name="amount" value="${totalAmount.toFixed(2)}" />
            <input type="hidden" name="item_name" value="${cart.map(item => `${item.name} (x${item.quantity})`).join(', ')}" />
            <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/silver-pill-paypal-44px.png" border="0" name="submit" title="Pagar con PayPal" alt="PayPal - La forma más segura y rápida de pagar en línea." />
        </form>
    `;
}

// Update WhatsApp message link
function updateWhatsAppLink() {
    let message = 'Hola, me gustaría confirmar mi pedido:\n';
    cart.forEach(item => {
        message += `${item.name} x ${item.quantity}\n`;
    });
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `Total: $${total.toFixed(2)} MXN\n`;
    message += `👤 Nombre: ${conversationState.customerName}\n`;
    message += `📞 Teléfono: ${conversationState.customerPhone}\n`;
    if (conversationState.deliveryAddress) {
        message += `📍 Dirección: ${conversationState.deliveryAddress}\n`;
    }
    if (conversationState.deliveryNotes) {
        message += `📝 Notas: ${conversationState.deliveryNotes}\n`;
    }
    if (conversationState.paymentMethod) {
        message += `💳 Método de Pago: ${conversationState.paymentMethod}\n`;
    }
    const whatsappLink = document.querySelector('.whatsapp-button a');
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/525533355687?text=${encodeURIComponent(message)}`;
    }
}

// Show final summary
function showFinalSummary() {
    let summary = '🧾 Resumen de tu pedido:\n';
    cart.forEach(item => {
        summary += `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)} MXN\n`;
    });
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    summary += `Total: $${total.toFixed(2)} MXN\n`;
    summary += `👤 Nombre: ${conversationState.customerName}\n`;
    summary += `📞 Teléfono: ${conversationState.customerPhone}\n`;
    summary += `📍 Dirección: ${conversationState.deliveryAddress}\n`;
    if (conversationState.deliveryNotes) {
        summary += `📝 Notas: ${conversationState.deliveryNotes}\n`;
    }
    summary += `💳 Método de Pago: ${conversationState.paymentMethod}\n`;
    addChatMessage('bot', summary);

    // Update WhatsApp link with new information
    updateWhatsAppLink();
}

// Add chat message to the chat window with modern structure
function addChatMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    
    // Create message content wrapper
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = message.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(messageContent);
    chatWindow.appendChild(messageDiv);
    
    // Smooth scroll to bottom
    chatWindow.scrollTo({
        top: chatWindow.scrollHeight,
        behavior: 'smooth'
    });
}

// Process user message
function processUserMessage(message) {
    if (conversationState.expectingCategory) {
        if (message.toLowerCase() === 'no') {
            if (cart.length === 0) {
                addChatMessage('bot', 'Tu carrito está vacío. ¡Gracias por visitarnos! 😊');
            } else {
                addChatMessage('bot', '¿Deseas finalizar tu pedido y proceder al pago? (sí/no)');
                conversationState.expectingConfirmation = true;
            }
            conversationState.expectingCategory = false;
        } else {
            const categoryIndex = parseInt(message) - 1;
            if (!isNaN(categoryIndex)) {
                showItemsInCategory(categoryIndex);
            } else {
                addChatMessage('bot', '❌ Por favor, ingresa el número de la categoría que deseas.');
            }
        }
    } else if (conversationState.expectingItemNumber) {
        const itemIndex = parseInt(message) - 1;
        if (!isNaN(itemIndex)) {
            addItemToCart(itemIndex);
        } else {
            addChatMessage('bot', '❌ Por favor, ingresa el número del plato que deseas.');
        }
    } else if (conversationState.expectingQuantity) {
        const quantity = parseInt(message);
        if (!isNaN(quantity) && quantity > 0) {
            const item = conversationState.selectedItem;
            const cartItem = cart.find(i => i.id === item.id);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({...item, quantity});
            }
            updateCart();
            addChatMessage('bot', `✅ Has agregado ${quantity} "${item.name}" a tu carrito. ¿Deseas agregar algo más? 📚 Categorías:
1. Sopas
2. Entradas
3. Plato Fuerte
4. Ensaladas
5. Postres
6. Bebidas
Elige otra categoría o escribe "no" para finalizar.`);
            conversationState.expectingQuantity = false;
            conversationState.expectingCategory = true;
        } else {
            addChatMessage('bot', '❌ Por favor, ingresa una cantidad válida.');
        }
    } else if (conversationState.expectingConfirmation) {
        if (message.toLowerCase() === 'sí' || message.toLowerCase() === 'si') {
            addChatMessage('bot', '📝 Por favor, proporciona tu nombre.');
            conversationState.expectingName = true;
            conversationState.expectingConfirmation = false;
        } else {
            addChatMessage('bot', '❌ Tu pedido ha sido cancelado. ¡Gracias por visitarnos!');
            conversationState.expectingConfirmation = false;
        }
    } else if (conversationState.expectingName) {
        conversationState.customerName = message;
        addChatMessage('bot', '📞 Ahora, por favor proporciona tu número de teléfono.');
        conversationState.expectingName = false;
        conversationState.expectingPhone = true;
    } else if (conversationState.expectingPhone) {
        conversationState.customerPhone = message;
        addChatMessage('bot', '📍 Por favor, proporciona tu dirección de entrega.');
        conversationState.expectingPhone = false;
        conversationState.expectingAddress = true;
    } else if (conversationState.expectingAddress) {
        conversationState.deliveryAddress = message;
        addChatMessage('bot', '📝 ¿Tienes alguna nota adicional para tu pedido? (Escribe "no" si no tienes)');
        conversationState.expectingAddress = false;
        conversationState.expectingNotes = true;

        // Update WhatsApp link with new address
        updateWhatsAppLink();
    } else if (conversationState.expectingNotes) {
        if (message.toLowerCase() !== 'no') {
            conversationState.deliveryNotes = message;
        }
        addChatMessage('bot', 'Por favor, elige tu método de pago: 💳1. PayPal ó 💸2. Pago en efectivo contra entrega, confirmar pedido por Whatsapp');
        conversationState.expectingNotes = false;
        conversationState.expectingPaymentMethod = true;

        // Update WhatsApp link with new notes
        updateWhatsAppLink();
    } else if (conversationState.expectingPaymentMethod) {
        if (message === '1' || message === '2') {
            conversationState.paymentMethod = message === '1' ? 'PayPal' : 'Pago contra entrega';
            showFinalSummary();
            if (message === '1') {
                let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                // Generate PayPal form
                updatePayPalForm(total);
                addChatMessage('bot', 'Por favor, utiliza el botón de PayPal para completar tu pago. Una vez realizado el pago en línea, confirma tu pedido vía WhatsApp usando el botón abajo. ¡Gracias! 😊');
            } else {
                addChatMessage('bot', 'Gracias por tu pedido. Por favor, confirma tu pedido vía WhatsApp usando el botón abajo. ¡Gracias! 😊');
                confirmViaWhatsApp();
            }
            conversationState.expectingPaymentMethod = false;
        } else {
            addChatMessage('bot', '❌ Por favor, ingresa una opción válida (1 o 2).');
        }
    } else {
        addChatMessage('bot', '❌ No he entendido tu mensaje. Por favor, elige una categoría para comenzar:');
        showCategories();
        conversationState.expectingCategory = true;
    }
}

// Send message when user clicks send button or presses Enter
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === '') return;
    addChatMessage('user', message);
    userInput.value = '';
    processUserMessage(message);
}

// Add event listeners with accessibility support
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('tutorial-modal');
        if (modal.style.display === 'block') {
            closeModal();
        }
    }
    
    // Focus management for modal
    if (e.key === 'Tab' && document.getElementById('tutorial-modal').style.display === 'block') {
        const modal = document.getElementById('tutorial-modal');
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Initialize the app
initializeChatbot();

// Set current year in footer
document.getElementById('current-year').innerText = new Date().getFullYear();

// Tutorial Modal Logic with Accessibility
var modal = document.getElementById("tutorial-modal");
var btn = document.getElementById("tutorial-btn");
var span = document.getElementsByClassName("close")[0];

// Open the modal with accessibility
btn.onclick = function() {
  modal.style.display = "block";
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
  span.focus(); // Focus on close button
}

// Close the modal with accessibility
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto'; // Restore scrolling
  btn.focus(); // Return focus to trigger button
}

span.onclick = closeModal;

// Close the modal when clicking outside
modal.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// WhatsApp confirmation
function confirmViaWhatsApp() {
    updateWhatsAppLink();
    const whatsappLink = document.querySelector('.whatsapp-button a');
    if (whatsappLink) {
        window.open(whatsappLink.href, '_blank');
    }
}
