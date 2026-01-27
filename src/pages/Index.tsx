import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  Leaf,
  Recycle,
  Shield,
  Factory,
  FlaskConical,
  Hospital,
  Building2,
  Pill,
  Award,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import logo from "@/assets/logo.png";
// import videoSrc from "@/assets/video.mp4"; // Moved to public for preloading
import { useState, useEffect, useRef } from "react";

const CircularText = ({ text, radius = 50 }: { text: string; radius?: number }) => {
  const letters = text.split("");
  const deg = 360 / letters.length;
  return (
    <div className="relative w-32 h-32 flex items-center justify-center animate-spin-slow">
      {letters.map((letter, i) => (
        <span
          key={i}
          className="absolute font-display font-bold text-[10px] uppercase text-primary/40"
          style={{
            transform: `rotate(${i * deg}deg) translateY(-${radius}px)`,
          }}
        >
          {letter}
        </span>
      ))}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center shadow-lg">
        <Leaf className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
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
    description: "Safe and compliant collection of chemical waste from industries.",
  },
  {
    icon: Shield,
    title: "Hazardous Waste Treatment",
    description: "Advanced treatment methods for dangerous materials.",
  },
  {
    icon: Recycle,
    title: "Industrial Recycling",
    description: "Sustainable recycling solutions for industrial waste.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Disposal",
    description: "Environmentally responsible disposal methods.",
  },
];

const industries = [
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Factory, name: "Manufacturing" },
  { icon: FlaskConical, name: "Laboratories" },
  { icon: Hospital, name: "Healthcare" },
  { icon: Building2, name: "Chemical Plants" },
];

