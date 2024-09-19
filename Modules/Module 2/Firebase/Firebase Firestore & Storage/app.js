 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
 
 import { getStorage ,
     ref ,
     uploadBytes ,
     getDownloadURL 
    } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

 const firebaseConfig = {
    apiKey: "AIzaSyD58veNLALzCU7XYLdf_paXEK18pk9qfzc",
    authDomain: "fir-firestore-upload-img.firebaseapp.com",
    projectId: "fir-firestore-upload-img",
    storageBucket: "fir-firestore-upload-img.appspot.com",
    messagingSenderId: "470240046749",
    appId: "1:470240046749:web:126bb00a604ed5c6392e74",
    measurementId: "G-2BY1E88RMB"
  };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const storage = getStorage(app);
 const storageRef = ref(storage , "file");

 console.log("storage==>" , storage);
 
let file = document.getElementById('file')
let savefile = document.getElementById('savefile')

savefile.addEventListener('click',()=>{
    console.log(file.files[0]);
    const storageRef = ref(storage , file.files[0].name)
    uploadBytes(storageRef, file.files[0])
    .then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef)
  .then((url) => {console.log(url);
  }).catch((err)=>console.log(err));
    })
    .catch((error)=>{
        console.log(error);
        })
});