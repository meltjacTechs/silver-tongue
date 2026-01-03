import { account } from "../lib/appwrite";
import { OAuthProvider } from "appwrite";

const GoogleAuth = () => {
  const loginWithGoogle = () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173/main-menu",
      "http://localhost:5173/signin"
    );
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="mt-4 w-full rounded-lg bg-white py-2 font-semibold text-black hover:bg-gray-200 transition"
    >
      🧙‍♂️ Enter Realm with Google
    </button>
  );
};

export default GoogleAuth;
