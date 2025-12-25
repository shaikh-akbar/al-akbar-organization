import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ZillyBuy",
    category: "E-Commerce Platform",
    description:
      "A modern online shopping platform offering a wide range of products including mobiles, fashion, electronics, home decor, and more. Integrated with ONDC (Open Network for Digital Commerce) government initiative as a buyer app for seamless, interoperable e-commerce experiences across India.",
    gradient: "from-cyan-500 to-blue-600",
    url: "https://zillybuy.com",
  },
  {
    title: "Alhin Global HR",
    category: "Manpower Recruitment",
    description:
      "Leading recruitment agency specializing in providing skilled manpower for Gulf countries. Sourcing qualified professionals from India, Nepal, Bangladesh, and Sri Lanka across sectors like Construction, Oil & Gas, Hospitality, FMCG, and Engineering.",
    gradient: "from-purple-500 to-pink-600",
    url: "https://alhin.in",
  },
  {
    title: "Real Estate Portal",
    category: "Property Listing",
    description:
      "Dynamic real estate platform featuring comprehensive property listings with advanced search filters, detailed information, and virtual tours for an immersive buying/renting experience.",
    gradient: "from-orange-500 to-red-600",
    url: "https://real-estate-sigma-indol.vercel.app/",
  },
  {
    title: "PK Jewellery",
    category: "Jewellery E-Commerce",
    description:
      "Exquisite online jewelry store showcasing handcrafted gold and diamond pieces. Features certified purity, custom designs, and a seamless shopping experience for timeless luxury jewelry.",
    gradient: "from-green-500 to-emerald-600",
    url: "https://pkjewellery.com",
  },
  {
    title: "AllDays Fitness",
    category: "Mobile Fitness App",
    description:
      "Comprehensive fitness application offering personalized workout plans, event tracking, community challenges, and progress monitoring to help users stay active and achieve their health goals every day.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "AllDays AI",
    category: "AI Solution & Automation",
    description:
      "Innovative AI-powered platform delivering intelligent automation solutions, workflow optimization, and smart tools to streamline business processes and enhance everyday productivity.",
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
            Projects That <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our recent work across various industries and
            technologies.
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
              className="group glass-card-hover rounded-2xl overflow-hidden"
            >
              {project.url ? (
                // If URL exists → make entire card a link
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  {/* Gradient Background */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-300" />

                    {/* Hover Icon */}
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
                </a>
              ) : (
                // No URL → keep as non-clickable card
                <>
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-lg rotate-12" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/20 rounded-xl rotate-45" />
                    </div>
                  </div>

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
                </>
              )}
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
