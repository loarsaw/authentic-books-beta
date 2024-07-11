'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from './icons/ArrowRight';
import Tag from './Tag';
import { Post } from '../lib/types';
import AuthorAttribution from './AuthorAttribution';
import AuthorAvatar from './AuthorAvatar';
import { sanitize } from 'isomorphic-dompurify';
import { useRouter } from 'next/navigation';

export default function PostCard({ post }: { post: Post }) {
  const router = useRouter();
  return (
    <div>
      <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
          {post.metadata.hero?.imgix_url && (
            <img
              src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
              alt="card-image"
            />
          )}
        </div>
        <div className="p-6">
          <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
            {post.title}
          </h5>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(post.metadata.teaser) ?? '',
            }}
            className="line-clamp-5 block font-sans text-base font-light leading-relaxed text-inherit antialiased"
          />
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => {
              router.push(`/posts/${post.slug}`);
            }}
            className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
