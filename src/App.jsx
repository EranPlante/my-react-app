import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>useContext で状態管理</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
