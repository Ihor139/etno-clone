import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNavigation } from "../../../redux/navigation/asyncNavigation";
import { selectNavigation } from "../../../redux/navigation/selectors";
import { AppDispatch } from "../../../redux/store";

import styles from "./Navigation.module.scss";
import MenuItems from "./MenuItems";

const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  const { menuItems } = useSelector(selectNavigation);

  React.useEffect(() => {
    dispatch(fetchNavigation());
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.list} onMouseLeave={() => setIsActiveMenu(false)}>
        { Array.isArray(menuItems) ? menuItems?.map((menu, ind) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={ind}
              depthLevel={depthLevel}
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
            />
          );
        }) : []}
      </div>
    </div>
  );
};

export default Navigation;
