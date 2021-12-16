import { useEffect } from "react";
import SignInPage from "./pages/SignInPage";

const App = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="">
      <div className="">Log in to continue</div>
      <SignInPage />
    </div>
  );
};

export default App;
