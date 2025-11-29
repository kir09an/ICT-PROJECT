// Product Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Find the product data
    const product = elaraProducts[productId];
    
    if (product) {
        displayProduct(product);
        displayRelatedProducts(product);
    } else {
        // If product not found, redirect to homepage
        window.location.href = '../index.html';
    }

    // Quantity selector functionality
    let quantity = 1;
    const quantityElement = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    
    function updateQuantity() {
        quantityElement.textContent = quantity;
    }

    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        }
    });

    increaseBtn.addEventListener('click', function() {
        quantity++;
        updateQuantity();
    });

    // Add to Cart functionality
    const addToCartBtn = document.getElementById('add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product, quantity);
    });
});

function displayProduct(product) {
    // Update page title
    document.title = `${product.name} | ELARA Luxury Perfumes`;
    
    // Update product image
    document.getElementById('product-image').src = `../images/perfumes/${product.image}`;
    document.getElementById('product-image').alt = product.name;
    
    // Update breadcrumb
    const categoryLink = document.getElementById('category-link');
    const categoryText = getCategoryText(product.category);
    categoryLink.innerHTML = `<a href="category-${product.category}.html">${categoryText}</a>`;
    
    // Update product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-tagline').textContent = product.tagline;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-ingredients').textContent = product.ingredients;
    document.getElementById('product-story').textContent = product.story;
    
    // Update fragrance notes
    displayNotes('top-notes', product.notes.top);
    displayNotes('middle-notes', product.notes.middle);
    displayNotes('base-notes', product.notes.base);
    
    // Update season based on category
    const seasonElement = document.getElementById('product-season');
    seasonElement.textContent = getSeasonRecommendation(product.category);
}

function displayNotes(elementId, notes) {
    const element = document.getElementById(elementId);
    element.innerHTML = ''; // Clear loading text
    
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        element.appendChild(li);
    });
}

function getCategoryText(category) {
    const categories = {
        'her': 'For Her',
        'him': 'For Him', 
        'unisex': 'Unisex'
    };
    return categories[category] || 'Products';
}

function getSeasonRecommendation(category) {
    const seasons = {
        'her': 'Spring & Summer',
        'him': 'Fall & Winter',
        'unisex': 'All Seasons'
    };
    return seasons[category] || 'All Seasons';
}

function displayRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('related-products');
    relatedContainer.innerHTML = '';
    
    // Get 3 random products from the same category (excluding current product)
    const sameCategoryProducts = Object.values(elaraProducts)
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    sameCategoryProducts.forEach(product => {
        const productCard = createProductCard(product);
        relatedContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-card__image">
            <img src="../IMAGES/perfumes/${product.image}" alt="${product.name}">
            <div class="product-card__overlay">
                <a href="product.html?id=${product.id}" class="product-card__btn">View Details</a>
            </div>
        </div>
        <div class="product-card__content">
            <h3 class="product-card__name">${product.name}</h3>
            <p class="product-card__desc">${product.tagline}</p>
            <span class="product-card__price">$${product.price}</span>
        </div>
    `;
    
    return card;
}

function addToCart(product, quantity) {
    // Simple cart functionality (in real site, you'd use localStorage or backend)
    alert(`Added ${quantity} ${product.name} to cart! Total: $${product.price * quantity}`);
    
}