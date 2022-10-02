/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

function Appbar({ query, onQueryChange }) {
  const [active, setActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div
      id="top"
      className={
        active
          ? "nav-wrap-is-visible"
          : "" || searchActive
          ? "search-is-visible"
          : ""
      }
    >
      <header className="s-header">
        <div className="s-header__logo">
          <Link href="/">
            <a className="logo">
              <img src="/images/logo.svg" alt="Homepage" />
            </a>
          </Link>
        </div>

        <div className="row s-header__navigation">
          <nav className="s-header__nav-wrap">
            <h3 className="s-header__nav-heading h6">Navigate to</h3>

            <ul className="s-header__nav">
              <li className="current">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="has-children">
                <a title="">Categories</a>
                <ul className="sub-menu">
                  <li>
                    <a>Design</a>
                  </li>
                  <li>
                    <a>Lifestyle</a>
                  </li>
                  <li>
                    <a>Photography</a>
                  </li>
                  <li>
                    <a>Vacation</a>
                  </li>
                  <li>
                    <a>Work</a>
                  </li>
                  <li>
                    <a>Health</a>
                  </li>
                  <li>
                    <a>Family</a>
                  </li>
                  <li>
                    <a>Relationship</a>
                  </li>
                </ul>
              </li>
              {/* <li className="has-children">
                <a title="">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a>Video Post</a>
                  </li>
                  <li>
                    <a>Audio Post</a>
                  </li>
                  <li>
                    <a>Standard Post</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="styles.html" title="">
                  Styles
                </a>
              </li> */}
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            <a
              title="Close Menu"
              className="s-header__overlay-close close-mobile-menu"
              onClick={() => setActive(!active)}
            >
              Close
            </a>
          </nav>
        </div>

        <a
          className="s-header__toggle-menu"
          title="Menu"
          onClick={() => setActive(!active)}
        >
          <span>Menu</span>
        </a>

        <div className="s-header__search">
          <div className="s-header__search-inner">
            <div className="row wide">
              <form
                role="search"
                method="get"
                className="s-header__search-form"
                action="#"
              >
                <label>
                  <span className="h-screen-reader-text">Search for:</span>
                  <input
                    type="search"
                    className="s-header__search-field"
                    placeholder="Search for..."
                    value={query}
                    onChange={(event) => {
                      onQueryChange(event.target.value);
                    }}
                    name="s"
                    title="Search for:"
                    autoComplete="off"
                  />
                </label>
                <input
                  type="submit"
                  className="s-header__search-submit"
                  value="Search"
                />
              </form>

              <a
                title="Close Search"
                className="s-header__overlay-close"
                onClick={() => setSearchActive(false)}
              >
                Close
              </a>
            </div>
          </div>
        </div>

        <a
          className="s-header__search-trigger"
          onClick={() => setSearchActive(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.982 17.983">
            <path
              fill="#010101"
              d="M12.622 13.611l-.209.163A7.607 7.607 0 017.7 15.399C3.454 15.399 0 11.945 0 7.7 0 3.454 3.454 0 7.7 0c4.245 0 7.699 3.454 7.699 7.7a7.613 7.613 0 01-1.626 4.714l-.163.209 4.372 4.371-.989.989-4.371-4.372zM7.7 1.399a6.307 6.307 0 00-6.3 6.3A6.307 6.307 0 007.7 14c3.473 0 6.3-2.827 6.3-6.3a6.308 6.308 0 00-6.3-6.301z"
            />
          </svg>
        </a>
      </header>
    </div>
  );
}

export default Appbar;
