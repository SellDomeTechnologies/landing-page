//Home.jsx
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
import Work from "../components/Work";

function Home() {
  return (
    <>
      <PageNav />
      <Header />
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
