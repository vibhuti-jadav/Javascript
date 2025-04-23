import fetchapiData from "./fetchapi.js"
import {filt} from "./filter.js"

let url1 =  'https://dummyjson.com/products'
let url2 = 'https://randomuser.me/api?results=5'
let url3 = 'https://www.themealdb.com/api/json/v1/1/categories.php'


export let prodData = await fetchapiData(url1)
console.log(prodData)

let newprodData = filt(prodData.products,"category" , "beauty")
console.log(newprodData)

export let userData = await fetchapiData(url2)
console.log(userData)

let newuserdata = filt(prodData.products,"gender" , "female")
console.log(newuserdata)

export let foodData = await fetchapiData(url3)
console.log(foodData)



