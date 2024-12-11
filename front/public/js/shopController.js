const API_PRODUIT = 'http://localhost:3001/produits';
// Fetch list of products
document.addEventListener('DOMContentLoaded', () => {
    fetch(API_PRODUIT)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => populateProduct(data))
        .catch(error => console.error('Error fetching data:', error));
});
 
function populateProduct(product) {
    const productContainer = document.getElementById('produits');
    productContainer.innerHTML = '';  // Clear any existing content

    product.filter(elem => elem.Active).forEach(product => {
        const productCard = document.createElement('a');
        productCard.classList.add('product');

        // Product details
        productCard.innerHTML = `
        <div class="product-image">
                          <img src="https://5.imimg.com/data5/XX/LX/MY-10535007/solar-panel-150-watt-500x500.jpg" />
                      </div>
                      <div class="product-content">
                          <div class="product-info">
                            <h2 class="product-title">${product.Libelle}</h2>
                            <p class="product-price">$${product.Prix}</p>
                          </div>
        </div>
    `;

        // Append the product card to the product container
        productContainer.appendChild(productCard);
    })
}