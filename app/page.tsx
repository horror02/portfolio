import Image from "next/image";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black bg-[#D4D4D4]">
      <main className="w-full">
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  );
}
