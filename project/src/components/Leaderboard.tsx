import { Trophy } from 'lucide-react';
import { useState } from 'react';
import LeaderboardCard from './LeaderboardCard';
import LeaderboardSidebar from './LeaderboardSidebar';

const LEADERBOARD_DATA = [
  {
    rank: 1,
    name: "Priya Sharma",
    points: 15750,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    badges: [
      { name: "Top Performer", icon: 'award', color: 'bg-indigo-100 text-indigo-800' }
    ],
    activities: 45,
    impact: 1200
  },
  {
    rank: 2,
    name: "Rahul Verma",
    points: 14200,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    badges: [
      { name: "Rising Star", icon: 'star', color: 'bg-purple-100 text-purple-800' }
    ],
    activities: 38,
    impact: 950
  },
  {
    rank: 3,
    name: "Ananya Patel",
    points: 13800,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    badges: [
      { name: "Mentor", icon: 'award', color: 'bg-teal-100 text-teal-800' }
    ],
    activities: 35,
    impact: 820
  }
];

const Leaderboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Trophy className="w-8 h-8 text-indigo-secondary mr-3" />
            <div>
              <h2 className="section-title mb-1">Top Community Members</h2>
              <p className="text-gray-600">Our most active community leaders</p>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="btn-secondary" style={{ backgroundColor: "#001B94", color: "#ffffff" }}
          >
            View All Rankings
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERBOARD_DATA.map((ambassador) => (
            <LeaderboardCard key={ambassador.rank} {...ambassador} />
          ))}
        </div>
      </section>

      <LeaderboardSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Leaderboard;