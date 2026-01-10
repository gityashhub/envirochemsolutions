import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  Shield,
  Recycle,
  Trash2,
  Pill,
  FileCheck,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Leaf,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const services = [
  {
    icon: FlaskConical,
    title: "Chemical Waste Collection",
    description:
      "Comprehensive collection services for all types of chemical waste, ensuring safe transport and proper handling from your facility to our processing centers.",
    benefits: [
      "Scheduled & on-demand pickup",
      "Proper labeling & documentation",
      "Trained hazmat personnel",
      "Full chain of custody",
    ],
  },
  {
    icon: Shield,
    title: "Hazardous Waste Treatment",
    description:
      "Advanced treatment technologies to neutralize and process hazardous materials, reducing environmental impact and ensuring regulatory compliance.",
    benefits: [
      "Chemical neutralization",
      "Thermal treatment",
      "Physical separation",
      "Biological treatment",
    ],
  },
  {
    icon: Recycle,
    title: "Industrial Waste Recycling",
    description:
      "State-of-the-art recycling solutions to recover valuable materials from industrial waste streams, promoting circular economy principles.",
    benefits: [
      "Metal recovery",
      "Solvent recycling",
      "Plastic processing",
      "Material reclamation",
    ],
  },
  {
    icon: Trash2,
    title: "E-Waste & Container Recycling",
    description:
      "Specialized handling of electronic waste and chemical containers, ensuring proper decontamination and responsible recycling.",
    benefits: [
      "Electronics dismantling",
      "Container cleaning",
      "Component recovery",
      "Certified destruction",
    ],
  },
  {
    icon: Pill,
    title: "Lab & Pharma Waste Disposal",
    description:
      "Dedicated services for laboratory and pharmaceutical waste, meeting stringent healthcare industry requirements and regulations.",
    benefits: [
      "Expired medication disposal",
      "Lab chemical handling",
      "Controlled substance destruction",
      "Medical waste processing",
    ],
  },
  {
    icon: FileCheck,
    title: "Environmental Compliance Consulting",
    description:
      "Expert guidance to help your organization meet and exceed environmental regulations, avoiding penalties and promoting sustainability.",
    benefits: [
      "Regulatory audits",
      "Permit assistance",
      "Training programs",
      "Documentation support",
    ],
  },
  {
    icon: Wrench,
    title: "On-Site Waste Management",
    description:
      "Embedded waste management solutions for your facility, providing dedicated personnel and equipment to handle waste generation efficiently.",
    benefits: [
      "Dedicated staff",
      "Custom equipment",
      "Real-time monitoring",
      "Cost optimization",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Spill Response",
    description:
      "24/7 rapid response team for chemical spills and environmental emergencies, minimizing damage and ensuring swift remediation.",
    benefits: [
      "24/7 availability",
      "Rapid deployment",
      "Complete remediation",
      "Regulatory reporting",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal via-teal-dark to-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Leaf className="w-4 h-4 text-eco" />
              <span className="text-white/90 text-sm font-medium">
                Comprehensive Waste Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              End-to-end chemical waste management solutions designed with
              safety, compliance, and sustainability at the core.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl p-8 hover:shadow-eco-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-eco flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Key Benefits
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-eco shrink-0" />
                          <span className="text-charcoal-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Safety Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm text-charcoal-light">
                      Safety-First Approach • Fully Compliant
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-eco-light to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              How We Work
            </h2>
            <p className="text-charcoal-light">
              A streamlined, transparent process from initial consultation to
              final disposal.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Consultation", desc: "Assess your waste management needs" },
              { step: "02", title: "Planning", desc: "Develop customized solutions" },
              { step: "03", title: "Collection", desc: "Safe pickup and transport" },
              { step: "04", title: "Processing", desc: "Treatment and recycling" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-center p-6 rounded-2xl bg-white shadow-eco-sm">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-display font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-teal to-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Our experts will design a waste management plan tailored to your
              specific industry and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/technology">View Our Technology</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
