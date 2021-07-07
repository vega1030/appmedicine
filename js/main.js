//Botonera 

let btnName = document.querySelector('#btnName')
let glucemiaSi = document.querySelector('#glucemiaSi')
let glucemiaNo = document.querySelector('#glucemiaNo')
let presionSi = document.querySelector('#presionSi')
let presionNo = document.querySelector('#presionNo')
let medicamentosSi = document.querySelector('#medicamentosSi')
let medicamentosNo = document.querySelector('#medicamentosNo')
let select = document.querySelector('#select')
let accept = document.querySelector('#accept')
//Input
let input = document.querySelector('#enterName')

select.disabled = true


//listener glucemia
glucemiaSi.addEventListener("click", () => {
    glucemiaSi = true
    localStorage.setItem("glucemiatrue", glucemiaSi)
    console.log(localStorage.getItem("glucemiatrue"))

})
glucemiaNo.addEventListener("click", () => {
    glucemiaNo = false
    localStorage.setItem("glucemiano", glucemiaNo)
    console.log(localStorage.getItem("glucemiano"))
})

//Listener presion
presionSi.addEventListener("click", () => {
    presionSi = true
    localStorage.setItem("presiontrue", presionSi)
    console.log(localStorage.getItem("presiontrue"))
})
presionNo.addEventListener("click", () => {
    presionNo = false
    localStorage.setItem("presionfalse", presionNo)
    console.log(localStorage.getItem("presionfalse"))

})

//listener medicamentos
medicamentosSi.addEventListener("click", () => {
    medicamentosSi = "true"
    localStorage.setItem("medicinetrue", medicamentosSi)
    console.log(localStorage.getItem("medicinetrue"))
    select.disabled = false;
})

medicamentosNo.addEventListener("click", () => {
    medicamentosNo = "false"
    localStorage.setItem("medicinefalse", medicamentosNo)
    console.log(localStorage.getItem("medicinefalse"))
    select.disabled = true
})

//listener
let clear = document.querySelector('#clearStorage')

clear.addEventListener("click", () => {
    localStorage.clear()
})

//"change" listen option value
select.addEventListener('change', () => {
    let medicine = select.value;
    localStorage.setItem("medicine", medicine)
    console.log(localStorage.getItem("medicine"))
})
let contentRecord = document.querySelector('.historytracks')

if (localStorage.getItem('reporteSemanal') === null) {
    accept.addEventListener('click', () => {


        let name = input.value

        localStorage.setItem("User", name)

        //validation form input

        let validate = localStorage.getItem("medicinetrue")

        if (name === "") {
            alert('Debes colocar tu nombre')
            window.location.pathname = "/index.html"
        } else {
            if (validate === "true") {
                alert('estas en lista medicamentos')
                //chequear redireccion en el deploy
                window.location.pathname = "/listamedicacion.html"
            }
            else {
                alert('estas en lista trackeo')
                //chequear redireccion en el deploy
                window.location.pathname = "/listadetrackeo.html"
            }
        }
    })
}
else {
    function Info(presion, glucemia, medicamentos, colores, nombreMedicamentos) {

        this.dia1 = {
            'presion': presion,
            'glucemia': glucemia

        };
        this.writeHtml = (presion, glucemia) => {
            let info = []
            info.push(presion, glucemia)
            let tagTitle = document.createElement('h4')
            tagTitle.innerHTML = 'Dia ' + info
            let tagH4 = contentRecord.appendChild(tagTitle)
            return tagH4
        }
        let trackInfoPresion = localStorage.getItem("reporteSemanalPresion")
        let trackInfoGlucemia = localStorage.getItem("reporteSemanalGlucemia")
        // console.log(trackInfoPresion)
        // console.log(trackInfoGlucemia)
        // let info = []
        // info.push(trackInfoPresion, trackInfoGlucemia)
        // console.log(info)
        // let tagTitle = document.createElement('h4')
        // tagTitle.innerHTML = 'Dia ' + info
        // let tagH4 = contentRecord.appendChild(tagTitle)
        // console.log(tagH4)

        let infoDia1 = new Info(trackInfoPresion, trackInfoGlucemia)
        console.log(infoDia1)
    }
}
//function filter
    //parse of string to json




    // for (i = 0; i < trackInfo.length; i++) {

    //     let { dia1 } = trackInfo



    //     console.log(tagH4)
    // }


