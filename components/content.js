/* eslint-disable @next/next/no-img-element */
import React from "react";
import Date from "./date";
function content({ title, coverImage, date, excerpt, author, slug }) {
  const imgSrc = `${coverImage.imgix_url} 1x , ${coverImage.imgix_url} 2x `;
  return (
    // <section className="s-content s-content--no-top-padding">
    // <div className="s-bricks">
    // <div className="masonry">
    // <div className="bricks-wrapper h-group">
    // <div className="grid-sizer"></div>
    // <div className="lines">
    // <span></span>
    // <span></span>
    // <span></span>
    // </div>
    <>
      <article className="brick entry">
        <div className="entry__thumb">
          <a href="single-standard.html" className="thumb-link">
            <img
              src={coverImage.imgix_url}
              srcSet={imgSrc}
              // "images/thumbs/masonry/macbook-600.jpg 1x, images/thumbs/masonry/macbook-1200.jpg 2x"
              alt=""
            />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <h1 className="entry__title">
              <a href="https://www.dreamhost.com/r.cgi?287326">
                {title}
                {/* Title here */}
              </a>
            </h1>

            <div className="entry__meta">
              <span className="byline">
                By:
                <span className="author">
                  <a href="https://www.dreamhost.com/r.cgi?287326">
                    {author.title}
                    {/* author name */}
                  </a>
                </span>
              </span>
              <span className="cat-links">
                <a href="https://www.dreamhost.com/r.cgi?287326">
                  <Date dateString={date} />
                </a>
              </span>
            </div>
          </div>
          <div className="entry__excerpt">
            <p>
              {excerpt}
              {/* Excerpt */}
            </p>
          </div>
          <a
            className="entry__more-link"
            href="https://www.dreamhost.com/r.cgi?287326"
          >
            Learn More
          </a>
        </div>
      </article>
    </>
    // </div>
    // </div>
    // </div>
    // </section>
  );
}

export default content;
