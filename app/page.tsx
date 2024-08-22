import React from 'react';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/cosmic';

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <main className="mt-4 w-full flex-col space-y-16 px-4 lg:px-0">
      {!posts && 'You must add at least one Post to your Bucket'}
      <div className="grid grid-cols-1 gap-1 space-y-3 md:grid-cols-3">
        {posts &&
          posts.map((post) => {
            return (
              <div className="" key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
export const revalidate = 60;
