import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsM8ZqO1jGaD7Tf84-Tu67x_ztF3LJEUQ",
    authDomain: "starbucks-clone-5aa8a.firebaseapp.com",
    projectId: "starbucks-clone-5aa8a",
    storageBucket: "starbucks-clone-5aa8a.appspot.com",
    messagingSenderId: "43660523397",
    appId: "1:43660523397:web:0bb8af5ef19f70b02476ec",
    measurementId: "G-60EETNYHD0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()
  
  export { auth }