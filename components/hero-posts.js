import { images } from "next.config";
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
              style={{ backgroundImage: 'url("/images/slide1-bg-3000.jpg")' }}
            ></div>
            <div className="row s-hero__slide-content">
              <div className="column">
                <div className="s-hero__slide-meta">
                  <span className="cat-links">
                    <a href="#0">Lifestyle</a>
                    <a href="#0">Design</a>
                  </span>
                  <span className="byline">
                    Posted by{" "}
                    <span className="author">
                      <a href="#0">Jonathan Doe</a>
                    </span>
                  </span>
                </div>
                <h1 className="s-hero__slide-text">
                  <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a>Tips and Ideas to Help You Start Freelancing.</a>
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
