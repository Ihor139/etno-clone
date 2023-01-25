import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterNavigation.module.scss";

const navData = [
  { id: 0, title: "Team", link: "#" },
  { id: 1, title: "News", link: "#" },
  { id: 2, title: "Contacts", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Delivery and payment", link: "#" },
  { id: 5, title: "Drabyna", link: "#", color: "light-color" },
];

type NavItemProps = {
  title: string;
  link: string;
  color?: string;
};

const NavItem: React.FC<NavItemProps> = ({ title, link, color }) => {
  return (
    <div className={styles.item}>
      <Link className={`${styles.link} ${color && "light-color"}`} to={link}>
        {title}
      </Link>
    </div>
  );
};

const FooterNavigation: React.FC = () => {
  const [isSubMenuActive, setSubMenuActive] = React.useState<boolean>(false);

  return (
    <div className={styles.nav}>
      {navData?.map((item) => (
        <NavItem {...item} key={item.id} />
      ))}

      <div
        className={`${styles.item} ${styles.projectMenu}`}
        onMouseEnter={() => setSubMenuActive(!isSubMenuActive)}
        onMouseLeave={() => setSubMenuActive(!isSubMenuActive)}
      >
        <div className={styles.link}>
          <span className="txt">Collections</span>
          <span className="ico">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="11.75"
                y="0.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 11.75 0.25)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="7.75"
                y="4.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 7.75 4.25)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="3.75"
                y="0.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 3.75 0.25)"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </div>
        <ul className={clsx([styles.submenu, isSubMenuActive && styles.open])}>
          <li className={styles.subitem}>
            <Link className={styles.link} to="/ua/etnodim_manifest/">
              Ethnodim Manifesto 2021
            </Link>
          </li>
          <li className={styles.subitem}>
            <Link className={styles.link} to="/ua/etnodim_manifest/">
              Etnodim Art Collection
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
