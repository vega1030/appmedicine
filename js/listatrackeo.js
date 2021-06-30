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

let flagValue = false

let loadButton = document.querySelector('#loadValue').
    addEventListener('click', () => {
        flagValue = true
        console.log(window.location)
        //dates input
        let glucemiaInput = document.querySelector('#glucemia').value
        let presionInput = document.querySelector('#presion').value

        //Element lists

        let valorPresionContent = document.getElementById('valorPresionContent') //li presion
        let valorGlucemiaContent = document.getElementById('valorGlucemiaContent')//li glucemia

        //Insert dates in element list
        const medicine = localStorage.getItem("medicine")


        //show element list and button save
        let validatePresionList = localStorage.getItem("presiontrue")
        let validateGlucemiaList = localStorage.getItem("glucemiatrue")


        // Funcion de carga
        const sendInfoIndex = (reporte) => {
            if (reporte.length < 2) {
                console.log(reporte)
                localStorage.setItem("reporteSemanal", JSON.stringify(reporte))
            }
            let [glucemiaInput, presionInput] = reporte
            glucemiaInput = "Glusemia: " + glucemiaInput + " "
            presionInput = "Presion: " + presionInput + " "
            console.log('valor de presion: ' + glucemiaInput)
            console.log('valor de glucemia: ' + presionInput)
            localStorage.setItem("reporteSemanal", JSON.stringify(glucemiaInput + presionInput))
        }



        //----validate input dates (be like integers and obligatory)----/

        switch (validatePresionList) {
            case "true":

                if (validatePresionList === validateGlucemiaList) {
                    const dia1Presion = valorPresionContent.innerHTML = "Tu valor de presion es: " + presionInput;
                    const dia1Glucemia = valorGlucemiaContent.innerHTML = "Tu valor de glucemia es: " + glucemiaInput
                    glucemialista.style.display = "block"
                    listPresion.style.display = "block"
                    const packInfo = [presionInput, glucemiaInput]
                    sendInfoIndex(packInfo)

                }
                else {
                    dia1Presion = valorPresionContent.innerHTML = "Tu valor de presion es: " + presionInput;
                    listPresion.style.display = "block"
                    sendInfoIndex(presionInput)
                }
                break

            case null:

                dia1Glucemia = valorGlucemiaContent.innerHTML = "Tu valor de glucemia es: " + glucemiaInput
                glucemialista.style.display = "block"
                sendInfoIndex(glucemiaInput)
                break
            default:
                alert("No hay valor para mostrar")
        }

        saveDates.style.display = "block"
        messageTrack.style.display = "none"

        //-----------------------*-------------------

        //SAVE DATES

        save_dates.addEventListener('click', () => {
            if (flagValue === true) {
                window.location.pathname = "/index.html"
            }
        })
    })











