import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ScrollText from "./components/ScrollText";
import FeaturedStory from "./components/FeaturedStory";
import NewsHero from "./components/NewsHero";

export default function Home() {
  // const systemWidth = window.innerWidth;

  return (
    <main>
      <Header />
      <hr />
      <Navbar />
      <ScrollText />
      <div className="top-news flex justify-center">
        <div className="news-hero-body flex justify-center">
          <NewsHero storyType={'latest'}/>
          <NewsHero storyType={'feature'}/>
          <NewsHero storyType={'today'}/>
        </div>
      </div>
    </main>
  );
}
