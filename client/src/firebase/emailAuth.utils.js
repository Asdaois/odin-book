import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "./firebase.utils";

const auth = getAuth(firebaseApp);

/**
 * @param {{email, password, displayName}} newUser 
 * @returns user
 */
export const signUpEmail = async (newUser) => {
  const { email, password, displayName }= newUser
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName });
    return userCredential.user.toJSON();
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
    return userCredential.user;
  } catch (err) {
    console.log(err);
  }
};
