"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [books_array, set_books_array] = useState([]);
  const [hit_search, set_hit_search] = useState<boolean>(false);
  const [query, set_query] = useState<string>("");
  // const posts = await getAllPosts();
  useEffect(() => {
    if (hit_search) {
      call_open_api();
    }
  }, [hit_search]);
  const call_open_api = async () => {
    const book_data = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );
    const books_array = await book_data.json();
    console.log(books_array);
    set_books_array(books_array.docs);
  };
  useEffect(() => {
    console.log(books_array);
  }, [books_array]);
  console.log(isInView);
  return (
    <motion.div
      ref={ref}
      className="flex h-screen w-full flex-col items-center justify-center space-y-16 px-4 lg:px-0"
    >
      <div>
        <div
          className="flex flex-col space-y-3 items-center justify-center"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div>
            <img src="/logo/logo-nobg.svg" className="w-[32rem]" alt="" />
          </div>
          <div className="mt-5 pt-5">
            <button className="border-2 w-[15rem] border-solid border-orange-500 p-3">
              <span>Start</span>
              <span>{"->"}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// export const revalidate = 60;
