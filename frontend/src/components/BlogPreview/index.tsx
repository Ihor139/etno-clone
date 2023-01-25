import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsPreview } from "../../redux/postsPreview/asyncPosts";
import { selectPostsPreview } from "../../redux/postsPreview/selectors";
import { AppDispatch } from "../../redux/store";
import BlogPreviewCase from "../BlogPreviewCase";

import styles from "./BlogPreview.module.scss";

const BlogPreview: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts } = useSelector(selectPostsPreview);

  React.useEffect(() => {
    dispatch(fetchPostsPreview());
  }, []);

  return (
    <div className={clsx([styles.blog])}>
      <div className={clsx([styles.blogInner, "siteContainer"])}>
        <div className={clsx([styles.posts])}>
          <div className={clsx([styles.blogPostList])}>
            {posts.map((post) => (
              <BlogPreviewCase key={String(post._id)} {...post} />
            ))}
          </div>
        </div>
        <div className={clsx([styles.blogLink])}>
          <Link className={clsx(["site-link site-link--arrow"])} to="#">
            <span className="txt">To all the news</span>
            <span className="ico">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.25"
                  y="4.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="0.25"
                  y="0.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="8.25"
                  y="8.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="4.25"
                  y="12.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="0.25"
                  y="16.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
