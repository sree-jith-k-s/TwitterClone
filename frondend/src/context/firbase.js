
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTgJzSQijJli42tizxpEpGHJUN7dxd6ZQ",
  authDomain: "twitter-f7ae4.firebaseapp.com",
  projectId: "twitter-f7ae4",
  storageBucket: "twitter-f7ae4.firebasestorage.app",
  messagingSenderId: "382441073920",
  appId: "1:382441073920:web:93beb646034ed33ca197e5",
  measurementId: "G-JMRT5GR4QX"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);
