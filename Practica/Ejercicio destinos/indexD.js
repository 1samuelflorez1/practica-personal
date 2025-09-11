const mainDiv = document.querySelector("#mainDiv")
const divCardsDestinos = document.createElement("div")
divCardsDestinos.classList.add("divcardsdestino")

fetch("turismo.json")
    .then(res => res.json())
    .then(turismo => {
        console.log(turismo)

        const infoTurismo = turismo

        let cardsGuardadas = JSON.parse(localStorage.getItem("reservas")) || []
        //comencemos con localstorage, aqui lo que se hace es obtener lo que luego se va a guardar 
        //en el localStorage, en este caso el item de "reservas" al cual, se le hace parse para poder
        //tener las cosas en objeto json
        //importante siempre, tener tener en esta variable, un array vacio para poder
        //luego colocar informacion de las cards

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

            const boton = document.createElement("button")
            boton.classList.add("btnMain")
            boton.innerHTML = "Reservar"

            if(cardsGuardadas.includes(cardTurismo.id)){
                divIndividualTurismo.classList.add("reservado")
                boton,innerText = "Reservado"
            }

            // boton.addEventListener("click", () => {
            //     divIndividualTurismo.classList.toggle("reservado")
            //     if (divIndividualTurismo.classList.contains("reservado")) {
            //         boton.innerHTML = "Reservado" 
            //         //en este apartado simplemente, se hace el local en el addeventlistener porque es cuando
            //         //se debe de guardar la informacion

            //         if(!cardsGuardadas.includes(cardTurismo.id)){
            //             cardsGuardadas.push(cardTurismo.id)
            //             //en esta parte, se hace un if para poder guardar la informacion
            //             //solo si, en la variable de cardsGuardadas no estan los id's del turismo 
            //             //se guarda, para esop funciona el push
            //         }

            //     } else {
            //         boton.innerHTML = "Reservar"
            //         cardsGuardadas = cardsGuardadas.filter(elementoDelArray => elementoDelArray !== cardTurismo.id)
            //         //parte mas compleja, aqui, se usa filter(), este filter sirve para crear un nuevo array 
            //         //solo si se cumple las condiciones dadas
            //         //esta parte de else es para quitar el boton, o en si, para devolverlo a como estaba antes
            //         //
            //     }
            //     localStorage.setItem("reservas", JSON.stringify(cardsGuardadas))
            // })

             boton.addEventListener("click", () => {
                divIndividualTurismo.classList.toggle("reservado")
                if (divIndividualTurismo.classList.contains("reservado")) {
                    boton.innerHTML = "Reservado"
                    if(!cardsGuardadas.includes(cardTurismo.id)){
                        cardsGuardadas.push(cardTurismo.id)
                    }
                } else {
                    boton.innerHTML = "Reservar"
                    cardsGuardadas = cardsGuardadas.filter(elementoSolo => elementoSolo !== cardTurismo.id)
                }
                localStorage.setItem("reservas", JSON.stringify(cardsGuardadas))
            })

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
            divIndividualTurismo.appendChild(boton)
            divCardsDestinos.appendChild(divIndividualTurismo)

            mainDiv.appendChild(divCardsDestinos)
        });


    })




