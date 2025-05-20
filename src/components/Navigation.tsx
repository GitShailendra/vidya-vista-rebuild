
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`w-full ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/school-logo.png" 
              alt="Sri Saraswathi Vidya Vihar Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/60x60?text=SSVV";
              }}
            />
            <div className="ml-3 hidden md:block">
              <h1 className="text-school-blue font-serif text-lg font-semibold leading-tight">
                Sri Saraswathi Vidya Vihar
              </h1>
              <p className="text-xs text-school-dark font-nunito">Empowering young minds since 1988</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 text-sm font-medium font-poppins">
              <li>
                <Link to="/" className={`transition-colors border-b-2 pb-1 ${isActive('/') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`transition-colors border-b-2 pb-1 ${isActive('/about') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>About</Link>
              </li>
              <li>
                <Link to="/academics" className={`transition-colors border-b-2 pb-1 ${isActive('/academics') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Academics</Link>
              </li>
              <li>
                <Link to="/facilities" className={`transition-colors border-b-2 pb-1 ${isActive('/facilities') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className={`transition-colors border-b-2 pb-1 ${isActive('/admissions') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className={`transition-colors border-b-2 pb-1 ${isActive('/gallery') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Gallery</Link>
              </li>
              <li>
                <Link to="/notices" className={`transition-colors border-b-2 pb-1 ${isActive('/notices') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Notices</Link>
              </li>
              <li>
                <Link to="/contact" className={`transition-colors border-b-2 pb-1 ${isActive('/contact') ? 'border-school-orange text-school-orange' : 'border-transparent text-school-dark hover:text-school-orange'}`}>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-school-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4 font-poppins">
              <li>
                <Link to="/" className={`block py-2 ${isActive('/') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`block py-2 ${isActive('/about') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>About</Link>
              </li>
              <li>
                <Link to="/academics" className={`block py-2 ${isActive('/academics') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Academics</Link>
              </li>
              <li>
                <Link to="/facilities" className={`block py-2 ${isActive('/facilities') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className={`block py-2 ${isActive('/admissions') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className={`block py-2 ${isActive('/gallery') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Gallery</Link>
              </li>
              <li>
                <Link to="/notices" className={`block py-2 ${isActive('/notices') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Notices</Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 ${isActive('/contact') ? 'text-school-orange font-medium' : 'text-school-dark'}`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
