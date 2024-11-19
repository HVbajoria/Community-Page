import PageBanner from '../components/PageBanner';
import CourseCard from '../components/CourseCard';

const COURSES = [
  {
    id: 1,
    title: "Introduction to Aviation",
    duration: "4 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1723137664649-3bb988fc221d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn the basics of aviation and get an overview of the industry.",
  },
  {
    id: 2,
    title: "Aircraft Maintenance",
    duration: "6 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1624562821266-3339f8e0d9da?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the principles and practices of aircraft maintenance.",
  },
  {
    id: 3,
    title: "Air Traffic Control",
    duration: "8 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1723056450524-7a073217bbe0?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gain knowledge about air traffic control systems and procedures.",
  },
  {
    id: 4,
    title: "Aviation Safety",
    duration: "5 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1656261538631-3e1d3964763b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn about aviation safety protocols and best practices.",
  },
  {
    id: 5,
    title: "Pilot Training",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1622363470777-ae9d1876a3d5?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get hands-on training to become a certified pilot.",
  },
  {
    id: 6,
    title: "Airport Management",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1661242951122-718c734a3323?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the management aspects of airport operations.",
  },
];

const CoursesPage = () => {
  return (
    <div>
      <PageBanner 
        title="Let's start with your aviation journey" 
        subtitle="Learn from industry experts"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

        {/* Ambassador Events Section */}
        <section>
          <h2 className="section-title">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((event) => (
              <CourseCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;