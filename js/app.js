document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const carousel = document.getElementById('carousel');
    const productGrid = document.getElementById('product-grid');
    let products = [];

    fetch('data/products.json')
        .then(res => res.json())
        .then(data => {
            products = data;
            populateCategories();
            render(products);
        });

    function populateCategories() {
        const categories = new Set(products.map(p => p.category));
        categorySelect.innerHTML = '<option value="all">All Categories</option>' +
            Array.from(categories).map(c => `<option value="${c}">${c}</option>`).join('');
    }

    function render(list) {
        // Render carousel (first 5 items)
        carousel.innerHTML = '';
        list.slice(0, 5).forEach(p => {
            const card = createCard(p);
            carousel.appendChild(card);
        });
        // Render product grid
        productGrid.innerHTML = '';
        list.forEach(p => {
            const card = createCard(p);
            productGrid.appendChild(card);
        });
    }

    function createCard(product) {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="${product.link}" target="_blank" rel="nofollow">Buy</a>
        `;
        return div;
    }

    searchInput.addEventListener('input', applyFilters);
    categorySelect.addEventListener('change', applyFilters);

    function applyFilters() {
        const query = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        const filtered = products.filter(p => {
            const matchesQuery = p.name.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || p.category === category;
            return matchesQuery && matchesCategory;
        });
        render(filtered);
    }
});
