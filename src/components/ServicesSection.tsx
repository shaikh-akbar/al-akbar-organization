import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Layout,
  ShoppingCart,
  Search,
  Package,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Bespoke websites built with modern frameworks tailored to your brand and business goals.",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    description: "High-converting landing pages optimized for lead generation and sales funnels.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Powerful online stores with seamless checkout, inventory management, and payment integration.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic SEO that improves rankings, drives organic traffic, and increases visibility.",
  },
  {
    icon: Package,
    title: "Order & Inventory Systems",
    description: "Custom order processing and inventory management solutions for streamlined operations.",
  },
  {
    icon: Server,
    title: "Backend APIs & Integrations",
    description: "Robust API development and third-party integrations for seamless data flow.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Scalable MySQL and MongoDB database design for optimal performance and reliability.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and maintenance to keep your systems running smoothly.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed Online</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions designed to elevate your business 
            and deliver measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card-hover rounded-2xl p-6 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary group-hover:bg-gradient-primary transition-all duration-300 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
