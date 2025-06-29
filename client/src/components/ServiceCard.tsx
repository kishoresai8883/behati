//import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  //icon: LucideIcon;
  color: string;
  image: string;
  path?: string; // Optional path for navigation
}

interface ServiceCardProps {
  service: Service;
  delay: number;
  path: string;
}

const ServiceCard = ({ service, delay, path }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
        
        {/* Icon */}
        {/*<div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full">
          <service.icon className="w-6 h-6 text-white" />
        </div>*/}

        {/* Animated overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* CTA Button */}
        <NavLink to={path} className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          isHovered 
            ? `bg-gradient-to-r ${service.color} text-white shadow-lg transform -translate-y-1` 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          Learn More
        </NavLink>
      </div>

      {/* Floating decoration */}
      <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r ${service.color} rounded-full opacity-20 transition-transform duration-500 ${
        isHovered ? 'scale-150 opacity-30' : 'scale-100'
      }`}></div>
    </div>
  );
};

export default ServiceCard;