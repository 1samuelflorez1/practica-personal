const mainDiv = document.querySelector("#mainDiv")
mainDiv.classList.add("mainDiv")

fetch('armas.json')
    .then(response => response.json())
    .then(armas => {
        const guns = armas.data
        console.log(guns)

    let cuentaFull = localStorage.getItem("costoSaved") || []

    function renderPrecio(){
        cuentaFull = Number(cuentaFull)
        precioFull.innerText = cuentaFull
        divcostoacumulado.appendChild(precioFull)
    }

    const allGuns = document.createElement("div")
    allGuns.classList.add("allguns")

    const carrito = document.createElement("h1")
    carrito.innerText = "Carrito"
    carrito.classList.add("carrito")
    mainDiv.appendChild(carrito)

    const divcostoacumulado = document.createElement("h4")
    divcostoacumulado.classList.add("divAcumulado")
    mainDiv.appendChild(divcostoacumulado)

    const precioacumulado = document.createElement("h4")
    precioacumulado.innerText = "Precio Acumulado"
    precioacumulado.classList.add("precioAcumulado")
    divcostoacumulado.appendChild(precioacumulado)

    const precioFull = document.createElement("h4")
    precioFull.innerHTML = 0
    precioFull.classList.add("precioFull")
    divcostoacumulado.appendChild(precioFull)

    let preciO = 0

    guns.forEach(gun => {
        const divGun = document.createElement("div")
        divGun.classList.add("divgun")

        const nameGun = document.createElement("h2")
        nameGun.innerText = gun.displayName
        nameGun.classList.add("namegun")

        const imageGun = document.createElement("img")
        imageGun.src = gun.displayIcon
        imageGun.classList.add("imagegun")

        const cadencia = document.createElement("h4")
        cadencia.innerText = `Fire Rate: ${gun.weaponStats.fireRate}`
        cadencia.classList.add("cadencia")  

        const price = document.createElement("h4")
        price.innerText = `Price: ${gun.shopData.cost}$`
        price.classList.add("price")

        const boton = document.createElement("button")
        boton.innerText = "Buy"
        boton.classList.add("botonComprar")
       
        let comprado = false
        boton.addEventListener("click", () => {
            if(!comprado){
            preciO += gun.shopData.cost
            precioFull.innerHTML = preciO
            comprado = true
                if(boton.classList.contains("botonComprar")){
                    boton.innerText = "Sell"
                    boton.classList.toggle("botonVender")
            }}else{
                preciO -= gun.shopData.cost
                precioFull.innerHTML = preciO
                boton.innerText = "Buy"
                boton.classList.remove("botonVender")
                boton.classList.add("botonComprar")
                comprado = false
            }
            cuentaFull.push(preciO)
            localStorage.setItem("costoSaved", cuentaFull)  
        })

        divGun.appendChild(imageGun)
        divGun.appendChild(nameGun)
        divGun.appendChild(cadencia)
        divGun.appendChild(price)
        divGun.appendChild(boton)
        allGuns.appendChild(divGun)
        mainDiv.appendChild(allGuns)
    });

})