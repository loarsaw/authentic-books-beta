import React from "react";
import Link from "next/link";
function SlugMorePosts({ morePosts }) {
  const first = morePosts[0];
  const second = morePosts[1];

  return (
    <div className="s-content__pagenav">
      <div className="prev-nav">
        <Link
          href={`/posts/${encodeURIComponent(first.slug)}`}
          as={`/posts/${first.slug}`}
        >
          <a>
            <span>Previous</span>
            {first.title}
          </a>
        </Link>
      </div>
      <div className="next-nav">
        <Link
          href={`/posts/${encodeURIComponent(second.slug)}`}
          as={`/posts/${second.slug}`}
        >
          <a>
            <span>Next</span>
            {second.title}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SlugMorePosts;
