import { useContext } from "react";
import UserContext from "../Context/UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>ユーザー情報</h2>
      <p>名前: {user.name}</p>
      <p>ログイン状態: {user.loggedIn ? "ログイン中" : "未ログイン"}</p>
      <button onClick={() => setUser({ name: "太郎", loggedIn: true })}>
        ログイン
      </button>
    </div>
  );
}

export default UserProfile;
