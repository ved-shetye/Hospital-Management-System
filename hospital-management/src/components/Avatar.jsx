import './Avatar.css';

const Avatar = ({ title, imgSrc, onClick }) => {
  return (
    <div className="avatar" onClick={onClick}>
      <img src={imgSrc} alt={`${title} Avatar`} className="avatar-image" />
      <h2>{title}</h2>
    </div>
  );
};

export default Avatar;
