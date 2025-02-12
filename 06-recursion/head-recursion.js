//Head-recusion
function rec(n) {
    if (n > 0) {
      console.log("HEAD " + n);
      rec2(n - 1);
    }
  }
rec(4)
// function rec2(n) {
//   // 4
//   if (n > 0) {
//     console.log(n);
//     function rec2(n) {
//       // 3
//       if (n > 0) {
//         console.log(n);
//         function rec2(n) {
//           // 2
//           if (n > 0) {
//             console.log(n);
//             function rec2(n) {
//               // 1
//               if (n > 0) {
//                 console.log(n);
//                 rec2(n - 1);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

