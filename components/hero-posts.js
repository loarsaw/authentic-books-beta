import React from "react";
import Link from "next/link";

function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <>
      <section id="hero" className="s-hero">
        <div className="s-hero__slider">
          <div className="s-hero__slide">
            <div
              className="s-hero__slide-bg"
              style={{ backgroundImage: 'url("/images/hero-post.jpg")' }}
            ></div>
            <div className="row s-hero__slide-content">
              <div className="column">
                <div className="s-hero__slide-meta">
                  <span className="cat-links">
                    <a href="#0">Lifestyle</a>
                    <a href="#0">Motivation</a>
                  </span>
                  <span className="byline">
                    Posted by{" "}
                    <span className="author">
                      <a href="#0">{author.title}</a>
                    </span>
                  </span>
                </div>
                {console.log({ author })}
                <h1 className="s-hero__slide-text">
                  <Link
                    href={`/posts/${encodeURIComponent({ slug })}`}
                    as={`/posts/${slug}`}
                  >
                    {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
                    <a>{title}</a>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPost;
