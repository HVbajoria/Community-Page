import { Briefcase, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface MentorCardProps {
  name: string;
  expertise: string;
  experience: string;
  profileImage: string;
  bio: string;
}

const MentorCard = ({ name, experience, expertise, profileImage, bio }: MentorCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card overflow-hidden"
    >
      <div className="relative">
        <img 
          src={profileImage}
          alt={name}
          className="w-full h-78 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm">{experience}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span className="text-sm">{expertise}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        <button className="btn-primary w-full">Connect Now</button>
      </div>
    </motion.div>
  );
};

export default MentorCard;