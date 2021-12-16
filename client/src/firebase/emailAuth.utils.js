import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "./firebase.utils";

const auth = getAuth(firebaseApp);

export const signUpEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName });
    return { email, displayName };
  } catch (err) {
    console.log(err);
  }
};

export const signInEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return (await userCredential).user;
  } catch (err) {
    console.log(err);
  }
};
