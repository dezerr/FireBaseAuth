var firebaseConfig = {
    apiKey: "AIzaSyBPw9-QM00yoqqF6_VbDR3rshrG6413Fos",
    authDomain: "workflowl.firebaseapp.com",
    projectId: "workflowl",
    storageBucket: "workflowl.appspot.com",
    messagingSenderId: "748956338351",
    appId: "1:748956338351:web:2bb1bb9499332c60e8ac5a",
    measurementId: "G-K82P727J3D"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signInBtn = document.querySelector("#signInBtn");
let signOutBtn = document.querySelectorAll("#signOutBtn");

let boxValid = document.querySelector(".valid");
let boxError = document.querySelector(".error");
let boxDeco = document.querySelector(".deco");


signInBtn.addEventListener('click', signIn);
signOutBtn[0].addEventListener('click', logoutUser);

function signIn() {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredantial) => {
        boxValid.style.display = "block";
        boxError.style.display = "none";
        boxDeco.style.display = "none";
        let user = userCredantial.user;

        console.log(user);
        console.log("Vous êtes bien connecté");
    })
    .catch((error) => {
        boxValid.style.display = "none";
        boxError.style.display = "block";
        boxDeco.style.display = "none";
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode, errorMessage);
        console.log("Une erreur s'est produite")
    })
}

function logoutUser() {
    firebase.auth().signOut().then(() => {
        console.log("Vous êtes bien déconnecté");
        boxValid.style.display = "none";
        boxError.style.display = "none";
        boxDeco.style.display = "block";
    }).catch(error => {
        console.log(error);
    })
}