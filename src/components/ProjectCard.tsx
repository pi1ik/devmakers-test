import { memo } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

export interface ProjectData {
  title: string;
  image: string;
  description: string;
  results?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isLoaded: boolean;
  isTouchDevice: boolean;
  onClick: () => void;
  onImageLoad: () => void;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  isLoaded,
  isTouchDevice,
  onClick,
  onImageLoad,
}: ProjectCardProps) {
  return (
    <motion.div
      key={project.title}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{
        duration: isLoaded ? 0.6 : 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      whileHover={!isTouchDevice ? { y: -8 } : undefined}
      onClick={onClick}
      className="group rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-secondary/20 flex justify-center items-center transition-all">
        <div className="image-wrapper-portfolio transition-all">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            onLoad={onImageLoad}
            className={`mt-5 w-full h-full object-cover object-top group-hover:scale-105 transition-transform transition-all duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 style={{ fontSize: "1.5rem" }} className="text-foreground flex-1">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-3" />
        </div>

        <p className="text-muted-foreground mb-4">{project.description}</p>

        {project.results && (
          <div className="mb-4 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-accent">{project.results}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
