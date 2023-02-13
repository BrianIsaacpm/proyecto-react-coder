import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "mythcloth"));
    return snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const getProductsById = async (id) => {
  try {
    const docRef = doc (db, "mythcloth", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};
