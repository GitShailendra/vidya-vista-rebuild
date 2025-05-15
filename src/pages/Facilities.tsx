
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Spacious and well-ventilated classrooms equipped with smart boards and digital learning aids for an enhanced learning experience.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
    },
    {
      title: "Library",
      description: "A well-stocked library with a wide range of books, periodicals, and digital resources to foster reading habits and research skills.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800"
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art science laboratories for Physics, Chemistry, and Biology with modern equipment and safety features.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
    },
    {
      title: "Computer Lab",
      description: "A fully equipped computer lab with high-speed internet connectivity and the latest software to develop digital literacy among students.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800"
    },
    {
      title: "Sports Facilities",
      description: "Extensive sports facilities including a playground, basketball court, volleyball court, and indoor games area for physical development.",
      image: "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=800"
    },
    {
      title: "Auditorium",
      description: "A spacious auditorium for conducting school assemblies, cultural programs, and other events with modern audio-visual equipment.",
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-school-dark text-center mb-12">
            School Facilities
          </h1>
          
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Sri Saraswathi Vidya Vihar offers excellent infrastructure and facilities to support academic, co-curricular, and extracurricular activities. Our campus is designed to provide a conducive environment for learning and overall development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x400?text=Facility+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-dark">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Facilities;
