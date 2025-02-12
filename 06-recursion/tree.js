//tree recursion
function treerec(n){
    if(n>0)
        {
            console.log("tree " + n);
            treerec(n-1)
            treerec(n-1)
        }
     }


     function treerec(n){
        if(n>0)
            {
                console.log(n)
                treerec(n-1)
                treerec(n-1)
            }
     }



treerec(4)