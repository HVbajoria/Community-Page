import { Ticket, BookOpen, Target, Users, Briefcase, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

const SECTIONS = [
  {
    title: "Events to level you up",
    icon: Ticket,
    subtitle: "Checkout the latest events",
    link: "/events",
    items: [
      {
        title: "Aviation Career Quiz",
        image: "https://plus.unsplash.com/premium_photo-1661699856470-a49813219e13?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Are you ready to takeup this challenge? Test your knowledge on aviation, career opportunities and more."
      },
      {
        title: "Aircraft Maintenance Workshop",
        image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80",
        description: "Hands-on workshop covering the latest in aircraft maintenance technologies and procedures."
      },
      {
        title: "Aviation Safety Quiz",
        image: "https://plus.unsplash.com/premium_photo-1723527890050-0b688370e70f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Test your knowledge about the latest in aviation safety protocols and best practices to maintain technologies and procedures."
      }
    ]
  },
  {
    title: "Start your Aviation Journey",
    icon: BookOpen,
    subtitle: "Learn from industry experts",
    link: "/courses",
    items: [
      {
        title: "Aviation Management Fundamentals",
        image: "https://images.unsplash.com/photo-1615561916422-7014e1078997?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Master the basics of aviation management and operations."
      },
      {
        title: "A Day In The Life Of Aircraft Crew",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Comprehensive guide to aircraft systems and safety protocols."
      },
      {
        title: "Aviation Law & Regulations",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZpYXRpb24lMjBsYXd8ZW58MHx8MHx8fDA%3D",
        description: "Understanding legal frameworks in aviation industry."
      }
    ]
  },
  {
    title: "Begin Practicing",
    icon: Target,
    subtitle: "Test your aviation knowledge",
    link: "/practice",
    items: [
      {
        title: "Flight Operations Quiz",
        image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80",
        description: "Test your knowledge of flight operations and procedures."
      },
      {
        title: "Aviation Safety Assessment",
        image: "https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Evaluate your understanding of aviation safety protocols."
      },
      {
        title: "Air Traffic Control Simulation",
        image: "https://images.unsplash.com/photo-1604126993331-f5bed6855540?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Practice ATC communication and coordination."
      }
    ]
  },
  {
    title: "Level Up with Aviation Experts",
    icon: Users,
    subtitle: "Connect with mentors",
    link: "/mentorship",
    items: [
      {
        title: "Reena Mansukhani",
        image: "./src/Assests/mentor-1.png",
        description: "Brand Marketing Specialist | Head of Customer Marketing - IndiGo"
      },
      {
        title: "Shitiz Dogra",
        image: "./src/Assests/mentor-2.png",
        description: "Associate Director - Digital Marketing at IndiGo"
      },
      {
        title: "Surender Singh",
        image: "./src/Assests/mentor-3.png",
        description: "Head of Security operations, Indigo at InterGlobe Aviation Ltd(INDIGO)"
      }
    ]
  },
  {
    title: "Let's step in!",
    icon: Briefcase,
    subtitle: "Explore internship opportunities",
    link: "/internships",
    items: [
      {
        title: "Flight Operations Intern",
        image: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "6-month internship in flight operations department."
      },
      {
        title: "Aviation Marketing Intern",
        image: "https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "3-month marketing & communications internship."
      },
      {
        title: "Technical Services Intern",
        image: "https://images.unsplash.com/photo-1656261538631-3e1d3964763b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Engineering internship in aircraft maintenance."
      }
    ]
  },
  {
    title: "The time is now",
    icon: Briefcase,
    subtitle: "Find your dream job",
    link: "/jobs",
    items: [
      {
        title: "Senior First Officer",
        image: "https://plus.unsplash.com/premium_photo-1661514072657-63edb8794035?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Join our expanding fleet of A320 aircraft."
      },
      {
        title: "Aviation Safety Manager",
        image: "https://plus.unsplash.com/premium_photo-1661503434195-561b05edb0af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lead safety initiatives across operations."
      },
      {
        title: "Ground Operations Supervisor",
        image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80",
        description: "Manage ground handling operations at major hubs."
      }
    ]
  },
  {
    title: "Know about the latest advancements",
    icon: Newspaper,
    subtitle: "Stay updated with aviation news",
    link: "/articles",
    items: [
      {
        title: "Take off to ‘French Riviera of the East’",
        image: "https://images.unsplash.com/photo-1726409410412-03417e9571b7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "IndiGo announces Puducherry as the 89th domestic destination"
      },
      {
        title: "Explore Malaysia's Pristine Coastline",
        image: "https://images.unsplash.com/photo-1661242951122-718c734a3323?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fly Direct from Bengaluru to Langkawi with IndiGo"
      },
      {
        title: "IndiGo and Spotify partners!",
        image: "https://images.unsplash.com/photo-1622363470777-ae9d1876a3d5?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Now, wherever you travel, there’s a 6E playlist for that!"
      }
    ]
  }
];

const HomePage = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner */}
<section className="bg-gradient-to-b from-indigo-900 to-transparent text-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl mb-4"
    >
      IndiGo Community
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl"
    >
      On time. Every Time.
    </motion.p>
  </div>
</section>

{/* New Banner Section */}
<section className="relative bg-cover bg-center pt-32 py-20" style={{ backgroundImage: 'url(/src/Assests/Indigo.png)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  </div>
</section>

{/* Section Below Banner */}
<section className="bg-gradient-to-t from-indigo-900 to-transparent py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Content for the section below the banner */}
  </div>
</section>

{/* Leaderboard Section */}
      <Leaderboard />

      {/* Quick Links Sections */}
      {SECTIONS.map((section) => (
        <section key={section.title} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <section.icon className="w-8 h-8 text-indigo-secondary mr-3" />
              <div>
                <h2 className="section-title mb-1">{section.title}</h2>
                <p className="text-gray-600">{section.subtitle}</p>
              </div>
            </div>
            <Link 
            to={section.link} 
            className="btn-secondary" 
            style={{ backgroundColor: "#001B94", color: "#ffffff" }}
            >
            View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <Link 
                    to={section.link} 
                    className="btn-primary w-full inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;