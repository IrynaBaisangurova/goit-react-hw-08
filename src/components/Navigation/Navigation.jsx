import { NavLink } from "react-router-dom";
import clsx from "clsx";
import c from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { GoHome } from "react-icons/go";

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={c.nav}>
      <NavLink className={buildLinkClass} to="/">
       <GoHome />
       <span>Home</span> 
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
         <span> Contacts</span>
        </NavLink>
      )}
    </nav>
  );
}
