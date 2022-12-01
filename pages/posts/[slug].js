/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import useSWR from "swr";
import _ from "lodash";
import Navbar from "@/components/contact/contactappbar";
import { getMergeId, combineMergeContent } from "@/lib/merge";
import Date from "@/components/date";
import Footer from "@/components/footer";
import SlugMorePosts from "@/components/slugMorePosts";
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const { slug } = router.query;
  const merge_id = getMergeId();
  if (merge_id && slug) {
    // Check for has merge post
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: mergePost } = useSWR(
      `/api/get-merge-request-posts/${merge_id}/${slug}`,
      { refreshInterval: 1000 }
    );
    if (mergePost && mergePost.status !== 404) {
      post = mergePost;
      delete router.isFallback;
    }
    // Check for has merge posts
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: mergePosts } = useSWR(
      `/api/get-merge-request-posts/${merge_id}`,
      { refreshInterval: 1000 }
    );
    if (mergePosts) {
      morePosts = combineMergeContent(morePosts, mergePosts);
    }
  }
  if (merge_id && !post?.slug) {
    router.isFallback = true;
  }
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Navbar />

      {router.isFallback ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Head>
            <title> {post.title} | Authentic Books </title>
            <meta
              property="og:image"
              content={post.metadata.cover_image.imgix_url}
            />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3824752790784066"
              crossOrigin="anonymous"
            ></script>
          </Head>
          <section className="s-content">
            <div className="row">
              <div className="column large-12">
                <article className="s-content__entry format-standard">
                  <div className="s-content__media">
                    <div className="s-content__post-thumb">
                      
                    </div>
                  </div>

                  <div className="s-content__entry-header">
                    <h1 className="s-content__title s-content__title--post">
                      {post.title}
                    </h1>
                  </div>

                  <div className="s-content__primary">
                    <div className="s-content__entry-content">
                      <div
                        // className={markdownStyles['markdown']}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>

                    <div className="s-content__entry-meta">
                      <div className="entry-author meta-blk">
                        <div className="author-avatar">
                          <img
                            border="0"
                            src={
                              post.metadata.author.metadata.picture.imgix_url
                            }
                            // src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=1501110365&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=authenticbook-21"
                            className="avatar"
                          />
                          {/* </a> */}
                        </div>
                        <div className="byline">
                          <span className="bytext">Posted By</span>
                          <a href="#0">{post.metadata.author.title}</a>
                        </div>
                      </div>

                      <div className="meta-bottom">
                        <div className="entry-cat-links meta-blk">
                          <div className="cat-links">
                            <span>In </span>
                            <a href="#0">Frontend</a>
                            <a href="#0">Design</a>
                            <a href="#0">Work</a>
                          </div>
                          <span>On </span>
                          <Date dateString={post.created_at} />
                        </div>

                        {/* <div className="entry-tags meta-blk">
                          <span className="tagtext">Tags</span>
                          <a href="#">orci</a>
                          <a href="#">lectus</a>
                          <a href="#">varius</a>
                          <a href="#">turpis</a>
                        </div> */}
                      </div>
                    </div>

                    <SlugMorePosts morePosts={morePosts} />
                    {/* {console.log(morePosts)} */}
                  </div>
                </article>
              </div>
            </div>

            {/* <div className="comments-wrap">
              <div id="comments" className="row">
                <div className="column large-12">
                  <h3>5 Comments</h3>

                  <ol className="commentlist">
                    <li className="depth-1 comment">
                      <div className="comment__avatar">
                        <img
                          className="avatar"
                          src="/images/avatars/user-01.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </div>

                      <div className="comment__content">
                        <div className="comment__info">
                          <div className="comment__author">Hi Tech Dude</div>

                          <div className="comment__meta">
                            <div className="comment__time">Oct 05, 2020</div>
                            <div className="comment__reply">
                              <a className="comment-reply-link" href="#0">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="comment__text">
                          <p>
                            Adhuc quaerendum est ne, vis ut harum tantas
                            noluisse, id suas iisque mei. Nec te inani ponderum
                            vulputate, facilisi expetenda has et. Iudico dictas
                            scriptorem an vim, ei alia mentitum est, ne has
                            voluptua praesent.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="thread-alt depth-1 comment">
                      <div className="comment__avatar">
                        <img
                          className="avatar"
                          src="/images/avatars/user-04.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </div>

                      <div className="comment__content">
                        <div className="comment__info">
                          <div className="comment__author">John Doe</div>

                          <div className="comment__meta">
                            <div className="comment__time">Oct 05, 2020</div>
                            <div className="comment__reply">
                              <a className="comment-reply-link" href="#0">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="comment__text">
                          <p>
                            Sumo euismod dissentiunt ne sit, ad eos iudico
                            qualisque adversarium, tota falli et mei. Esse
                            euismod urbanitas ut sed, et duo scaevola pericula
                            splendide. Primis veritus contentiones nec ad, nec
                            et tantas semper delicatissimi.
                          </p>
                        </div>
                      </div>

                      <ul className="children">
                        <li className="depth-2 comment">
                          <div className="comment__avatar">
                            <img
                              className="avatar"
                              src="/images/avatars/user-03.jpg"
                              alt=""
                              width="50"
                              height="50"
                            />
                          </div>

                          <div className="comment__content">
                            <div className="comment__info">
                              <div className="comment__author">
                                Kakashi Hatake
                              </div>

                              <div className="comment__meta">
                                <div className="comment__time">
                                  Oct 05, 2020
                                </div>
                                <div className="comment__reply">
                                  <a className="comment-reply-link" href="#0">
                                    Reply
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="comment__text">
                              <p>
                                Duis sed odio sit amet nibh vulputate cursus a
                                sit amet mauris. Morbi accumsan ipsum velit.
                                Duis sed odio sit amet nibh vulputate cursus a
                                sit amet mauris
                              </p>
                            </div>
                          </div>

                          <ul className="children">
                            <li className="depth-3 comment">
                              <div className="comment__avatar">
                                <img
                                  className="avatar"
                                  src="images/avatars/user-04.jpg"
                                  alt=""
                                  width="50"
                                  height="50"
                                />
                              </div>

                              <div className="comment__content">
                                <div className="comment__info">
                                  <div className="comment__author">
                                    John Doe
                                  </div>

                                  <div className="comment__meta">
                                    <div className="comment__time">
                                      Oct 04, 2020
                                    </div>
                                    <div className="comment__reply">
                                      <a
                                        className="comment-reply-link"
                                        href="#0"
                                      >
                                        Reply
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div className="comment__text">
                                  <p>
                                    Investigationes demonstraverunt lectores
                                    legere me lius quod ii legunt saepius.
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="depth-1 comment">
                      <div className="comment__avatar">
                        <img
                          className="avatar"
                          src="/images/avatars/user-02.jpg"
                          alt=""
                          width="50"
                          height="50"
                        />
                      </div>

                      <div className="comment__content">
                        <div className="comment__info">
                          <div className="comment__author">Justin</div>

                          <div className="comment__meta">
                            <div className="comment__time">Oct 03, 2020</div>
                            <div className="comment__reply">
                              <a className="comment-reply-link" href="#0">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="comment__text">
                          <p>
                            Typi non habent claritatem insitam; est usus
                            legentis in iis qui facit eorum claritatem.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* <div className="row comment-respond">
                <div id="respond" className="column">
                  <h3>
                    Add Comment
                    <span>Your email address will not be published.</span>
                  </h3>

                  <form
                    name="contactForm"
                    id="contactForm"
                    method="post"
                    action=""
                    autoComplete="off"
                  >
                    <fieldset>
                      <div className="form-field">
                        <input
                          name="cName"
                          id="cName"
                          className="h-full-width h-remove-bottom"
                          placeholder="Your Name"
                          value=""
                          type="text"
                        />
                      </div>

                      <div className="form-field">
                        <input
                          name="cEmail"
                          id="cEmail"
                          className="h-full-width h-remove-bottom"
                          placeholder="Your Email"
                          value=""
                          type="text"
                        />
                      </div>

                      <div className="form-field">
                        <input
                          name="cWebsite"
                          id="cWebsite"
                          className="h-full-width h-remove-bottom"
                          placeholder="Website"
                          value=""
                          type="text"
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
                      <input
                        name="submit"
                        id="submit"
                        disabled
                        className="btn btn--primary btn-wide btn--large h-full-width"
                        value="Add Comment"
                        type="submit"
                      />
                    </fieldset>
                  </form>
                </div>
              </div> 
            </div> */}
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data.post?.metadata?.content || "");
  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
