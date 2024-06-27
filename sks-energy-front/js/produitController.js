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
        .then(data => populateTable(data))
        .catch(error => console.error('Error fetching data:', error));
});

function populateTable(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';  // Clear any existing content

    products.forEach(product => {
        const row = document.createElement('div');
        row.classList.add('row');

        // Table row for product
        row.innerHTML = `
            <div class="cell cell-50 text-center">${product.Code}</div>
            <div class="cell cell-100 text-center">${product.Libelle}</div>
            <div class="cell cell-100 p">${product.Description}</div>
            <div class="cell cell-50 text-center"><input name="rank[]" class="inputNumber" value="${product.Active}"></div>
            <div class="cell cell-100 text-center">${product.Prix}</div>
            <div class="cell cell-100 text-center">
                <button class="btnEdit fa fa-pencil bg-1 text-fff" style="width: 50px; height: 50px;" onclick="editProduct('${product.id}')"></button>
                <button class="btnRemove fa fa-remove bg-1 text-fff" style="width: 40px; height: 40px;" onclick="deleteProduct('${product.id}')"></button>
            </div>
        `;

        // Append the new row to the product list container
        productList.appendChild(row);
    });
}

// Add product
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    // Get form data
    const formData = new FormData(this);

    // Create a product object based on the form data
    const product = {
        Code: formData.get('code'),
        Libelle: formData.get('name'),
        Description: formData.get('description'),
        Prix: parseFloat(formData.get('price')),
        Active: formData.get('active') === 'on',  // Convert checkbox value to boolean
        UrlPhoto1: "http://example.com/photo1.jpg",  // Static values or use formData if these are part of the form
        UrlPhoto2: "http://example.com/photo2.jpg",
        UrlPhoto3: "http://example.com/photo3.jpg"
    };

    console.log('product:', product);
    // Send the product object to the server using fetch
    fetch(API_PRODUIT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Product added successfully!');
            window.location.href = 'admin%20page.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while adding the product.');
        });
});

// Delete product
function deleteProduct(id) {
    if (confirm('Do you really want to remove it?')) {
        fetch(`http://localhost:3001/produits/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                alert('Product deleted:', data);
                // Refresh the product list
                fetch('http://localhost:3001/produits')
                    .then(x => populateTable(x))
                    .catch(error => console.error('Error fetching data:', error));
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while deleting the product.');
            });
    }
}

// Edit product
function editProduct(id) {
    console.log('editProduct :: ' + id);
    // Redirect to the edit product page with the product id as a query parameter
    window.location.href = `admin_editProduit.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const editProductForm = document.getElementById('editProductForm');

    editProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(editProductForm);
        const productData = {};
        formData.forEach((value, key) => {
            productData[key] = value;
        });

        // Send the updated product data to the server using fetch or your preferred method
        fetch('http://localhost:3001/produits', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(response => {
                if (!response.ok) {
                    alert('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Product updated:', data);
                alert('Product updated successfully!');
                // Optionally, redirect or update UI
            })
            .catch(error => {
                console.error('Error updating product:', error);
                alert('An error occurred while updating the product.');
            });
    });
    window.location.href = `admin%page.html`;
});

