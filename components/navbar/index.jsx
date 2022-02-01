import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={300}
              height={100}
            />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  {" "}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <a href="login.html" className="optional-btn">
                  Log In
                </a>
              </div>
              <div className="option-item">
                <a href="register.html" className="default-btn">
                  signUp Now
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
