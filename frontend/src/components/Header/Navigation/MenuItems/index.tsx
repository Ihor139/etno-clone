import React from "react";
import {Link} from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

import styles from "./MenuItems.module.scss";

type MenuItemsProps = {
	title?: string;
	items: any; // ?????
	depthLevel: number;
	isActiveMenu?: boolean;
	setIsActiveMenu?: Function;
};

const MenuItems: React.FC<MenuItemsProps> = ({
																							 items,
																							 depthLevel,
																							 isActiveMenu,
																							 setIsActiveMenu,
																						 }) => {
	const [dropdown, setDropdown] = React.useState(false);

	const onEnterHandler = () => {
		setDropdown(true);
		setTimeout(() => {
			if (setIsActiveMenu) setIsActiveMenu(true);
		}, 200);
	};

	React.useEffect(() => {
	}, []);

	return (
		<div
			className="accord-wrapp"
			onMouseEnter={onEnterHandler}
			onMouseLeave={() => setDropdown(false)}
		>
			<Link to={items.link} className={styles.item}>
        <span data-hover-name={items.title} data-image={items.dataImage}>
          {items.title}
        </span>
				<span className="hover-arrow">
          <svg
						width="12"
						height="20"
						viewBox="0 0 12 20"
						fill="none"
						xmlns="https://www.w3.org/2000/svg"
					>
            <rect
							x="4.25"
							y="4.25"
							width="3.5"
							height="3.5"
							stroke="black"
							strokeWidth="0.5"
						></rect>
            <rect
							x="0.25"
							y="0.25"
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
							x="4.25"
							y="12.25"
							width="3.5"
							height="3.5"
							stroke="black"
							strokeWidth="0.5"
						></rect>
            <rect
							x="0.25"
							y="16.25"
							width="3.5"
							height="3.5"
							stroke="black"
							strokeWidth="0.5"
						></rect>
          </svg>
        </span>
			</Link>
			{items.submenu?.length > 0 && (
				<DropdownMenu
					depthLevel={depthLevel}
					submenus={items.submenu}
					dropdown={dropdown}
					isActiveMenu={isActiveMenu}
				/>
			)}
		</div>
	);
};

export default MenuItems;
