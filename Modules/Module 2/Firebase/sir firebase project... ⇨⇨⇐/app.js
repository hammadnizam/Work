
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXY5nZjjW9rx9XZ4G1OjQ6YXTtr2siqYg",
  authDomain: "practice-4b3f2.firebaseapp.com",
  projectId: "practice-4b3f2",
  storageBucket: "practice-4b3f2.appspot.com",
  messagingSenderId: "1078261343174",
  appId: "1:1078261343174:web:33e846d5ba7a48314208c7",
  measurementId: "G-80QHQP1LK4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

let getBtn = document.getElementById("btn");
if (getBtn) {
  getBtn.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "admin" && password.value == "admin") {
      location.href = "admindashboard.html";
    } else {
      location.href = "userdashboard.html";
    }
  });
}

let addBtn = document.getElementById("addBtn");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    let pimg = document.getElementById("img");

    const file = pimg.files[0];
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            card.innerHTML = ''

          console.log("File available at", downloadURL);
          let pid = document.getElementById("id");
          let pname = document.getElementById("name");
          let pprice = document.getElementById("price");

          const docRef = await addDoc(collection(db, "Items"), {
            id: pid.value,
            name: pname.value,
            price: pprice.value,
            img: downloadURL,
          });
          console.log("Document written with ID: ", docRef.id);
          fetchData();
        });
      }
    );
  });
}

let card = document.getElementById("card");
async function fetchData() {
  const q = collection(db, "Items");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    card.innerHTML += `<div class="card m-5 p-3" style="width: 18rem;">
  <img src=${doc.data().img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">ID: ${doc.data().id}</h5>
    <h3 class="card-text">NAME: ${doc.data().name}</h3>
    <h3 class="card-text">PRICE: ${doc.data().price}</h3>
    <button class='btn btn-info'> EDIT </button>
    <button class='btn btn-danger' onclick='delItem("${doc.id}")'> DELETE </button>
  </div>
</div>`;
  });
}

fetchData();


async function delItem(id){
    card.innerHTML = ''
    console.log(id)
    await deleteDoc(doc(db, "Items", id));
    fetchData()
}

window.delItem = delItem
