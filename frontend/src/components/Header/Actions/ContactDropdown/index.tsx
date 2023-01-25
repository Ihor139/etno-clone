import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useHeaderContext } from "../../HeaderContext";

import styles from "./ContactDropdown.module.scss";

const ContactDropdown: React.FC = () => {
  const { contactOpened, setContactOpened } = useHeaderContext();

  const handleClickOutside = () => {
    setContactOpened(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div
      ref={ref}
      className={`${styles.actionDropdown} ${
        contactOpened ? `${styles.open}` : null
      }`}
    >
      <div className={styles.contact}>
        <div className={styles.inner}>
          <div className={styles.close} onClick={() => setContactOpened(false)}>
            <div className={styles.ico}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                ></rect>
                <rect
                  x="4.25"
                  y="4.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                ></rect>
                <rect
                  x="8.25"
                  y="8.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                ></rect>
                <rect
                  x="8.25"
                  y="0.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                ></rect>
                <rect
                  x="0.25"
                  y="8.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                ></rect>
              </svg>
            </div>
          </div>
          <div className={styles.content}>
            <ul className={styles.messangers}>
              <li className={styles.messanger}>
                <Link to="/t.me/etnodim" target="_blank">
                  Telegram
                </Link>
              </li>
              <li className={styles.messanger}>
                <Link to="viber://chat?number=380978889292" target="_blank">
                  Viber
                </Link>
              </li>
              <li className={styles.messanger}>
                <Link to="/wa.me/380978889292" target="_blank">
                  WhatsApp
                </Link>
              </li>
            </ul>
            <ul className={styles.phones}>
              <li className={styles.phone}>
                <Link to="tel:+380978889292">+38 097 888 92 92</Link>
              </li>
              <li className={styles.phone}>
                <Link to="tel:+380950099156">+38 095 009 91 56</Link>
              </li>
              <li className={styles.phone}>
                <Link to="tel:+380442228755">+38 044 222 87 55</Link>
              </li>
            </ul>
            <address className={styles.address}>
              <NavLink
                className={styles.info}
                to="https://goo.gl/maps/r6Y8EJQafQkJYAm67"
                target="_blank"
              >
                shop - Kyiv, str. Verkhniy Val, 58/28
              </NavLink>
              <p className={styles.shedule}>
                <span>Mon - Fri - 10:00 - 20:00</span>
                <span>Sat - Sun - 11:00 - 19:00</span>
              </p>
            </address>
            <Link className={styles.email} to="mailto:info@etnodim.com.ua">
              info@etnodim.com.ua
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDropdown;
