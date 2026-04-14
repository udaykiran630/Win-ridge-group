import { motion, Variants } from "framer-motion";
import { GraduationCap, BookOpen, Library, Award, ChevronRight, Sparkles, Pencil, Book, Globe, Laptop, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const programs = [
  "Artificial Intelligence", "Machine Learning", "Data Science", 
  "Entrepreneurship", "Global Business", "Advanced Research", "Sales Leadership"
];

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Education() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Decorative Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-[5%] text-primary/20 hidden md:block"><Book size={64} /></motion.div>
         <motion.div animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-64 right-[5%] text-primary/15 hidden md:block"><GraduationCap size={80} /></motion.div>
         <motion.div animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 left-[20%] text-primary/10"><Laptop size={60} /></motion.div>
         <motion.div animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[45%] right-[20%] text-primary/10"><Globe size={70} /></motion.div>
         <motion.div animate={{ y: [0, -25, 0], x: [0, 10, 0], rotate: [0, 8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-[30%] left-[8%] text-primary/15 hidden lg:block"><Microscope size={60} /></motion.div>
         <motion.div animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[20%] right-[10%] text-primary/20 hidden md:block"><Pencil size={50} /></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <GraduationCap className="mr-2 h-4 w-4" />
            WIN RIDGE Education
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">Shaping the Leaders of Tomorrow</h1>
          <p className="text-lg text-muted-foreground">
            From early childhood foundations to advanced doctoral research, our educational institutions are committed to academic excellence and holistic development.
          </p>
        </motion.div>

        {/* Dynamic Image Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12 rounded-3xl overflow-hidden aspect-21/9 relative group cursor-pointer shadow-2xl shadow-primary/20"
        >
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <img
            src="/education.png"
            alt="WIN RIDGE University Campus"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-20" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">World-Class Facilities</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Experience an environment designed to inspire innovation, foster creativity, and build the future of education.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden bg-primary/5 py-6 mb-12 border-y border-primary/20 shadow-lg relative z-10">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center">
              {programs.map((prog, i) => (
                <span key={i} className="text-2xl md:text-4xl font-black font-serif text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 flex items-center mx-8 uppercase tracking-wider">
                  {prog} <Sparkles className="w-8 h-8 mx-8 inline-block text-primary/40" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          {/* University */}
          <motion.div 
            variants={slideUp} 
            whileHover={{ y: -10 }}
            className="group rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110">
              <Library className="h-24 w-24 text-primary" />
            </div>
            
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10 shadow-inner">
              <Library className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">WIN RIDGE University</h3>
            <p className="text-muted-foreground mb-8 flex-1 relative z-10 group-hover:text-foreground/80 transition-colors">
              Offering comprehensive degree programs from undergraduate to PhD. Our rigorous academic curriculum is designed to foster critical thinking and innovation.
            </p>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Undergraduate Degrees</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Postgraduate Programs</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Doctoral Research (PhD)</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> AI & ML Programs </li>
            </ul>
            <Button variant="outline" className="w-full relative z-10 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
              Admissions Info <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>

          {/* Business School */}
          <motion.div 
            variants={slideUp} 
            whileHover={{ y: -10 }}
            className="group rounded-3xl border border-primary/30 bg-primary/5 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110">
              <Award className="h-24 w-24 text-primary" />
            </div>
            
            <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center mb-8 text-primary-foreground group-hover:scale-110 shadow-lg shadow-primary/30 transition-all duration-300 relative z-10">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">Business School</h3>
            <p className="text-muted-foreground mb-8 flex-1 relative z-10 group-hover:text-foreground/80 transition-colors">
              Specialized business education focusing on practical skills, entrepreneurship, marketing, and sales leadership.
            </p>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Business Growth Strategy</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Marketing Excellence</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Sales & Negotiation</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> AI & ML Programs</li>
            </ul>
            <Button className="w-full relative z-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group/btn">
              Explore Programs <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>

          {/* Boarding School */}
          <motion.div 
            variants={slideUp} 
            whileHover={{ y: -10 }}
            className="group rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110">
              <GraduationCap className="h-24 w-24 text-primary" />
            </div>
            
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10 shadow-inner">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">Boarding School</h3>
            <p className="text-muted-foreground mb-8 flex-1 relative z-10 group-hover:text-foreground/80 transition-colors">
              A nurturing residential environment for early childhood education, setting the right foundation for lifelong learning.
            </p>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> LKG & UKG Programs</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Classes 1 and 2</li>
              <li className="flex items-center text-sm font-medium text-foreground/80"><ChevronRight className="h-5 w-5 text-primary mr-2 group-hover:translate-x-1 transition-transform" /> Premium Residential Facilities</li>
            </ul>
            <Button variant="outline" className="w-full relative z-10 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
              Campus Tour <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Featured Video Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-1.5 rounded-full border border-primary/20 bg-card/60 backdrop-blur-md mb-8 shadow-sm">
             <span className="px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase">Featured Tour</span>
             <span className="px-5 text-sm font-medium text-foreground/80 font-serif italic">Inside WIN RIDGE Education</span>
          </div>
          
          <div className="relative rounded-4xl overflow-hidden aspect-video shadow-2xl shadow-primary/10 border border-border bg-card">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none z-20 mix-blend-multiply" />
            <iframe 
              className="w-full h-full absolute inset-0 z-10"
              src="https://www.youtube.com/embed/5ImI7N9XQw8?rel=0&modestbranding=1" 
              title="WIN RIDGE Education Insight" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}