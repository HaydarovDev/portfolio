import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-[50%] flex justify-center items-center mx-auto flex-col">
        <HomePage />
        <Experiences />
        <Skills />
        <Brands />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
