
import Navigation from '../components/Navigation';
import AcademicsSection from '../components/AcademicsSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Academics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-school-dark text-center mb-12">
            Academics
          </h1>
          
          <AcademicsSection />
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-school-dark mb-6">Curriculum Overview</h2>
            <p className="text-gray-600 mb-6">
              Our curriculum is designed to meet national educational standards while incorporating innovative teaching methods. We focus on creating a balance between theoretical knowledge and practical application.
            </p>
            <p className="text-gray-600 mb-6">
              The academic program is structured to encourage critical thinking, problem-solving, and creativity. Our teachers use a variety of instructional strategies to accommodate different learning styles and ensure that every student can succeed.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-school-dark mb-6">Faculty</h2>
            <p className="text-gray-600 mb-6">
              Our teaching staff consists of highly qualified and experienced educators who are passionate about teaching. They regularly participate in professional development programs to stay updated with the latest educational methodologies.
            </p>
            <p className="text-gray-600 mb-6">
              The teacher-student ratio is maintained at an optimal level to ensure personalized attention for each student. Our faculty members are not just teachers but mentors who guide students in their academic and personal growth.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Academics;
