//Tail Recusion


function rec(n){
    if(n>0){
        rec(n-1);
        console.log("tail:-"+n)
    }
}

rec(4);
// function rec1(n) {
//   // 4
//   if (n > 0) {
//     function rec1(n) {
//       // 3
//       if (n > 0) {
//         function rec1(n) {
//           // 2
//           if (n > 0) {
//             function rec1(n) {
//               // 1
//               if (n > 0) {
//                 rec1(n - 1);
//                 console.log(n);
//               }
//             }
//             console.log(n);
//           }
//         }
//         console.log(n);
//       }
//     }

//     console.log(n);
//   }
// }

