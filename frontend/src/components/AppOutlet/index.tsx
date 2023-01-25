import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../index";

import styles from "./AppOutlet.module.scss";

const AppOutlet: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={`${styles.content}`}>
        <div className={styles.wrapper}>
          <div className={styles.topIndent}></div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppOutlet;
