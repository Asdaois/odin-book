import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "./features/user/userSlice";
import { auth } from "./firebase/firebase.utils";
import SignInPage from "./pages/SignInPage";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged) {
        dispatch(updateUser(userLogged.toJSON()))
      }
    })
  }, [])
  console.log(user)
  if (user.status === "pending" || user.status === "failed") {
    return (
      <div className="">
        <SignInPage />
      </div>
    );
  }

  if (user.status === "success") {
    return (
      <div className="">{user.current.displayName} This is the init page</div>
    );
  }
};

export default App;
