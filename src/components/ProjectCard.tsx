
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string; // Подробная информация о проекте
  image: string;
  year: string; // Год реализации проекта
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  fullWidth?: boolean;
}

const ProjectCard = ({ project, index, fullWidth = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group overflow-hidden rounded-lg ${fullWidth ? 'col-span-full' : ''}`}
    >
      <Link to={project.link} className="block">
        <div className={`relative ${fullWidth ? 'md:flex' : ''}`}>
          {/* Изображение */}
          <div className={`overflow-hidden ${fullWidth ? 'md:w-2/3' : 'aspect-[4/3]'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Контент */}
          <div className={`
            ${fullWidth 
              ? 'md:w-1/3 md:p-8 bg-secondary' 
              : 'absolute inset-0 bg-gradient-to-t from-background to-transparent/20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            }
          `}>
            <div className="space-y-3">
              <span className="inline-block text-sm text-accent">
                {project.category} • {project.year}
              </span>
              
              <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/70 text-base">
                {project.description}
              </p>
              
              <div className="inline-flex items-center text-accent pt-2">
                <span className="mr-2">Смотреть проект</span>
                <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
