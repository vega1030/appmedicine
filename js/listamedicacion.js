
//Algorithm user name
let nameContent = document.querySelector('#nameUser')
let nameUser = document.querySelector('#userChild')
let nameStorage = document.createTextNode("Ingresa tus remedios " + localStorage.getItem("User"))
nameUser.appendChild(nameStorage)
console.log(nameUser.appendChild(nameStorage))

//parse string to int 
let parseMedicine = (parseInt(localStorage.getItem("medicine")))
console.log(parseMedicine)
//
//Iterator list medicine

for (i = 0; i < parseMedicine; i++) {
    let a = 1 + i;
    let fatherContent = document.querySelector('#fatherContent')
    // let contentMedicine = document.querySelector('#medicineContent')
    // let h3Medicine = document.querySelector('#interatorMedicine')
    let numberMedicine = "Medicacion " + a
    // let model = fatherContent.appendChild(contentMedicine)
    // console.log(model)

    let model = `
    <div class="row text-center" id="fatherContent${a}">
        <div class="col content-input" id="medicineContent${a}">
            <h3 class="number-medicine" id="interatorMedicine${a}">${numberMedicine}<label for=""></label>
            <input type="color" name="" id="color${a}"> </h3>
            <input class="form-control input-medicacion align-items-center" type="text"
            placeholder="Ingresa medicacion" id="inputMedicine${a}"> 
        </div>
    </div>
`
    fatherContent.innerHTML += model

}
//hacer el addEventListener dinamico

//LocalStorage para no volver al inicio

let buttonMedicine = document.querySelector('#acceptMedicine')
//Set of color and inputs medicine



buttonMedicine.addEventListener('click', () => {
    let medicamentosSi = true

    localStorage.setItem("medicinetrue", medicamentosSi)

    //selectors
    let colorId1 = document.querySelector('#color1')
    let medicineId1 = document.querySelector('#inputMedicine1').value
    let colorId2 = document.querySelector('#color2')

    if (parseMedicine === 1) {
        let medicineId1 = document.querySelector('#inputMedicine1').value

        //color 1
        let color1 = colorId1.value
        localStorage.setItem("color1", color1)

        //input 1
        localStorage.setItem("medicine1", medicineId1)
        alert('una medicacion')
    }
    else if (parseMedicine === 2) {
        let medicineId1 = document.querySelector('#inputMedicine1').value
        let medicineId2 = document.querySelector('#inputMedicine2').value
        //color 1
        let color1 = colorId1.value
        localStorage.setItem("color1", color1)
        //color 2
        let color2 = colorId2.value
        localStorage.setItem("color2", color2)
        //input 1
        localStorage.setItem("medicine1", medicineId1)
        console.log(color2)

        //input2
        localStorage.setItem("medicine2", medicineId2)
        console.log(localStorage.getItem("medicine"))
        alert('2 medicacion')

    }
    else if (parseMedicine === 3) {
        let medicineId1 = document.querySelector('#inputMedicine1').value
        let medicineId2 = document.querySelector('#inputMedicine2').value
        let medicineId3 = document.querySelector('#inputMedicine3').value

        //color1
        let color1 = colorId1.value
        localStorage.setItem("color1", color1)

        //input 1
        localStorage.setItem("medicine1", medicineId1)

        //color2
        let colorId2 = document.querySelector('#color2')
        let color2 = colorId2.value
        localStorage.setItem("color2", color2)

        //input2
        localStorage.setItem("medicine2", medicineId2)

        //color 3
        let colorId3 = document.querySelector('#color3')
        let color3 = colorId3.value
        localStorage.setItem("color3", color3)

        //input 3
        localStorage.setItem("medicine3", medicineId3)


    }
    window.location.href = "http://127.0.0.1:5500/public/listadetrackeo.html"

})

    // //color 2
    // let color2 = colorId2.value
    // localStorage.setItem("color2", color2)
    // console.log(color2)
    // //input2

    // localStorage.setItem("medicine2", medicineId2)

    // //color 3
    // let colorId3 = document.querySelector('#color3')
    // let color3 = colorId3.value
    // localStorage.setItem("color3", color3)
    // console.log(color3)

    // //input 3
    // let medicineId3 = document.querySelector('#inputMedicine3').value
    // localStorage.setItem("medicine3", medicineId3)

    // //color 4
    // let colorId4 = document.querySelector('#color4')
    // let color4 = colorId4.value
    // localStorage.setItem("color4", color4)
    // console.log(color4)

    // //input 4
    // let medicineId4 = document.querySelector('#inputMedicine4').value
    // localStorage.setItem("medicine4", medicineId4)

    // //color 5
    // let colorId5 = document.querySelector('#color5')
    // let color5 = colorId5.value
    // localStorage.setItem("color5", color5)
    // console.log(color5)

    // //Input 5
    // let medicineId5 = document.querySelector('#inputMedicine5').value
    // localStorage.setItem("medicine5", medicineId5)

    // //color 6
    // let colorId6 = document.querySelector('#color6')
    // let color6 = colorId6.value
    // localStorage.setItem("color6", color6)
    // console.log(color6)

    // //Input 6
    // let medicineId6 = document.querySelector('#inputMedicine6').value
    // localStorage.setItem("medicine6", medicineId6)

    // //color 7
    // let colorId7 = document.querySelector('#color7')
    // let color7 = colorId7.value
    // localStorage.setItem("color7", color7)
    // console.log(color7)

    // //Input 7
    // let medicineId7 = document.querySelector('#inputMedicine7').value
    // localStorage.setItem("medicine7", medicineId7)
// colorId1.addEventListener('change', () => {
//     let color1 = colorId1.value
//     console.log(color1)
// })
// let colorId2 = document.querySelector('#color2')
// colorId2.addEventListener('change', () => {
//     let color2 = colorId2.value
//     console.log(color2)
// })
// let colorId3 = document.querySelector('#color3')
// colorId3.addEventListener('change', () => {
//     let color3 = colorId3.value
//     console.log(color3)
// })
// let colorId4 = document.querySelector('#color4')
// colorId4.addEventListener('change', () => {
//     let color4 = colorId4.value
//     console.log(color4)
// })
// let colorId5 = document.querySelector('#color5')
// colorId5.addEventListener('change', () => {
//     let color5 = colorId5.value
//     console.log(color5)
// })
// let colorId6 = document.querySelector('#color6')
// colorId6.addEventListener('change', () => {
//     let color6 = colorId6.value
//     console.log(color6)
// })
// let colorId7 = document.querySelector('#color7')
// colorId7.addEventListener('change', () => {
//     let color7 = colorId7.value
//     console.log(color7)
// })
