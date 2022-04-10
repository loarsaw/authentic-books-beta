import React from "react";
import Appbar from "@/components/contact/contactappbar";
import Footer from "@/components/footer";
import About from "@/components/about/about";
import Head from "next/head";
function about() {
  return (
    <>
      <Head>
        <title> About Us </title>
        {/* <meta
          property="og:t"
          content={"Get The List of Authentic Books"}
        /> */}
      </Head>
      <Appbar />
      <About />
      <Footer />
    </>
  );
}

export default about;
