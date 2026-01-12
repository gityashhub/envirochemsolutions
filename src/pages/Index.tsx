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
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import videoSrc from "@/assets/video.mp4";

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
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={heroBg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </div>

        {/* Content */}
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
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "99%", label: "Compliance Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
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

      {/* Who We Are */}
      {/* Who We Are with Video Background */}
      <section className="relative section-padding overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20"
            >
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
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-eco/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card-strong rounded-2xl p-8 bg-white/80 backdrop-blur-md">
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
                    <div
                      key={item.label}
                      className="text-center p-4 rounded-xl bg-eco-light/50"
                    >
                      <div className="text-2xl font-display font-bold text-primary">
                        {item.value}
                      </div>
                      <div className="text-sm text-charcoal-light">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Core Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              Comprehensive Waste Management Solutions
            </h2>
            <p className="text-charcoal-light">
              From collection to disposal, we provide end-to-end solutions
              tailored to your industry's specific needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl p-6 hover-lift hover-glow cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-eco flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
              Your Trusted Partner in Environmental Safety
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-eco flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              Trusted by Leading Industries
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="flex items-center gap-4 px-8 py-5 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 cursor-pointer">
                  <industry.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  <span className="font-medium text-charcoal group-hover:text-white transition-colors">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
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
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
                Building a Sustainable Future Together
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-8">
                At EnviroChem, sustainability isn't just a buzzword—it's the core
                of everything we do. We're committed to reducing environmental
                impact through innovative technologies and responsible practices.
              </p>
              <div className="space-y-4">
                {[
                  "Zero-landfill waste management approach",
                  "Carbon-neutral operations by 2025",
                  "100% renewable energy in our facilities",
                  "Circular economy partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-eco shrink-0" />
                    <span className="text-charcoal">{item}</span>
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
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-eco flex items-center justify-center animate-float">
                  <Leaf className="w-32 h-32 md:w-40 md:h-40 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={fadeInUp}
                className="glass-card-strong rounded-2xl p-8"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-charcoal leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-display font-semibold text-charcoal">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-charcoal-light">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-teal to-eco relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Let's build a cleaner, greener tomorrow together. Contact us today
              for a customized waste management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/technology">Explore Our Technology</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
