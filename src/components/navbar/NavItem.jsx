import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const NavItem = ({ path, element }) => {
 return (
  <li><NavLink to={path} className={({ isActive }) => {
   return (isActive ? `${styles.activated}` : "")
  }}>{element}</NavLink></li >
 )
}
export default NavItem