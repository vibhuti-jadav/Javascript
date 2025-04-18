
let url=`https://api.api-ninjas.com/v1/covid19?country=canada`


let contryin = document.querySelector("#country")
// let card = document.querySelector("#coronacard")
// let list = document.querySelector("#coronalist")

fetch(`https://api.api-ninjas.com/v1/covid19?country=canada`)
.then((res) =>res.json())
.then((res) =>console.log(res))

contryin.addEventListener("change",function(e){
    let contry =e.target.value
    console.log(contry)

    fetch(`https://api.api-ninjas.com/v1/covid19?country=canada`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
})