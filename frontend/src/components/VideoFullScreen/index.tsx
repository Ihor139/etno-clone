import React from "react";

const VidepFullScreen: React.FC = () => {
  return (
    <div className="about border-none">
      <div className="about__media about__media--full mb-142">
        <div className="about__media-inner">
          <div className="media-video js_parent-video">
            <div className="vidwrap">
              <video id="korotke" width="100%" height="100%">
                <source
                  src="./media/video/horizontal_6sec.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="media-video-video">
              <video className="video-full" controls id="player">
                <source
                  src="./media/video/fog-horizontal.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="title">традиції</div>
            <div className="media-video-show-video js-video-handler">
              <span>Переглянути відео</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about__inner site-container mb-166">
        <div className="about__text">
          <p>Створюючи вишиті сорочки Етнодім говорить про сучасність.</p>
          <br />
          <p>
            Наші орнаменти - це відбитки цінностей сьогодення, що тісно
            пов’язані із нашим корінням.{" "}
          </p>
          <br />
          <p>
            У нас немає можливості подорожувати у часі, але ця подорож завжди
            всередині нас.{" "}
          </p>
          <br />
          <p>
            Ми нероздільно пов’язані з усім тим, що називається українською
            культурою і хоч в наших обличчях так багато рис наших предків, вони
            унікальні.{" "}
          </p>
          <br />
          <p>
            Ми дивимось в очі новому поколінню аби побачити там, історію
            України.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VidepFullScreen;
