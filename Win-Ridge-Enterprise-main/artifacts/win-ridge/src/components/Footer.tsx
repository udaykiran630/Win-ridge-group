import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 pt-16 pb-10 relative overflow-hidden">
      {/* Background Shadows/Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ABOUT US */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-foreground mb-6">About Us</h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              A prestigious conglomerate headquartered in Hyderabad, India, with 25+ years of excellence across multiple pillars of growth. Engineering global excellence through innovation and trust.
            </p>
          </div>

          {/* ADDRESS */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-foreground mb-6">Address</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>Financial District, Gachibowli, <br/>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 40 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@winridgegroup.com" className="hover:text-primary transition-colors">info@winridgegroup.com</a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-all flex items-center gap-2">› Home</Link></li>
              <li><Link href="/real-estate" className="hover:text-primary transition-all flex items-center gap-2">› Real Estate</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-all flex items-center gap-2">› University</Link></li>
              <li><Link href="/architecture" className="hover:text-primary transition-all flex items-center gap-2">› Architecture</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-all flex items-center gap-2">› About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-all flex items-center gap-2">› Contact</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-all flex items-center gap-2">› Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-all flex items-center gap-2">› Privacy Policy</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-foreground mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Keep up on our always evolving product features and technology. Enter your e-mail and subscribe!
            </p>
            <div className="flex w-full max-w-sm items-center space-x-0 group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex h-10 w-full rounded-l-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all border-r-0"
              />
              <button className="inline-flex items-center justify-center rounded-r-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons with Horizontal Lines */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/30"></div>
          </div>
          <div className="relative flex justify-center gap-4 px-4 bg-card">
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Logo and Copyright */}
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex flex-col items-center group">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/hhh.png"
                alt="WIN RIDGE Group"
                className="h-20 w-auto object-contain"
              />
            </motion.div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase mt-2 text-foreground/80">Win Ridge Group</span>
          </Link>
          <p className="text-xs text-muted-foreground font-medium text-center">
            Copyright &copy; {new Date().getFullYear()} WIN RIDGE Group. Engineering Global Excellence. <br/>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}