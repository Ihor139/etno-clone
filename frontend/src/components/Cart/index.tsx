import React from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {useHeaderContext} from "../Header/HeaderContext";

import clsx from "clsx";

import styles from "./Cart.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {selectCart} from "../../redux/cart/selectors";
import {fetchCart, removeFromCart, updateQuantity} from "../../redux/cart/asyncCart";

const Cart: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {cartOpened, setCartOpened} = useHeaderContext();
	const {visitor} = useSelector(selectCart);

	const [totalSum, setTotalSum] = React.useState<number>()

	const handleClickOutside = () => {
		setCartOpened(false);
	};

	const ref = useOutsideClick(handleClickOutside);

	const calculateTotalSum = () => {
		const prices = visitor?.products.map(item => item.product.price.base * item.amount)
		const total = prices?.reduce((partialSum, item) => partialSum + item, 0);
		setTotalSum(total)
	}

	React.useEffect(() => {
		dispatch(fetchCart());
	}, [])

	React.useEffect(() => {
		calculateTotalSum()
	}, [visitor])

	const plusHandler = async (id: string, count: number) => {
		const data = {
			_id: id,
			amount: Number(count) + 1,
		}
		dispatch(updateQuantity(data));
	}

	const minusHandler = async (id: string, count: number) => {
		const data = {
			_id: id,
			amount: Number(count) - 1,
		}
		dispatch(updateQuantity(data));
	}

	const deleteHandler = async (id: string) => {
		const item = {
			_id: id
		};
		dispatch(removeFromCart(item));
	}

	return (
		<div
			className={clsx([
				"popup js_basket",
				styles.basketPopup,
				cartOpened && styles.open,
			])}
		>
			<div className={clsx(["popup__body", styles.basketBody])}>
				<div className="popup__inner" ref={ref}>
					<div className={clsx(["popup__content", styles.basketContent])}>
						<div className={styles.basket}>
							<div className={styles.basketInner}>
								<div className={styles.basketContainer}>
									<div className={styles.basketTop}>
										<div className={styles.basketTitle}>
											{visitor.products.length > 0 ? "You put this in your cart:" : "Your cart is empty"}
										</div>
										<div
											className={clsx(["popup__close", styles.basketClose])}
											onClick={() => setCartOpened(false)}
										>
											<div className="popup__close-ico">
												<svg
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
													xmlns="https://www.w3.org/2000/svg"
												>
													<rect
														x="0.25"
														y="0.25"
														width="3.5"
														height="3.5"
														stroke="black"
														strokeWidth="0.5"
													></rect>
													<rect
														x="4.25"
														y="4.25"
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
														x="8.25"
														y="0.25"
														width="3.5"
														height="3.5"
														stroke="black"
														strokeWidth="0.5"
													></rect>
													<rect
														x="0.25"
														y="8.25"
														width="3.5"
														height="3.5"
														stroke="black"
														strokeWidth="0.5"
													></rect>
												</svg>
											</div>
										</div>
									</div>

									<div className={styles.basketListWrapp}>
										<div className={styles.basketList}>

											{visitor.products?.map(({_id, size, product, amount}) => {
													return <div key={_id} className={styles.basketCase}>
														<div className={styles.basketCaseBody}>
															<div className={styles.basketImageWrapp}>
																<div className={styles.basketCaseImage}>
																	<picture>
																		<img
																			className="lazyload lazyImg"
																			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
																			data-src={product.images && product.images[0]}
																			alt="img"
																		/>
																	</picture>
																</div>
															</div>
															<div className={styles.basketCaseInfo}>
																<div className={styles.basketCaseTop}>
																	<div className={styles.basketCaseTitle}>{product.title}
																	</div>
																</div>
																<div className={styles.basketCaseDescription}>
																	<div
																		className={clsx([
																			styles.basketCaseRow,
																			styles.basketCaseSize,
																		])}
																	>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColLabel,
																			])}
																		>
																			Size
																		</div>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.baskeCaseColTxt,
																			])}
																		>
																			<div className={styles.skuPropList}>{size}</div>
																			{/*<select*/}
																			{/*	// to do correct default value**/}
																			{/*	className={styles.skuPropList}*/}
																			{/*	onChange={sizeHandler}*/}
																			{/*	defaultValue={size}*/}
																			{/*>*/}
																			{/*	{sizes?.map((size: any, ind: React.Key) => {*/}
																			{/*		return <option key={ind} value={Object.keys(size)[0]}>{Object.keys(size)[0]}</option>*/}
																			{/*	})}*/}
																			{/*</select>*/}
																		</div>
																	</div>
																	<div
																		className={clsx([
																			styles.basketCaseRow,
																			styles.basketCaseCounter,
																		])}
																	>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColLabel,
																			])}
																		>
																			Q-ty
																		</div>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCounter,
																			])}
																		>
																			<span className={clsx([styles.minus, amount == 1 && styles.disabledBtn])}
																						onClick={() => minusHandler(_id, amount)}>-</span>
																			<input
																				className={styles.counter}
																				type="text"
																				value={amount >= product.amount ? product.amount : amount}
																				readOnly
																			/>
																			<span
																				className={clsx([styles.plus, amount >= product.amount && styles.disabledBtn])}
																				onClick={() => plusHandler(_id, amount)}>+</span>
																		</div>
																	</div>
																	<div
																		className={clsx([
																			styles.basketCaseRow,
																			styles.basketCasePrice,
																		])}
																	>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColLabel,
																			])}
																		>
																			Price
																		</div>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColTxt,
																			])}
																		>
																			<span>{product.price.base}</span>
																			<span className={styles.currencyIco}>
																	{product.price.currency}
																</span>
																		</div>
																	</div>
																	<div
																		className={clsx([
																			styles.basketCaseRow,
																			styles.basketCaseSumm,
																		])}
																	>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColLabel,
																			])}
																		>
																			Total
																		</div>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColTxt,
																			])}
																		>
																			<span>{product.price.base * amount}</span>
																			<span className={styles.currencyIco}>
																	{product.price.currency}
																</span>
																		</div>
																	</div>
																	<div
																		className={clsx([
																			styles.basketCaseRow,
																			styles.basketCaseRemove,
																		])}
																	>
																		<div
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColLabel,
																			])}
																		></div>
																		<button
																			className={clsx([
																				styles.basketCaseCol,
																				styles.basketCaseColTxt,
																				styles.basketCaseRemove,
																			])}
																			onClick={() => deleteHandler(_id)}
																		>
																			Remove
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												}
											)}

										</div>
									</div>
									<div className={styles.basketActions}>
										{visitor.products.length > 0 ? (<div className={styles.basketProdWrapp}>
											<div className={styles.basketProdTitle}>
												The total cost: {totalSum} UAH
											</div>
										</div>) : null}
										<div className={styles.basketButtons}>
											{visitor.products.length > 0 ? (<button
												className={clsx([styles.basketBtn, styles.btnDark])}
											>
												Go to cart
											</button>) : null}
											<button
												className={clsx([styles.basketBtn, styles.btnLight])}
												onClick={() => setCartOpened(false)}
											>
												Continue shopping
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
