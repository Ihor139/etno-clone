import React from "react";

import styles from "./Header.module.scss";

import Logo from "./Logo";
import Action from "./Actions/Action";
import Navigation from "./Navigation";
import SearchDropdown from "./Actions/SearchDropdown";
import ContactDropdown from "./Actions/ContactDropdown";
import LanguageDropdown from "./Actions/LanguageDropdown";
import MenuProvider from "./HeaderContext";
import Cart from "../Cart";

const Header: React.FC = () => {
  const [menuBtnActive, setMenuBtnActive] = React.useState(false);

  return (
    <MenuProvider>
      <header className={styles.header}>
        <div className={styles.inner + " siteContainer"}>
          <div className={styles.content}>
            {menuBtnActive ? (
              <div
                className={styles.menuBurgerChange}
                onClick={() => {
                  setMenuBtnActive(!menuBtnActive);
                }}
              >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
              </div>
            ) : (
              <div
                className={styles.menuBurger}
                onClick={() => {
                  setMenuBtnActive(!menuBtnActive);
                }}
              >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
              </div>
            )}

            <Navigation />
            <Logo />
            <Action />
          </div>
        </div>

        <SearchDropdown />
        <ContactDropdown />
        <LanguageDropdown />
        <Cart />
      </header>
    </MenuProvider>
  );
};

export default Header;
