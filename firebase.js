import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"
import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyCJ8xY_kemEVU8T5bqbiZRMOcR_9CmCdVI",
    authDomain: "authentication-page-d8c5e.firebaseapp.com",
    projectId: "authentication-page-d8c5e",
    storageBucket: "authentication-page-d8c5e.appspot.com",
  messagingSenderId: "132394024466",
  appId: "1:132394024466:web:d260f74f7ef800d66a62cb",
  measurementId: "G-6QEE0E57EK"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export {app,auth};