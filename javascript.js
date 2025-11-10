
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "PC Gamer Ryzen 5 5600G 16GB 480GB SSD",
        price: 152.90,
        image: "image/computador1.webp"
    },  
    {
        id: 2,
        name: "Computador Intel i5 10400F 16GB GTX 1660S",
        price: 152.90,
        image: "image/computador2.webp"
    },  
    {
        id: 3,
        name: "Computador Ryzen 7 5700G 32GB SSD 100GB",
        price: 152.90,
        image: "image/computador3.webp"
    },  
    {
        id: 4,
        name: "Computador Gamer i7 11700F RTX 3060 400GB",
        price: 152.90,
        image: "image/computador4.jpg"
    },  
    {
        id: 5,
        name: "Computador Ryzen 5 5600 16GB RX 6600 500GB SSD",
        price: 152.90,
        image: "image/computador5.jpeg"
    },  
    {
        id: 6,
        name: "Computador Intel i5 12400 16GB SSD 480GB",
        price: 152.90,
        image: "image/computador6.jpg"
    },  
    {
        id: 7,
        name: "PC Gamer Ryzen 5 4600G 16GB 480GB SSD RGB",
        price: 152.90,
        image: "image/computador7.jpg"
    },  
    {
        id: 8,
        name: "Computador Intel i3 12100 8GB SSD 480GB Office",
        price: 152.90,
        image: "image/computador8.avif"
    },  
];

// Estado do carrinho
let cart = [];

// Elementos DOM
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
});

// Renderizar produtos
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <a href="computador${product.id}.html"><button class="add-to-cart" data-id="${product.id}">Mais informações</button></a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

