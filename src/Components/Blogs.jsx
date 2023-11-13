import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

const Blogs = () => {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a
              href="https://hashnode.com/post/cle8cj5yr000109l1e4nsg9m4"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="blog-banner-box">
                <div className="project-item-icon-box">
                  <VisibilityIcon sx={{ fontSize: "1.25rem" }} />
                </div>
                <img
                  src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1699175681/Portfolio/StrictEqualityLooseEquality.png"
                  alt="Design conferences in 2022"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">JavaScript</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Feb 17, 2023</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Understanding Strict Equality & Loose Equality
                </h3>

                <p className="blog-text">
                  Strict equality (===) directly compares values while
                  considering both their content and data type. In contrast,
                  loose equality (==) compares values by attempting to convert
                  their types for equality checks. For instance, 5 === "5" is
                  false, but 5 == "5" is true because the latter performs type
                  conversion.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Blogs;
