import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
   
    return (
      <>
        <footer className={styles.footerArea}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div
                  className={styles.singleFooterWidget}
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <div className={styles.widgetLogo}>
                    <a href="index.html">
                      <Image
                        src="/assets/images/logo.png"
                        alt="Hidmona"
                        width={300}
                        height={100}
                      />
                    </a>
                  </div>
                  <p>To get exclusive updates and benefits.</p>
                  <ul className={styles.widgetSocial}>
                    <li>
                      <a href="https://www.facebook.com/EnvyTheme" className={styles.socialIconStyle} target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/?lang=en" className={styles.socialIconStyle} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" className={styles.socialIconStyle} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/signup" className={styles.socialIconStyle} target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className={styles.singleFooterWidget}
                  data-aos="fade-up"
                  data-aos-delay={60}
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <h3>Usefull Links</h3>
                  <ul className={styles.quickLinks}>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className={styles.singleFooterWidget}
                  data-aos="fade-up"
                  data-aos-delay={70}
                  data-aos-duration={700}
                  data-aos-once="true"
                >
                  <h3>Quick Links</h3>
                  <ul className={styles.quickLinks}>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className={styles.singleFooterWidget}
                  data-aos="fade-up"
                  data-aos-delay={80}
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  <h3>Contact Us</h3>
                  <ul className={styles.infoLinks}>
                    <li>
                      <span>Support (USA) : +1 607 354 4284</span>
                    </li>
                    <li>
                      <span>Support (UK) : +44 1244 94 0789</span>
                    </li>
                    <li>
                      <span>Support(Sweden) : +46 40-693 98 96</span>
                    </li>
                    <li>
                      <span>Email:</span>support@hidmona.ch
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyrightArea}>
            <div className="container">
              <div className={styles.copyrightAreaContent}>
                <p>
                  Copyright © 2022 Hidmona Money Transfer - All Rights Reserved
                  <a href="#" target="_blank"></a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="go-top">
          <i className="ri-arrow-up-s-line" />
        </div>
      </>
    );
};

export default Footer;