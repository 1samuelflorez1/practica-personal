const mainDiv = document.querySelector("#mainDiv")
const divIndividualJuegos = document.createElement("div")
fetch("indexJ.json")
    .then(response => response.json())
    .then(juegos => {
        console.log(juegos)
        
        juegos.forEach(cadaJuego => {
            const titulo = document.createElement("h3")
            titulo.innerText = cadaJuego.title
            titulo.classList.add("title")

            const generos = document.createElement("p")
            generos.innerHTML = cadaJuego.genre
            generos.classList.add("genero")

            const imagenJuego = document.createElement("img")
            imagenJuego.src = cadaJuego.image
            imagenJuego.classList.add("imagen")

            divIndividualJuegos.appendChild(titulo)
            divIndividualJuegos.appendChild(generos)
            divIndividualJuegos.appendChild(imagenJuego)
            mainDiv.appendChild(divIndividualJuegos)
        })

    })