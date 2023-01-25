import React from "react";

import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.inner}>
				<div className={styles.image}>
					<picture>
						{/* <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-srcset="./media/images/home-1-mobile.webp 500w"
              type="image/webp"
              media="(max-width: 550px)"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-srcset="./media/images/home-1-mobile-2.webp 1000w"
              type="image/webp"
              media="(max-width: 1024px)"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-srcset="./media/images/home-1.webp 1200w"
              type="image/webp"
            /> */}
						<img
							className="lazyload lazyImg"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
							data-src="./media/images/home-11.jpg"
							alt="img"
						/>
					</picture>
				</div>

				<div className={styles.title}>
					<span>Clothing is not a habit,</span>
					<span>but a custom!</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
