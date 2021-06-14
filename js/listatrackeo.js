//Name user
let nameContent = document.querySelector('#nameUser')
let nameUser = document.querySelector('#userChild')
let nameStorage = document.createTextNode("La lista de  " + localStorage.getItem("User"))
nameUser.appendChild(nameStorage)

let mostrar = localStorage.getItem("medicine")
let padre = document.querySelector('#list-trackeo')
let list = document.createElement('li')
let parseMedicine = (parseInt(localStorage.getItem("medicine")))
//modal 

let addList = document.querySelector('#btncarga')
let presion = document.querySelector('#content-presion')
let glucemia = document.querySelector('#content-glucemia')

//medicines

let medicineContent = document.querySelector('#radiovalid')
let glucemiaVal = localStorage.getItem("glucemiatrue")
let presionVal = localStorage.getItem("presiontrue")
let medicineVal = localStorage.getItem("medicinetrue")
let radioVal = document.querySelector('#radiovalid')
let contentRadio = document.querySelector('#contentRadio')
let tituloMedicina = document.querySelector('#tituloMedicina')

//contents in modal

glucemia.style.display = "none"
presion.style.display = "none"
addList.addEventListener('click', () => {
    //glucemia Modal
    if (glucemiaVal === "true") {
        glucemia.style.display = "block"
    }
    // else {
    //     glucemia.style.display = "none"
    // }
    //presion Modal
    if (presionVal === "true") {
        presion.style.display = "block"
    }
    // else {
    //     presion.style.display = "none"
    // }
    if (medicineVal === "true") {
        radioVal.style.display = "block"
        for (i = 0; i < parseMedicine; i++ && medicineVal === "true") {
            let a = 1 + i;
            let modalContent = document.querySelector('#contentRadio')
            let modalCheck =
                `<div id="radiovalid">
                <div class="container" id="contentRadio${parseMedicine}">
            <label class="form-check-label" for="defaultCheck">
                <span id="medicine${parseMedicine}">${a}</span>
            </label>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${parseMedicine}">
            </div>
            </div>`
            modalContent.innerHTML += modalCheck
        }
    }
    else {
        radioVal.style.display = "none"
        contentRadio.style.display = "none"
        tituloMedicina.style.display = "none"
    }
})

const listPresion = document.getElementById('presionlista')
const glucemialista = document.getElementById('glucemialista')

listPresion.style.display = "none"
glucemialista.style.display = "none"
//save dates

const saveDates = document.getElementById('save_dates')
saveDates.style.display = "none"
const messageTrack = document.querySelector('.message')


let loadButton = document.querySelector('#loadValue').
    addEventListener('click', () => {
        console.log(window.location)
        //dates input
        let glucemiaInput = document.querySelector('#glucemia').value
        let presionInput = document.querySelector('#presion').value

        //Element lists

        let valorPresionContent = document.getElementById('valorPresionContent') //li presion
        let valorGlucemiaContent = document.getElementById('valorGlucemiaContent')//li glucemia

        //Insert dates in element list
        const dia1Glucemia = valorGlucemiaContent.innerHTML = "Tu valor de glucemia es: " + glucemiaInput
        const dia1Presion = valorPresionContent.innerHTML = "Tu valor de presion es: " + presionInput
        glucemiaInput = 0
        presionInput = 0

        //show element list and button save
        let validatePresionList = localStorage.getItem("presiontrue")
        let validateGlucemiaList = localStorage.getItem("glucemiatrue")

        if (validatePresionList === "true") {
            listPresion.style.display = "block"
        }

        if (validateGlucemiaList === "true") {
            glucemialista.style.display = "block"
        }

        saveDates.style.display = "block"
        messageTrack.style.display = "none"


        save_dates.addEventListener('click', () => {
            let reporteSemanal = {
                dia1: [dia1Glucemia, dia1Presion]
            }

            localStorage.setItem("reporteSemanal", reporteSemanal.dia1)

            console.log(localStorage.getItem("reporteSemanal"))

            window.location.path = "/index.html"
        })
    })








