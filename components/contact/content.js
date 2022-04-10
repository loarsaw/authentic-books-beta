/* eslint-disable @next/next/no-img-element */
import React from "react";

function content() {
  return (
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry">
            <div className="s-content__media">
              <iFmg
                src="images/thumbs/contact/contact-1050.jpg"
                srcSet="images/thumbs/contact/contact-2100.jpg 2100w, 
                                        images/thumbs/contact/contact-1050.jpg 1050w, 
                                        images/thumbs/contact/contact-525.jpg 525w"
                sizes="(max-width: 2100px) 100vw, 2100px"
                alt=""
              />
            </div>

            <div className="s-content__entry-header">
              <h1 className="s-content__title">Get In Touch With Us.</h1>
            </div>

            <div className="s-content__primary">
              <div className="s-content__page-content">
                <p className="lead">
                  Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat
                  magna occaecat Excepteur nisi esse veniam dolor consectetur
                  minim qui nisi esse deserunt commodo ea enim ullamco non
                  voluptate consectetur minim aliquip Ut incididunt amet ut
                  cupidatat.
                </p>

                <p>
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                  nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing veniam velit id fugiat enim mollit amet
                  anim veniam dolor dolor irure velit commodo cillum sit nulla
                  ullamco magna amet magna cupidatat qui labore cillum sit in
                  tempor veniam consequat non laborum adipisicing aliqua ea nisi
                  sint ut quis proident ullamco ut dolore culpa occaecat ut
                  laboris in sit minim cupidatat ut dolor voluptate enim veniam
                  consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
                  non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <br />

                <div className="row block-large-1-2 block-tab-full s-content__blocks">
                  <div className="column">
                    <h4>Got A Book 😃</h4>
                    <p>
                      Mail 📩
                      <br />
                      ZIP File to :
                      <br />
                      <a href="mailto:contentmanager@authenticbooks.in">
                        Content Manager
                      </a>
                    </p>
                  </div>

                  <div className="column">
                    <h4>Got A Review 😊</h4>
                    <p>
                      Mail to :
                      <a href="mailto:contentmanager@authenticbooks.in">
                        Content Manager
                      </a>
                      {/* Mail ID :<code>contentmanager@authenticbooks.in</code> */}
                      <br />
                      With Your Name and
                      <p>Profile Picture(Optional)</p>
                    </p>
                  </div>
                </div>

                <form
                  name="cForm"
                  id="cForm"
                  className="s-content__form"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="cName"
                        type="text"
                        id="cName"
                        className="h-full-width h-remove-bottom"
                        placeholder="Your Name"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        className="h-full-width h-remove-bottom"
                        placeholder="Your Email"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        className="h-full-width h-remove-bottom"
                        placeholder="Website"
                        value=""
                      />
                    </div>

                    <div className="message form-field">
                      <textarea
                        name="cMessage"
                        id="cMessage"
                        className="h-full-width"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <br />
                    <button
                      type="submit"
                      className="submit btn btn--primary h-full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default content;
