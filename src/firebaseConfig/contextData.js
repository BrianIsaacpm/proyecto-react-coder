import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
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
    return { id: docRef.id, ...docSnap.data() };
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const getItem = async (id) => {
  try {
    const docSnap = await getDoc(doc(db, "mythcloth", id));
    return { id, ...docSnap.data() };
  } catch (error) {
    console.log('Ocurrió un error en getItem', error);
  }
};

export const setMessageContact = async (state) => {
  try {
    const docRef = await addDoc(collection(db, 'contact'), state);
    console.log('Orders Created with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.log('Ocurrió un error en setOrder', error);
  }
};

export const setOrder = async (state) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), state);
    console.log('Orders Created with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.log('Ocurrió un error en setOrder', error);
  }
};