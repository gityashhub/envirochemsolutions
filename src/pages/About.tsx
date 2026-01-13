import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  CheckCircle2,
  Award,
  Users,
  Leaf,
  ArrowRight,
  Building2,
  Globe,
  Star,
  Zap,
  FlaskConical,
  Recycle,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import storyBg from "@/assets/about-story-bg.png";
import logo from "@/assets/logo.png";
import { useState, useRef, useEffect } from "react";

const MagneticElement = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

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

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Zero-compromise approach to workplace and environmental safety.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and circular economy principles.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously advancing our technology and methodologies.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance",
    description: "Adhering to the highest regulatory and industry standards.",
  },
];

const certifications = [
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "ISO 9001:2015 Quality Management",
  "Pollution Control Board Certification",
  "Hazardous Waste Handling License",
  "Government Environmental Compliance",
];

const milestones = [
  {
    year: "2008",
    title: "Foundations",
    desc: "Established with a singular focus on industrial solvent recovery.",
    icon: Building2
  },
  {
    year: "2012",
    title: "Eco-Certification",
    desc: "Achieved global environmental standards ahead of the industry.",
    icon: Award
  },
  {
    year: "2016",
    title: "National Grid",
    desc: "Unified processing facilities across 15 industrial hubs.",
    icon: Globe
  },
  {
    year: "2020",
    title: "Molecular Focus",
    desc: "Introduced advanced chemical stripping and purification technology.",
    icon: FlaskConical
  },
  {
    year: "2024",
    title: "Closed Loop",
    desc: "Pioneering the first fully circular industrial chemical ecosystem.",
    icon: Recycle
  },
];

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (isNaN(end)) return;

    const totalFrames = duration * 60;
    const increment = end / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  if (isNaN(numericValue)) return <>{value}</>;
  return <>{count}{suffix}</>;
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="EnviroChem Laboratory"
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
            <motion.span
              variants={fadeInUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              About EnviroChem
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mt-4 mb-6"
            >
              Pioneering{" "}
              <span className="text-gradient">Sustainable Solutions</span> for a
              Cleaner World
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              For over 15 years, we've been at the forefront of chemical waste
              management, combining innovation with environmental responsibility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative overflow-hidden bg-[#fafdfc]">
        <div className="flex flex-col lg:flex-row min-h-[90vh]">
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={storyBg}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#fafdfc] via-[#fafdfc]/20 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafdfc] via-transparent to-transparent lg:hidden" />
            </motion.div>

            {/* Overlay stats card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-12 left-12 right-12 lg:right-auto glass-card-strong p-8 rounded-3xl z-20 hidden md:block max-w-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-charcoal">Legacy of Impact</h4>
              </div>
              <p className="text-sm text-charcoal-light italic">
                "Transforming the industry standard for chemical waste management since 2008."
              </p>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 section-padding relative py-16 lg:py-32">
            <div className="container-custom lg:pl-16 lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Our Story
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-8 md:mb-10 leading-tight">
                  From Vision to{" "}
                  <span className="text-gradient">Impact</span>
                </h2>

                <div className="space-y-8 text-lg text-charcoal-light leading-relaxed max-w-2xl">
                  <p className="relative pl-6 border-l-2 border-primary/20">
                    EnviroChem Waste Solutions was founded in 2008 with a singular
                    mission: to revolutionize how industries handle chemical waste.
                    What started as a small operation has grown into a leading
                    environmental services company.
                  </p>
                  <p>
                    Our journey has been defined by continuous innovation,
                    unwavering commitment to safety, and a deep respect for the
                    environment. Today, we process over <span className="text-primary font-bold">50,000 tons</span> of chemical
                    waste annually.
                  </p>
                </div>

                {/* Creative Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                  {[
                    { icon: Building2, value: "15+", label: "Facilities" },
                    { icon: Users, value: "500+", label: "Experts" },
                    { icon: Globe, value: "10+", label: "Cities" },
                    { icon: Award, value: "25+", label: "Awards" },
                  ].map((item, i) => (
                    <MagneticElement key={item.label}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-primary/5 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-eco-light flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-display font-bold text-charcoal">
                              <CountUp value={item.value} />
                            </div>
                            <div className="text-xs uppercase tracking-widest text-charcoal-light font-bold">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </MagneticElement>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative background element on content side */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Mission & Vision - Creative Split Upgrade */}
      <section className="relative overflow-hidden bg-[#fafdfc] py-24">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[3rem] p-12 bg-white border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              {/* Decorative Background Textures */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Target className="w-64 h-64 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-charcoal mb-6">Our Mission</h3>
                <p className="text-xl text-charcoal-light leading-relaxed italic border-l-4 border-primary/20 pl-8">
                  "To provide innovative, safe, and sustainable chemical waste
                  management solutions that protect our environment and communities
                  while enabling businesses to thrive responsibily."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[3rem] p-12 bg-charcoal text-white shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] transition-all duration-700"
            >
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Eye className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eco to-primary flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-6 font-gradient">Our Vision</h3>
                <p className="text-xl text-white/70 leading-relaxed max-w-md">
                  To become the global leader in chemical waste management,
                  pioneering zero-waste solutions and setting the industry standard
                  for environmental excellence and innovation.
                </p>
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-white/10 flex items-center justify-center overflow-hidden">
                        <Globe className="w-5 h-5 opacity-40" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/40">Global Impact Strategy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Interactive Grid Upgrade */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco/10 text-eco text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3" />
              Ethical Foundations
            </div>
            <h2 className="text-4xl font-display font-bold text-charcoal mb-6">Guidance by <span className="text-gradient">Principles</span></h2>
            <p className="text-charcoal-light text-lg">Every drop, every molecule, processed with unwavering integrity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-full"
              >
                <div className="relative h-full p-10 rounded-[2.5rem] bg-secondary border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all" />

                  <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal mb-4">{value.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{value.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - High-Tech Vertical Narrative Upgrade */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Zap className="w-3 h-3" />
              Our Evolution
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Path to <span className="text-gradient">World Class</span></h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">From a single facility to an international standard in chemical circularity.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto pb-10">
            {/* Reactive Vertical Line */}
            <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            {/* Scroll-driven progress fill (Simplified visual placeholder for the logic) */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute left-[21px] md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-eco to-transparent -translate-x-1/2 origin-top z-10"
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex flex-col md:flex-row items-center justify-between group">
                  {/* Visual Node */}
                  <div className="absolute left-[21px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-11 h-11 z-30">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                    <div className="w-11 h-11 rounded-full bg-charcoal border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors duration-500 shadow-2xl relative">
                      <milestone.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-[85%] ml-12 md:ml-0 md:w-[42%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left order-last'}`}
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary font-display font-bold text-xl mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                      {milestone.year}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{milestone.title}</h4>
                    <p className="text-white/40 leading-relaxed text-base max-w-sm ml-0 mr-auto md:ml-auto md:mr-0 group-hover:text-white/60 transition-colors">
                      {milestone.desc}
                    </p>
                  </motion.div>

                  {/* Decorative Side */}
                  <div className={`hidden md:flex w-[42%] h-40 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 items-center justify-center relative overflow-hidden group-hover:border-primary/20 transition-all duration-700`}>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative text-white/20 group-hover:text-primary/40 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                      <milestone.icon className="w-20 h-20" />
                    </div>
                    {/* Decorative Year Label for visual balance */}
                    <div className="absolute top-6 right-6 text-6xl font-display font-black text-white/5 group-hover:text-white/10 transition-all">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - High-Tech Verification Vault */}
      <section className="py-32 bg-[#fafdfc] relative overflow-hidden">
        {/* Technical Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eco/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                <Shield className="w-3 h-3 text-primary" />
                Security & Compliance
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal leading-tight">
                The Gold Standard of <br />
                <span className="text-gradient">Operational Integrity</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="hidden lg:block pb-4"
            >
              <div className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.4em] border-b border-charcoal/10 pb-2">
                Verification Protocol v4.0
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-[2rem] border border-black/5 p-10 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">

                  {/* Scanning Animation Light */}
                  <motion.div
                    animate={{
                      top: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 pointer-events-none opacity-0 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                        <Award className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                      <div className="text-[10px] font-mono text-charcoal/20 group-hover:text-primary/40 transition-colors">
                        REF_{8402 + i}
                      </div>
                    </div>

                    <h4 className="text-xl font-display font-bold text-charcoal mb-6 leading-tight group-hover:text-primary transition-colors">
                      {cert}
                    </h4>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/5">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(dot => (
                          <div key={dot} className="w-1 h-1 rounded-full bg-primary" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Global Validated</span>
                    </div>
                  </div>

                  {/* Background Interactive Element */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Technical Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-charcoal/5 flex flex-wrap justify-center gap-12"
          >
            {['Regulatory Compliance', 'Safety Protocols', 'Environmental Quality', 'Operational Audit'].map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-eco" />
                <span className="text-[11px] font-bold text-charcoal/40 uppercase tracking-widest">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Premium Corporate Banner */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-primary/20" />
          <img src={aboutHero} className="w-full h-full object-cover grayscale opacity-20 brightness-50" alt="CTA" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card-strong p-8 sm:p-12 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border-white/20 bg-white/5 backdrop-blur-3xl max-w-4xl mx-auto text-center shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Join the New Era of <br />
              <span className="text-gradient">Sustainability Leadership</span>
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
              Partner with the industry's most trusted name in chemical recycling and circular economy excellence.
            </p>
            <MagneticElement>
              <Button asChild size="xl" className="rounded-full px-12 text-lg shadow-[0_0_50px_rgba(var(--primary-rgb),0.4)]">
                <Link to="/contact" className="flex items-center gap-3">
                  Begin a Partnership
                  <ArrowRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
                </Link>
              </Button>
            </MagneticElement>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
