const mainDiv = document.querySelector("#mainDiv")
const divCardsDestinos = document.createElement("div")
divCardsDestinos.classList.add("divcardsdestino")

fetch("turismo.json")
.then(res => res.json())
.then(turismo => {
console.log(turismo)

const infoTurismo = turismo

    infoTurismo.forEach(cardTurismo => {
        const divIndividualTurismo = document.createElement("div")
        divIndividualTurismo.classList.add("divIndividualTurismo")

        const destinoTurismo = document.createElement("h3")
        destinoTurismo.classList.add("destinoturismo")
        destinoTurismo.innerText = cardTurismo.destino

        const duracion = document.createElement("p")
        duracion.classList.add("duracion")
        duracion.innerText = `dias: ${cardTurismo.duracion}`

        const costo = document.createElement("p")
        costo.classList.add("costo")
        costo.innerText = `Precio: ${cardTurismo.costo}$`

        const description = document.createElement("p")
        description.classList.add("descripcion")
        description.innerText = cardTurismo.descripcion

        const activities = document.createElement("p")
        activities.classList.add("actividades")
        activities.innerText = `Actividades: ${cardTurismo.actividades}`

        const disponibilidades = document.createElement("p")
        disponibilidades.classList.add("disponibilidad")
        disponibilidades.innerText = `Disponibilidad: ${cardTurismo.reservado}`

        const imagen = document.createElement("img")
        imagen.classList.add("imagen")
        imagen.src = cardTurismo.imagen

        const calification = document.createElement("p")
        calification.classList.add("calificacion")
        calification.innerText = `Calificacion: ${cardTurismo.calificacion}`

        const tipoAlojamiento = document.createElement("p")
        tipoAlojamiento.classList.add("alojamiento")
        tipoAlojamiento.innerText = `Alojamiento: ${cardTurismo.alojamiento}`

        const guia = document.createElement("p")
        guia.classList.add("guia")
        guia.innerText = `Guia turistico incluido: ${cardTurismo.guia_incluido}`

        divIndividualTurismo.appendChild(destinoTurismo)
        divIndividualTurismo.appendChild(duracion)
        divIndividualTurismo.appendChild(costo)
        divIndividualTurismo.appendChild(description)
        divIndividualTurismo.appendChild(activities)
        divIndividualTurismo.appendChild(disponibilidades)
        divIndividualTurismo.appendChild(imagen)
        divIndividualTurismo.appendChild(calification)
        divIndividualTurismo.appendChild(tipoAlojamiento)
        divIndividualTurismo.appendChild(guia)
        divCardsDestinos.appendChild(divIndividualTurismo)

        mainDiv.appendChild(divCardsDestinos)
    });

        
})




