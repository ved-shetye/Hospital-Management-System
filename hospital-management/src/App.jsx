// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatientLogin from './components/PatientLogin';
import PatientSignup from './components/PatientSignup';
import DoctorLogin from './components/DoctorLogin';
import DoctorSignup from './components/DoctorSignup';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/patientsignup" element={<PatientSignup />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/doctorsignup" element={<DoctorSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
