// cargar data del local storage
let saveLocalStorage = (carritoObj) => {
    localStorage.setItem("carritoLocal", JSON.stringify(carritoObj))
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carritoLocal')) {
        carritoObj = JSON.parse(localStorage.getItem('carritoLocal'))
        pintarProductos()
    }
})