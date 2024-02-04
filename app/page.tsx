import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ScrollText from "./components/ScrollText";
import FeaturedStory from "./components/FeaturedStory";

export default function Home() {
  // const systemWidth = window.innerWidth;

  return (
    <main>
      <Header />
      <hr />
      <Navbar />
      <ScrollText />
      <div className="top-news flex justify-center">
        <FeaturedStory storyType={'feature'}/>
        <FeaturedStory storyType={'latest'}/>
        <FeaturedStory storyType={'feature'}/>
      </div>
    </main>
  );
}
