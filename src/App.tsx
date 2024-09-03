import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Context/AuthProvider";
import Header from "./components/Header/Header";
import TraineeInfoList from "./components/Pages/Formateur/TraineeInfoList";
import ReceivedFormsList from "./components/Pages/Formateur/ReceivedFormsList";
import TraineeRegistrationForm from "./components/Forms/TraineeRegistrationForm";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/internList" element={<TraineeInfoList />} />
          <Route path="/receivedList" element={<ReceivedFormsList />} />
          <Route path="/createUser" element={<TraineeRegistrationForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
