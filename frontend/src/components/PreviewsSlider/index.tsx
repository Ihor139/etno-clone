import React from "react";
import "@splidejs/react-splide/css";
import clsx from "clsx";

import styles from "./PreviewsSlider.module.scss";

//redux
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {Product} from "../../redux/productPreview/types";
import {selectProductsPreview} from "../../redux/productPreview/selectors";
import {fetchProductsPreview} from "../../redux/productPreview/asyncProduct";

//components
import ProductCase from "../ProductCase";

const PreviewsSlider: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {items} = useSelector(selectProductsPreview);

	React.useEffect(() => {
		dispatch(fetchProductsPreview());
	}, []);

	return (
		<div className={styles.previewGoods}>
			<div className={clsx([styles.previewGoodsInner, "siteContainer"])}>
				<div className={clsx([styles.previewGoodsTitle])}>
					New models
					<br/> of embroidery
					<br/> and dresses
				</div>
				<div className={clsx([styles.previewGoodsWrapper])}>
					<div className={clsx([styles.previewGoodsList])}>
						{items.map((item: Product, ind) => {
							return <ProductCase key={ind} {...item} />
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreviewsSlider;
