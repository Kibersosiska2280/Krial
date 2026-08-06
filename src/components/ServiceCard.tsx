
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  details: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-secondary border border-border rounded-lg overflow-hidden group hover-lift"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 text-accent">
          {service.icon && (
            service.icon.startsWith('/') ? (
              <img src={service.icon} alt={service.title} className="w-6 h-6" />
            ) : (
              <span className="text-xl">{service.icon}</span>
            )
          )}
        </div>
        
        <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        
        <p className="text-white/70 text-base mb-5">
          {service.description}
        </p>
        
        <Link 
          to={service.link} 
          className="inline-flex items-center text-accent transition-all group-hover:translate-x-1"
        >
          Подробнее <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
