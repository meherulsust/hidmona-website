import styles from '../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Header = () => {
    const {topBarArea, topBarInformation, topBarAction} = styles;

    return (
        <div className={topBarArea}>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className="col-lg-6 col-md-6">
                        <ul className={topBarInformation}>
                            <li>
                                <a href="tel:+1 607 354 4284">+1 607 354 4284 </a>
                            </li>
                            <li>
                                <span style={{color:"#fff"}}>support@hidmona.ch</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <ul className={topBarAction}>
                            <li>
                                <a href="help-center.html">Help</a>
                            </li>
                            <li className="dropdown language-option">
                                <button className="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <span className="lang-name">English <FontAwesomeIcon icon={faAngleDown} /></span>
                                </button>
                                <div className="dropdown-menu language-dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        <Image src='/public/images/uk.png' alt='' width={10} height={10}/>
                                        English
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <Image src='/public/images/china.png' alt='' width={10} height={10}/>
                                        简体中文
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <Image src='/public/images/uae.png' alt='' width={10} height={10}/>
                                        العربيّة
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;