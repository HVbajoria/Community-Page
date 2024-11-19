import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeaderboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FULL_LEADERBOARD = [
  {
    rank: 1,
    name: "Priya Sharma",
    points: 15750,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    rank: 2,
    name: "Rahul Verma",
    points: 14200,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    rank: 3,
    name: "Ananya Patel",
    points: 13800,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    rank: 4,
    name: "Vikram Singh",
    points: 12500,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    rank: 5,
    name: "Neha Gupta",
    points: 11900,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
  },
  // Add more ambassadors here
];

const LeaderboardSidebar = ({ isOpen, onClose }: LeaderboardSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-indigo-primary">Overall Rankings</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {FULL_LEADERBOARD.map((ambassador) => (
                  <motion.div
                    key={ambassador.rank}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 font-bold text-indigo-secondary" style={{ color: "#001B94" }}>
                      #{ambassador.rank}
                    </div>
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-semibold">{ambassador.name}</h3>
                      <p className="text-sm text-gray-600">{ambassador.points.toLocaleString()} points</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeaderboardSidebar;