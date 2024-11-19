import PageBanner from '../components/PageBanner';
import InternshipCard from '../components/InternshipCard';

const INTERNSHIPS = [
  {
    id: 1,
    title: "Aviation Basics Intern",
    duration: "3 months",
    location: "New York, USA",
    stipend: "$1000/month",
    logo: "https://plus.unsplash.com/premium_photo-1661505014355-9b2db23156e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gain hands-on experience in the fundamentals of aviation and aircraft mechanics. Ideal for students passionate about the aviation industry.",
  },
  {
    id: 2,
    title: "Aircraft Maintenance Intern",
    duration: "6 months",
    location: "Seattle, USA",
    stipend: "$1200/month",
    logo: "https://images.unsplash.com/photo-1444313431167-e7921088a9d3?q=80&w=2775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Work alongside experienced technicians to learn about troubleshooting and repairing a wide range of aircraft systems.",
  },
  {
    id: 3,
    title: "Air Traffic Control Intern",
    duration: "4 months",
    location: "Los Angeles, USA",
    stipend: "$1100/month",
    logo: "https://plus.unsplash.com/premium_photo-1661963310327-33cdaadd4aab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Assist in managing air traffic operations and ensure the safe and efficient flow of flights in real-time environments.",
  },
  {
    id: 4,
    title: "Aviation Safety Intern",
    duration: "5 months",
    location: "Chicago, USA",
    stipend: "$1000/month",
    logo: "https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn about aviation safety protocols, regulatory compliance, and accident prevention strategies in a professional setting.",
  },
  {
    id: 5,
    title: "Pilot Training Intern",
    duration: "6 months",
    location: "Dallas, USA",
    stipend: "Unpaid",
    logo: "https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Participate in pilot training programs to understand the process of obtaining certifications and licenses.",
  },
  {
    id: 6,
    title: "Airport Management Intern",
    duration: "3 months",
    location: "Atlanta, USA",
    stipend: "$800/month",
    logo: "https://plus.unsplash.com/premium_photo-1683121186741-c939cdec8bc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get exposure to airport operations, resource planning, and scheduling in a fast-paced environment.",
  },
];

const InternshipsPage = () => {
  return (
    <div>
      <PageBanner 
        title="Let's Step In!" 
        subtitle="Start your aviation career with IndiGo"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

{/* Ambassador Events Section */}
<section>
  <h2 className="section-title">Internship Openings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {INTERNSHIPS.map((event) => (
      <InternshipCard key={event.id} {...event} />
    ))}
  </div>
</section>
</div>
    </div>
  );
};

export default InternshipsPage;