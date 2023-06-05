// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app');
//const { getAnalytics } = require('firebase-admin/analytics');
const { getStorage, uploadBytes, uploadString, getDownloadURL, uploadBytesResumable, deleteObject } = require('firebase-admin/storage');
const { ref } = require('firebase/storage');
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
//const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Need to do google authentication for the bucket
const bucket =  storage.bucket('images');
const metadata = {
  contentType: 'image/jpeg',
};

const uploadFromMemory = async(file, path) => {
  try{
    await storage.bucket('images').file(path).save(file);
    console.log('File uploaded successfully');
  } catch(err) {
    console.log(err);
  }
}

const convertBase64toBlob = (file) => {
  const blob =  new Blob([file], { type: 'image/jpeg' });
  return blob;
}


module.exports = { uploadFromMemory , convertBase64toBlob };
