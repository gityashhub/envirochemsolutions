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
  FlaskConical,
  Microscope,
} from "lucide-react";
import techHero from "@/assets/technology-hero.jpg";
import { useState, useEffect } from "react";

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
    tag: "AI Intelligence",
    description:
      "Proprietary sorting systems that automatically classify and separate complex waste streams for optimal molecular recovery.",
    stats: "99.5% Accuracy",
  },
  {
    icon: Atom,
    title: "Chemical Neutralization Systems",
    tag: "Reactive Tech",
    description:
      "Advanced treatment processes that safely neutralize hazardous compounds through precision-controlled chemical reactions.",
    stats: "Zero-Risk Matrix",
  },
  {
    icon: Flame,
    title: "Eco-Friendly Extraction",
    tag: "Thermal Units",
    description:
      "High-efficiency thermal treatment with advanced emission controls, reclaiming energy while ensuring non-toxic atmospheric discharge.",
    stats: "Zero Emissions",
  },
  {
    icon: Droplets,
    title: "Molecular Solvent Recovery",
    tag: "Purification",
    description:
      "Vacuum-distillation and membrane technologies that reclaim 95%+ of usable solvents for industrial reintegration.",
    stats: "95% Recovery Rate",
  },
  {
    icon: Target,
    title: "Closed-Loop Grid",
    tag: "Circular Model",
    description:
      "Comprehensive waste diversion strategies ensuring no industrial output reaches a landfill, ever.",
    stats: "100% Diversion",
  },
  {
    icon: Microscope,
    title: "Predictive Residue Analysis",
    tag: "Deep Scan",
    description:
      "Intelligent monitoring systems providing real-time molecular visibility into waste streams and processing status.",
    stats: "Real-time Auditing",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section - Compact Technical Header */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-b border-white/5">
        {/* Background Image - Compact Banner */}
        <div className="absolute inset-0 z-0">
          <img
            src={techHero}
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Tech Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal to-charcoal" />
        </div>

        <div className="container-custom relative z-10 pt-32 md:pt-44 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Cpu className="w-3 h-3" />
              Technical Core
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              The Science <br />
              <span className="text-gradient">of Recovery</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed max-w-2xl font-light"
            >
              Leveraging proprietary molecular-stripping technology to reclaim high-purity chemical streams
              from complex industrial residues.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tech Spec Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8"
          >
            <div className="max-w-xl">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Process Arrays</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal leading-tight">
                High-Precision <br />
                <span className="text-gradient">Recovery Modules</span>
              </h2>
            </div>
            <p className="text-charcoal-light text-base max-w-md">
              Each processing unit is a self-contained environment of chemical stability and resource extraction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 bg-secondary/30 rounded-[2rem] border border-black/5 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-8 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                  <tech.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white" />
                </div>

                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3 block">
                  {tech.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-charcoal mb-3">
                  {tech.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                  {tech.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-0.5 flex-grow bg-black/5 group-hover:bg-primary/20 transition-colors" />
                  <span className="text-[10px] font-mono font-bold text-charcoal/30 group-hover:text-primary transition-colors">{tech.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Dynamic Model */}
      <section className="py-24 bg-charcoal overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <RefreshCw className="w-3 h-3" />
                Loop Mechanics
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                The New Standard of <br />
                <span className="text-gradient">Circular Materiality</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-lg">
                We've decoded the industrial loop. Our model reintegrates
                byproducts back into supply chains with zero loss of quality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Energy Savings', value: '50%+', icon: Zap },
                  { label: 'Carbon Saved', value: '1.2M Tons', icon: Leaf },
                  { label: 'Material Yield', value: '98%', icon: Layers },
                  { label: 'Compliance', icon: Target, value: 'Tier 1' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col border-l border-white/10 pl-6 group">
                    <stat.icon className="w-4 h-4 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-white/10 rounded-full"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary to-eco p-1 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
                    <div className="w-full h-full rounded-full bg-charcoal flex flex-col items-center justify-center overflow-hidden relative">
                      <RefreshCw className="w-10 h-10 text-white mb-2 relative z-10" />
                      <div className="text-base font-display font-bold text-white relative z-10 uppercase tracking-widest">Closed Loop</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - The Tour */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card-strong p-12 md:p-20 rounded-[3rem] border-black/5 bg-[#fafdfc] max-w-5xl mx-auto shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-6">
              Audit Our <span className="text-gradient">Innovations</span>
            </h2>
            <p className="text-charcoal-light text-lg mb-10 max-w-2xl mx-auto">
              We maintain an open-door policy for certified industrial partners.
              Schedule a facility audit to see our recovery arrays in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="rounded-full px-10 text-lg">
                <Link to="/contact">
                  Schedule Facility Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full">
                <Link to="/services">
                  View Processing Scale
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
