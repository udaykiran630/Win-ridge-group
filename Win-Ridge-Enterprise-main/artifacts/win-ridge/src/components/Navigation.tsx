import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/education", label: "Education" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/architecture", label: "Architecture" },
    { href: "/team", label: "Leadership" },
    { href: "/trust", label: "Trust" },
    { href: "/vip-investors", label: "VIP Investors" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-2 shadow-lg" : "bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-3 md:py-4 shadow-sm md:shadow-none"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/hhh.png"
              alt="WIN RIDGE Group"
              className="h-14 md:h-16 w-auto object-contain transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:drop-shadow-none"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary relative group ${location === link.href ? "text-primary" : "text-foreground/90"}`}
              >
                {link.label}
                <motion.span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location === link.href ? "w-full" : ""}`}
                />
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <Button variant="default" className="rounded-full px-8 h-12 font-bold tracking-wider shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-3 rounded-2xl transition-colors ${mobileMenuOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-background/90 backdrop-blur-2xl border border-border/50 p-3 rounded-4xl flex flex-col gap-1 shadow-2xl shadow-primary/10 overflow-hidden ring-1 ring-primary/5"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-bold px-6 py-2.5 rounded-2xl transition-all flex items-center justify-between group ${location === link.href ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-foreground/80 hover:bg-primary/5 hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {location === link.href && <motion.div layoutId="active" className="h-2 w-2 rounded-full bg-white" />}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="pt-2"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full h-11 text-base rounded-2xl font-bold bg-primary text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}