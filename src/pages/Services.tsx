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
  Zap,
  Globe,
  Award,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

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
    tag: "Logistics",
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
    tag: "Neutralization",
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
    tag: "Circular Economy",
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
    tag: "Decontamination",
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
    tag: "Pharma Grade",
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
    tag: "Advisory",
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
    tag: "Embedded",
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
    tag: "24/7 Rapid",
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
      {/* Hero Section - Split Perspective */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-charcoal order-2 lg:order-1" />
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative order-1 lg:order-2">
            <img src={aboutHero} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" alt="Services" />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-charcoal via-charcoal/50 to-transparent" />
          </div>
        </div>

        <div className="container-custom relative z-10 pt-32 md:pt-44 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
              >
                <Zap className="w-3 h-3" />
                Specialized Solutions
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8"
              >
                Engineered for <br />
                <span className="text-gradient">Industrial Sustainability</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/50 leading-relaxed max-w-xl"
              >
                End-to-end chemical waste management built on a foundation of safety,
                regulatory excellence, and molecular-grade recovery.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-charcoal bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
                  Certified Handling <br /> Protocols v2.4
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Interactive Grid */}
      <section className="py-32 bg-[#fafdfc]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-full"
              >
                <div className="h-full bg-white rounded-[2.5rem] p-8 border border-black/5 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Scanning Beam */}
                  <motion.div
                    animate={{ top: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 pointer-events-none opacity-0 group-hover:opacity-100"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{service.tag}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-charcoal mb-4 min-h-[56px]">{service.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-xs text-charcoal-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-eco" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-black/5 mt-auto">
                      <Link to="/contact" className="group/link inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                        Learn Specification
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow - Circuit Layout */}
      <section className="py-32 bg-charcoal text-white relative overflow-hidden">
        {/* Circuit Decorative Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path d="M 0 200 L 200 200 L 250 150 L 500 150 L 550 200 L 1000 200" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="200" r="5" fill="white" />
            <circle cx="500" cy="150" r="5" fill="white" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Controlled <span className="text-gradient">Operational Loop</span></h2>
            <p className="text-white/40 text-lg">A zero-gap process ensuring precision at every industrial stage.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden md:block" />

            {[
              { step: "01", title: "Consultation", desc: "Scientific assessment of your residue streams." },
              { step: "02", title: "Strategy", desc: "Custom recovery protocols and compliance path." },
              { step: "03", title: "Extraction", desc: "Hazardous-safe collection and transport units." },
              { step: "04", title: "Circularity", desc: "Molecular purification and resource return." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group text-center"
              >
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors duration-500 relative z-10">
                  <span className="text-xl font-display font-bold text-white group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance Banner */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="bg-secondary/30 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border border-black/5">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                <Shield className="w-4 h-4" />
                Security Baseline
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">Safety is Our <br /><span className="text-gradient">Primary Interface</span></h2>
              <p className="text-charcoal-light text-lg">Every drop and molecule we process is tracked and treated with a zero-compromise approach to environmental safety.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ISO 14001', icon: Award },
                { label: 'OSHA V2', icon: Shield },
                { label: 'PCB Valid', icon: FileCheck },
                { label: 'HazMat+', icon: AlertTriangle },
              ].map((badge) => (
                <div key={badge.label} className="w-32 h-32 rounded-3xl bg-white shadow-sm border border-black/5 flex flex-col items-center justify-center gap-2 group">
                  <badge.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-eco/20 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Globe className="w-20 h-20 text-white/10 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
              Ready to <span className="text-gradient">Audit Your Needs?</span>
            </h2>
            <p className="text-white/50 text-xl mb-16 max-w-2xl mx-auto">
              Our technical experts are ready to design a chemical recovery strategy tailored to your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="xl" className="rounded-full px-12 text-lg shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
                <Link to="/contact">
                  Begin Technical Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full border-white/20 text-white hover:bg-white/10">
                <Link to="/technology">Our Molecular Science</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
