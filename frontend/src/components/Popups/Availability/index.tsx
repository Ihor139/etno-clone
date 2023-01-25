import React from 'react'

const Availability: React.FC = () => {
  return (
    <div className="popup availably__popup product-availably js-product-available">
      <div className="popup__body">
        <div className="popup__inner">
          <div className="popup__top">
            <div className="popup__close">
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
          <div className="popup__content">
            <div className="availably__text">
              Введіть вашу електрону адресу і ми сповістимо про наявніть
              даного товару
            </div>
            <form className="availably__form">
              <div className="site-form">
                <div className="site-form__inner">
                  <div className="site-form__row">
                    <div className="site-form__col site-form__col--full">
                      <label className="site-form__field">
                        <span className="site-form__label"></span>
                        <input
                          className="site-form__input"
                          type="email"
                          name="email"
                          placeholder="email"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="site-form__row">
                    <div className="site-form__col site-form__col--full">
                      <p className="site-form__text">або</p>
                    </div>
                  </div>
                  <div className="site-form__row">
                    <div className="site-form__col site-form__col--full">
                      <label className="site-form__field">
                        <span className="site-form__label"></span>
                        <input
                          className="site-form__input p-mask"
                          type="text"
                          name="phone"
                          placeholder="телефон"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="site-form__row">
                    <div className="site-form__col site-form__col--full">
                      <button
                        className="site-form__submit js-submit-form-available"
                        type="submit"
                      >
                        <span className="txt">Надіслати</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availability