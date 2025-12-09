import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Code2, title: "Full-Stack Development", description: "End-to-end solutions" },
    { icon: Rocket, title: "Fast Delivery", description: "Agile methodologies" },
    { icon: Users, title: "Client-Focused", description: "Your success is ours" },
    { icon: Zap, title: "High Performance", description: "Optimized for speed" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Your Partner in{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a full-stack digital development team specializing in creating 
              powerful web solutions that drive business growth. From custom WordPress 
              and Next.js websites to robust Node.js backends and comprehensive SEO strategies, 
              we deliver everything you need to succeed online.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our expertise spans landing pages, e-commerce platforms, MySQL and MongoDB 
              database architecture, and complete business management systems. We don't just 
              build websites—we craft digital experiences that convert visitors into customers 
              and help your business thrive in the competitive online landscape.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {["WordPress", "Next.js", "Node.js", "React", "MySQL", "MongoDB", "SEO"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
