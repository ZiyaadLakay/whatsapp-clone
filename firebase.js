import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrpRz7Uk1EZY10p5jSF1U82FnHPH20cU",
  authDomain: "whatsapp-clone-57450.firebaseapp.com",
  projectId: "whatsapp-clone-57450",
  storageBucket: "whatsapp-clone-57450.appspot.com",
  messagingSenderId: "344367095959",
  appId: "1:344367095959:web:6e21a16ce8f67917a189d2",
  measurementId: "G-7EFH92MXLV",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
