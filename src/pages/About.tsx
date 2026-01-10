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
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import logo from "@/assets/logo.png";

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
  { year: "2008", title: "Founded", desc: "Started with a vision for sustainable waste management" },
  { year: "2012", title: "ISO Certified", desc: "Achieved multiple ISO certifications" },
  { year: "2016", title: "National Expansion", desc: "Expanded operations across 10 major cities" },
  { year: "2020", title: "Tech Innovation", desc: "Launched AI-powered waste tracking system" },
  { year: "2024", title: "Carbon Neutral", desc: "Achieved carbon neutrality in operations" },
];

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
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mt-4 mb-6"
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
                From Vision to Global Impact
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  EnviroChem Waste Solutions was founded in 2008 with a singular
                  mission: to revolutionize how industries handle chemical waste.
                  What started as a small operation has grown into a leading
                  environmental services company trusted by Fortune 500 companies
                  and government agencies alike.
                </p>
                <p>
                  Our journey has been defined by continuous innovation,
                  unwavering commitment to safety, and a deep respect for the
                  environment. Today, we process over 50,000 tons of chemical
                  waste annually, transforming potential pollutants into
                  reusable resources.
                </p>
                <p>
                  With state-of-the-art facilities across multiple locations and
                  a team of over 500 dedicated professionals, we're not just
                  managing waste—we're building a sustainable future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-eco/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card-strong rounded-2xl p-8">
                <img src={logo} alt="EnviroChem" className="w-40 mx-auto mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, value: "15+", label: "Facilities" },
                    { icon: Users, value: "500+", label: "Experts" },
                    { icon: Globe, value: "10+", label: "Cities" },
                    { icon: Award, value: "25+", label: "Awards" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center p-4 rounded-xl bg-eco-light"
                    >
                      <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-display font-bold text-charcoal">
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

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-eco-light to-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-strong rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-teal flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                To provide innovative, safe, and sustainable chemical waste
                management solutions that protect our environment and communities
                while enabling businesses to thrive responsibly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card-strong rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-eco to-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                Our Vision
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                To become the global leader in chemical waste management,
                pioneering zero-waste solutions and setting the industry standard
                for environmental excellence and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              The Principles That Guide Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-secondary hover:bg-teal-light transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-eco flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
              Milestones of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                  <div className="md:w-5/12 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-primary/30 hidden md:block" />
                        <div className="text-3xl font-display font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg font-semibold mb-1">
                          {milestone.title}
                        </div>
                        <p className="text-white/70 text-sm">{milestone.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="md:w-5/12 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="absolute top-1/2 -left-4 w-4 h-0.5 bg-primary/30 hidden md:block" />
                        <div className="text-3xl font-display font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg font-semibold mb-1">
                          {milestone.title}
                        </div>
                        <p className="text-white/70 text-sm">{milestone.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Certifications & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-3 mb-6">
              Trusted Standards, Proven Excellence
            </h2>
            <p className="text-charcoal-light">
              We maintain the highest certifications and comply with all
              regulatory requirements to ensure safe and responsible operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                variants={fadeInUp}
                className="flex items-center gap-4 p-5 rounded-xl bg-eco-light"
              >
                <div className="w-10 h-10 rounded-full bg-eco flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-charcoal font-medium">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Partner with the Leaders in Sustainability
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Join hundreds of businesses that trust EnviroChem for their waste
              management needs.
            </p>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
