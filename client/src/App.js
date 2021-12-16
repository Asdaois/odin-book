import { useEffect } from "react";
import BasicRedux from "./examples/BasicRedux";
import { signInEmail, signUpEmail } from "./firebase/emailAuth.utils";

const App = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="">
      <div className="">Log in to continue</div>
    </div>
  );
};

export default App;
