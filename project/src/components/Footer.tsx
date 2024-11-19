import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Plane className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">IndiGo</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering the next generation of aviation professionals through education, mentorship, and opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
              <li><Link to="/practice" className="text-gray-300 hover:text-white">Practice</Link></li>
              <li><Link to="/mentorship" className="text-gray-300 hover:text-white">Mentorship</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Opportunities</h3>
            <ul className="space-y-2">
              <li><Link to="/internships" className="text-gray-300 hover:text-white">Internships</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white">Jobs</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-white">Articles</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-secondary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-secondary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-secondary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-secondary"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-secondary"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-dark pt-8 text-center">
          <p className="text-gray-300">
            Powered by <a href="https://unstop.com" className="text-indigo-secondary hover:text-indigo-accent">Unstop</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;