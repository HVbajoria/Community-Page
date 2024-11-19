import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import CoursesPage from './pages/CoursesPage';
import PracticePage from './pages/PracticePage';
import MentorshipPage from './pages/MentorshipPage';
import InternshipsPage from './pages/InternshipsPage';
import JobsPage from './pages/JobsPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;