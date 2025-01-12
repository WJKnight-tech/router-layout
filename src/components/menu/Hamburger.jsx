import styles from "./Hamburger.module.css"
console.log(styles)
const Hamburger = ({ onClick, menu }) => {
 const styleName = menu

 console.log(styleName)
 return (
  <div onClick={onClick} className={menu ? `${styles.hamburgerMenu} ${styles.xMenu}` : styles.hamburgerMenu}>
   <span></span>
   <span></span>
   <span></span>
  </div >
 )
}
export default Hamburger