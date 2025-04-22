
 // ----------------------------defualt paramiterized--------------------------------//

// function def(n = 1){ //1 is default paramiterized

//         return n*n
// }
// // console.log(def(2))
// console.log(def())


// function def(name="user", message="hello",money =0){
//     console.log(message + ", "+ name + " your left " + "₹." + money )
// }
// def("vibhuti","welcome",1200)
// def("ishaa","hii",2000)



// -------------------------------------splice--------------------------------------//

// let arr=[1,2,3,4,5]     //The splice() method adds and/or removes array elements.
// let newArr =arr.splice(1,2) //(start from array (2), number of element (2,3) )
// console.log(newArr) //splice(start, deleteCount)


// -------------------------------------replace--------------------------------------//

// let arr =[ "a" , "b" , "c" , "d" ]  //( replace of a a to x)
// // arr[0]="x"  
 

// //  arr.splice(1,3) 
 
//  console.log(arr.splice(1,3))


// -------------------------------------slice--------------------------------------//

// let arr = [1 , 2 , 3 , 4] //array.slice(start, end)

// console.log(arr.slice(0,3))


// -------------------------------------flat--------------------------------------//

//  let arr = [ [1, 2] , [3, 4] , [5, 6] , [7, 8] , 9] //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] -output

// let newArr =arr.flat()

// let chunk =[]

// for(let i=0;i<newArr.length;i=i+3){
//         let sub =[]
//         for(let j=i; j<i+3;j++){
//             sub.push(newArr[j])
//         }
//         chunk.push(sub)
// }

// console.log(chunk)

// for(let i=0;i<newArr.lenght;i++)
// {
//     chunk.push(newArr.splice(0,3))
// }

//  console.log(chunk)



// -------------------------------------concate--------------------------------------//

// // let arr = [ 1, 2, 3]
// let arr2 = [ 4, 5, 6]
// let arr3 = [ 7, 8, 9 ]

// // let big = arr.concat(arr2, arr3)

// let big = [...arr, ...arr2, ...arr3]



// console.log(big)


// function rest(...name){

//     console.log(name)

//     let [...re] = name;

//     console.log(...re)
// }

// let arr = []
// rest("hitisha", "vibhuti", "aara", "vaishali")



// -------------------------------------rest-oprator--------------------------------------//


// let obj = {
//     name: "vibhuti",
//     age : 20, 
//     marks : 90,
//     city : "bhavnagar",
//     country : "India",
//     pin : 1234,
//     nums : [1, 2, 3, 4]
// }


// for(let key in obj)
// {
//     console.log( key + " : " +obj[key])
// }

// let name = "lorem2"
// for(let val of name)
// {
//     console.log(val)
// }
