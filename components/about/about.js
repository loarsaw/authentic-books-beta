/* eslint-disable @next/next/no-img-element */
import React from "react";

function about() {
  return (
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry">
            <div className="s-content__media">
              <img
                src="images/thumbs/about/about-1050.jpg"
                srcSet="images/thumbs/about/about-2100.jpg 2100w, 
                                        images/thumbs/about/about-1050.jpg 1050w, 
                                        images/thumbs/about/about-525.jpg 525w"
                sizes="(max-width: 2100px) 100vw, 2100px"
                alt=""
              />
            </div>

            <div className="s-content__entry-header">
              <h1 className="s-content__title">Learn More About Story.</h1>
            </div>

            <div className="s-content__primary">
              <div className="s-content__page-content">
                <p className="lead">
                  Books are the lifeline, they just dont contain stories rather
                  invaluable life lesson.So here are you in safe heaven where
                  you can see and get list of books that are a must read. If you
                  take this list carefully it take change you perception.
                  Once Someone decides to dive into this they feel the true beauty 
                  and pleasure that a book can offer.
                </p>

                <p>
                  Lorem ipsum Nisi cillum reprehenderit minim sunt dolore dolor
                  eiusmod eu aliquip ad ut sint dolore laborum voluptate ullamco
                  dolore aliquip enim. Excepteur cillum cupidatat fugiat nostrud
                  cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing
                </p>

               

                <br />

                <div className="row block-large-1-2 block-tab-full s-content__blocks">
                  <div className="column">
                    <h4>Who.</h4>
                    <p>
                      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut
                      nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu
                      mollit nisi pariatur fugiat deserunt dolor veniam
                      reprehenderit aliquip magna nisi consequat aliqua veniam
                      in aute ullamco Duis laborum ad non pariatur sit.
                    </p>
                  </div>

                  <div className="column">
                    <h4>When.</h4>
                    <p>
                      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut
                      nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu
                      mollit nisi pariatur fugiat deserunt dolor veniam
                      reprehenderit aliquip magna nisi consequat aliqua veniam
                      in aute ullamco Duis laborum ad non pariatur sit.
                    </p>
                  </div>

                  <div className="column">
                    <h4>What.</h4>
                    <p>
                      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut
                      nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu
                      mollit nisi pariatur fugiat deserunt dolor veniam
                      reprehenderit aliquip magna nisi consequat aliqua veniam
                      in aute ullamco Duis laborum ad non pariatur sit.
                    </p>
                  </div>

                  <div className="column">
                    <h4>How.</h4>
                    <p>
                      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut
                      nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu
                      mollit nisi pariatur fugiat deserunt dolor veniam
                      reprehenderit aliquip magna nisi consequat aliqua veniam
                      in aute ullamco Duis laborum ad non pariatur sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default about;
