import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
export default firebase.initializeApp({
  apiKey: "AIzaSyBmCgXDeAJsvidWoD25FYOp6Akw6S3Xr9Y",
  authDomain: "login-6b015.firebaseapp.com",
  projectId: "login-6b015"
});

/* firebase
  .auth()
  .createUserWithEmailAndPassword("asdas@saddsa.com", "1231241231")
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  }); */
