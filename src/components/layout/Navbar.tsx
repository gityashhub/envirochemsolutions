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

  // Determine navbar styles based on state
  const isNavSolid = isOpen || isScrolled || !isHome;
  const textColor = isNavSolid ? "text-charcoal" : "text-white";

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 
        ${isNavSolid
          ? "top-0 w-fit max-w-[95%] rounded-2xl rounded-t-none bg-white/95 backdrop-blur-md shadow-lg border border-white/20 py-2 px-8"
          : "top-1 w-[95%] max-w-7xl bg-transparent border-transparent py-4 px-6"
        }`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-12 relative">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 group transition-all duration-300 relative z-50
               ${isHome && !isScrolled && !isOpen
                ? "lg:scale-125 lg:origin-left"
                : ""
              }`}
          >
            <img
              src={logo}
              alt="EnviroChem Waste Solutions"
              className={`w-auto transition-all duration-300
                ${isHome && !isScrolled && !isOpen
                  ? "h-12 md:h-16 lg:h-24 xl:h-36"
                  : "h-10 md:h-12 lg:h-14"
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium transition-colors duration-200 relative group py-2 ${textColor}`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}

            {/* Optional: Add a CTA button here if needed */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-200 ${textColor} hover:opacity-70`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="flex flex-col space-y-2 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-4 px-4 rounded-xl text-lg font-medium transition-colors duration-200 ${location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-charcoal hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
