import React from "react";
import AppBar from "@/components/contact/contactappbar";
import Content from "@/components/contact/content";
import Footer from "@/components/footer";
import Head from "next/head";
function contact() {
  return (
    <>
    <Head>
        <title> Contact Us </title>
        {/* <meta
          property="og:t"
          content={"Get The List of Authentic Books"}
        /> */}
      </Head>
      <AppBar />
      <Content />
      <Footer />
    </>
  );
}

export default contact;
