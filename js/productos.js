let productos = () => {
    let productosSection = document.getElementById("sectionProducts").id;
    let productosContainer = document.getElementById("productsContainer");

    mostrarElemento(productosSection);


    fetch('../json/productos.json')
    .then(response => response.json())
    .then(data => {
        let htmlProductos = "";
        data.forEach(producto => {
            htmlProductos += `
            <div class="product-item d-flex flex-column justify-content-center">
                <div class="product-img d-flex justify-content-center pt-4">
                    <img class="img" src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>
                <div class="product-text p-4">
                    <h5 class="product-name mt-0 mb-3">
                        ${producto.nombre}
                    </h5>
                    <h1 class="product-price mb-4">
                        Precio: $${producto.precio}
                    </h1>

                    <button class="add-product mb-2 py-2 px-3">
                        Agregar al Carrito
                    </button>
                </div>
          </div>
            `
        });
        productosContainer.innerHTML = htmlProductos;
    })
}






