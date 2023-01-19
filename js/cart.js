let addProductsToCart = () =>{
    let addProductBtn = document.querySelectorAll(".add-product");
    let carritoButton = document.getElementById("carritoButton");
    let carritoProductos = document.getElementById('carritoProductos')
    let carritoObj = {}
    let nProductos = 0
    

    addProductBtn = [...addProductBtn];
    addProductBtn.forEach(productBtn => {
        productBtn.addEventListener("click", (e)=>{
            //capturar el parent element de donde se hizo click para
            // luego capturar el id
            let productContainer = e.target.parentNode.parentNode;
            crearCarrito(productContainer)
        })
    });

    
    //captura el parent con el id del card del producto
    let crearCarrito = (objeto) => {

        const productoCapturado = {
        id: objeto.id,
        nombre: objeto.querySelector('.product-name').textContent,
        precio: objeto.querySelector('.price').textContent,
        img: objeto.querySelector('.img').getAttribute('src'),
        cantidad: 1
        }

        if(carritoObj.hasOwnProperty(productoCapturado.id)){
            productoCapturado.cantidad = carritoObj[productoCapturado.id].cantidad + 1
        }

        carritoObj[productoCapturado.id] = {...productoCapturado}
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
                        <button class="btn btn-outline-primary d-flex justify-content-center align-items-center">
                            <span class="d-block mb-1">+</span>
                        </button>
                        <button class="btn btn-outline-danger d-flex justify-content-center align-items-center">
                            <span class="d-block mb-1">-</span>
                        </button>
                    </div>
                </td>
            </tr>
            `
        })
        nProductos =  Object.values(carritoObj).reduce((acc, { cantidad }) => acc + cantidad, 0)

        counterFunction(nProductos)
    }

    // agregar prouductos al counter 
    let counterFunction = (nProductos) => {
    let carrito = document.getElementById("carrito");
    let counterHTML = `<div id="counter" class="counter position-absolute rounded-circle"></div>`
     console.log(nProductos);

        if(nProductos !== 0){
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
    let vaciarCarritoFunction = (counterId)=> {
        // crear el btn de vacial el carrito
        let vaciarCarrito = document.getElementById('carritoModalFooter');
        let vaciarBtn = `<button id="vaciarCarrito" type="button" class="btn btn-danger">Vaciar Carito</button></div>`
        vaciarCarrito.innerHTML = vaciarBtn

        let btnEvent = document.getElementById('vaciarCarrito')
        btnEvent.addEventListener("click", ()=>{
            carritoObj = {}
            counterId.textContent = ""
            pintarProductos()
        })
    }

}