import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import styles from "../styles/Login.module.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export default function Login() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkTlPW3Xx0rvHueQ0wgyed8Zn2d4X3PHU",
    authDomain: "awesomeapp-ecc51.firebaseapp.com",
    projectId: "awesomeapp-ecc51",
    storageBucket: "awesomeapp-ecc51.appspot.com",
    messagingSenderId: "625629138706",
    appId: "1:625629138706:web:80cf702ddbeb8152ceadcb",
    measurementId: "G-677NB1P5QR",
  };

  // Initialize Firebase

  initializeApp(firebaseConfig);

  return (
    <Layout>
      <div className={styles.login}>
        <h1>Welcome to Incard</h1>
        <Form />
      </div>
    </Layout>
  );
}
