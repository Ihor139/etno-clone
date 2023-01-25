import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./BlogPreviewCase.module.scss";

type BlogPreviewCaseProps = {
  title: string;
  link: string;
  image: string;
  text: string;
  viewsCount: number;
};

const BlogPreviewCase: React.FC<BlogPreviewCaseProps> = ({
  title,
  link,
  image,
}) => {
  return (
    <div className={clsx([styles.blogPostCase])}>
      <Link className={clsx([styles.blogPostImg])} to={link}>
        <picture>
          <img
            className="lazyload lazy_img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-src={image}
            alt="img"
          />
        </picture>
        <span className={clsx([styles.blogPostLink])}>
          <span className={clsx([styles.txt])}>переглянути</span>
          <span className={clsx([styles.ico])}>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.25"
                y="7.75"
                width="3.5"
                height="3.5"
                transform="rotate(-90 4.25 7.75)"
                stroke="white"
                strokeWidth="0.5"
              />
              <rect
                x="0.25"
                y="11.75"
                width="3.5"
                height="3.5"
                transform="rotate(-90 0.25 11.75)"
                stroke="white"
                strokeWidth="0.5"
              />
              <rect
                x="8.25"
                y="3.75"
                width="3.5"
                height="3.5"
                transform="rotate(-90 8.25 3.75)"
                stroke="white"
                strokeWidth="0.5"
              />
              <rect
                x="12.25"
                y="7.75"
                width="3.5"
                height="3.5"
                transform="rotate(-90 12.25 7.75)"
                stroke="white"
                strokeWidth="0.5"
              />
              <rect
                x="16.25"
                y="11.75"
                width="3.5"
                height="3.5"
                transform="rotate(-90 16.25 11.75)"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </span>
      </Link>
      <Link className={clsx([styles.blogPostTitle])} to={link}>
        {title}
      </Link>
    </div>
  );
};

export default BlogPreviewCase;
