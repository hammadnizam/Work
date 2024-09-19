import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , 
    onAuthStateChanged ,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword 
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 const firebaseConfig = {
  apiKey: "AIzaSyBBGvSsZQSmUQsddqo23AmCvVR3lAzZpV0",
  authDomain: "food-80054.firebaseapp.com",
  projectId: "food-80054",
  storageBucket: "food-80054.appspot.com",
  messagingSenderId: "437719191852",
  appId: "1:437719191852:web:7b70d5e54fe64a58851c89",
  measurementId: "G-XGCVQWBG64"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("auth===>>",auth);

// SIGN UP FORM CODE. 

let email = document.getElementById('email')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
if(btn){
btn.addEventListener('click', createUserAccount)
}

// SIGN IN FORM CODE.

let lEmail = document.getElementById('lEmail')
let lpass = document.getElementById('lpassword')
let lbtn = document.getElementById('lbtn')
if(lbtn){
lbtn.addEventListener('click' , signinuser)
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is logged in");
        
         const uid = user.uid;
    } else {
      console.log("user is not logged in");    
    }
  });


// SIGN UP FORM CODE FUNCTION.

function createUserAccount(){
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
location.href = 'dashboard.html'    
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "email & password wrong!",
         footer: '<a href="index.html">Why do I have this issue?</a>'
        });
    });
}

// SIGN IN FORM CODE FUNCTION.

function signinuser(){
    signInWithEmailAndPassword(auth, lEmail.value, lpass.value)
  .then((userCredential) => {
      const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "email & password wrong!",
        footer: '<a href="index.html">Why do I have this issue?</a>'
      });
  });
}










































































// let btn = document.getElementById('btn')
// if (btn) {
//     btn.addEventListener('click' , ()=>{
//     let email = document.getElementById('email')
//     let password = document.getElementById('password')
//     if (email.value == 'stylo' , password.value == 'stylo') {
//         location.href = 'dashboard.html'
//     }
//     else{
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "email & password wrong!",
//             footer: '<a href="index.html">Why do I have this issue?</a>'
//           });
//     }

//     })
// }

// let lbtn = document.getElementById('lbtn')
// if(lbtn){
//     lbtn.addEventListener('click' , ()=>{
//         let lEmail = document.getElementById('lEmail')
//         let lpass = document.getElementById('lpassword')
//         if(lEmail.value == 'stylo' && lpass.value == 'stylo'){
//             location.href = 'dashboard.html'

//         }
//         else{
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Email & Password wrong!",
//                 footer: '<a href="index.html">Why do I have this issue?</a>'
//               });
//         }
// })
// }


