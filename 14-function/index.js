// //simple function declare               

// function data4(){
//     return "this is a simple data";
// }
// console.log(data4());



// //second type function declare
// let data2 =function(){
//     return "this is a second type of declare function"
// }
// console.log(data2());



// //explicit
//  let data1 = ()=> {
//      return  "this is explicit data"
//  }
//  console.log(data1())


//  //implicit
//   let element=10;
//   let data3 =(el)=>10*10 
//   console.log(data3())



//   function take(name){
//     return `this is ${name} wanna take selfy`;
//   }


//   let bigObj ={
//     username:"vibhuti ",
//     email:"vi12@gamil.com",
//     view:take(this.username)
//   }
//   console.log(bigObj.view())



//   let product = {
//     name:"bike",
//     pic:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/53643/perak-right-side-view.jpeg",
//     price:100000,
//     rating:4.2,
//     emi: () =>`<h4>Phone:${this.name}</h4>
//                 <b>price:$ ${this.price}</b>`
//   }
//  console.log(product.emi())

let arr = [1, 2, 3, 4, 5];

const print = (ele) => {
    console.log(ele)
}

arr.forEach(print)

arr.forEach((ele)=> console.log(ele*ele))
