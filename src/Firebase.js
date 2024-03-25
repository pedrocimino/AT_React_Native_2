import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtM1nGG2AZldjBqvyVVPSYhIDsr3P48tc",
  authDomain: "dfe-dmrn-24t1-m1l.firebaseapp.com",
  databaseURL: "https://dfe-dmrn-24t1-m1l-default-rtdb.firebaseio.com",
  projectId: "dfe-dmrn-24t1-m1l",
  storageBucket: "dfe-dmrn-24t1-m1l.appspot.com",
  messagingSenderId: "778629298753",
  appId: "1:778629298753:web:e1c6a47ae54114b169e4c0"
};

const app = initializeApp(firebaseConfig);

export default app;