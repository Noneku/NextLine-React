import { AuthProvider } from "./components/Context/AuthContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;
