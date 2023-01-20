let productos = () => {
    let productosSection = document.getElementById("sectionProducts").id;
    let productosContainer = document.getElementById("productsContainer");

    // muestra la seccion con todos los productos
    mostrarElemento(productosSection);

    let pedirProductos = async () => {
        let response = await fetch('./json/productos.json')
        let productos = await response.json()

        let htmlProductos = "";
        productos.forEach(producto => {
            htmlProductos += `
            <div id="${producto.id}" class="product-item d-flex flex-column justify-content-center">
                <div class="product-img d-flex justify-content-center pt-4">
                    <img class="img" src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>
                <div class="product-text p-4">
                    <h5 class="product-name mt-0 mb-3">${producto.nombre}</h5>
                    <h1 class="product-price mb-4">Precio: $
                    <span class="price">${producto.precio}<span></h1>

                    <button class="add-product mb-2 py-2 px-3">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
            `
        });
        productosContainer.innerHTML = htmlProductos;
    }

    pedirProductos()
}