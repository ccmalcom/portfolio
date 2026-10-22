import {
  Navigation,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1} className="focus:outline-none pt-12 md:pt-10 lg:pt-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
