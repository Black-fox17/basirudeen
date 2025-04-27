import React, { useEffect } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Users,
  Brain,
  Send
} from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToPublications = () => {
    document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold text-blue-600">IB.</span>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Publications', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Ibrahim Temitope Badirudeen
            </h1>
            <p className="text-xl text-blue-600 mb-6">
              Environmental Health Researcher | Data Scientist | Educator
            </p>
            <button
              onClick={scrollToPublications}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View My Work <ChevronDown size={20} />
            </button>
          </div>
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile Picture 1"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="Profile Picture 2"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm passionate about environmental health, microbial ecology, and the impact of climate change on human well-being. With a background in biology education and data science, I bridge scientific research with technology to drive change.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />
                  <span>Ibadan, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" />
                  <a href="mailto:badirudeeenibro@gmail.com" className="hover:text-blue-600">
                    badirudeeenibro@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
              <GraduationCap className="text-blue-600" />
              Education
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Federal University Oye-Ekiti, Nigeria</h3>
              <p className="text-gray-600 mb-4">B.Sc(Ed) Biology Education (2021)</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  CGPA: 4.52/5.00 (90.4%)
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Class Rank: 1st of 116
                </span>
              </div>
              <p className="text-gray-700">
                <strong>Thesis:</strong> "Need for Effective Practical-Based Biology Teaching in Senior Secondary Schools in Nigeria."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
              <Briefcase className="text-blue-600" />
              Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Research Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Institute of Advanced Medical Research and Training (IMRAT)</h4>
                    <p className="text-gray-600">2024–Present</p>
                    <p className="text-gray-700 mt-2">Tissue sample preparation, DNA extraction, lab operations.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Solam Diagnostics and Clinics</h4>
                    <p className="text-gray-600">2024–Present</p>
                    <p className="text-gray-700 mt-2">Laboratory Assistant, diagnostic tests.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Teaching Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">National Youth Service Corps</h4>
                    <p className="text-gray-700">Biology Tutor</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bridge Water Foundation</h4>
                    <p className="text-gray-700">Volunteer Biology Tutor</p>
                  </div>
                  <div>
                    <h4 className="font-medium">St. Augustine Senior Secondary School</h4>
                    <p className="text-gray-700">Teaching Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
              <FileText className="text-blue-600" />
              Publications
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Vaccine Inequalities, Hesitancy, and Media-Focused Public Health Interventions in English-speaking West-African Countries
                </h3>
                <p className="text-gray-600">2024</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-flex items-center gap-2">
                  Read Paper <ExternalLink size={16} />
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Need For Practical Based Educational System in Oye-Ekiti Local Government Area of Nigeria
                </h3>
                <p className="text-gray-600">2021</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-flex items-center gap-2">
                  Read Paper <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
              <Brain className="text-blue-600" />
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Data Analysis</h4>
                    <p className="text-gray-700">Python, SPSS, SQL, Tableau, PowerBI</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Machine Learning</h4>
                    <p className="text-gray-700">Deep Learning, Statistical Analysis</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Laboratory Techniques</h4>
                    <p className="text-gray-700">DNA Extraction, Immunohistochemistry</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">Communication</div>
                  <div className="bg-white rounded-lg p-4 text-center">Problem Solving</div>
                  <div className="bg-white rounded-lg p-4 text-center">Teamwork</div>
                  <div className="bg-white rounded-lg p-4 text-center">Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
              <Send className="text-blue-600" />
              Get in Touch
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex gap-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ibrahim Temitope Badirudeen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;