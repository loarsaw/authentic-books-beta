import React from "react";
import Navbar from "@/components/appbar";
import HeroPost from "@/components/hero-posts";
import Content from "@/components/content";
import Footer from "@/components/footer";
import MoreStories from "@/components/more-stories";
import { getAllPostsForHome } from "@/lib/api";
import useSWR from "swr";
import _ from "lodash";
import { getMergeId, combineMergeContent } from "@/lib/merge";
export default function Index({ allPosts }) {
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
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Navbar />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.metadata.cover_image}
        date={heroPost.created_at}
        author={heroPost.metadata.author}
        slug={heroPost.slug}
        excerpt={heroPost.metadata.excerpt}
      />
      <MoreStories posts={morePosts} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}