/* eslint-disable @next/next/no-img-element */
import React from "react";

function content() {
  return (
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry">
            <div className="s-content__media">
              <img
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
                  Books are referred to as a man’s best friend. They are very
                  beneficial for mankind and have helped it evolve. There is a
                  powerhouse of information and knowledge. Books offer us so
                  many things without asking for anything in return. Books leave
                  a deep impact on us and are responsible for uplifting our
                  mood.
                </p>

                <p>
                  Back in the day it was quite a deal to get you book publish ,
                  but now its just the matter of few clicks. With services such
                  as kindle publishing the amount work has been reduced to half
                  the only thing writer to need to worry about is his or her
                  work rest is covered by publisher. So you are a writer and has
                  written a book or an article or owns a blog and want to be
                  featured in the <b>authenticbooks.in </b> or if you want your masterpiece to
                  be present to our reader then it might be a really good idea
                  to contact us.
                </p>

                <br />

                <div className="row block-large-1-2 block-tab-full s-content__blocks">
                  <div className="column">
                    <h4>Want to Advertise 😃</h4>
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
