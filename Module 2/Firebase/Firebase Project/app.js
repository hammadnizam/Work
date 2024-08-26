import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore , collection, addDoc , getDocs , doc, deleteDoc , updateDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNANvVThGKWHGyoLwmV2RoZ07xTFqVZ50",
  authDomain: "fir-project-962c8.firebaseapp.com",
  projectId: "fir-project-962c8",
  storageBucket: "fir-project-962c8.appspot.com",
  messagingSenderId: "531482210320",
  appId: "1:531482210320:web:50e34e9917f93297511a95",
  measurementId: "G-FLWCQWG8DW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);





let getbtn = document.getElementById('btn')
if (getbtn) {
    getbtn.addEventListener('click' , ()=>{
        let email = document.getElementById('email')
        let password = document.getElementById('password')
if (email.value == 'stylo' && password.value == 'stylo') {
    location.href = 'admindashboard.html'
}
else{
    location.href = 'userdashboard.html'
}
    })
}





let addbtn = document.getElementById('addbtn')
if (addbtn) {
    addbtn.addEventListener('click' , ()=>{
        let pimg = document.getElementById('pimg')
        // TaskSnapshot
        // console.log("pimg ======>>>>>",pimg.files[0]);
        const file = pimg.files[0]
        const storageRef = ref(storage, `products/${file.name}`);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error);
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
      
let pid = document.getElementById('pid')
let pname = document.getElementById('pname')
let pprice = document.getElementById('pprice')
const docRef = await addDoc(collection(db, "project"), {
    id: pid.value,
    name: pname.value,
    price: pprice.value,
    img: downloadURL,
      
  });
  console.log("Document written with ID: ", docRef.id);
  fetchdata()
  

    });
  }
);

    })
}


let card = document.getElementById('card')
async function fetchdata() {
    const q = collection(db, "project")

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    card.innerHTML = `<div class="card m-5 p-3" style="width: 18rem;">
  <img src=${doc.data().img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">ID: ${doc.data().id}</h5>
    <h3 class="card-text">NAME: ${doc.data().name}</h3>
    <h3 class="card-text">PRICE: ${doc.data().price}</h3>
    <button class='btn btn-info' onclicl='editbtn("${doc.id}")'> EDIT </button>
    <button class='btn btn-danger' onclick='delItem("${doc.id}")'> DELETE </button>
  </div>
</div>`
  // doc.data() is never undefined for query doc snapshots


});

}
fetchdata()

async function delItem(id) {
    card.innerHTML = ''
    console.log(id);
    await deleteDoc(doc(db, "project", id));
fetchdata()
}

// async function editbtn(id) {
    
//     // card.innerHTML = ''
//     console.log(id);
    
// const washingtonRef = doc(db, "project", id);
// let pro = prompt('Enter updated value')
    
// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   name: pro

// });
// // fetchdata()

// }

window.delItem = delItem;
// window.editbtn = editbtn;


let logoutbtn = document.getElementById('logoutbtn')
if(logoutbtn){
    logoutbtn.addEventListener('click' , ()=>{
        location.href = 'signup.html'
    })
}