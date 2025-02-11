//lexical scope

function outer()
{
    let name = "fsd"

    function inner(){
        console.log(name)
  
    }

   return inner(name);
}





function main(n){
    console.log("again");

  return submain(n);
}


function submain(n){
    return "submain gain " + n
}

let num = 20;
let fun =  main(num);

console.log(fun)
