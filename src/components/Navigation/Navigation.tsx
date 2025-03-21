import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <div>
      <ol className="header-navigation">
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/tracks" label="Tracks" />
        <NavigationLink to="/events" label="Events" />
        <NavigationLink to="/leadership" label="Leadership" />
      </ol>
    </div>
  );
};

export default Navigation;


interface NavigationLinkProps {
  to: string;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, label }) => {
  return (
    <li>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
};
