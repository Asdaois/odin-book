import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userApi } from "./api/usersApi";
import { logOutUser, updateUser } from "./features/user/userSlice";
import { auth } from "./firebase/firebase.utils";
import Router from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (userLogged) => {
      if (userLogged) {
        const user = await userApi.getByUid(userLogged.uid);
        console.log(user)
        dispatch(updateUser(user));
        navigate("/")
      } else {
        navigate("/login")
        dispatch(logOutUser());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Router />;
};

export default App;
