import PageBanner from '../components/PageBanner';
import MentorCard from '../components/MentorCard';

const MENTORS = [
  {
    id: 1,
    name: "Reena Mansukhani",
    expertise: "Brand Marketing Specialist | Head of Customer Marketing - IndiGo |",
    experience: "27+ years",
    profileImage: "./src/Assests/mentor-1.png",
    bio: "A dynamic, extremely passionate & entrepreneurial spirited professional with 16+ years of rich industry experience",
  },
  {
    id: 2,
    name: "Shitiz Dogra",
    expertise: "Associate Director - Digital Marketing at IndiGo",
    experience: "13+ years",
    profileImage: "./src/Assests/mentor-2.png",
    bio: "Brand Management | Marketing Communications | Corporate Communications | MICA | NSIT | ",
  },
  {
    id: 3,
    name: "Surender Singh",
    expertise: "Head of Security operations, Indigo at InterGlobe Aviation Ltd(INDIGO)",
    experience: "17+ years",
    profileImage: "./src/Assests/mentor-4.png",
    bio: "Worked in CISF for 22 years before opting for VRS.Post VR from service, joined M/s Rhiti Sports Management",
  },
  {
    id: 4,
    name: "Emily Davis",
    expertise: "Aviation Safety",
    experience: "9+ years",
    profileImage: "https://plus.unsplash.com/premium_photo-1682098272956-5d629bb80dd7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Emily is a safety expert who has worked extensively in aviation safety, regulatory compliance, and accident prevention.",
  },
  {
    id: 5,
    name: "Robert Wilson",
    expertise: "Pilot Training",
    experience: "15+ years",
    profileImage: "https://images.unsplash.com/photo-1704690815744-1bc24537ed24?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Robert is an experienced pilot trainer with expertise in training aspiring pilots to obtain certifications and licenses.",
  },
  {
    id: 6,
    name: "Sophia Brown",
    expertise: "Airport Management",
    experience: "11+ years",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Sophia has over a decade of experience in airport management, focusing on operations, resource planning, and scheduling.",
  },
];

const MentorshipPage = () => {
  return (
    <div>
      <PageBanner 
        title="Aviation experts are here" 
        subtitle="Connect with industry professionals"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

{/* Ambassador Events Section */}
<section>
  <h2 className="section-title">Our Expert Mentors</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {MENTORS.map((event) => (
      <MentorCard key={event.id} {...event} />
    ))}
  </div>
</section>
</div>
    </div>
  );
};

export default MentorshipPage;