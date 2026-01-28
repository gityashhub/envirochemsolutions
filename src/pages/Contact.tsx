import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  Leaf,
  Globe,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import aboutHero from "@/assets/about-hero.jpg";

const LocalMagnetic = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };
  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
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

const wasteTypes = [
  "Chemical Waste",
  "Hazardous Waste",
  "Industrial Waste",
  "E-Waste",
  "Laboratory Waste",
  "Pharmaceutical Waste",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Global Headquarters",
    details: ["Nr. priya cinema, ff07 EnviroChem Waste Solutions", "30mt, Canal ring road", "Sevasi, Vadodara, Gujarat 391101"],
    tag: "HQ"
  },
  {
    icon: Phone,
    title: "Direct Connect",
    details: ["+91 9265299252", "+91 9313564495"],
    tag: "Voice"
  },
  {
    icon: Mail,
    title: "Digital Correspondence",
    details: ["envirochemwastesolutions@gmail.com"],
    tag: "Email"
  },
  {
    icon: Clock,
    title: "Operational Status",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Response Active"],
    tag: "Uptime"
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    personName: "",
    email: "",
    phone: "",
    wasteType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Communication Logged", {
      description: "Our technical team will review your requirements within 24 hours.",
    });
    setFormData({
      companyName: "",
      personName: "",
      email: "",
      phone: "",
      wasteType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section - Compact Banner */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal to-charcoal" />
        </div>

        <div className="container-custom relative z-10 pt-32 md:pt-44 pb-20 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Globe className="w-3 h-3" />
              Service Node
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Let's Start <br />
              <span className="text-gradient">Advancing Together</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed max-w-xl font-light"
            >
              Contact our technical advisors to architect a waste management
              strategy that aligns with your industrial sustainability goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid & Form */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-secondary/30 border border-black/5 hover:bg-white transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">{info.tag}</span>
                        <h3 className="text-base font-display font-bold text-charcoal mb-2">{info.title}</h3>
                        <div className="flex flex-col gap-1">
                          {info.details.map((detail, index) => (
                            info.tag === "Voice" ? (
                              <a
                                key={index}
                                href={`tel:${detail.replace(/\s+/g, '')}`}
                                className="text-charcoal-light text-xs hover:text-primary transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={index} className="text-charcoal-light text-xs">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Red Alert Banner - Compact */}
              <div className="p-8 rounded-[2rem] bg-charcoal text-white relative overflow-hidden">
                <div className="relative z-10 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold uppercase tracking-widest text-[9px] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Priority Channel
                  </div>
                  <h3 className="text-xl font-display font-bold mb-6 italic">24/7 Emergency Spill Response</h3>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full rounded-full text-sm">
                      <a href="tel:+919265299252" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        +91 9265299252
                      </a>
                    </Button>
                    <Button variant="hero" size="lg" className="w-full rounded-full text-sm">
                      <a href="tel:+919313564495" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        +91 9313564495
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#fafdfc] border border-black/5 shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-8 md:mb-10">Transmission Log</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Organization</label>
                      <Input
                        name="companyName" value={formData.companyName} onChange={handleChange} required
                        className="h-12 rounded-xl bg-white border-black/5 focus:ring-primary/20 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Represented By</label>
                      <Input
                        name="personName" value={formData.personName} onChange={handleChange} required
                        className="h-12 rounded-xl bg-white border-black/5 focus:ring-primary/20 px-4"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Email Address</label>
                      <Input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="h-12 rounded-xl bg-white border-black/5 focus:ring-primary/20 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Contact Primary</label>
                      <Input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="h-12 rounded-xl bg-white border-black/5 focus:ring-primary/20 px-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Waste Protocol</label>
                    <Select onValueChange={(v) => setFormData({ ...formData, wasteType: v })}>
                      <SelectTrigger className="h-12 rounded-xl bg-white border-black/5">
                        <SelectValue placeholder="Select primary stream" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {wasteTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest px-1">Description</label>
                    <Textarea
                      name="message" value={formData.message} onChange={handleChange} required
                      className="rounded-2xl bg-white border-black/5 min-h-[120px] p-4"
                    />
                  </div>

                  <LocalMagnetic>
                    <Button type="submit" size="xl" className="w-full rounded-full h-14 font-bold" disabled={isSubmitting}>
                      {isSubmitting ? "Validating..." : "Execute Log"}
                    </Button>
                  </LocalMagnetic>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Map */}
      <section className="py-16 bg-[#fafdfc]">
        <div className="container-custom">
          <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8716335345705!2d73.1118!3d22.3205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fca873954e7d1%3A0x6bba46c9a0c2834b!2sSevasi%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="450" style={{ border: 0, filter: 'grayscale(0.5)' }} allowFullScreen
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
