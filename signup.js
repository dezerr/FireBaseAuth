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
let signUpBtn = document.querySelector("#signUpBtn");

let boxValid = document.querySelector(".valid");
let boxError = document.querySelector(".error");

signUpBtn.addEventListener('click', signUp)

function signUp() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredantial) => {
        boxValid.style.display = "block";
        boxError.style.display = "none";
        let user = userCredantial.user;
        console.log(user);
    })
    .catch((error) => {
        boxError.style.display = "block";
        boxValid.style.display = "none";
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
}