const whyChoose = [
  { icon: Award, title: "Certified Excellence", desc: "ISO certified and fully compliant" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock emergency response" },
  { icon: Users, title: "Expert Team", desc: "Highly trained professionals" },
  { icon: Shield, title: "Safety First", desc: "Zero-incident safety record" },
];

const testimonials = [
  {
    quote: "EnviroChem has transformed our waste management operations. Their professionalism and commitment to sustainability is unmatched.",
    author: "Dr. Sarah Mitchell",
    role: "Operations Director",
    company: "PharmaTech Industries",
  },
  {
    quote: "Reliable, efficient, and truly dedicated to environmental protection. We've been partners for over 5 years.",
    author: "James Rodriguez",
    role: "Facility Manager",
    company: "Global Chemical Corp",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            src="/video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-32 md:pt-44">
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
              <Leaf className="w-4 h-4 text-eco" />
              <span className="text-white/90 text-sm font-medium">
                Sustainable Solutions for a Cleaner Future
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Smart Solutions for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-eco">Chemical Waste</span> &{" "}
              <span className="text-gradient">Sustainable Recycling</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            >
              Protecting the environment through advanced chemical waste
              management and eco-friendly recycling technologies.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "99%", label: "Compliance Rate" },
              ].map((stat, i) => (
                <div key={stat.label} className={`text-center ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-[#fafdfc]">
        {/* Premium Mesh Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-eco/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-teal/15 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Leaf className={`w-${2 + (i % 3)} h-${2 + (i % 3)} text-primary/20`} />
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="flex justify-start mb-8">
            <CircularText text="• SUSTAINABILITY • INNOVATION • PROTECTION " />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 relative group overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[35deg] animate-[shine_3s_infinite]" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
                Leading the Way in{" "}
                <span className="text-gradient">Environmental Protection</span>
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6 font-medium">
                EnviroChem Waste Solutions is a pioneering company dedicated to
                providing comprehensive chemical waste management services. With
                over 15 years of experience, we've helped hundreds of businesses
                achieve environmental compliance while minimizing their ecological
                footprint.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Our state-of-the-art facilities and expert team ensure safe,
                efficient, and sustainable handling of hazardous materials.
              </p>
              <MagneticButton>
                <Button asChild variant="default" size="lg" className="relative z-10">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-eco/10 to-transparent rounded-[3rem] blur-3xl animate-pulse" />
              <div className="relative glass-card-strong rounded-[2.5rem] p-10 bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden group">
                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/20 via-eco/20 to-primary/20 rounded-[2.5rem] [mask-image:linear-gradient(white,white)_padding-box,linear-gradient(white,white)]" style={{ transform: 'scale(1.01)' }} />
                <img
                  src={logo}
                  alt="EnviroChem"
                  className="w-48 mx-auto mb-6"
                />
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "15+", label: "Years of Excellence" },
                    { value: "500+", label: "Happy Clients" },
                    { value: "50K+", label: "Tons Processed" },
                    { value: "Zero", label: "Environmental Incidents" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-eco-light/50 border border-white/50 shadow-sm transition-all duration-300"
                    >
                      <div className="text-2xl font-display font-bold text-primary">
                        <CountUp value={item.value} />
                      </div>
                      <div className="text-sm text-charcoal-light">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Creative SVG Ecosystem Graphic */}
          <div className="mt-20 relative h-32 w-full flex items-center justify-center pointer-events-none">
            <svg className="absolute w-full h-full overflow-visible">
              <motion.path
                d="M -100 64 Q 200 10, 500 64 T 1100 64"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: 'hsl(var(--eco))', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex gap-12 items-center text-primary/30 uppercase text-[10px] tracking-[0.3em] font-bold">
              <span>Collection</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="w-4 h-4" /></motion.div>
              <span>Treatment</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><ArrowRight className="w-4 h-4" /></motion.div>
              <span>Recycling</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}><ArrowRight className="w-4 h-4" /></motion.div>
              <span>Eco-Return</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Bento Grid Upgrade */}
      <section className="section-padding relative overflow-hidden bg-[#fafdfc]">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-eco/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">
              Future-Proof <span className="text-gradient">Waste Management</span>
            </h2>
            <p className="text-charcoal-light text-lg">
              State-of-the-art solutions engineered for maximum environmental safety and circular efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[250px]">
            {/* Bento Card 1: Main Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 md:row-span-2 min-h-[400px] md:min-h-0 group relative overflow-hidden rounded-[2.5rem] bg-charcoal p-8 md:p-10 flex flex-col justify-end"
            >
              <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent z-10" />
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80')] bg-cover bg-center" />
              </div>
              <div className="relative z-20">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Hazardous Waste Lifecycle</h3>
                <p className="text-white/70 max-w-md text-lg leading-relaxed">
                  End-to-end management from chemical screening to high-thermal oxidation treatment.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-black/5 p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-eco-light flex items-center justify-center mb-auto group-hover:bg-eco group-hover:text-white transition-all">
                <Recycle className="w-6 h-6 text-eco group-hover:text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-charcoal mb-2">Resource Recovery</h4>
              <p className="text-sm text-charcoal-light">Turning industrial biproducts into valuable commodities.</p>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-primary/5 p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-auto group-hover:bg-primary transition-all">
                <Shield className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-charcoal mb-2">Safety Audit</h4>
              <p className="text-sm text-charcoal-light">Comprehensive risk assessment for onsite waste storage.</p>
            </motion.div>

            {/* Bento Card 4: Advanced Chemical Recycling */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 md:row-span-2 min-h-[400px] md:min-h-0 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#064e3b] to-black p-8 md:p-10 text-white flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="mb-12">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none"
                  />
                  <FlaskConical className="w-16 h-16 text-eco relative z-10" />
                </div>
                <h4 className="text-3xl font-display font-bold mb-6 leading-tight">Molecular <br /><span className="text-eco">Recovery</span></h4>
                <p className="text-white/50 text-base leading-relaxed">
                  Transforming complex chemical structures back into high-purity raw materials.
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex gap-2 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-eco"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Pure-Grade Extraction</p>
              </div>
            </motion.div>

            {/* Bento Card 5: Circular Material Loops */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-8 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-black/5 p-12 flex flex-col md:flex-row items-center gap-16"
            >
              <div className="flex-1 relative z-10 text-center md:text-left">
                <span className="text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4 block">Industrial Ecosystem</span>
                <h4 className="text-4xl font-display font-bold text-charcoal mb-4">The Circular Loop</h4>
                <p className="text-charcoal-light text-lg leading-relaxed">
                  Closing the industrial gap by reintegrating recycled chemical streams back into world-class manufacturing processes.
                </p>
              </div>

              <div className="relative w-full md:w-72 aspect-square flex items-center justify-center">
                {/* Decorative Circular Loop SVG */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="url(#loopGrad)"
                    strokeWidth="4"
                    strokeDasharray="20 180"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--eco))" />
                    </linearGradient>
                  </defs>
                </svg>
                <Recycle className="absolute w-12 h-12 text-primary" />
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <MagneticButton>
              <Button asChild variant="outline" size="xl" className="rounded-full px-12 border-primary/20 hover:border-primary/50">
                <Link to="/services" className="flex items-center gap-3">
                  Discover Full Capabilities
                  <ArrowRight className="w-5 h-5 bg-primary text-white rounded-full p-1" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Orbital Dark Mode Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden py-32">
        {/* Deep glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">The EnviroChem Advantage</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Engineering <br />
                <span className="text-gradient">Zero-Risk</span> Futures
              </h2>
              <div className="space-y-8">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Central Core */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-white/5 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-eco p-1">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                      <img src={logo} alt="EnviroChem" className="w-12 sm:w-20 relative z-10 invert brightness-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Elements */}
              {[Award, Clock, Users, Shield].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-xl group cursor-pointer hover:scale-125 transition-transform"
                    style={{ transform: `rotate(-${i * 90}deg) translateX(100%)` }}
                  >
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-charcoal" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Fluid Marquee Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom mb-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold text-sm uppercase mb-3 block">Market Presence</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal">Sectors Relying on <span className="text-gradient">EnviroChem</span></h2>
            </div>
            <p className="text-charcoal-light max-w-sm mb-2">Providing critical waste management for the world's most demanding industrial environments.</p>
          </div>
        </div>

        <div className="flex gap-10 whitespace-nowrap relative">
          {/* First Marquee Set */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-10"
          >
            {[...industries, ...industries].map((industry, i) => (
              <div key={i} className="flex items-center gap-6 px-12 py-8 rounded-[2rem] bg-secondary/50 border border-black/5 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <span className="text-2xl font-display font-bold text-charcoal uppercase tracking-tight">{industry.name}</span>
              </div>
            ))}
          </motion.div>
          {/* Second Marquee Set for seamless loop */}
          <motion.div
            animate={{ x: [1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-10"
          >
            {[...industries, ...industries].map((industry, i) => (
              <div key={i} className="flex items-center gap-6 px-12 py-8 rounded-[2rem] bg-secondary/50 border border-black/5 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-eco transition-colors">
                  <industry.icon className="w-7 h-7 text-eco group-hover:text-white" />
                </div>
                <span className="text-2xl font-display font-bold text-charcoal uppercase tracking-tight">{industry.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment - Eco Parallax Section */}
      <section className="relative min-h-[80vh] flex items-center py-32 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Sustainability"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-strong p-12 rounded-[3rem] border-white/80 bg-white/70 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eco to-teal flex items-center justify-center mb-10 shadow-lg animate-float">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-display font-bold text-charcoal mb-8">
                Building a <span className="text-gradient">Sustainable Future</span> Together
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  "Zero-landfill waste management approach",
                  "Carbon-neutral operations by 2025",
                  "100% renewable energy in our facilities",
                  "Circular economy partnerships",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-black/5 last:border-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-eco/20 flex items-center justify-center text-eco">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button size="xl" className="rounded-full px-10">Join Our Green Mission</Button>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
                whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="relative z-20 aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover"
                  alt="Nature"
                />
                <div className="absolute inset-0 bg-eco/10 mix-blend-overlay" />
              </motion.div>
              {/* Decorative Floating Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 z-30 glass-card-strong p-8 rounded-3xl bg-white/90 shadow-xl hidden sm:block"
              >
                <div className="text-4xl font-display font-bold text-eco mb-1">50K+</div>
                <div className="text-sm font-bold text-charcoal-light uppercase tracking-widest">Tons Saved Annually</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Layered Glass Grid */}
      <section className="section-padding bg-[#fafdfc]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-display font-bold text-charcoal mb-6">Client <span className="text-gradient">Voices</span></h2>
            <p className="text-charcoal-light text-lg">Trust built over decades of uncompromising service.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                {/* Background Shadow Layer */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-eco/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative h-full glass-card-strong rounded-3xl p-10 flex flex-col bg-white/80 border-white hover:border-primary/20 transition-all duration-500">
                  <Quote className="w-16 h-16 text-primary/10 absolute -top-4 -left-4" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl italic text-charcoal leading-relaxed mb-10 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center text-white font-bold text-xl uppercase">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-display font-bold text-charcoal text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-charcoal-light font-medium">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Glossy Banner */}
      <section className="py-32 relative overflow-hidden">
        {/* Deep background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover grayscale opacity-40 brightness-50"
            alt="CTA Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
          {/* Moving particles */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto glass-card-strong p-16 rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Secure Your <br />
              <span className="text-eco underline underline-offset-8 decoration-white/20">Industrial Future?</span>
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
              Join the 500+ global organizations that have elevated their environmental safety standards with EnviroChem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton>
                <Button asChild size="xl" className="w-full sm:w-auto px-12 rounded-full text-lg shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="hero-outline" size="xl" className="w-full sm:w-auto px-12 rounded-full text-lg backdrop-blur-md">
                  <Link to="/technology">Explore Technology</Link>
                </Button>
              </MagneticButton>
            </div>
            {/* Trust Badges */}
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-40">
              <div className="font-display font-bold uppercase tracking-widest text-white">ISO 14001</div>
              <div className="font-display font-bold uppercase tracking-widest text-white">REACH COMPLIANT</div>
              <div className="font-display font-bold uppercase tracking-widest text-white">GREEN STAR CERTIFIED</div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
