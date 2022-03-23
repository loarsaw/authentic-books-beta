import PostPreview from "./content";
import Link from "next/link";
export default function MoreStories({ posts }) {
  return (
    <section className="s-content s-content--no-top-padding">
      <div className="s-bricks">
        <div className="masonry">
          <div className="bricks-wrapper h-group">
            <div className="grid-sizer"></div>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.metadata.cover_image}
                date={post.created_at}
                author={post.metadata.author}
                slug={post.slug}
                excerpt={post.metadata.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
