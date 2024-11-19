import PageBanner from '../components/PageBanner';
import EventCard from '../components/EventCard';

const FEATURED_EVENTS = [
  {
    id: 1,
    title: "Aviation Career Summit 2024",
    date: "March 25, 2024",
    location: "Mumbai International Airport",
    attendees: 500,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    description: "Join industry leaders for a day of insights into aviation careers and networking opportunities."
  },
  {
    id: 2,
    title: "Aircraft Maintenance Workshop",
    date: "April 5, 2024",
    location: "Delhi Technical Center",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80",
    description: "Hands-on workshop covering the latest in aircraft maintenance technologies and procedures."
  },
  {
    id: 3,
    title: "Future of Aviation Conference",
    date: "April 15, 2024",
    location: "Bangalore Convention Center",
    attendees: 750,
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80",
    description: "Explore emerging trends and technologies shaping the future of aviation."
  }
];

const AMBASSADOR_EVENTS = [
  {
    id: 4,
    title: "Campus Aviation Day",
    date: "March 30, 2024",
    location: "IIT Delhi",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1622363470777-ae9d1876a3d5?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A day of aviation activities, career guidance, and interactive sessions."
  },
  {
    id: 5,
    title: "Aviation Safety Seminar",
    date: "April 10, 2024",
    location: "BITS Pilani",
    attendees: 250,
    image: "https://plus.unsplash.com/premium_photo-1679758630196-a284f1466313?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn about the latest in aviation safety protocols and best practices."
  },
  {
    id: 6,
    title: "IndiGo Career Connect",
    date: "April 20, 2024",
    location: "VIT Vellore",
    attendees: 400,
    image: "https://images.unsplash.com/photo-1723137664649-3bb988fc221d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Connect with IndiGo recruiters and learn about career opportunities."
  }
];

const EventsPage = () => {
  return (
    <div className="pb-16">
      <PageBanner 
        title="Events that are On time. Every Time" 
        subtitle="Join us for exciting aviation events and experiences"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">
        {/* Featured Events Section */}
        <section>
          <h2 className="section-title">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_EVENTS.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Ambassador Events Section */}
        <section>
          <h2 className="section-title">Community Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMBASSADOR_EVENTS.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;