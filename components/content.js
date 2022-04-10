/* eslint-disable @next/next/no-img-element */
import React from "react";
import Date from "./date";
import Link from "next/link";

function Content({ title, coverImage, date, excerpt, author, slug }) {
  const imgSrc = `${coverImage.imgix_url} 1x , ${coverImage.imgix_url} 2x `;
  return (
    <>
      <article className="brick entry">
        <div className="entry__thumb">
          <div className="thumb-link">
            <img
              src={coverImage.imgix_url}
              srcSet={imgSrc}
              // "images/thumbs/masonry/macbook-600.jpg 1x, images/thumbs/masonry/macbook-1200.jpg 2x"
              alt=""
            />
            {console.log(slug)}
          </div>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <h1 className="entry__title">
              {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
              <Link
                href={`/posts/${encodeURIComponent({ slug })}`}
                as={`/posts/${slug}`}
              >
                <a>{title}</a>
              </Link>
            </h1>

            <div className="entry__meta">
              <span className="byline">
                By:
                <span className="author">
                  <a>
                    {author.title}
                    {/* author name */}
                  </a>
                </span>
              </span>
              <span pan className="cat-links">
                <a>
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
          {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
          <Link
            href={`/posts/${encodeURIComponent({ slug })}`}
            as={`/posts/${slug}`}
          >
            <a className="entry__more-link">Learn More</a>
          </Link>
        </div>
      </article>
    </>

    // </div>
    // </div>
    // </div>
    // </section>
  );
}

export default Content;
