import { motion, Variants } from "framer-motion";
import { Building2, TrendingUp, Megaphone, Coins, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const propertyTypes = [
  "Plots", "Flats", "Villas", "Apartments", "Farm Lands", "Commercial Properties"
];

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function RealEstate() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">WIN RIDGE Real Estate</h1>
          <p className="text-lg text-muted-foreground">
            Beyond property. We build wealth, careers, and thriving businesses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="rounded-2xl overflow-hidden aspect-21/9 mb-10 relative"
        >
          <img
            src="/real-estate.png"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid md:grid-cols-2 gap-12 mb-12 items-center"
        >
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold mb-6">Comprehensive Property Solutions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              With over two decades of market leadership, our real estate division offers unparalleled expertise in commercial and residential properties. We pride ourselves on transparent transactions, strategic locations, and properties that guarantee exceptional ROI.
            </p>
            <Button size="lg" className="rounded-full">Explore Properties</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-bold text-primary text-2xl mb-1">5</h4>
              <p className="text-sm text-muted-foreground">Active Projects</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-bold text-primary text-2xl mb-1">10k+</h4>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-bold text-primary text-2xl mb-1">15M+</h4>
              <p className="text-sm text-muted-foreground">Sq Ft Developed</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-bold text-primary text-2xl mb-1">100%</h4>
              <p className="text-sm text-muted-foreground">RERA Compliant</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Sliding Marquee for property types (Edge-to-Edge) */}
      <div className="w-full overflow-hidden bg-primary/5 py-8 mb-10 border-y border-primary/20 shadow-lg relative z-10">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center">
              {propertyTypes.map((type, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black font-serif text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 flex items-center mx-8 uppercase tracking-wider">
                  {type} <Star className="w-8 h-8 mx-8 inline-block text-primary/40 fill-primary/20" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 relative"
        >

          <div className="relative max-w-6xl mx-auto px-4 md:px-6">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/5 to-transparent rounded-3xl -z-10 blur-2xl" />
            
            <div className="bg-card/80 backdrop-blur-xl border border-primary/20 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-transform duration-1000 group-hover:scale-150" />
               
               <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center relative z-10">
                  <div className="flex-1 order-2 md:order-1">
                     <motion.div 
                       variants={slideUp}
                       className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20 shadow-sm"
                     >
                        <Award className="w-5 h-5" /> 2001 – 2026 (Present)
                     </motion.div>
                     <motion.h2 
                       variants={slideUp}
                       className="font-serif text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70"
                     >
                       Mr. Mukunda Naidu
                     </motion.h2>
                     <motion.h3 
                       variants={slideUp}
                       className="text-2xl md:text-3xl text-primary font-semibold mb-8"
                     >
                       Legacy of Real Estate Excellence
                     </motion.h3>
                     <motion.p 
                       variants={slideUp}
                       className="text-muted-foreground leading-relaxed text-lg md:text-xl mb-8"
                     >
                       For over two decades, Mr. Mukunda Naidu has redefined the real estate landscape across <span className="text-foreground font-semibold">Vizag and Hyderabad</span>. His visionary leadership has established a foundation of trust, quality, and innovation, specializing in <span className="text-primary font-medium">plots, flats, villas, apartments, farm lands, and commercial properties</span>.
                     </motion.p>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
                    className="w-full md:w-[45%] order-1 md:order-2"
                  >
                    <div className="aspect-3/4 rounded-3xl overflow-hidden border-4 border-card shadow-2xl shadow-primary/20 relative cursor-pointer group/img">
                      <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay group-hover/img:opacity-0 transition-opacity duration-500" />
                      <img src="/team.png" alt="Mr. Mukunda Naidu" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-20" />
                      <div className="absolute bottom-8 left-8 right-8 text-white text-center z-30 flex flex-col items-center">
                        <p className="font-serif font-bold text-3xl tracking-wider mb-2">CMD</p>
                        <div className="w-16 h-1.5 bg-primary rounded-full" />
                      </div>
                    </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">Empowering Entrepreneurs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our exclusive programs go beyond selling properties. We are committed to financial wealth education and business growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-colors">
            <TrendingUp className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">IBO Program</h3>
            <p className="text-muted-foreground text-sm">
              Join our Independent Business Owners program and create your own revenue streams with our comprehensive training, world-class inventory, and 10K+ earning potential.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-colors">
            <Megaphone className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">Marketing & Sales Training</h3>
            <p className="text-muted-foreground text-sm">
              Master advanced sales methodologies and marketing strategies for the high-end real estate market, designed to help you achieve 1K+ quality leads.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-colors">
            <Coins className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">Financial Wealth Education</h3>
            <p className="text-muted-foreground text-sm">
              Learn how to leverage real estate investments to build generational wealth, secure your financial future, maximize returns, and achieve 10K+ income potential.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}