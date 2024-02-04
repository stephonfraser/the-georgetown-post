import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ScrollText from "./components/ScrollText";

export default function Home() {
  // const systemWidth = window.innerWidth;

  return (
    <main>
      <Header />
      <hr />
      <Navbar />
      <ScrollText />
      <section id='new-intro'>
        
      </section>
    </main>
  );
}
