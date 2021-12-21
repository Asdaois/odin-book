import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser, updateUser } from "./features/user/userSlice";
import { auth } from "./firebase/firebase.utils";
import Router from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged) {
        dispatch(updateUser(userLogged.toJSON()));
        navigate("/")
      } else {
        dispatch(logOutUser());
        navigate("/login")
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Router />;
};

export default App;
