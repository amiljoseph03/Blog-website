// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {getFirestore } from "firebase/firestore"
import {getAuth } from 'firebase/auth'
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyDZRYF1n6I-4r-Y_NIN5QInjQVvAm8QZPo',
  authDomain: 'blog-website-29d63.firebaseapp.com',
  projectId: 'blog-website-29d63',
  storageBucket: 'blog-website-29d63.firebasestorage.app',
  messagingSenderId: '141546043440',
  appId: '1:141546043440:web:cc06404d86a59b05af95f5',
  measurementId: 'G-TWRCDVXPRD',


  // .......... realtime database 
  databaseURL:'https://blog-website-29d63-default-rtdb.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDb = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {fireDb,auth,storage}
export const database = getDatabase(app);
