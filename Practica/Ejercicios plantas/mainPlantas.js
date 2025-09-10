const mainDiv = document.querySelector("#mainContainer")
const divPlantas = document.createElement("div")
const divForm = document.createElement("div")


let saved = localStorage.getItem("plantas")

if (saved) {
  saved = JSON.parse(saved)
  misPlantas(saved)
} else {
  fetch("plantas.json")
    .then(respuesta => respuesta.json())
    .then(plantas => {
      localStorage.setItem("plantas", JSON.stringify(plantas))
      misPlantas(plantas)
    })
}

function renderJardin() {

  divPlantasJardin.innerHTML = "" // limpiar antes de pintar de nuevo

  const jardinCards = JSON.parse(localStorage.getItem("copiasjardin")) || []

  jardinCards.forEach(planta => {
    const divCard = document.createElement("div")
    divCard.classList.add("containerIndividual")

    const nombrePlanta = document.createElement("p")
    nombrePlanta.innerText = planta.common_name
    nombrePlanta.classList.add("tituloPlanta")

    const nombrePlantaCientifico = document.createElement("p")
    nombrePlantaCientifico.innerText = planta.scientific_name
    nombrePlantaCientifico.classList.add("nombreCientifico")

    const imagenPlanta = document.createElement("img")
    imagenPlanta.src = planta.img
    imagenPlanta.classList.add("imagenIndividual")

    divCard.appendChild(nombrePlanta)
    divCard.appendChild(nombrePlantaCientifico)
    divCard.appendChild(imagenPlanta)

    divPlantasJardin.appendChild(divCard)
  })
}

function misPlantas(plantas) {
  divPlantas.innerHTML = ""

  const Plantas = plantas

  plantas.sort((a, b) => a.common_name.localeCompare(b.common_name)); //de esta forma podemos organizar de forma alfabetica
  //primero colocamos (plantas) porque es la representacion del api, luego ponemos sort (funciona para ordenar los distintos elementos)
  //luego se coloca (common-name) porque es con lo que se quiere comparar

  plantas.forEach(plantaIndividual => {

    const divIndividual = document.createElement("div")
    divIndividual.classList.add("containerIndividual")

    const nombrePlanta = document.createElement("p")
    nombrePlanta.innerText = plantaIndividual.common_name
    nombrePlanta.classList.add("tituloPlanta")

    const nombrePlantaCientifico = document.createElement("p")
    nombrePlantaCientifico.innerText = plantaIndividual.scientific_name
    nombrePlantaCientifico.classList.add("nombreCientifico")

    const imagenPlanta = document.createElement("img")
    imagenPlanta.src = plantaIndividual.img
    imagenPlanta.classList.add("imagenIndividual")

    divIndividual.appendChild(nombrePlanta)
    divIndividual.appendChild(nombrePlantaCientifico)
    divIndividual.appendChild(imagenPlanta)
    divPlantas.appendChild(divIndividual)
    divPlantas.classList.add("divplantas")
    mainDiv.appendChild(divPlantas)

    divIndividual.addEventListener("click", () => {
      
      const planJardin = {
        common_name: plantaIndividual.common_name,
        scientific_name: plantaIndividual.scientific_name,
        img: plantaIndividual.img,
      }
      let jardinCards = JSON.parse(localStorage.getItem("copiasjardin")) || []
      jardinCards.push(planJardin)
      localStorage.setItem("copiasjardin", JSON.stringify(jardinCards))
      renderJardin()
    })
  });

  
  if (!divForm.hasChildNodes()) {
    const formulario = document.createElement("form")
    const inputFormNombrePlanta = document.createElement("input")
    inputFormNombrePlanta.classList.add("inputNombrePlanta")

    const inputFormNuevoNombre = document.createElement("input")
    inputFormNuevoNombre.classList.add("inputNuevoNombre")

    inputFormNombrePlanta.placeholder = "Nombre de la planta"
    inputFormNuevoNombre.placeholder = "Nuevo nombre planta"

    const BtnForm = document.createElement("button")
    BtnForm.innerText = ("Submit")

    formulario.appendChild(inputFormNombrePlanta)
    formulario.appendChild(inputFormNuevoNombre)
    formulario.appendChild(BtnForm)

    const divFormulario = document.createElement("div")
    divFormulario.appendChild(formulario)

    divForm.classList.add("formStyle")
    divForm.appendChild(divFormulario)
    mainDiv.appendChild(divForm)

    BtnForm.addEventListener("click", (e) => {
      e.preventDefault()
      const nombreNuevoPlanta = inputFormNuevoNombre.value
      const nombrePlantaTomar = inputFormNombrePlanta.value

      const plantaEncontrada = Plantas.find(nombrePlantita => nombrePlantita.common_name === nombrePlantaTomar)
      if (plantaEncontrada) {
        plantaEncontrada.common_name = nombreNuevoPlanta
        localStorage.setItem("plantas", JSON.stringify(plantas))
        misPlantas(plantas)
        //vamos a entender este paso
        //el .find sirve para recorrer un array especifico elemento por elemento hasta que encuentra el primero que 
        //cumpla con la condicion
        //el nombre (nombrePlantita) es irrelevante, esa seccion es simplemente para determinar una variable de lo que se
        //esta buscando, en este caso, el nombre de la plantita
        //tambien ese "valor" en este caso nomprePlantita, representa una planta individual
      }
    }
    )
  }
}
const divJardin = document.createElement("div")
divJardin.classList.add("divjardin")
const tituloJardin = document.createElement("h1")

tituloJardin.innerText = "Jardin"
tituloJardin.classList.add("tituloJardin")
divJardin.appendChild(tituloJardin)

const divPlantasJardin = document.createElement("div")
divPlantasJardin.classList.add("styleJardin")
divJardin.appendChild(divPlantasJardin)

mainDiv.appendChild(divJardin)
renderJardin()