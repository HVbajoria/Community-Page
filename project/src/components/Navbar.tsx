import { NavLink } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-indigo-primary" />
              <span className="ml-2 text-xl font-bold text-indigo-primary">IndiGo</span>
            </NavLink>
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
            <NavLink to="/events" className="nav-link">Events</NavLink>
            <NavLink to="/courses" className="nav-link">Courses</NavLink>
            <NavLink to="/practice" className="nav-link">Practice</NavLink>
            <NavLink to="/mentorship" className="nav-link">Mentorship</NavLink>
            <NavLink to="/internships" className="nav-link">Internships</NavLink>
            <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
            <NavLink to="/articles" className="nav-link">Articles</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;