import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#121212]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-[#0A2342] dark:text-white">
                SV<span className="text-[#2CA6A4]">.</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#333333] dark:text-[#E0E0E0] hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2CA6A4] dark:bg-[#3DB9B7] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                 href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-[#2CA6A4] hover:bg-[#249a98] dark:bg-[#3DB9B7] dark:hover:bg-[#35a3a1] rounded-md flex items-center"
                download
              >
                <FileDown className="w-4 h-4 mr-2" />
                Resume
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E] hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7]"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#2CA6A4] hover:bg-[#249a98] dark:bg-[#3DB9B7] dark:hover:bg-[#35a3a1] flex items-center"
            download
            onClick={toggleMenu}
          >
            <FileDown className="w-4 h-4 mr-2" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
