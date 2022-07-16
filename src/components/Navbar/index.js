import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={style.nav}>
      <div className="{sytles.left}">
          <div className="logo">
              <Link to="/">eCommerce</Link>
          </div>
          <ul className={styles.menu}>
              <li>
                  <Link to="/">Products</Link>
              </li>
          </ul>
           </div>
      <div className={styles.right}>
        <Link to="/signin">
      <Button colorScheme='pink'>Register</Button>
      </Link>
      <Link to="/signup">
      <Button colorScheme='pink'>Login</Button>
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
