// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app');
//const { getAnalytics } = require('firebase-admin/analytics');
const { getStorage, ref, uploadBytes, uploadString, getDownloadURL, uploadBytesResumable, deleteObject } = require('firebase-admin/storage');
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
const metadata = {
  contentType: 'image/jpeg',
};

const createStorageRef = (path, fileName) => {
    const storageRef = ref(storage, path + '/' + fileName);
    return storageRef;
}
const uploadImageBytes = (file, path) => {
  const uploadTask = uploadBytesResumable(createStorageRef(path, file.name), file, metadata);
  
  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      switch(error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
        // ... other errors
      }
    },
    () => {
      // Upload successful
      // Rewrite using async/await
      const downloadURL = getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log('File available at', url);
      });
    })
}
const uploadImageBase64 = (file, path) => {
  const uploadTask = uploadString(createStorageRef(path, file.name), file, 'base64', metadata);
  
  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      switch(error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
        // ... other errors
      }
    },
    () => {
      // Upload successful
      // Rewrite using async/await
      const downloadURL = getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log('File available at', url);
      });
    })
}
const convertBase64toBlob = (file) => {
  const blob =  new Blob([file], { type: 'image/jpeg' });
  return blob;
}

const deleteImage = async(path, fileName) => {
  const deleteRef = ref(storage, path + '/' + fileName);
  try{
    const res = await deleteObject(deleteRef);
    console.log(res);
  } catch(error){
    console.log(error);
  }
}
module.exports = { uploadImageBase64,  uploadImageBytes, convertBase64toBlob, deleteImage };
