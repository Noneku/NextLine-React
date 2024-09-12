import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TraineeInfoList from "./components/Pages/Formateur/TraineeInfoList";
import ReceivedFormsList from "./components/Pages/Formateur/ReceivedFormsList";
import ProfilPage from "./components/Pages/ProfilPage";
import TraineeRegistrationForm from "./components/Forms/TraineeRegistrationForm";
import { AuthProvider } from "./Context/auth/AuthContext";
import BusinessListPage from "./components/Pages/Stagiaire/BusinessListPage";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/internList" element={<TraineeInfoList />} />
          <Route path="/receivedList" element={<ReceivedFormsList />} />
          <Route path="/addIntern" element={<TraineeRegistrationForm />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/companies" element={<BusinessListPage />} />
        </Routes>

        <Main />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
