import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterLogo.module.scss";

const FooterLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.image} to="#">
        <svg
          width="149"
          height="17"
          viewBox="0 0 149 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.2259 16.9424H28.7179V6.8H32.2259V16.9424ZM23.4856 0H37.4581V3.4H23.4856V0ZM71.2299 0H85.2023V16.8847H71.2299V0ZM74.7378 13.5424H81.6943V3.45763H74.7378V13.5424ZM118.142 0H121.65V16.8847H118.142V0ZM131.579 16.9424V3.4H135.087V16.9424H131.579ZM145.492 3.4H149V16.9424H145.492V3.4ZM135.087 0V3.4H138.714V13.5424H142.103V3.4H145.611V0H135.087ZM13.9725 0V3.4H3.50798V6.8H13.9725V10.2H3.50798V13.6H13.9725V17H0V0H13.9725ZM57.7925 3.4H61.3005V16.9424H57.7925V3.4ZM57.7925 0H47.328V16.8847H50.836V3.4H57.7925V0ZM105.18 0.0576284V3.4H108.688V13.5424H105.18V16.9424H94.7155V0.0576284H105.18ZM98.164 3.4V13.5424H105.121V3.4H98.164Z"
            fill="#050007"
          />
        </svg>
      </Link>
    </div>
  );
};

export default FooterLogo;
