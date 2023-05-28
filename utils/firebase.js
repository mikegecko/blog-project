// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-project-f95a6.firebaseapp.com",
  projectId: "blog-project-f95a6",
  storageBucket: "blog-project-f95a6.appspot.com",
  messagingSenderId: "135984068100",
  appId: "1:135984068100:web:210fde080008cd90eda751",
  measurementId: "G-DPFNP4ZK7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const createStorageRef = (path) => {
    const storageRef = ref(storage, path);
    return storageRef;
}
const uploadImage = (file, path) => {

    
}