import React from "react";
import "./Logo.css";
import LogoImage from "../../assets/Logo1.png";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <div className="logo-image">
        <img src={LogoImage} alt="Logo" />
      </div>
      <div>
        <p> Murang'a University Tech Club </p>
      </div>
    </div>
  );
};

export default Logo;
