import React from "react";

import styles from "./Footer.module.scss";

import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import FooterNavigation from "./FooterNavigation";
import FooterSocial from "./FooterSocial";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} siteContainer`}>

        <FooterNavigation />
        <FooterSocial />
        <FooterInfo />
        <FooterLogo />

        <div className={styles.quote}>
          <p>
            Slava Ukrayini
            <span className={styles.ico}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                width="64"
                height="64"
                version="1.0"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="87.396973"
                    x2="240.94727"
                    y1="141.97266"
                    y2="141.97266"
                    gradientTransform="translate(-129.3706 -94.56783) scale(1.56769)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fff" stopOpacity=".66666675" />
                    <stop
                      offset=".24074516"
                      stopColor="#d7d7d7"
                      stopOpacity=".21875"
                    />
                    <stop
                      offset=".4585622"
                      stopColor="#4d4d4d"
                      stopOpacity="0"
                    />
                    <stop
                      offset=".71891773"
                      stopColor="#fff"
                      stopOpacity=".51041669"
                    />
                    <stop
                      offset=".87351298"
                      stopColor="#f2f2f2"
                      stopOpacity=".40000001"
                    />
                    <stop offset="1" stopColor="#fff" stopOpacity=".62352943" />
                  </linearGradient>
                  <linearGradient id="b">
                    <stop offset="0" stopColor="#ffd500" />
                    <stop offset=".56849819" stopColor="#ffd500" />
                    <stop offset=".69703066" stopColor="#005bbb" />
                    <stop offset="1" stopColor="#005bbb" />
                  </linearGradient>
                  <linearGradient
                    xlinkHref="#a"
                    id="d"
                    x1="87.396973"
                    x2="269.33331"
                    y1="141.97266"
                    y2="141.97276"
                    gradientTransform="translate(-129.3714 -94.56962) scale(1.56769)"
                    gradientUnits="userSpaceOnUse"
                  />
                  <linearGradient
                    xlinkHref="#b"
                    id="c"
                    x1="128"
                    x2="125.54945"
                    y1="193.7363"
                    y2="90.251701"
                    gradientUnits="userSpaceOnUse"
                  />
                </defs>
                <path fill="none" d="M0 256V0h256v256" />
                <path
                  fill="url(#c)"
                  d="M248.36055 37.567021c0 1.853979-14.89154-10.205307-37.30922-11.054219-22.41617-2.351538-52.35541 6.505769-82.45234 15.426609-30.096928 8.899408-60.34849 17.890674-83.388509 15.559803-23.040022-.852739-38.8677397-13.026847-40.1154641-12.399157V217.04096c1.234711-.80222 16.9070381 11.48136 39.7977911 12.39534 22.889987 2.39899 52.99917-6.56931 83.107572-15.50775 30.10919-8.92926 60.21836-17.85624 83.10759-15.43733 22.89075.93235 38.56307 13.21056 39.79702 12.40911V38.95942c-1.27375-.722609-2.54444-1.392399-2.54444-1.392399z"
                />
                <path
                  fill="#fff"
                  d="M7.6409828 107.3324C87.880324 148.03464 168.12045 58.067687 248.35902 98.772858V57.829149C168.11891 17.123977 87.880324 107.09092 7.6409828 66.388692V107.3324z"
                />
                <path
                  fill="#ffd500"
                  d="M248.36055 206.96042c-80.24011-42.45245-160.478693 51.3756-240.7180336 8.92697V49.041485C87.881857 91.49088 168.12198-2.3379361 248.36055 40.114521V206.96042z"
                />
                <path
                  fill="#005bbb"
                  d="M203.20002 28.800002C138.00532 28.05953 72.794472 82.496143 7.6000006 48.66667v83.73334C87.839346 175.25518 168.16144 80.474293 248.40002 123.33334V39.86667c-15.04502-7.807365-30.15507-10.895789-45.2-11.066668z"
                />
                <path
                  fill="url(#d)"
                  d="M248.35974 206.96001c-80.24012-42.45169-160.480231 51.37712-240.7195788 8.92543V49.039546C87.879509 91.490468 168.11962-2.3375794 248.35974 40.114878V206.96001z"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className={styles.copyright}>
          <p>© 2022 Etnodim. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
