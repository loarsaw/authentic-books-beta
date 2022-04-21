import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
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
        <div className="s-hero__social hide-on-mobile-small">
          <p>Follow</p>
          <span></span>
          <ul className="s-hero__social-icons">
            <li>
              <a href="#0">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#0">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#0">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#0">
                <FaDribbble />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroPost;
