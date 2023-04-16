// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider ,FacebookAuthProvider} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaKDV75-uA-h9LJRonUbO6MckqZu7ywQE",
    authDomain: "foodproj-97360.firebaseapp.com",
    projectId: "foodproj-97360",
    storageBucket: "foodproj-97360.appspot.com",
    messagingSenderId: "92426773204",
    appId: "1:92426773204:web:5d0318668cee7ed0ccd141"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const providerr = new FacebookAuthProvider();

export const provider = new GoogleAuthProvider();

