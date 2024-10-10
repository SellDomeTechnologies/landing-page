//Home.jsx
import { useEffect, useState } from 'react';
import AboutUs from "../components/AboutUs";
import Category from "../components/Category";
import Discovery from "../components/Discovery";
import Download from "../components/Download";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Market from "../components/Market";
import PageNav from "../components/PageNav";
import Today from "../components/Today";
import TransparentPageNav from "../components/TransparentPageNav";
import Work from "../components/Work";

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isInHeader, setIsInHeader] = useState(true);

  const handleVideoPlayingChange = (isPlaying) => {
    setIsVideoPlaying(isPlaying);
  };

  useEffect(() => {
    const header = document.querySelector('header');
    
    const handleScroll = () => {
      if (header) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        const isStillInHeader = window.scrollY < headerBottom;
        setIsInHeader(isStillInHeader);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldShowTransparentNav = isVideoPlaying && isInHeader;

  return (
    <>
      {shouldShowTransparentNav ? <TransparentPageNav /> : <PageNav />}
      <Header onVideoPlayingChange={handleVideoPlayingChange} />
      <Main>
        <AboutUs />
        <Category />
        <Download />
        <Discovery />
        <Feature />
        <Market />
        <Work />
        <Today />
      </Main>
      <Footer />
    </>
  );
}

export default Home;