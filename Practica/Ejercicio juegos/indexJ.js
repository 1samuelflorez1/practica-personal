const mainDiv = document.querySelector("#mainDiv")
const divsolojuegos = document.createElement("div")
divsolojuegos.classList.add("divsolojuegosclass")


fetch("indexJ.json")
    .then(response => response.json())
    .then(juegos => {
        console.log(juegos)

        cardsGuardadas = JSON.parse(localStorage.getItem("guardada")) || []

        juegos.forEach(cadaJuego => {

            const divIndividualJuegos = document.createElement("div")
            divIndividualJuegos.classList.add("divsolo")

            const titulo = document.createElement("h3")
            titulo.innerText = cadaJuego.title
            titulo.classList.add("title")

            const generos = document.createElement("p")
            generos.innerHTML = cadaJuego.genre
            generos.classList.add("genero")

            const imagenJuego = document.createElement("img")
            imagenJuego.src = cadaJuego.image
            imagenJuego.classList.add("imagen")

            const boton = document.createElement("button")
            boton.classList.add("btnGames")
            boton.innerText = "Reservar Juego"

            const selector = document.createElement("select")
            selector.classList.add("select")
            selector.innerHTML = cadaJuego.pcsAvailable
                .map(paracadapc => `<option value="${paracadapc}">${paracadapc}</option>`)
                

            divIndividualJuegos.appendChild(titulo)
            divIndividualJuegos.appendChild(generos)
            divIndividualJuegos.appendChild(imagenJuego)
            divIndividualJuegos.appendChild(boton)
            divIndividualJuegos.appendChild(selector)

            divsolojuegos.appendChild(divIndividualJuegos)

            mainDiv.appendChild(divsolojuegos)

            boton.addEventListener("click", () => {
                if (!cardsGuardadas.some(j => j.id === cadaJuego.id)){
                    cardsGuardadas.push(cadaJuego)
                    localStorage.setItem("guardada", JSON.stringify(cardsGuardadas))

                    renderCard()
                }
            })
        })

        const misReservas = document.createElement("h1")
        misReservas.innerText = "Mis Reservas"
        misReservas.classList.add("tituloReserva")
        mainDiv.appendChild(misReservas)

        function renderCard() {
            let contenedorReservas = document.querySelector(".clasesjuegos")
            if (contenedorReservas) contenedorReservas.remove()

            const juegosGuardadosPC = document.createElement("div")
            juegosGuardadosPC.classList.add("clasesjuegos")

            cardsGuardadas.forEach(card => {
                const ndivIndividualJuegos = document.createElement("div")
                ndivIndividualJuegos.classList.add("divsolo2")

                const ntitulo = document.createElement("h3")
                ntitulo.innerText = card.title
                ntitulo.classList.add("title")

                const ngeneros = document.createElement("p")
                ngeneros.innerHTML = card.genre
                ngeneros.classList.add("genero")

                const nimagenJuego = document.createElement("img")
                nimagenJuego.src = card.image
                nimagenJuego.classList.add("imagen")

                const nboton = document.createElement("button")
                nboton.classList.add("btnquitar")
                nboton.innerText = "Quitar Reserva"

                //esta parte es para eliminar la card que sea presionado con el click
                
                nboton.addEventListener("click", () => {
                    cardsGuardadas = cardsGuardadas.filter(coso => coso.id !== card.id)
                    localStorage.setItem("guardada", JSON.stringify(cardsGuardadas))
                    renderCard()
                })

                const nselector = document.createElement("select")
                nselector.classList.add("select")
                nselector.innerHTML = card.pcsAvailable
                .map(paracadapc => `<option value="${paracadapc}">${paracadapc}</option>`)
                .join("");

                const textosselector = document.createElement("p")
                textosselector.innerText = nselector.value
                textosselector.classList.add("textoselector")

                ndivIndividualJuegos.appendChild(ntitulo)
                ndivIndividualJuegos.appendChild(ngeneros)
                ndivIndividualJuegos.appendChild(nimagenJuego)
                ndivIndividualJuegos.appendChild(nboton)
                ndivIndividualJuegos.appendChild(textosselector)
                juegosGuardadosPC.appendChild(ndivIndividualJuegos)
                mainDiv.appendChild(juegosGuardadosPC)
            })
        }
        renderCard()
    })