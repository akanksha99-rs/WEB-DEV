import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcnd0Ghb34l4WRvKtYUr0lyNeXTzs-sPM",
    authDomain: "resume-builder-b1dec.firebaseapp.com",
    projectId: "resume-builder-b1dec",
    storageBucket: "resume-builder-b1dec.appspot.com",
    messagingSenderId: "990694316149",
    appId: "1:990694316149:web:8864b357f1a4876a2cc03c"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;