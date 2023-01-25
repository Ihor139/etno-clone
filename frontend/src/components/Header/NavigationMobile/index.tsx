import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavigationMobile.module.scss";

const NavigationMobile: React.FC = () => {
  return (
    <div className={styles.navMobile}>
      <div className={styles.navListMobile}>
        <div className={styles.dropdownWrapper}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span data-hover-name="Жінкам">Жінкам</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Вишиті сукні</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Жіночі вишиванки</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Конструктор вишиванки</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Піжами</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Світшоти та светри</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Футболки</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Пальта & куртки</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span>Чоловікам</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Чоловічі вишиванки</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span>Дітям</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Вишиванка для хлопчика</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Вишиванки для дівчаток</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Дитячі вишиті плаття</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Дитячі піжами</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span>Аксесуари</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Вінки</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Мерч</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Сертифікати</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span>Знижки</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Знижки жінкам</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Знижки чоловікам</span>
                  </Link>
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.accordWrapp}>
                  <Link to="#">
                    <span>Знижки дітям</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper + styles.languagesMobile}>
          <div className={styles.accordWrapp}>
            <Link className={styles.accordTitle} to="#">
              <span>Українська / uah &#x20B4;</span>
            </Link>
            <span className={styles.accordArrow}>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L6.57523 6L1 1"
                  stroke="#808080"
                  strokeWidth="0.3"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.dropdownMenu}>
            <div className={styles.languagesItem}>
              <Link to="https://etnodim.com/?ch_currency=USD">
                English / usd $
              </Link>
            </div>
            <div className={styles.languagesItem}>
              <Link to="https://etnodim.com/?ch_currency=EUR">
                English / euro &euro;
              </Link>
            </div>
            <div className={styles.languagesItem}>
              <Link to="/ru/women-ru/ru-zhenskie-vyshivanki/">
                російська / uah &#x20B4;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMobile;
