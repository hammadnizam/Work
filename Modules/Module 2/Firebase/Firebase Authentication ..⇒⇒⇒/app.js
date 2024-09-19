  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCksBwIKeVXkINnwuU7vcjmZkTnDwLKj-8",
    authDomain: "food-panda-admin-and-ser-b0617.firebaseapp.com",
    projectId: "food-panda-admin-and-ser-b0617",
    storageBucket: "food-panda-admin-and-ser-b0617.appspot.com",
    messagingSenderId: "1013823531327",
    appId: "1:1013823531327:web:f58932dc3f4f23e7678b8a",
    measurementId: "G-QYQKDX4NYP"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  let btn = document.getElementById('btn')
  if(btn){
  btn.addEventListener('click' , ()=>{
      let email = document.getElementById('email')
      let password = document.getElementById('password')

      createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
console.log(error);
  });


    })
  }
  