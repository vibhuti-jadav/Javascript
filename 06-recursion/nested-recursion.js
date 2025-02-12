//nested recursion

function rec(n) {
    if (n > 0) {
        console.log(n);
      rec(rec(n - 1));
   
    }
  }