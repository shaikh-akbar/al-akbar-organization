import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed,
  Stethoscope,
  Building2,
  Scissors,
  ShoppingBag,
  Truck,
  GraduationCap,
  Plane,
  Megaphone,
  Store,
} from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Stethoscope, name: "Clinics" },
  { icon: Building2, name: "Real Estate" },
  { icon: Scissors, name: "Salons" },
  { icon: ShoppingBag, name: "E-Commerce" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Plane, name: "Travel" },
  { icon: Megaphone, name: "Agencies" },
  { icon: Store, name: "Local Business" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding relative">
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
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions for{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped businesses across diverse sectors achieve their digital goals 
            with tailored solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card-hover rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-secondary group-hover:bg-gradient-primary transition-all duration-300 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
