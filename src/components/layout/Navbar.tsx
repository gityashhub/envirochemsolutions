import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform-gpu will-change-[width,transform,background-color,border-radius,padding] left-1/2 -translate-x-1/2 rounded-full ${isScrolled
        ? "top-6 w-[90%] md:w-[70%] lg:w-[50%] max-w-5xl bg-eco-light/95 backdrop-blur-xl shadow-eco-lg border border-primary/5 py-3 px-8"
        : isHome
          ? "top-6 w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl bg-transparent border-transparent py-2 px-8"
          : "top-0 w-full bg-eco-light py-2 rounded-none"
        }`}
    >
      <div className={isScrolled || isHome ? "w-full" : "container-custom"}>
        <div className="flex items-center justify-between lg:justify-center relative">
          {/* Logo */}
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 group transition-all duration-300 
              ${isHome && !isScrolled
                ? "lg:absolute lg:-left-28 lg:mt-24"
                : "lg:static lg:mr-8"
              } 
              opacity-100 visible`}
          >
            <img
              src={logo}
              alt="EnviroChem Waste Solutions"
              className={`w-auto transition-transform duration-300 group-hover:scale-105
                ${isHome && !isScrolled
                  ? "h-12 md:h-16 lg:h-60"
                  : "h-10 md:h-12"
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xl font-medium transition-colors duration-200 relative group ${isScrolled ? "text-charcoal" : "text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>



          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-200 ${location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-charcoal hover:bg-secondary"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
