
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  author: string;
  position?: string;
  avatar?: string;
  content: string;
  rating: number;
  date: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-accent text-accent" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-secondary rounded-lg p-6 hover-lift"
    >
      {/* Рейтинг */}
      <div className="flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      {/* Текст отзыва */}
      <div className="mb-6">
        <p className="text-white/80 text-base leading-relaxed">
          {testimonial.content}
        </p>
      </div>
      
      {/* Автор */}
      <div className="flex items-center">
        {testimonial.avatar ? (
          <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="mr-3 h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-semibold">
              {testimonial.author.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="text-white font-medium">{testimonial.author}</h4>
          {testimonial.position && (
            <p className="text-white/50 text-sm">{testimonial.position}</p>
          )}
        </div>

        <div className="ml-auto text-xs text-white/40">
          {testimonial.date}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
