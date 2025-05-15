
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      className={`w-full ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
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
              <p className="text-xs text-school-dark">Empowering young minds since 1988</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <Link to="/" className="text-school-dark hover:text-school-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-school-dark hover:text-school-orange transition-colors">About</Link>
              </li>
              <li>
                <Link to="/academics" className="text-school-dark hover:text-school-orange transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-school-dark hover:text-school-orange transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-school-dark hover:text-school-orange transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-school-dark hover:text-school-orange transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/notices" className="text-school-dark hover:text-school-orange transition-colors">Notices</Link>
              </li>
              <li>
                <Link to="/contact" className="text-school-dark hover:text-school-orange transition-colors">Contact</Link>
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
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/academics" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Academics</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              </li>
              <li>
                <Link to="/notices" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Notices</Link>
              </li>
              <li>
                <Link to="/contact" className="text-school-dark hover:text-school-orange transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
