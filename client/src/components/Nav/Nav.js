import styles from "./Nav.module.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
const Nav = () => {
    const [click, setClick] = useState(false);

    const toggleNav = () => {
        setClick((prevState) => !prevState)
    }

return (
  <nav className={styles.nav}>
    <div className={styles.navLogo}>
      <NavLink to="/"> allTasks </NavLink>
    </div>

    <div className={`${styles.sublinks} ${ click ? styles.sublinksTwo : ""}`}>
      <ul className={styles.sublinksUl}>
        <li className={styles.sublinksLi}>
          <NavLink to="/addTask"> addTask </NavLink>
        </li>
        <li className={styles.sublinksLi}>
          <NavLink to="/completedTasks"> completedTasks </NavLink>
        </li>
      </ul>
    </div>
    <span className={`${styles.span} ${styles.navTrigger}`} onClick={toggleNav}>
      <i></i>
      <i></i>
      <i></i>
    </span>
  </nav>
);    
}

export default Nav