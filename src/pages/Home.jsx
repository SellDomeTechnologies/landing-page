import PageNav from "../components/PageNav";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Category from "../components/Category";
import Download from "../components/Download";
import Discovery from "../components/Discovery";

function Home() {
  return (
    <>
      <PageNav />
      <Header />
      <AboutUs />
      <Category />
      <Download />
      <Discovery />
    </>
  );
}

export default Home;
