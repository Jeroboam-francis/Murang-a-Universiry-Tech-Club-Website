import React from "react";
import "./Logo.css";
import LogoImage from "../../assets/Logo1.png";

const Logo: React.FC = () => {
  return (
    <div className="logo-image">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
