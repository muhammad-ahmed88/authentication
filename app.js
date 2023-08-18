  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import {app,auth}from "./firebase.js";
  import {createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

//   const firebaseConfig = {
//       apiKey: "AIzaSyCJ8xY_kemEVU8T5bqbiZRMOcR_9CmCdVI",
//       authDomain: "authentication-page-d8c5e.firebaseapp.com",
//       projectId: "authentication-page-d8c5e",
//       storageBucket: "authentication-page-d8c5e.appspot.com",
//     messagingSenderId: "132394024466",
//     appId: "1:132394024466:web:d260f74f7ef800d66a62cb",
//     measurementId: "G-6QEE0E57EK"
// };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();

let signUpBtn =document.querySelectorAll(".signup-btn")[0];
let name = document.querySelectorAll("#f-name")[0];
let email = document.querySelectorAll("#email")[0];
let password = document.querySelectorAll("#password")[0];



function register(){
  createUserWithEmailAndPassword(auth, email.value, password.value , name.value )
  .then((userCredential) => { 
    const user = userCredential.user;
    window.open("login.html");
   
    console.log(user) 
  })
  .catch((error) => {

    const errorMessage = error.message;
    console.log(errorMessage)
    
  });
}


window.register = register;

let verification = document.querySelectorAll(".verification")[0];
let mainShow = document.querySelectorAll(".main-show")[0];
let main = document.querySelectorAll('.main')[0];
let showMail = document.querySelectorAll(".email-show")[0];
let loginBtn = document.querySelectorAll("#login-btn")[0];
let loginEmail = document.querySelectorAll("#email")[0];
let loginPassword = document.querySelectorAll("#password")[0];
let verifyBtn = document.querySelectorAll(".verify-btn")[0];

function approve(){
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.open("about.html");

  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Rigester First',
    })
    
  });
}


window.approve = approve;


function sendVerification (){
  sendEmailVerification(auth.currentUser)
  .then(() => {
  
  
  
  });
  
}

window.sendVerification = sendVerification;
let signInbtn = document.querySelectorAll(".signin-btn")[0];
const signIn =()=>{
 window.open("login.html") ;
}
window.signIn = signIn;