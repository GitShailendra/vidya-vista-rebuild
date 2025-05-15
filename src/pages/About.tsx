
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-school-dark text-center mb-12">
            About Our School
          </h1>
          <AboutSection />
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-school-dark mb-6">Our History</h2>
            <p className="text-gray-600 mb-6">
              Sri Saraswathi Vidya Vihar was founded in 1988 with a vision to provide quality education that balances academic excellence with character development. Over the decades, we have grown from a small institution to one of the most respected educational establishments in the region.
            </p>
            <p className="text-gray-600 mb-6">
              Our school's journey has been marked by continuous improvement and adaptation to modern educational practices while staying true to our foundational values. Today, we proudly stand as an institution that nurtures thousands of young minds every year.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-school-dark mb-6">Our Philosophy</h2>
            <p className="text-gray-600 mb-6">
              At Sri Saraswathi Vidya Vihar, we believe in the holistic development of each child. Our educational approach focuses on nurturing not just academic excellence but also ethical values, social consciousness, and physical well-being.
            </p>
            <p className="text-gray-600 mb-6">
              We view education as a collaborative journey involving students, teachers, and parents. By creating a supportive learning environment, we enable our students to discover their potential and develop into responsible global citizens.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
