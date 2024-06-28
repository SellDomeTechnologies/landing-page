import PageNav from "../components/PageNav";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Category from "../components/Category";
import Download from "../components/Download";
import Discovery from "../components/Discovery";
import Feature from "../components/Feature";
import Market from "../components/Market";
import Work from "../components/Work";
import Today from "../components/Today";
import Main from "../components/Main";

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
    </>
  );
}

export default Home;
