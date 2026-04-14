import { PenTool, Compass, Building, Star, Layers, Pencil, Scroll, Layout, Home as HomeIcon, Trees, CheckCircle2, Box, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  hiddenLeft: { opacity: 0, x: -100 },
  visibleLeft: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function ImageReveal({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.2 }}
        className="absolute inset-0 bg-primary z-10"
      />
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Architecture() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] opacity-[0.03]"
        >
          <Pencil size={300} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] opacity-[0.03]"
        >
          <Scroll size={400} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Architecture & Interior Design</h1>
          <p className="text-lg text-muted-foreground">
            Five years of excellence in transforming spaces into masterpieces.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <Star className="mr-2 h-4 w-4" />
              Award-Winning Design Studio
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Crafting Environments <br /><span className="text-primary italic">That Inspire</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Our design philosophy bridges the gap between aesthetic grandeur and functional brilliance. With 5 years of specialized excellence, we deliver turnkey solutions that reflect the prestige of our global clientele.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 shadow-xl shadow-primary/10">Consult Our Designers</Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8">View Portfolio</Button>
            </div>
          </div>
          <div className="relative rounded-4xl overflow-hidden aspect-square shadow-2xl group">
            <ImageReveal
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
              alt="Design Portfolio"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* NEW: 3D Visualization Section (Slide Right) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="order-2 lg:order-1 relative rounded-4xl overflow-hidden aspect-video shadow-xl">
            <ImageReveal src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&h=500&auto=format&fit=crop" alt="3D Visualization" className="w-full h-full" />
            <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest z-20">Photorealistic 3D</div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Box className="h-12 w-12 text-primary bg-primary/10 p-2.5 rounded-2xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">3D Architectural <span className="text-primary">Visualization</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Experience your project before a single brick is laid. Our high-end photorealistic 3D renderings and VR walkthroughs capture material finishes, lighting, and ambiance with breathtaking accuracy.
            </p>
            <ul className="space-y-3">
              {["Exterior 3D Rendering", "Interior 3D Walkthroughs", "360° Virtual Tours"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* NEW: Sketches & Concepts (Slide Left) */}
        <motion.section
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="space-y-6">
            <Pencil className="h-12 w-12 text-primary bg-primary/10 p-2.5 rounded-2xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Artistic <span className="text-primary">Sketches</span> & Concepts</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Every masterpiece begins with a stroke of genius. Our conceptual sketches explore the "soul" of the design, focusing on artistic balance, spatial harmony, and unique branding elements.
            </p>
            <p className="text-muted-foreground font-light">We believe in the power of the hand-drawn concept to capture emotion and vision that technical software cannot replicate.</p>
          </div>
          <div className="relative rounded-4xl overflow-hidden aspect-video shadow-xl border border-border bg-muted/20">
            <ImageReveal
              src="https://i.pinimg.com/1200x/19/58/90/19589002b89fc29f719dc9aa445807ed.jpg"
              alt="Architectural Sketches"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          </div>
        </motion.section>

        {/* NEW: Blueprints & Technical (Slide Right) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="relative rounded-4xl overflow-hidden aspect-video shadow-xl bg-blue-900/10 border border-blue-500/20">
            <ImageReveal src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Technical Blueprints" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
          </div>
          <div className="space-y-6">
            <Scroll className="h-12 w-12 text-primary bg-primary/10 p-2.5 rounded-2xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Technical <span className="text-primary">Blueprints</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Precision is the foundation of structural integrity. We provide detailed technical documentation, working drawings, and comprehensive blueprints that serve as the definitive guide for construction and engineering.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-2xl">
                <span className="block font-bold text-primary">0.1mm</span>
                <span className="text-xs text-muted-foreground">Precision Grading</span>
              </div>
              <div className="p-4 bg-muted/30 rounded-2xl">
                <span className="block font-bold text-primary">Active</span>
                <span className="text-xs text-muted-foreground">Site Management</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* NEW: Vastu Section (Slide Left) */}
        <motion.section
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid lg:grid-cols-2 gap-16 items-center mb-32 bg-secondary/10 p-10 md:p-16 rounded-3xl border border-primary/10"
        >
          <div className="space-y-6">
            <Compass className="h-12 w-12 text-primary bg-primary/10 p-2.5 rounded-2xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Building Plans as per <span className="text-primary italic">Vastu</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Harmonize your living space with the laws of nature. We specialize in building plans that strictly adhere to Vastu Shastra principles, ensuring prosperity, health, and peace within your residence or workplace.
            </p>
            <ul className="space-y-4 pt-4">
              {["Directional Alignment", "Elemental Balance", "Energy Flow Optimization"].map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-foreground/70">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-4xl overflow-hidden aspect-square shadow-xl group">
            <ImageReveal
              src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop"
              alt="Vastu Building Plan"
              className="w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/60 to-transparent text-white z-20">
              <p className="font-serif text-xl font-bold">Energy Optimized Layouts</p>
              <p className="text-sm text-white/70 font-light mt-2">Precision-engineered for natural harmony and prosperity.</p>
            </div>
          </div>
        </motion.section>

        {/* Interior & Exterior Design Grid */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold">Total <span className="text-primary">Turnkey</span> Design</h2>
          <p className="text-muted-foreground mt-4">Merging interior comfort with exterior grandeur.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={0}
            className="group relative rounded-4xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&h=600&auto=format&fit=crop" alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-black/80 via-black/40 to-transparent text-white">
              <HomeIcon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-3xl font-serif font-bold mb-2">Luxury Interior Design</h3>
              <p className="text-white/70 font-light">Bespoke lighting, custom furniture, and curated material palettes for high-end living.</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={1}
            className="group relative rounded-4xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&h=600&auto=format&fit=crop" alt="Exterior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-black/80 via-black/40 to-transparent text-white">
              <Trees className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-3xl font-serif font-bold mb-2">Iconic Exterior Design</h3>
              <p className="text-white/70 font-light">Façade engineering, sustainable landscaping, and structural landscape art.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: PenTool, title: "Conceptual Design", desc: "Bespoke concepts tailored to brand identity and personal taste." },
            { icon: Compass, title: "Space Planning", desc: "Optimizing layouts for flow, functionality, and maximum impact." },
            { icon: Building, title: "Turnkey Execution", desc: "Flawless project management from blueprints to the final reveal." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={i}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="text-center group p-8 rounded-3xl hover:bg-muted/30 transition-all duration-500 h-full border border-transparent hover:border-primary/10">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-6">VIP Visitors & Testimonials</h2>
          <p className="text-muted-foreground mb-8 text-lg italic">
            "The attention to detail and the sheer elegance of their designs is unmatched. WIN RIDGE transformed our corporate space into a true reflection of our global ambitions."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-secondary border border-border"></div>
            <div className="text-left">
              <p className="font-bold">Hon. Global Delegate</p>
              <p className="text-xs text-primary">International Summit 2023</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}