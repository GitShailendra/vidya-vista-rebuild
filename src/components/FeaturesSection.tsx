
import { BookOpen, Users, Monitor, Heart } from 'lucide-react';
import FloatingPencil from './decorative/FloatingPencil';
import FloatingBook from './decorative/FloatingBook';
import PatternBackground from './decorative/PatternBackground';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-school-blue" />,
      title: "35+ Years Legacy",
      description: "Established in 1988 with a focus on all-around excellence"
    },
    {
      icon: <Users className="w-10 h-10 text-school-blue" />,
      title: "Experienced Faculty",
      description: "Over 50 years of collective teaching experience with modern methods"
    },
    {
      icon: <Monitor className="w-10 h-10 text-school-blue" />,
      title: "Smart Classrooms",
      description: "Digitally enhanced learning in every classroom"
    },
    {
      icon: <Heart className="w-10 h-10 text-school-blue" />,
      title: "Holistic Growth",
      description: "Focus on academics, values, arts, and social empathy"
    },
  ];

  return (
    <section className="py-16 bg-school-soft-yellow relative overflow-hidden" id="features">
      {/* Decorative pattern background */}
      <PatternBackground patternType="pencils" color="#FFC700" opacity="0.05" />
      
      {/* Floating decorative elements */}
      <FloatingPencil className="top-12 left-[10%] -rotate-12" delay="0.2s" color="#E63946" />
      <FloatingBook className="top-20 right-[15%]" delay="0.5s" size="lg" />
      <FloatingPencil className="bottom-12 left-[20%] rotate-45" delay="0.8s" size="lg" />
      <FloatingBook className="bottom-24 right-[10%]" delay="1.2s" color="#FF6B00" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark inline-block relative">
            Why Choose Us
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-school-orange"></span>
          </h2>
          <p className="mt-6 text-gray-600">
            Choosing the right school for your child is a crucial decision. Here's why parents trust us with their children's education and future.
          </p>
          
          {/* Small decorative pencil near the heading */}
          <FloatingPencil className="right-0 -top-2 -rotate-12" size="sm" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 border-t-4 border-school-blue animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-school-soft-blue inline-flex p-3 rounded-lg mb-4 relative overflow-hidden">
                {feature.icon}
                {/* Add small decorative element to each card */}
                {index % 2 === 0 ? (
                  <div className="absolute -right-1 -bottom-1 opacity-10 w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-school-blue">
                      <path d="M21.721 2.25c-1.3-.589-2.445-.911-3.518-.911-.79 0-1.547.149-2.29.45-1.347.546-2.556 1.67-3.913 3.157-.299.33-.652.75-1.02 1.213L4.33 8.501c-.849.218-1.534.67-2.012 1.332-.634.883-.9 2.038-.799 3.47.09 1.267.292 2.503.57 3.704.255 1.097.604 2.117 1.058 3.081l.205.15c.31.23.658.345 1.016.345.435 0 .948-.16 1.438-.478a5.8 5.8 0 0 0 .463-.368 7.053 7.053 0 0 0 1.97.275c1.118 0 2.088-.205 2.936-.62.938-.457 1.764-1.233 2.505-2.37.648-1.008 1.19-2.161 1.67-3.518.478-1.355.861-2.738 1.15-4.154a.471.471 0 0 0-.265-.51 12.094 12.094 0 0 0-4.036-.967s.04-.4.11-.113c.066-.11.138-.232.214-.358.51-.853 1.12-1.776 1.866-2.596C13.995 4.77 14.353 4.42 14.716 4.1c.55-.48 1.068-.934 1.58-1.312.94-.693 1.742-1.055 2.435-1.105a3.267 3.267 0 0 1 1.75.48c.2.137.391.3.576.49a.39.39 0 0 0 .26.102.399.399 0 0 0 .26-.102.398.398 0 0 0 .144-.403z" />
                    </svg>
                  </div>
                ) : (
                  <div className="absolute -right-1 -bottom-1 opacity-10 w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-school-blue">
                      <path d="M4 19.5C4.82843 19.5 5.5 18.8284 5.5 18V6.5C5.5 4.84315 6.84315 3.5 8.5 3.5H15.2C15.7523 3.5 16.2 3.94772 16.2 4.5C16.2 5.05228 15.7523 5.5 15.2 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5V18C7.5 18.8284 8.17157 19.5 9 19.5H19C19.8284 19.5 20.5 18.8284 20.5 18V12.5C20.5 11.9477 20.9477 11.5 21.5 11.5C22.0523 11.5 22.5 11.9477 22.5 12.5V18C22.5 19.933 20.933 21.5 19 21.5H9C7.067 21.5 5.5 19.933 5.5 18C5.5 17.4477 5.05228 17 4.5 17C3.94772 17 3.5 17.4477 3.5 18C3.5 19.933 5.067 21.5 7 21.5H18.5C19.0523 21.5 19.5 21.0523 19.5 20.5C19.5 19.9477 19.0523 19.5 18.5 19.5H7C6.17157 19.5 5.5 18.8284 5.5 18C5.5 17.1716 4.82843 16.5 4 16.5C3.17157 16.5 2.5 17.1716 2.5 18C2.5 20.4853 4.51472 22.5 7 22.5H18.5C19.6046 22.5 20.5 21.6046 20.5 20.5C20.5 19.3954 19.6046 18.5 18.5 18.5H7C6.44772 18.5 6 18.0523 6 17.5C6 16.9477 6.44772 16.5 7 16.5H18.5C19.0523 16.5 19.5 16.0523 19.5 15.5C19.5 14.9477 19.0523 14.5 18.5 14.5H13C11.8954 14.5 11 13.6046 11 12.5C11 11.3954 11.8954 10.5 13 10.5H19C19.5523 10.5 20 10.0523 20 9.5C20 8.94772 19.5523 8.5 19 8.5H13C10.7909 8.5 9 10.2909 9 12.5C9 14.7091 10.7909 16.5 13 16.5H18.5C20.1569 16.5 21.5 15.1569 21.5 13.5C21.5 11.8431 20.1569 10.5 18.5 10.5H13C12.4477 10.5 12 10.0523 12 9.5C12 8.94772 12.4477 8.5 13 8.5H19C20.6569 8.5 22 7.15685 22 5.5C22 3.84315 20.6569 2.5 19 2.5H8.5C5.73858 2.5 3.5 4.73858 3.5 7.5V18C3.5 18.8284 2.82843 19.5 2 19.5C1.17157 19.5 0.5 18.8284 0.5 18C0.5 15.5147 2.51472 13.5 5 13.5C5.55228 13.5 6 13.0523 6 12.5C6 11.9477 5.55228 11.5 5 11.5C1.41015 11.5 -1.5 14.4101 -1.5 18C-1.5 21.5899 1.41015 24.5 5 24.5C8.58985 24.5 11.5 21.5899 11.5 18C11.5 17.4477 11.0523 17 10.5 17C9.94772 17 9.5 17.4477 9.5 18C9.5 20.4853 7.48528 22.5 5 22.5C2.51472 22.5 0.5 20.4853 0.5 18C0.5 15.5147 2.51472 13.5 5 13.5" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-school-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
