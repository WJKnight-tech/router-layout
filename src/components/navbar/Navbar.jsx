import { Link } from "react-router-dom"
import NavItem from "./NavItem"
import { navItems } from "../../api/navdb"

const Navbar = () => {
 return (
  <header>
   <nav>
    <div>
     <Link>Logo</Link>
    </div>
    <ul>
     {navItems.map((navItem) => {
      return <NavItem key={navItem.id} {...navItem} />
     })
     }
    </ul>
   </nav>
  </header>
 )
}
export default Navbar