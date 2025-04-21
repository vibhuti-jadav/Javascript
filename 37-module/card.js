function card(img,title,price,country){
    return `
    <div class="card" >
        <img src="${img}" class="card-img-top" height="300px" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            ${price ? `<p class="card-text">${price}</p>` : ''} 
        ${country ? `<h5 class="card-title">${country}</h5>` : ''}  
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `
}

export default card