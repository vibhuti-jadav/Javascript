

// main.firstElementChild.setAttribute("class", "box")

// console.log(main)

let head =document.createElement("h3")
console.log(head)


//innertext type
head.innerText ="welcome js"


//textcontent type
// head.textContent="welcome to again js"

//innerhtml
// head.innerHTML="<u>in the javascript</u>"

// main.append(head)

let main =document.getElementById("main")

let btn =document.getElementById("btn")

btn.addEventListener("click",show)

let count= 0

function show(){

    count++;

    let div=document.createElement("div");
    let h4 =document.createElement("h4");
    let button =document.createElement("button")
    let p=document.createElement("p");

    let b=document.createElement("b");


    div.setAttribute("class","box")
    b.setAttribute("class","count")

    p.textContent="lorem ipsume dolor it amet."
    h4.textContent="this is head"
    button.textContent="more";
    b.textContent=count;


    // button.addEventListener("click",function(){
    //     alert("this is count"+b.)
    // })

    div.append(b,h4,p,button)

    main.append(div)
    console.log(main)

}
