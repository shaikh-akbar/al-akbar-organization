import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Target,
  Gauge,
  LayoutDashboard,
  Bot,
  BadgeDollarSign,
  HeadphonesIcon,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "From frontend to backend, we master every layer of modern web development.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "Every line of code is written with your business goals in mind.",
  },
  {
    icon: Gauge,
    title: "High-Speed Performance",
    description: "Lightning-fast websites optimized for the best user experience.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description: "Intuitive admin panels and dashboards tailored to your workflow.",
  },
  {
    icon: Bot,
    title: "Automation Tools",
    description: "Streamline operations with intelligent automation and integrations.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing for every project.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Dedicated support team available whenever you need assistance.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Track record of delivering successful projects that exceed expectations.",
  },
];

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              The <span className="text-gradient">AL-AKBAR</span> Difference
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We combine technical excellence with business acumen to deliver solutions 
              that don't just work—they drive growth. Here's what sets us apart from the rest.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {["Dedicated project manager", "Regular progress updates", "Post-launch support included", "100% ownership of your code"].map(
                (point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {reasons.slice(0, 6).map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover rounded-xl p-5"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
