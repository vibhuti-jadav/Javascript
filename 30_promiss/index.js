
let promissOne = new Promise(function(resovle,reject){
    setTimeout(()=>{
        console.log("this is promiss problem")
        let obj = {username:"vibhuti",pass:"2345"}
        resovle(obj)
    },1000)
})


let firsthen = promissOne.then(function(user){
    return user.username
})


firsthen.then(function(user){
    console.log(user)
})


new Promise(function(resovle,reject){
        settimeout(()=>{
            console.log("this is promiss problem")
            let obj = {username:"vibhuti",pass:"2345"}
            let error = truw;
            if(error){
                reject()
            }
            else{
                resovle(obj)
            }
        },1000)
})
.then(function(user){
    return user.username
})
.then(function(user){
    console.log(user)
})
.catch(function(){
    console.log("somthing wnet wrong....!")
})


//data resolved

fetch('https://fakestoreapi.com/products')
.then(function(response){
  return response.json()
})
.then(function(res){
    return res[1]
})
.then(function(data){
    return data.title
})
.then(function(t){
    console.log(t)
})

// data rejected

fetch('https://fakestoreapi.com/prodcts')
.then(function(response){
  return response.json()
})
.then(function(res){
    console.log(res)
})
.catch(function(){
    console.log("something went wrong in api..!")
})





// showing data

fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((res)=> showData(res))
.catch(() =>{
    console.log("something went wrong in api..!")
     document.querySelector("body").innerHTML = `<img width="400px" src="https://assets-v2.lottiefiles.com/a/2dc6d558-116e-11ee-953b-931490fdba6c/hACFajsXgi.gif" /> <h3>something went wrong in api..!</h3>`
})
.finally



function showData(data){
    document.querySelector("body").innerHTML = ""
    
    data.map((ele)=>{
        
        document.querySelector("body").innerHTML += `<img width="50px" src=${ele.image} /> <h3>${ele.title}</h3>`
    })

}


