import { useSelector } from "react-redux";
import SignInPage from "./pages/SignInPage";

const App = () => {
  const user = useSelector((state) => state.user);

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
