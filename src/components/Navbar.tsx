import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <a href="#home" className="text-2xl font-bold text-gray-100 dark:text-gray-100 flex items-center">
          SV<span className="text-[#2CA6A4] dark:text-[#3DB9B7] ml-1">.</span>
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="relative text-gray-300 hover:text-[#2CA6A4] dark:text-gray-300 dark:hover:text-[#3DB9B7] px-2 py-1 font-medium transition"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2CA6A4] dark:bg-[#3DB9B7] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
          className="ml-4 px-4 py-2 bg-[#2CA6A4] hover:bg-[#21867a] dark:bg-[#3DB9B7] dark:hover:bg-[#2a9290] text-white font-medium rounded-md flex items-center transition shadow-sm"
          download
        >
          <FileDown className="w-4 h-4 mr-2" /> Resume
        </a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full text-gray-300 hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleDarkMode}
          className="p-2 mr-2 rounded-full text-gray-300 hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-300 hover:bg-gray-800 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-sm shadow-lg`}>
    <div className="px-4 pt-4 pb-6 space-y-2">
      {navLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          onClick={toggleMenu}
          className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-[#2CA6A4] transition"
        >
          {link.name}
        </a>
      ))}
      <a
        href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
        className="block px-3 py-2 mt-2 rounded-md bg-[#2CA6A4] hover:bg-[#21867a] text-white font-medium text-center transition"
        download
        onClick={toggleMenu}
      >
        <FileDown className="w-4 h-4 inline-block mr-2" /> Resume
      </a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
