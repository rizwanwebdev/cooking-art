import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedCategories from "../components/FeaturedCategories";
import AboutSection from "../components/AboutSection";
import PopularRecipesSection from "../components/PopularRecipesSection";
import SectionExplore from "../components/SectionExplore";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <AboutSection />
      <PopularRecipesSection />
      <SectionExplore />
      <FooterSection />
    </>
  );
};

export default Home;
