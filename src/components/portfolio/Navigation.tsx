import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/2 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('#')}
          >
            <span className={'text-white'}>
              Tatwik Sai
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium cursor-pointer transition-colors hover:text-blue-600 ${
                  'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-5 w-5 ${'text-white'}`} />
            ) : (
              <Menu className={`h-5 w-5 ${'text-white'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hiddenbg-white/2 backdrop-blur-xl shadow-md border-t border-[#ffffff1a]">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/3 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;