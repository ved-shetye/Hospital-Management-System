import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/patient/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/patient-dashboard'); // Redirect to dashboard or another page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Patient ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/patientsignup')}>
        Don't have an account? Sign up here
      </p>
    </div>
  );
};

export default PatientLogin;
