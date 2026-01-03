import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/main-menu" element={<MainMenu />} />
    </Routes>
  );
}

export default App;
