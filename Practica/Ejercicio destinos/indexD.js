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

        const destinoTurismo = document.createElement("p")
        destinoTurismo.classList.add("destinoturismo")

        destinoTurismo.innerText = cardTurismo.destino

        divIndividualTurismo.appendChild(destinoTurismo)
        divCardsDestinos.appendChild(divIndividualTurismo)

        mainDiv.appendChild(divCardsDestinos)
    });

        
})




