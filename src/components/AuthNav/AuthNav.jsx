import { NavLink } from "react-router-dom";
import clsx from "clsx";
import c from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.active);
};
export default function AuthNav() {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
