/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const NavLink = ({ to, children }) => {
    return <Link to={to}>{children}</Link>;
  };