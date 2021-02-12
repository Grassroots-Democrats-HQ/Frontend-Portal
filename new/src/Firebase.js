import firebase from "firebase"

let config = {
    apiKey: "AIzaSyCkMubrTl4EqLw2RVf-orff4HioIe-cVIg",
    authDomain: "gdhq-portal.firebaseapp.com",
    // databaseURL: "XXXXX",
    // projectId: "XXXXX",
    // storageBucket: "XXXX",
    // messagingSenderId: "XXXX"
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider()

export default firebase

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
