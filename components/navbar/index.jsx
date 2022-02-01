import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarArea}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link href={"/"}>
            <a className="navbar-brand">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={300}
                height={100}
              />
            </a>
          </Link>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className={styles.navItem}>
                <Link href={"/"}>
                  <a className={styles.navLink}> Home</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={"/how-it-works"}>
                  <a className={styles.navLink}>How It Works</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={"/contact"}>
                  <a className={styles.navLink}>Contact</a>
                </Link>
              </li>
            </ul>
            <div className={styles.navbarButtonArea}>
              <div className={styles.loginButtonDiv}>
                <Link href={"/login"}>
                  <a href="login.html" className={styles.loginButton}>
                    Log In
                  </a>
                </Link>
              </div>
              <div className={styles.signUpButtonDiv}>
                <Link href={"/register"}>
                  <a className={styles.signUpButton}>SignUp Now</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
