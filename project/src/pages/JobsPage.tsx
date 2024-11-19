import PageBanner from '../components/PageBanner';
import InternshipCard from '../components/InternshipCard';

const JOBS = [
  {
    id: 1,
    title: "Aviation Basics Specialist",
    duration: "Full-time",
    location: "New York, USA",
    stipend: "$70,000/year",
    logo: "https://plus.unsplash.com/premium_photo-1661505014355-9b2db23156e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Apply your expertise to teach and implement aviation basics and aircraft mechanics in a dynamic professional environment.",
  },
  {
    id: 2,
    title: "Aircraft Maintenance Engineer",
    duration: "Full-time",
    location: "Seattle, USA",
    stipend: "$85,000/year",
    logo: "https://images.unsplash.com/photo-1444313431167-e7921088a9d3?q=80&w=2775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Be a key player in maintaining and repairing diverse aircraft systems in a professional maintenance facility.",
  },
  {
    id: 3,
    title: "Air Traffic Controller",
    duration: "Full-time",
    location: "Los Angeles, USA",
    stipend: "$95,000/year",
    logo: "https://plus.unsplash.com/premium_photo-1661963310327-33cdaadd4aab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Manage air traffic operations to ensure the safe and efficient flow of flights in one of the busiest airspaces.",
  },
  {
    id: 4,
    title: "Aviation Safety Officer",
    duration: "Full-time",
    location: "Chicago, USA",
    stipend: "$75,000/year",
    logo: "https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Oversee safety protocols, ensure regulatory compliance, and develop strategies for accident prevention in aviation operations.",
  },
  {
    id: 5,
    title: "Pilot Trainer",
    duration: "Full-time",
    location: "Dallas, USA",
    stipend: "$90,000/year",
    logo: "https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Train aspiring pilots to achieve certifications and licenses, utilizing advanced training methods and simulators.",
  },
  {
    id: 6,
    title: "Airport Operations Manager",
    duration: "Full-time",
    location: "Atlanta, USA",
    stipend: "$80,000/year",
    logo: "https://plus.unsplash.com/premium_photo-1683121186741-c939cdec8bc3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lead airport operations, manage resource planning, and ensure seamless coordination in a high-paced environment.",
  },
];


const JobsPage = () => {
  return (
    <div>
      <PageBanner 
        title="The time is now" 
        subtitle="Find your dream job in aviation"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

{/* Ambassador Events Section */}
<section>
  <h2 className="section-title">Job Openings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {JOBS.map((event) => (
      <InternshipCard key={event.id} {...event} />
    ))}
  </div>
</section>
</div>
    </div>
  );
};

export default JobsPage;