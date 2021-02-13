import firebase from "firebase"

let config = {
    apiKey: "AIzaSyCkMubrTl4EqLw2RVf-orff4HioIe-cVIg",
    authDomain: "gdhq-portal.firebaseapp.com",
    databaseURL: "https://gdhq-portal-default-rtdb.firebaseio.com/",
    // projectId: "gdhq-portal",
    // storageBucket: "gdhq-portal.appspot.com",
    // messagingSenderId: "XXXX"
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider()

export default firebase

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider).then((res) => {
    console.log("User data: " + res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}