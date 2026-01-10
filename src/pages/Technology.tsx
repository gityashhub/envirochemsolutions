import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Atom,
  Flame,
  Droplets,
  Target,
  Brain,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Leaf,
  Zap,
} from "lucide-react";
import techHero from "@/assets/technology-hero.jpg";

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

const technologies = [
  {
    icon: Layers,
    title: "Advanced Waste Segregation",
    description:
      "AI-powered sorting systems that automatically classify and separate waste streams for optimal processing.",
    features: [
      "Automated material recognition",
      "Real-time sorting optimization",
      "99.5% accuracy rate",
    ],
  },
  {
    icon: Atom,
    title: "Chemical Neutralization Systems",
    description:
      "Proprietary chemical treatment processes that safely neutralize hazardous compounds through controlled reactions.",
    features: [
      "pH balancing technology",
      "Oxidation-reduction control",
      "Heavy metal precipitation",
    ],
  },
  {
    icon: Flame,
    title: "Eco-Friendly Incineration",
    description:
      "High-temperature thermal treatment with advanced emission controls, converting waste to energy while minimizing environmental impact.",
    features: [
      "Zero visible emissions",
      "Energy recovery systems",
      "Multi-stage filtration",
    ],
  },
  {
    icon: Droplets,
    title: "Water & Solvent Recovery",
    description:
      "Distillation and membrane technologies that reclaim usable water and solvents from waste streams for reuse.",
    features: [
      "95% recovery rate",
      "Multi-stage purification",
      "Closed-loop systems",
    ],
  },
  {
    icon: Target,
    title: "Zero-Landfill Approach",
    description:
      "Comprehensive waste diversion strategies ensuring no processable waste ends up in landfills.",
    features: [
      "100% waste diversion goal",
      "Material lifecycle tracking",
      "Waste-to-resource conversion",
    ],
  },
  {
    icon: Brain,
    title: "AI-Based Waste Tracking",
    description:
      "Intelligent monitoring systems providing real-time visibility into waste streams, processing status, and compliance metrics.",
    features: [
      "Blockchain verification",
      "Predictive analytics",
      "Automated reporting",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Waste Intake",
    description: "Comprehensive analysis and classification of incoming waste materials",
  },
  {
    number: "02",
    title: "Smart Segregation",
    description: "AI-powered sorting into optimized processing streams",
  },
  {
    number: "03",
    title: "Treatment & Processing",
    description: "Application of appropriate treatment technologies",
  },
  {
    number: "04",
    title: "Resource Recovery",
    description: "Maximum extraction of reusable materials and energy",
  },
  {
    number: "05",
    title: "Safe Disposal",
    description: "Responsible handling of residual materials",
  },
  {
    number: "06",
    title: "Verification",
    description: "Blockchain-verified documentation and compliance reporting",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={techHero}
            alt="EnviroChem Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        </div>

        <div className="container-custom relative z-10 pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Cpu className="w-4 h-4 text-eco" />
              <span className="text-white/90 text-sm font-medium">
                Next-Generation Processing
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Waste Processing &{" "}
              <span className="text-gradient">Recycling Technology</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Cutting-edge technologies driving our commitment to a sustainable,
              zero-waste future. Innovation meets environmental responsibility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              Powering a Green Future
            </h2>
            <p className="text-charcoal-light">
              Our proprietary systems combine cutting-edge engineering with
              environmental science to deliver superior waste processing outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div key={tech.title} variants={fadeInUp} className="group">
                <div className="h-full glass-card rounded-2xl p-6 hover:shadow-eco-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-eco flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-charcoal mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-eco shrink-0" />
                        <span className="text-charcoal-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Process Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
              From Waste to Resource
            </h2>
            <p className="text-white/70">
              Our integrated process ensures maximum value extraction and
              minimal environmental impact at every stage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center">
                      <span className="text-lg font-display font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="section-padding bg-gradient-to-br from-eco-light via-teal-light to-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-eco font-semibold text-sm uppercase tracking-wider">
                Circular Economy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
                Sustainable Circular Economy Model
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Our approach goes beyond traditional waste management. We're
                building a circular economy where waste becomes a valuable
                resource, creating closed-loop systems that benefit both
                businesses and the environment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: RefreshCw, text: "Closed-loop material cycles" },
                  { icon: Zap, text: "Waste-to-energy conversion" },
                  { icon: Leaf, text: "Carbon footprint reduction" },
                  { icon: Target, text: "Zero-waste manufacturing support" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-eco/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-eco" />
                    </div>
                    <span className="text-charcoal font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-eco/30 rounded-full blur-3xl" />
              <div className="relative flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-spin-slow">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center">
                    <div className="text-center text-white">
                      <RefreshCw className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
                      <div className="text-xl md:text-2xl font-display font-bold">
                        Circular
                      </div>
                      <div className="text-lg md:text-xl font-display">Economy</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-eco">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "99.5%", label: "Sorting Accuracy" },
              { value: "95%", label: "Resource Recovery" },
              { value: "Zero", label: "Landfill Waste" },
              { value: "50%", label: "Energy Savings" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
              Ready to Experience Our Technology?
            </h2>
            <p className="text-charcoal-light text-lg mb-10">
              Schedule a facility tour or consultation to see our advanced
              processing systems in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
