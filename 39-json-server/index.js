// import dataForm from "./form.js"


let dataFormId = document.getElementById("dataForm")
// dataFormId.innerHTML = dataForm()

let formData = document.getElementById("formData")



const url = "http://localhost:4050/user/"



formData.addEventListener("submit", function(e){
    e.preventDefault()
    
    let obj = {
        id: Math.round(Math.random()*1000),
        name : e.target[0].value,
        age : e.target[1].value,
        pic : e.target[2].value
    }
    postData(obj)
})







async function postData(user) {

let obj = {
    method : "POST",
    body : JSON.stringify(user),
    headers : {
        "Content-Type" : "application/json"
    }
}
    let resp = await fetch(url, obj)
} 




async function fetchData(){
    let res = await fetch(url)
    let data = await res.json()
    showData(data)
}


function showData(data){

 
    data.map((ele) => {
  
        document.getElementById("users").innerHTML += `<div class="col-3">
                <div class="shadow">
                    <div class="card" >
                        <img src=${ele.pic} class="card-img-top rounded-circle" style="height:200px" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${ele.name}</h5>
                          <p class="card-text">Age: ${ele.age}</p>
                          <a  class="btn btn-danger" onclick="deleteUser(${ele.id})">Delete</a>
                          <a  class="btn btn-primary">Update</a>
                        </div>
                      </div>
                </div>
            </div>`
    })



}
fetchData()



async function deleteUser(id){

   const resp = await fetch(url+id, {
         method:"DELETE"
    })
    console.log(resp)
}


async function patchUser(id){
    let user = {
        age : 10
    }
    const resp = await fetch(url+id , {
        method: "PATCH",
        body : JSON.stringify(user)
    })
}

// patchUser(940)


