import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth
  , GoogleAuthProvider,
  signInWithPopup,


} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzakGR3KqppUoLRKXPY3Y7qMrUZuwi_TA",
  authDomain: "auth-96aab.firebaseapp.com",
  projectId: "auth-96aab",
  storageBucket: "auth-96aab.appspot.com",
  messagingSenderId: "540891532050",
  appId: "1:540891532050:web:977837b4dd3be45a9081cb",
  measurementId: "G-59D6LTF4JS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
const provider = new GoogleAuthProvider(app);

const continuewithgoogle = document.getElementById('GOOGLE')
if (continuewithgoogle) {
  continuewithgoogle.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  })
}