import About from "./components/About";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <main className="w-full">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
