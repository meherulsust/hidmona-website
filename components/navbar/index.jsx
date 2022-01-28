import Image from 'next/image';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const {navbarArea, mainNavbar, navbarButtonArea, optionItem, navbarLinks, loginButtonDiv, loginButton, navbarHover, signUpButtonDiv, signUpButton} = styles;

    return (
        <div className={navbarArea}>
            <div className={mainNavbar}>
                <Image src='/assets/images/logo.png' alt='logo' width={300} height={100}/>
            </div>

            <div className={navbarLinks}>
                <ul className="navbar-nav ms-auto">     
                    <li className="nav-item">
                        <a href="index.html" className="nav-link"> Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="how-it-works.html" className="nav-link">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a href="contact.html" className="nav-link">Contact</a>
                    </li>
                </ul>
                <div className={navbarButtonArea}>
                    <div className={loginButtonDiv}>
                        <a href="login.html" className={loginButton}>Log In</a>
                    </div>
                    <div className={signUpButtonDiv}>
                        <a href="register.html" className={signUpButton}>signUp Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;