import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCfACs1DQHJUsJIznkmHHQ-rx4oaz5O4mY",
  authDomain: "clone-504ae.firebaseapp.com",
  projectId: "clone-504ae",
  storageBucket: "clone-504ae.appspot.com",
  messagingSenderId: "257382946961",
  appId: "1:257382946961:web:bdeffeb70e3558dbb08730",
  measurementId: "G-NN842TEHR5",
});
const auth = firebase.auth();

export { auth };
