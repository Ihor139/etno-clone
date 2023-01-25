import React from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchDropdown.module.scss";

import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useHeaderContext } from "../../HeaderContext";

//redux
import { setSearchTerm } from "../../../../redux/search/slice";
import {
  selectSearchResult,
  selectSearchStatus,
  selectSearchTerm,
} from "../../../../redux/search/selectors";
import { fetchItems } from "../../../../redux/search/asyncSearch";
import { useIsMount } from "../../../../hooks/useIsmount";
import { AppDispatch } from "../../../../redux/store";
import {Status} from "../../../../@types";

const SearchDropdown: React.FC = () => {
  const isMount = useIsMount();

  const dispatch = useDispatch<AppDispatch>();
  const { searchOpened, setSearchOpened } = useHeaderContext();
  const [searchValue, setSearchValue] = React.useState("");
  const searchTerm = useSelector(selectSearchTerm);
  const searchResult = useSelector(selectSearchResult);
  const searchStatus = useSelector(selectSearchStatus);

  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleClickOutside = () => {
    setSearchOpened(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const updateSearchTerm = React.useCallback(
    debounce((str) => {
      dispatch(setSearchTerm(str));
    }, 300),
    []
  );

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    updateSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    if (!isMount && searchTerm) {
      // First Render
      dispatch(fetchItems(searchTerm));
    }
  }, [searchTerm]);

  return (
    <div
      ref={ref}
      className={`${styles.actionDropdown} ${styles.search} ${
        searchOpened ? `${styles.open}` : null
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.formWrapper}>
              <form className={styles.form}>
                <label className={styles.formLabel}>
                  <span className={styles.formTxt}></span>
                  <input
                    ref={searchInputRef}
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    className={styles.formInput}
                    type="text"
                    placeholder="Start typing to search"
                  />
                  {searchStatus === Status.LOADING ? (
                    <span className={styles.inputIco}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="204px"
                        height="204px"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                      >
                        <rect
                          x="21.5"
                          y="28.5"
                          width="7"
                          height="43"
                          fill="#000000"
                        >
                          <animate
                            attributeName="y"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="15.600000000000001;28.5;28.5"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                            begin="-0.1834862385321101s"
                          />
                          <animate
                            attributeName="height"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="68.8;43;43"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                            begin="-0.1834862385321101s"
                          />
                        </rect>
                        <rect
                          x="46.5"
                          y="28.5"
                          width="7"
                          height="43"
                          fill="#565656"
                        >
                          <animate
                            attributeName="y"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="18.824999999999996;28.5;28.5"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                            begin="-0.09174311926605505s"
                          />
                          <animate
                            attributeName="height"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="62.35000000000001;43;43"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                            begin="-0.09174311926605505s"
                          />
                        </rect>
                        <rect
                          x="71.5"
                          y="28.5"
                          width="7"
                          height="43"
                          fill="#7f7f7f"
                        >
                          <animate
                            attributeName="y"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="18.824999999999996;28.5;28.5"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                          />
                          <animate
                            attributeName="height"
                            repeatCount="indefinite"
                            dur="0.9174311926605504s"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            values="62.35000000000001;43;43"
                            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                          />
                        </rect>
                      </svg>
                    </span>
                  ) : (
                    ""
                  )}
                </label>
              </form>
              <div
                className={styles.close}
                onClick={() => setSearchOpened(false)}
              >
                <div className={styles.closIco}>
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

            {searchResult.length > 0 && (
              <div className={styles.result}>
                <div className={styles.resultInner}>
                  <ul className={styles.resultList}>
                    {searchResult?.map(({ title, link, _id }) => (
                      <li key={_id} className={styles.resultItem}>
                        <Link className={styles.resultLink} to={link}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.resultAll} to="/catalog">
                    <span className={styles.resultAllTxt}>усі результати</span>
                    <span className={styles.resultAllIco}>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                          fill="#808080"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )}
            {searchTerm && searchResult.length === 0 && (
              <div className={styles.result}>
                <div className={styles.resultInner}>
                  <p>Nothing was found for your request</p>
                  <Link className={styles.resultAll} to="/catalog">
                    <span className={styles.resultAllTxt}>Go to catalog</span>
                    <span className={styles.resultAllIco}>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                          fill="#808080"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
