import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAffcpRNo6TNbFtzSoHtA0dd018Zs_dA8s",
  authDomain: "bodylife-bbf37.firebaseapp.com",
  projectId: "bodylife-bbf37",
  storageBucket: "bodylife-bbf37.appspot.com",
  messagingSenderId: "641741772831",
  appId: "1:641741772831:web:cd4a5f84e954b9841add2a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };