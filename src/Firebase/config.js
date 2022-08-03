// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLa3vEVUcIHOeI7UiljQbk_Gx5glTcfA",
  authDomain: "ui-tasks.firebaseapp.com",
  projectId: "ui-tasks",
  storageBucket: "ui-tasks.appspot.com",
  messagingSenderId: "292252202160",
  appId: "1:292252202160:web:3114262d8421cc72273775",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
