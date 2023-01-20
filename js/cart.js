let carritoButton = document.getElementById("carritoButton");
let carritoProductos = document.getElementById('carritoProductos')
let carritoObj = {}
let nProductos = 0

let addProductsToCart = () => {
    let addProductBtn = document.querySelectorAll(".add-product");

    addProductBtn = [...addProductBtn];
    addProductBtn.forEach(productBtn => {
        productBtn.addEventListener("click", (e) => {
            //capturar el parent element de donde se hizo click para
            // luego capturar el id
            let productContainer = e.target.parentNode.parentNode;
            crearCarrito(productContainer)
        })
    });
}

//captura el parent con el id del card del producto
let crearCarrito = (objeto) => {

    const productoCapturado = {
        id: objeto.id,
        nombre: objeto.querySelector('.product-name').textContent,
        precio: objeto.querySelector('.price').textContent,
        img: objeto.querySelector('.img').getAttribute('src'),
        cantidad: 1
    }

    if (carritoObj.hasOwnProperty(productoCapturado.id)) {
        productoCapturado.cantidad = carritoObj[productoCapturado.id].cantidad + 1
    }

    carritoObj[productoCapturado.id] = { ...productoCapturado }
    pintarProductos()
}

//pinta los products en el html del carrito y counter
let pintarProductos = () => {
    carritoProductos.innerHTML = ''
    Object.values(carritoObj).forEach(producto => {
        carritoProductos.innerHTML += `
            <tr id="${producto.id}">
                <td class="col-50 text-center p-3"> <img src="${producto.img}" alt=""></td>
                <td>${producto.nombre}</td>
                <td class="col-50 text-end">${producto.cantidad}</td>
                <td class="col-50 text-end">${(parseInt(producto.precio) * parseInt(producto.cantidad))}</td>
                <td class="col-100 text-center">
                    <div class="d-flex justify-content-center align-items-center mx-auto gap-2">
                        <button id="addItemBtn" data-id="${producto.id}" class="btn btn-outline-primary d-flex justify-content-center align-items-center">
                            +
                        </button>
                        <button id="removeItemBtn" data-id="${producto.id}" class="btn btn-outline-danger d-flex justify-content-center align-items-center">
                            -
                        </button>
                    </div>
                </td>
            </tr>
            `
    })
    nProductos = Object.values(carritoObj).reduce((acc, { cantidad }) => acc + cantidad, 0)

    counterFunction(nProductos)

    saveLocalStorage(carritoObj)

}

// agregar prouductos al counter
let counterFunction = (nProductos) => {
    let carrito = document.getElementById("carrito");
    let counterHTML = `<div id="counter" class="counter position-absolute rounded-circle"></div>`

    if (nProductos !== 0) {
        //carrito desabilitado si no hay productos seleccionados
        carritoButton.classList.remove('disabled')
        carrito.innerHTML += counterHTML;

        //pasar el numero de carrito al icono de counter en el html
        let counterId = document.getElementById("counter");
        counterId.textContent = nProductos;

        vaciarCarritoFunction(counterId)
    }
}

// crear btn para vaciar carrito y counter
let vaciarCarritoFunction = (counterId) => {
    // crear el btn de vacial el carrito
    let vaciarCarrito = document.getElementById('carritoModalFooter');
    let vaciarBtn = `<button id="vaciarCarrito" type="button" class="btn btn-danger">Vaciar Carito</button></div>`
    vaciarCarrito.innerHTML = vaciarBtn

    let btnEvent = document.getElementById('vaciarCarrito')
    btnEvent.addEventListener("click", () => {
        carritoObj = {}
        counterId.textContent = ""
        pintarProductos()
    })

    let addItemBtn = document.querySelectorAll('.btn-outline-primary')
    let removeItemBtn = document.querySelectorAll('.btn-outline-danger')

    addItemBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            addRemoveItems(e, counterId)
        })
    })
    removeItemBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            addRemoveItems(e, counterId)
        })
    })
}

// funcion para remover o agregar productos en el carrito
let addRemoveItems = (e, counterId) => {
    //aumentar cantidad
    if (e.target.id === "addItemBtn") {
        let producto = carritoObj[e.target.getAttribute('data-id')]
        producto.cantidad++
        carritoObj[e.target.getAttribute('data-id')] = { ...producto }
        pintarProductos()
    } else if (e.target.id === "removeItemBtn") {
        let producto = carritoObj[e.target.getAttribute('data-id')]
        producto.cantidad--

        if (producto.cantidad === 0) {
            delete carritoObj[e.target.getAttribute('data-id')]
            counterId.textContent = ""
        }
        pintarProductos()
    }
}




