import Head from "next/head";
import NavBar from "@/components/UI/NavBar";

import Header from "@/components/Header.js";
import { useState } from "react";
import SideBar from "@/components/UI/SideBar";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import Services from "@/components/Services";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [showingNav, setShowingNav] = useState(false);

  const toggleNav = () => {
    setShowingNav((prevState) => !prevState);
  };
  const closeNav = () => {
    setShowingNav(false);
  };

  return (
    <>
      <Head>
        <title>Beretta Electric</title>
        <meta
          name="description"
          content="Beretta Electric Electricians. Servicing Vernon, Kelowna, Lake Country, and the Okagan for over 18 years"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:3000/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <div>
        <NavBar></NavBar>
        <Header showingNav={showingNav} onToggleNav={toggleNav}></Header>
        <div onClick={closeNav}>
          <MainPage></MainPage>
          <Services></Services>

          <Testimonials></Testimonials>
          <AboutUs></AboutUs>
          <Footer></Footer>
        </div>

        {showingNav && <SideBar onCloseNav={closeNav}></SideBar>}
      </div>
      <Analytics />
    </>
  );
}
