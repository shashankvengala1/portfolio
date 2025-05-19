import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Specify the type: number | null (browser setTimeout returns number)
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If a timeout is already set, do nothing (debounce)
      if (scrollTimeout.current !== null) return;

      scrollTimeout.current = window.setTimeout(() => {
        if (window.scrollY > 500) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
        scrollTimeout.current = null;
      }, 100); // 100ms debounce
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="bg-[#0A2342] dark:bg-[#0A1525] text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                Shashank
                <span className="text-[#2CA6A4] dark:text-[#3DB9B7]">.</span>
              </h2>
              <p className="mt-2 text-gray-300">
                Database Developer & Data Engineer
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Experience
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">More</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certifications"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
                      className="hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors"
                      download
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Shashank Vengala. All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Database Developer & Data Engineer
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#2CA6A4] dark:bg-[#3DB9B7] text-white shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;
