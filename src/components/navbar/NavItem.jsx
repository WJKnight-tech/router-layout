import { NavLink } from "react-router-dom"

const NavItem = ({ path, element }) => {
 return (
  <li><NavLink to={path}>{element}</NavLink></li>
 )
}
export default NavItem