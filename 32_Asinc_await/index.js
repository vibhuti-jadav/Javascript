
// let url = 'https://fakestoreapi.com/products'
let url='https://dog.ceo/api/breeds/image/random'

//promisses

// function callApi(){
//     fetch(url)
//     .then((res)=> res.json())
//     .then((res)=>{
//         console.log(res)
//         showData(res)
//     })

//     .catch(()=>{
//         console.log("somthing went wrong")
//     })
// }


//ASYNC AWAIT

getData()

function getData(){
    try{
        let res =fetch(url)
        let data = res.json()

        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

function showData(data){

}