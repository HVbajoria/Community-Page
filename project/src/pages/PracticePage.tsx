import PageBanner from '../components/PageBanner';
import CourseCard from '../components/CourseCard';

const SKILLS_ASSESSMENTS = [
  {
    id: 1,
    title: "Introduction to Aviation Knowledge Assessment",
    duration: "4 weeks",
    level: "Beginner",
    image: "https://plus.unsplash.com/premium_photo-1661501562127-a8bb26defb35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Assess your understanding of basic aviation concepts, including aircraft components, flight principles, and industry regulations.",
  },
  {
    id: 2,
    title: "Aircraft Maintenance Skills Assessment",
    duration: "6 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1624562821266-3339f8e0d9da?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Evaluate your practical skills in aircraft maintenance tasks, including troubleshooting, repair, and inspection.",
  },
  {
    id: 3,
    title: "Air Traffic Control Competency Assessment",
    duration: "8 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Assess your ability to manage air traffic safely and efficiently.",
  },
  {
    id: 4,
    title: "Aviation Safety Proficiency Assessment",
    duration: "5 weeks",
    level: "Intermediate",
    image: "https://plus.unsplash.com/premium_photo-1663047758536-f23d444440a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Evaluate your knowledge of aviation safety regulations and procedures.",
  },
  {
    id: 5,
    title: "Pilot Certification Skills Assessment",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1622363470777-ae9d1876a3d5?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Assess your piloting skills and knowledge to obtain a pilot's license.",
  },
  {
    id: 6,
    title: "Airport Management Skills Assessment",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1661242951122-718c734a3323?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Evaluate your understanding of airport operations, including planning, scheduling, and resource management.",
  },
];

const PracticePage = () => {
  return (
    <div>
      <PageBanner 
        title="Practice to fly high" 
        subtitle="Test your aviation knowledge"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-16">

{/* Ambassador Events Section */}
<section>
  <h2 className="section-title">Our Courses</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {SKILLS_ASSESSMENTS.map((event) => (
      <CourseCard key={event.id} {...event} />
    ))}
  </div>
</section>
</div>
    </div>
  );
};

export default PracticePage;