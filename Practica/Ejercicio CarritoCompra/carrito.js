const removeCartItemButton = document.getElementsByClassName("btn-danger")
for(let i = 0; i < removeCartItemButton.length; i++){
    //aqui comenzamos haciendo un for para la lngotud de la cantidad de los botones
    //esto se hace para que la funcion que se ejecute, se aplique a la cantidad de botones que alla
    //con .length
    let button = removeCartItemButton[i]
    button.addEventListener("click", function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove() 
        //esta parte de buttonclicked lo que hace es, cuando se le da click, ejecuta la funcion de event
        updatedCartTotal()
    })
}
function updatedCartTotal(){
    let cartItemContainer = document.getElementsByClassName("cart-items")[0]
    let cartRows = cartItemContainer.getElementsByClassName("cart-row")
    for(let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByTagName("cart-price")[0]
        let quantityElement = cartRow.getElementsByTagName("cart-quantity-input")
        [0]
        //lo quee stamos haciendo aqui es dos cosas principales, extraer tanto el valor del elemento, el precio
        //como la cantidad de este, con el objetivo de restarlo al resultado en el DOM
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        console.log(price * quantity)
    }   
}   