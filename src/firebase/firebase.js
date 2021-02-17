import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB_LzO_cPoxv5uXPUx_VdVsHKM9WbTn0lo",
  authDomain: "notwitter-b1e9c.firebaseapp.com",
  projectId: "notwitter-b1e9c",
  storageBucket: "notwitter-b1e9c.appspot.com",
  messagingSenderId: "769546520504",
  appId: "1:769546520504:web:7802f06a5bb9745111314d",
  measurementId: "G-L3ZWLM4FNL",
};

const app = firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore(app);

export default firebase;
