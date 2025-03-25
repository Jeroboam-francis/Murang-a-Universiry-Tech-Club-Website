import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <div>
      <ol className="header-navigation">
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/tracks" label="Tracks" />
        <NavigationLink to="/leadership" label="Leadership" />
        <NavigationLink to="/events" label="Events" />
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
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {label}
      </NavLink>
    </li>
  );
};
