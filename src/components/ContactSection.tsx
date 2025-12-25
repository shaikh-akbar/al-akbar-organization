import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "../hooks/us-toast";

const CONTACT_API_URL = 'https://al-akbar-organization-backend.vercel.app';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CONTACT_API_URL) {
      toast({
        title: "Configuration error",
        description: "CONTACT API URL is missing.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      service: (formData.get("service") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Request Sent! 🚀",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />

          <div className="relative glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to{" "}
                  <span className="text-gradient">Grow Your Business?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a free project quote and let's discuss how we can
                  transform your digital presence. No commitment required.
                </p>

                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    "Free consultation & project estimate",
                    "Response within 24 hours",
                    "No hidden fees or obligations",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Business Name"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-card">
                        Select Service
                      </option>
                      <option value="Custom Website Development" className="bg-card">
                        Custom Website Development
                      </option>
                      <option value="Landing Page Development" className="bg-card">
                        Landing Page Development
                      </option>
                      <option value="E-Commerce Development" className="bg-card">
                        E-Commerce Development
                      </option>
                      <option value="SEO Optimization" className="bg-card">
                        SEO Optimization
                      </option>
                      <option value="Backend & API Development" className="bg-card">
                        Backend & API Development
                      </option>
                      <option value="Other" className="bg-card">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Your Free Quote
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
