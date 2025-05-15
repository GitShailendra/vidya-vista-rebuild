
import { Link } from 'react-router-dom';

const AcademicsSection = () => {
  return (
    <section className="py-20 bg-white" id="academics">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark inline-block relative">
            Academics & Activities
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-school-orange"></span>
          </h2>
          <p className="mt-6 text-gray-600">
            Our curriculum is designed to develop, nurture and enhance both analytical and creative learning abilities. Students are encouraged to explore Science, Arts, Technology, and Sports in an engaging environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
                alt="Academic Programs"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-dark/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-serif font-bold">Academic Programs</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Primary School (Classes 1-5)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Middle School (Classes 6-8)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>High School (Classes 9-10)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Special Focus on STEM Education</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Language Labs & Digital Libraries</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/academics" 
                  className="inline-flex items-center font-medium text-school-blue hover:text-school-orange transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1200"
                alt="Co-Curricular Activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-dark/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-serif font-bold">Co-Curricular Activities</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Sports & Athletics Programs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Cultural & Performing Arts</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Clubs & Student Societies</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Educational Tours & Field Trips</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-school-orange mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Community Service Projects</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/activities" 
                  className="inline-flex items-center font-medium text-school-blue hover:text-school-orange transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/academics" 
            className="bg-school-blue hover:bg-school-blue/90 text-white font-medium px-8 py-3 rounded-md transition-all transform hover:scale-105 inline-flex items-center"
          >
            Explore Academics
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
