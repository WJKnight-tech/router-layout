import { Link } from "react-router-dom"
import { useState } from "react"
import NavItem from "./NavItem"
import { navItems } from "../../api/navdb"
import styles from "./Navbar.module.css"
import { Hamburger } from "../menu"

// const menu = false

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
 const handleModal = () => {
  setIsOpen(!isOpen)
 }

 return (
  <header>
   <nav>
    <div >
     <Link className={styles.logo}>Logo</Link>
    </div>
    <ul className={isOpen ? `${styles.navItems}` : `${styles.navItems} ${styles.closeModal}`}>
     {navItems.map((navItem) => {
      return <NavItem key={navItem.id} {...navItem} />
     })
     }
    </ul>
    <Hamburger menu={isOpen} onClick={() => { handleModal() }} />
   </nav>
  </header>
 )
}
export default Navbar