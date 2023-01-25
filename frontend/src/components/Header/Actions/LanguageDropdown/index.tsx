import React from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useHeaderContext } from "../../HeaderContext";

import styles from "./LanguageDropdown.module.scss";

const LanguageDropdown: React.FC = () => {
  const { languageOpened, setLanguageOpened } = useHeaderContext();

  const handleClickOutside = () => {
    setLanguageOpened(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div
      ref={ref}
      className={`${styles.actionDropdown} ${
        languageOpened ? `${styles.open}` : null
      }`}
    >
      <div className={styles.languages}>
        <div className={styles.inner}>
          <div
            className={styles.close}
            onClick={() => setLanguageOpened(false)}
          >
            <div className={styles.closeIco}>
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
            <ul className={styles.list}>
              <li className={styles.item + " " + styles.itemActive}>
                <Link to="#">Ukrainian / uah ₴</Link>
              </li>
              <li className={styles.item}>
                <Link to="#">English / usd $</Link>
              </li>
              <li className={styles.item}>
                <Link to="#">English / euro &euro;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
