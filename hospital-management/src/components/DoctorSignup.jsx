import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const DoctorSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/doctor/signup`, {
        email,
        password,
        specialty,
        clinicName,
        clinicAddress,
      });
      navigate('/doctorlogin');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Doctor Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
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
        <input
          type="text"
          placeholder="Specialty/Domain"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Clinic/Hospital Name"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Clinic/Hospital Address"
          value={clinicAddress}
          onChange={(e) => setClinicAddress(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => navigate('/doctorlogin')}>
        Already have an account? Login here
      </p>
    </div>
  );
};

export default DoctorSignup;
