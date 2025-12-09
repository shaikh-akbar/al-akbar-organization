import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "Full-featured e-commerce solution with inventory management and payment integration.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Restaurant Management",
    category: "Business System",
    description: "Complete order and reservation system with real-time dashboard analytics.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Real Estate Portal",
    category: "Property Listing",
    description: "Dynamic property listing platform with advanced search and virtual tours.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Healthcare Dashboard",
    category: "Medical Tech",
    description: "Patient management system with appointment scheduling and records.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Logistics Platform",
    category: "Supply Chain",
    description: "End-to-end logistics tracking with route optimization and fleet management.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "Educational LMS",
    category: "E-Learning",
    description: "Interactive learning management system with course creation and progress tracking.",
    gradient: "from-teal-500 to-cyan-600",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Projects That{" "}
            <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our recent work across various industries and technologies.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card-hover rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-lg rotate-12" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/20 rounded-xl rotate-45" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-semibold text-lg text-foreground mt-2 mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
