import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterInfo.module.scss";

const FooterInfo: React.FC = () => {
  return (
    <div className={styles.info}>
      <address className={styles.address}>
        <a
          className={styles.link}
          href="https://www.google.com/maps/place/Verkhnii+Val+St,+58,+Kyiv,+02000/@50.4697207,30.5129999,15z/data=!4m5!3m4!1s0x40d4ce15b0991e0f:0x19f757eb251f92be!8m2!3d50.4699699!4d30.5188149"
          target="_blank"
        >
          Official store: Ukraine, Kyiv
        </a>
      </address>
      <div className={styles.shedule}>
        <p>
          Mon - Fri 10:00 - 19:00
          <br />
          Sat - Sun 11:00 - 19:00
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;
