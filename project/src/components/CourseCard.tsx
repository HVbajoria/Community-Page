import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
    title: string;
    duration: string;
    level: string;
    image: string;
    description: string;
}

const CourseCard = ({ title, duration, level, image, description }: CourseCardProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden"
        >
            <div className="relative">
                <img 
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{level}</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <button className="btn-primary w-full">Start Now</button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
