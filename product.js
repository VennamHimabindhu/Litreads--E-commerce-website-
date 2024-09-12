document.addEventListener('DOMContentLoaded', () => {
    let products = [
        { title: "Subliminal", author: "Leonard Mlodinow", price: 299, category: "psychology", image: "C:/Users/Himabindu/Downloads/image/9780307472250.jpg" },
        { title: "A Teaspoon of Earth and Sea", author: "Dina Nayeri", price: 399, category: "fiction", image: "path_to_image2.jpg" },
        { title: "More Than This", author: "Patrick Ness", price: 400, category: "fiction", image: "path_to_image3.jpg" },
        { title: "The Divine Comedy", author: "Dante Alighieri", price: 399, category: "philosophy", image: "path_to_image4.jpg" },
        { title: "Ulysses", author: "James Joyce", price: 199, category: "classic", image: "path_to_image5.jpg" },
        { title: "Brave New World", author: "Leslie Holland", price: 209, category: "fiction", image: "path_to_image6.jpg" },
        { title: "Psycho", author: "Tony Palladino", price: 255, category: "thriller", image: "path_to_image7.jpg" },
        { title: "Haunting Adeline", author: "H.D. Carlton", price: 299, category: "fiction", image: "path_to_image8.jpg" },
        { title: "Atlas Shrugged", author: "Ayn Rand", price: 499, category: "philosophy", image: "path_to_image9.jpg" },
        { title: "The World as Will and Representation", author: "Arthur Schopenhauer", price: 400, category: "philosophy", image: "path_to_image10.jpg" }
    ];

    function displayProducts(productArray) {
        const productList = document.getElementById('book-list');
        productList.innerHTML = '';

        productArray.forEach(product => {
            productList.innerHTML += `
                <div class="book-item" data-category="${product.category}">
                    <div class="book-image">
                        <a href="prod1.html">
                            <img src="${product.image}" alt="${product.title} Cover">
                        </a>
                    </div>
                    <h2 class="book-title">${product.title}</h2>
                    <p class="book-author">By ${product.author}</p>
                    <p class="book-price">Rs.${product.price}/-</p>
                    <div class="book-buttons">
                        <button class="add-to-cart" onclick="addToCart('${product.title}', '${product.author}', ${product.price}, '${product.image}')">Add to Cart</button>
                        <button class="buy-now"><a href="prod1.html">Buy Now</a></button>
                    </div>
                </div>
            `;
        });
    }

    displayProducts(products);

    window.addToCart = function(title, author, price, image) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ title, author, price, image });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${title} has been added to your cart!`);
    }
});
