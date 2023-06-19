const products = [
    { name: "Produto 1", category: "FERRAMENTAS" },
    { name: "Produto 2", category: "EPI E EPC" },
    { name: "Produto 3", category: "SINALIZAÇÃO DE SEGURANÇA" },
    { name: "Produto 4", category: "AMBIENTAL" },
    { name: "Produto 5", category: "COMBATE A INCÊNDIO" },
    // Adicione mais produtos conforme necessário
];

const searchInput = document.getElementById("searchInput");
const productsContainer = document.getElementById("productsContainer");

function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = "";

    productsToDisplay.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.category}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

displayProducts(products);