import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">MediConnect</h1>
      <h3> Your very own Hospital Management System</h3>
      <div className="avatar-container">
        <Avatar 
          title="Patient" 
          imgSrc="/src/assets/patient.png" 
          onClick={() => navigate('/patientlogin')} 
        />
        <Avatar 
          title="Doctor" 
          imgSrc="/src/assets/doctor.jpeg" 
          onClick={() => navigate('/doctorlogin')} 
        />
      </div>
    </div>
  );
};

export default HomePage;
