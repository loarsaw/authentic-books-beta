import React, { useEffect, useState } from "react";
import Navbar from "@/components/appbar";
import HeroPost from "@/components/hero-posts";
import Content from "@/components/content";
import Head from "next/head";
import Footer from "@/components/footer";
import MoreStories from "@/components/more-stories";
import { getAllPostsForHome } from "@/lib/api";
import useSWR from "swr";
import _ from "lodash";
import { getMergeId, combineMergeContent } from "@/lib/merge";
export default function Index({ allPosts }) {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 786);
    }
  }, [loading]);
  // console.log({ loading });
  let loading_merge;
  const merge_id = getMergeId();

  if (merge_id) {
    loading_merge = true;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: mergePosts } = useSWR(
      `/api/get-merge-request-posts/${merge_id}`,
      { refreshInterval: 1000 }
    );
    if (mergePosts) {
      allPosts = combineMergeContent(allPosts, mergePosts, true);
    }
    loading_merge = false;
  }
  allPosts = _.orderBy(allPosts, ["created_at"], ["desc"]);

  const filteredBooks = allPosts.filter((book) => {
    return (
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.metadata.author.title.toLowerCase().includes(query.toLowerCase())
    );
  });
  const heroPost = filteredBooks[0];
  const morePosts = filteredBooks.slice(1);

  console.log(allPosts[0].title);
  console.log(allPosts[0].metadata.author.title);

  return (
    <>
      <Head>
        <title> Authentic Books </title>
        <meta property="og:t" content={"Get The List of Authentic Books"} />
        <meta
          name="google-site-verification"
          content="4zHj1QalhiOxRR_1CvWMNVNc5OV1o7WFK4zZQU8ePeU"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3824752790784066"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navbar query={query} onQueryChange={(myQuery) => setQuery(myQuery)} />
      <div id={loading ? "preloader" : ""}>
        <div id={loading ? "loader" : ""}></div>
      </div>
      <HeroPost
        title={heroPost == undefined ? allPosts[0].title : heroPost.title}
        coverImage={
          heroPost == undefined
            ? allPosts[0].metadata.cover_image
            : heroPost.metadata.cover_image
        }
        date={
          heroPost == undefined ? allPosts[0].created_at : heroPost.created_at
        }
        author={
          heroPost == undefined
            ? allPosts[0].metadata.author
            : heroPost.metadata.author
        }
        slug={heroPost == undefined ? allPosts[0].slug : heroPost.slug}
        excerpt={
          heroPost == undefined
            ? allPosts[0].metadata.excerpt
            : heroPost.metadata.excerpt
        }
      />
      <MoreStories posts={morePosts} />
      {console.log({ morePosts })}
      <Footer />
    </>
  );
}

export async function getServerSideProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
