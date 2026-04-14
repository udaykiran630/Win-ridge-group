import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { Building2, GraduationCap, HeartHandshake, ArrowRight, ShieldCheck, Trophy, Globe, Diamond, Quote, MessageSquare, HelpCircle, ChevronDown, Youtube, Play, PenTool, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MeshGradient, FloatingParticles } from "@/components/AnimatedBackground";
import { useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const divisions = [
  { id: 0, name: "REAL ESTATE", label: "Luxury", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200", color: "text-amber-500", href: "/real-estate", icon: Building2, desc: "Premium property solutions and strategic wealth growth through our exclusive IBO program." },
  { id: 1, name: "EDUCATION", label: "Global", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200", color: "text-blue-500", href: "/education", icon: GraduationCap, desc: "World-class educational institutions from primary learning to advanced doctoral research." },
  { id: 2, name: "VIP INVEST", label: "Elite", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200", color: "text-zinc-400", href: "/vip-investors", icon: Diamond, desc: "Bespoke corporate engagement and high-yield investment opportunities for elite partners." },
  { id: 3, name: "TRUST", label: "Impact", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200", color: "text-red-500", href: "/trust", icon: HeartHandshake, desc: "Empowering lives through essential social services, community support, and philanthropy." },
  { id: 4, name: "ARCHITECTURE", label: "Design", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200", color: "text-slate-500", href: "/architecture", icon: PenTool, desc: "Innovative architectural design and luxury interior masterpieces crafted for global excellence." },
];

const textTestimonials = [
  {
    name: "Sarah Jenkins",
    role: "Real Estate Professional",
    content: "The WIN RIDGE IBO program for real estate growth is transformative. Their strategic support has redefined my approach to wealth creation.",
    avatar: "SJ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Dr. David Chen",
    role: "Academic Partner",
    content: "From primary to higher education, WIN RIDGE's commitment to excellence and global standards is truly world-class and inspiring.",
    avatar: "DC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "VIP Portfolio Manager",
    content: "Their bespoke approach to wealth management and dedication to social impact creates a legacy that goes far beyond financial returns.",
    avatar: "ER",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Architecture Client",
    content: "The attention to detail in their architectural designs is unmatched. They transformed our vision into a stunning living space.",
    avatar: "JW",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Education Consultant",
    content: "WIN RIDGE consistently delivers top-tier educational curriculum. Their focus on holistic student development is commendable.",
    avatar: "PS",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Michael Brown",
    role: "VIP Investor",
    content: "Investing with WIN RIDGE has been a seamless experience. Their transparency and robust growth strategies are impressive.",
    avatar: "MB",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

const videoTestimonials = [
  {
    title: "Real Estate Success Story",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=400&auto=format&fit=crop",
    duration: "4:20",
    role: "Investment Partner"
  },
  {
    title: "University Campus Life",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop",
    duration: "3:45",
    role: "Student Experience"
  },
  {
    title: "Architecture Design Walkthrough",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&h=400&auto=format&fit=crop",
    duration: "2:15",
    role: "Luxury Homeowner"
  },
  {
    title: "Social Trust Impact",
    thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&h=400&auto=format&fit=crop",
    duration: "5:30",
    role: "Community Lead"
  },
  {
    title: "IBO Leadership Summit",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&h=400&auto=format&fit=crop",
    duration: "6:10",
    role: "Business Owner"
  }
];

// Creative Variants - Cascading/Staggered elements
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Smooth cascading effect
    },
  },
};

// Elements slide in from different directions based on index for variety
const createSlideVariant = (direction: "up" | "down" | "left" | "right", delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a unique feel
      delay,
    },
  },
});

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const heroSlides = [
  {
    id: 0,
    isIntro: true,
    name: "INTRO",
    label: "Welcome",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    color: "text-primary",
    href: "/",
    icon: Building2,
    desc: ""
  },
  ...divisions.map(d => ({ ...d, id: d.id + 1, isIntro: false }))
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);

  // Auto-change images every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveTab((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setActiveTab((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const currentSlide = heroSlides[activeTab];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] text-foreground font-sans overflow-x-hidden">
      {/* Cinematic Image Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          {currentSlide.isIntro ? (
            <motion.div
              key="intro-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10"
            >
              <div className="absolute inset-0 bg-black/60 md:bg-[#E8EDE6]/90 z-[-1]" />
              <img src={currentSlide.image} className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-60 md:opacity-30 md:mix-blend-multiply" />

              <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-12 md:mt-28 lg:mt-32">
                <motion.div variants={createSlideVariant("up")} initial="hidden" animate="visible" className="mb-4 inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-white/20 bg-primary/20 text-[10px] sm:text-xs font-semibold text-white shadow-sm backdrop-blur-md animate-pulse">
                  <Trophy className="w-4 h-4 text-orange-400" />
                  25+ Years of Proven Excellence
                </motion.div>

                <motion.h1 variants={createSlideVariant("up", 0.1)} initial="hidden" animate="visible" className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black tracking-tight text-white md:text-black leading-[1.1] text-center mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:drop-shadow-sm">
                  Building the <span className="text-[#B7E4C7] md:text-[#2D6A4F] relative whitespace-nowrap">Future<span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-0.5 sm:h-0.75 bg-[#B7E4C7]/60 md:bg-[#2D6A4F]/60" /></span>
                  <br />
                  <span className="italic font-normal text-[#B7E4C7] md:text-[#2D6A4F]">Empowering Lives</span>
                </motion.h1>

                <motion.p variants={createSlideVariant("up", 0.2)} initial="hidden" animate="visible" className="max-w-xl mx-auto text-sm sm:text-lg md:text-xl text-center text-white/90 md:text-zinc-600 font-bold md:font-light leading-relaxed mb-6">
                  A premier global conglomerate from Hyderabad, driving innovation and impact across <span className="font-extrabold md:font-semibold text-white md:text-[#2D6A4F]">Real Estate, Education,</span> and <span className="font-extrabold md:font-semibold text-white md:text-[#2D6A4F]">Social Empowerment</span>.
                </motion.p>

                <motion.div variants={createSlideVariant("up", 0.3)} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <Button className="rounded-full px-4 sm:px-6 md:px-8 h-10 md:h-14 bg-[#2D6A4F] text-white hover:bg-[#1B4332] text-[10px] sm:text-sm font-semibold transition-all shadow-lg hover:shadow-xl group">
                    Discover Our Legacy <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="rounded-full px-4 sm:px-6 md:px-8 h-10 md:h-14 border-white/40 md:border-[#2D6A4F]/30 bg-transparent hover:bg-white/10 text-white md:text-[#2D6A4F] text-[10px] sm:text-sm font-semibold transition-all">
                    Connect With Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="division-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full bg-black/60 md:bg-[#FDFCF8]"
            >
              {/* Cinematic Background Text - Hidden on mobile for clarity */}
              <motion.div style={{ opacity: bgOpacity, y: y2 }} className="absolute -left-[5vw] top-[10vh] pointer-events-none select-none z-0 hidden md:block">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={activeTab}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.03 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[25vw] font-serif font-black text-black leading-none uppercase tracking-tighter"
                  >
                    {currentSlide.name.split(' ')[0]}
                  </motion.h1>
                </AnimatePresence>
              </motion.div>

              {/* Hero Image Focal Point */}
              <div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full md:h-auto md:aspect-video relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-linear-to-r md:from-[#FDFCF8] md:via-transparent md:to-transparent z-1" />
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.name}
                      className="w-full h-full object-cover filter contrast-[1.05]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Hero Content Overlay */}
              <div className="container relative z-20 mx-auto px-4 md:px-12 h-screen flex flex-col justify-center">
                <div className="max-w-4xl pt-40 md:pt-20">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <motion.div variants={createSlideVariant("up")} className="flex items-center gap-4 mb-6">
                      <span className="w-8 md:w-12 h-px bg-white/40 md:bg-primary"></span>
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] text-white/90 md:text-primary">WIN RIDGE GROUP</span>
                    </motion.div>

                    {/* Main Cinematic Title */}
                    <motion.h2 variants={createSlideVariant("up")} className="text-2xl sm:text-4xl md:text-[9vw] font-serif font-bold md:font-light tracking-tighter mb-0 leading-[0.9] md:leading-[0.85] text-white md:text-black drop-shadow-xl md:drop-shadow-sm">
                      {currentSlide.name.split(' ')[0]} <br />
                      <span className="italic font-bold md:font-normal opacity-100 md:opacity-90 pl-4 sm:pl-16 md:pl-32 inline-block">
                        {currentSlide.name.split(' ')[1] || "Legacy"}
                      </span>
                    </motion.h2>

                    <motion.div variants={createSlideVariant("up")} className="flex flex-col gap-6 mt-10 md:mt-12">
                      <div className="max-w-xs pl-1">
                        <p className="text-sm md:text-sm font-serif italic text-white/80 md:text-zinc-500 font-bold md:font-light leading-relaxed">
                          {currentSlide.desc}
                        </p>
                      </div>
                      <Link href={currentSlide.href}>
                        <Button className="rounded-none px-5 md:px-8 h-10 md:h-12 bg-[#2D6A4F] text-white hover:bg-[#1B4332] border border-white/20 md:border-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all w-fit group">
                          Discover Excellence <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Edge-to-Edge Navigation */}
        <div className="absolute inset-0 z-30 pointer-events-none flex justify-between">
          <button 
            onClick={handlePrev}
            className="pointer-events-auto h-full hidden md:flex items-center group px-2 md:px-6 outline-none"
            aria-label="Previous Slide"
          >
            <div className="p-2 md:p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white/90 transition-all group-hover:bg-primary/40 group-hover:border-primary/50 group-hover:scale-110">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </button>
          <button 
            onClick={handleNext}
            className="pointer-events-auto h-full hidden md:flex items-center group px-2 md:px-6 outline-none"
            aria-label="Next Slide"
          >
            <div className="p-2 md:p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white/90 transition-all group-hover:bg-primary/40 group-hover:border-primary/50 group-hover:scale-110">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </button>
        </div>

        {/* Minimal Division Selector */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 flex items-center gap-6 pointer-events-auto z-30">
          <div className="flex gap-2">
            {heroSlides.map((div) => (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 
                  ${activeTab === div.id ? "bg-white md:bg-black w-8 md:w-12" : "bg-white/30 md:bg-zinc-300 hover:bg-white/50 md:hover:bg-zinc-400"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-white md:text-black">0{activeTab + 1}</span>
            <span className="w-8 h-px bg-white/30 md:bg-zinc-300"></span>
            <span className="text-[10px] font-bold text-white/60 md:text-zinc-400">0{heroSlides.length}</span>
          </div>
        </div>
      </section>

      {/* Modern Stats Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={createSlideVariant("up")}
        className="py-6 sm:py-10 border-y border-border/50 bg-secondary/30 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-border/50">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "5", label: "Core Divisions" },
              { value: "10k+", label: "Students Educated" },
              { value: "100+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleInVariants}
                className="flex flex-col items-center justify-center text-center space-y-2 lg:px-10"
              >
                <span className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">{stat.value}</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Divisions Overview */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <motion.h2 variants={createSlideVariant("up")} className="font-serif text-3xl md:text-6xl font-bold tracking-tight text-foreground">
              Our <span className="text-primary">Ecosystem</span> of Excellence
            </motion.h2>
            <motion.p variants={createSlideVariant("up")} className="mt-6 text-xl text-muted-foreground font-light leading-relaxed">
              A diversified portfolio committed to delivering unparalleled value and driving sustainable, transformative growth across sectors.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-5 sm:gap-8"
          >
            {[
              {
                href: "/real-estate",
                icon: Building2,
                title: "WIN RIDGE Real Estate",
                description: "Premium real estate services, strategic growth consulting, and the exclusive Independent Business Owners (IBO) program.",
              },
              {
                href: "/education",
                icon: GraduationCap,
                title: "WIN RIDGE Education",
                description: "World-class institutions from early childhood learning to advanced PhD programs, nurturing tomorrow's leaders.",
              },
              {
                href: "/vip-investors",
                icon: Diamond,
                title: "VIP Investor Relations",
                description: "Bespoke investment opportunities and dedicated support for high-net-worth individuals and institutional partners.",
              },
              {
                href: "/trust",
                icon: HeartHandshake,
                title: "WIN RIDGE Trust",
                description: "Our philanthropic arm, driving impactful social services, community development, and empowering lives.",
              },
              {
                href: "/architecture",
                icon: PenTool,
                title: "WIN RIDGE Architecture",
                description: "Innovative architectural design and luxury interior masterpieces crafted for global excellence.",
              },
            ].map((division, index) => (
              <motion.div
                key={index}
                variants={createSlideVariant(index % 2 === 0 ? "left" : "right")}
                className="group h-full w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-70 max-w-95"
              >
                <TiltCard className="h-full">
                  <Link href={division.href} className="block h-full">
                    <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-10 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/5 shadow-sm hover:shadow-xl relative overflow-hidden">
                      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                        <division.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors tracking-tight text-foreground">{division.title}</h3>
                      <p className="text-muted-foreground/90 mb-8 line-clamp-3 text-base leading-relaxed font-light">
                        {division.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors mt-auto">
                        Explore Division
                        <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Why WIN RIDGE Section */}
      <section className="py-12 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">Why <span className="text-primary italic">WIN RIDGE</span>?</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">Our legacy is built on the convergence of strategic excellence, global innovation, and a profound commitment to social transformation.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Visionary Excellence",
                description: "Over 25 years of market-leading expertise, navigating complex landscapes with strategic precision and long-term foresight."
              },
              {
                icon: Globe,
                title: "Global Footprint",
                description: "Transcending boundaries with a diverse portfolio that impacts lives across multiple continents and high-growth sectors."
              },
              {
                icon: ShieldCheck,
                title: "Unwavering Integrity",
                description: "Our foundation is anchored in trust, ethical governance, and a commitment to delivering unparalleled value to our partners."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={createSlideVariant("up", idx * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center h-full">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{pillar.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{pillar.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* NEW: Founder & CEO Section (Edge-to-Edge) */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex flex-col lg:flex-row overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(17,80,48,0.3),transparent_70%)]" />

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-1/2 h-[28vh] lg:h-auto overflow-hidden group"
        >
          <img
            src="https://i.pinimg.com/736x/3c/a0/55/3ca0554444d7ba90ca78703a6b8203f8.jpg"
            alt="Mukunda Naidu - CEO"
            className="w-full h-full object-cover object-top filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-neutral-950/20" />
        </motion.div>

        {/* Content Column */}
        <div className="lg:w-1/2 flex flex-col justify-center p-5 sm:p-7 lg:p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[9px] sm:text-[10px] mb-3 block border-l-2 border-primary pl-4">The Visionary Force</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Leading with <span className="text-primary italic">Integrity</span>, Built on Trust.
            </h2>

            <div className="space-y-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              <p>
                "At WIN RIDGE, we don't just develop properties or manage investments. We pioneer ecosystems where ambition meets opportunity. Every venture we undertake is a commitment to sustainable growth and social empowerment."
              </p>
              <p className="border-l border-neutral-800 pl-4 italic text-neutral-500 text-[11px]">
                - Mukunda Naidu, Founder & CEO
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 items-center">
              <div>
                <p className="text-white text-xl sm:text-2xl font-serif italic tracking-wider mb-0.5">Mukunda Naidu</p>
                <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">Founder & Chairman</p>
              </div>
              <div className="h-10 w-px bg-neutral-800 hidden sm:block" />
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-white text-xl font-bold">25+</p>
                  <p className="text-neutral-500 text-[9px] uppercase">Years Legacy</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">10k+</p>
                  <p className="text-neutral-500 text-[9px] uppercase">Lives Impacted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Premium Services Bento Grid Section */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">Our Core <span className="text-primary italic">Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Transcending traditional boundaries to deliver world-class excellence across diverse sectors.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Strategic Real Estate",
                desc: "Master-planned urban developments designed for the future of living and working. We bring 25+ years of excellence to premium residential and commercial projects.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
                icon: Building2,
                href: "/real-estate",
                category: "Real Estate"
              },
              {
                title: "World-Class Education",
                desc: "From foundational learning to advanced PhD programs, our institutions are global centers of academic excellence and leadership training.",
                image: "https://i.pinimg.com/1200x/d6/97/94/d6979402843c20de87bc5c1ec24d12d9.jpg",
                icon: GraduationCap,
                href: "/education",
                category: "Education"
              },
              {
                title: "Architectural Brilliance",
                desc: "Blending aesthetics with functional innovation. Our design division crafts luxury spaces and structural masterpieces for global standards.",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
                icon: PenTool,
                href: "/architecture",
                category: "Architecture"
              },
              {
                title: "VIP Investor Relations",
                desc: "Bespoke wealth management and high-yield opportunities for our elite circle of global partners. Strategic corporate consulting at its finest.",
                image: "https://i.pinimg.com/736x/5b/26/61/5b26618f39c1c9df6e21a539123028d6.jpg",
                icon: Diamond,
                href: "/vip-investors",
                category: "VIP"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group flex flex-col lg:flex-row bg-card border border-border/50 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/20"
              >
                {/* Image Side - Left */}
                <div className="lg:w-1/2 h-[260px] lg:h-auto relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
                </div>

                {/* Content Side - Right */}
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">{service.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                    {service.desc}
                  </p>

                  <Link href={service.href}>
                    <Button size="lg" className="rounded-full px-10 border-primary text-primary hover:bg-primary hover:text-white transition-all group/btn" variant="outline">
                      Explore Division
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-12 sm:py-16 bg-background relative overflow-hidden border-t border-border/30"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-60 -left-60 w-200 h-200 border border-primary/5 rounded-full opacity-50"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div variants={createSlideVariant("up")} className="max-w-3xl mx-auto text-center mb-16 lg:hidden">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-5 shadow-sm">
              <Globe className="mr-2 h-4 w-4 text-primary/60" />
              <span className="tracking-wide">Global Design Standards</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground">5 Years of Design Innovation</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={createSlideVariant("left", 0.1)}
              className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-4/3 lg:aspect-square shadow-2xl group mx-auto w-full max-w-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/5" />
            </motion.div>

            <motion.div
              variants={createSlideVariant("right", 0.1)}
              className="order-1 lg:order-2 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="hidden lg:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                <Globe className="mr-2 h-4 w-4 text-primary/60" />
                <span className="tracking-wide">Global Design Standards</span>
              </div>
              <h2 className="hidden lg:block font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">5 Years of<br /> Design Innovation</h2>
              <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-xl font-light">
                Beyond traditional real estate, our dedicated architecture and interior design division crafts spaces that inspire. We blend aesthetic brilliance with functional innovation to create environments where businesses and families thrive globally.
              </p>
              <ul className="space-y-5 pt-4 text-left w-full max-w-xl">
                {[
                  "Award-winning commercial and residential masterpieces",
                  "End-to-end execution, from visionary concept to flawless handover",
                  "Sustainable, modern, and future-proof architectural practices",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={createSlideVariant("up", index * 0.1)}
                    className="flex items-start bg-card p-5 rounded-2xl border border-border shadow-sm hover:border-primary/20 transition-colors"
                  >
                    <ShieldCheck className="mr-4 h-7 w-7 text-primary shrink-0" />
                    <span className="text-foreground text-lg font-light leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={createSlideVariant("up", 0.4)} className="pt-6 sm:pt-8">
                <Link href="/architecture">
                  <Button size="lg" className="rounded-full px-10 h-14 sm:h-16 text-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-xl shadow-primary/10 group">
                    View Our Portfolio
                    <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* NEW: Testimonials Section */}
      <section className="py-16 bg-secondary/10 relative overflow-hidden">
        <div className="w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">Voices of <span className="text-primary italic">Success</span></h2>
            <p className="text-xl text-muted-foreground font-light">Join the global community of professionals and families who have thrived through our diverse ecosystem.</p>
          </motion.div>

          <div className="space-y-16 py-10">
            {/* Row 1: Google Reviews (Smooth Auto-Scroll - Right to Left) */}
            <div className="space-y-6 overflow-hidden">
              <div className="flex flex-col items-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-2">Google Reviews</h3>
                <div className="h-1 w-12 bg-primary/20 rounded-full" />
              </div>

              <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 35
                  }}
                  whileHover={{ transition: { duration: 60 } }}
                >
                  {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="flex gap-8 px-0">
                      {textTestimonials.map((testimonial, i) => (
                        <div
                          key={i}
                          className="w-87.5 bg-card border border-border/50 p-8 rounded-3xl shadow-lg relative group shrink-0 whitespace-normal hover:border-primary/30 transition-all duration-300"
                        >
                          <Quote className="absolute top-6 right-8 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                          <div className="flex items-center gap-4 mb-6">
                            <Avatar className="h-12 w-12 border-2 border-primary/20">
                              <AvatarImage src={testimonial.image} />
                              <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                              <p className="text-secondary-foreground/60 text-[10px] uppercase tracking-wider">{testimonial.role}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed italic line-clamp-4">"{testimonial.content}"</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Row 2: YouTube Video Reviews (Smooth Auto-Scroll - Left to Right) */}
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-2">YouTube Video Reviews</h3>
                <div className="h-1 w-12 bg-primary/20 rounded-full" />
              </div>

              <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                  }}
                  whileHover={{ transition: { duration: 70 } }}
                >
                  {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="flex gap-8 px-0">
                      {videoTestimonials.map((video, i) => (
                        <div
                          key={i}
                          className="w-[320px] rounded-3xl overflow-hidden relative group aspect-video shrink-0 cursor-pointer shadow-xl border border-white/10"
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-125 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-xl">
                              <Play className="w-5 h-5 fill-white text-white ml-1" />
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                            <h4 className="text-white text-sm font-bold truncate">{video.title}</h4>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-white/60 text-[10px] uppercase tracking-widest">{video.role}</span>
                              <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white backdrop-blur-sm">{video.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Success Stories Section */}
      <section className="py-16 bg-background relative overflow-hidden border-y border-border/30">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">Our <span className="text-primary italic"> Impact   </span>_in Numbers</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">Quantifiable achievements that define our commitment to excellence across every division.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100+ Premium Projects",
                category: "Real Estate",
                achievement: "Redefining luxury and commercial landscapes with precision engineering and strategic growth.",
                stats: "Delivered Globally"
              },
              {
                title: "10K+ Empowered Lives",
                category: "Education",
                achievement: "Empowering students through world-class institutions and a commitment to academic excellence.",
                stats: "Active Learners"
              },
              {
                title: "500+ VIP Partners",
                category: "Investor Relations",
                achievement: "Strategic partnerships built on long-term wealth stability and professional corporate engagement.",
                stats: "Elite Community"
              },
              {
                title: "5 Years of Innovation",
                category: "Architecture",
                achievement: "Crafting luxury spaces that blend aesthetic brilliance with functional innovation.",
                stats: "Design Masterpieces"
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                variants={createSlideVariant("up", idx * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative h-full bg-secondary/5 border border-border p-8 rounded-3xl overflow-hidden hover:bg-secondary/10 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3">{story.category}</span>
                  <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-foreground">{story.title}</h3>
                  <p className="text-muted-foreground/90 font-light leading-relaxed mb-8">{story.achievement}</p>
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <span className="text-lg font-bold text-foreground">{story.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={createSlideVariant("left")}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-6">
                <HelpCircle className="mr-2 h-4 w-4" />
                Frequently Asked Questions
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">Clarity for your <span className="text-primary italic">Journey</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">Have questions about our diverse divisions? Here are some of the most common inquiries from our global community.</p>

              <Link href="/contact">
                <Button variant="outline" className="mt-8 rounded-full h-14 px-8 text-primary border-primary/20 hover:bg-primary/5">
                  Still have questions? Contact Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={createSlideVariant("right")}
              className="bg-card border border-border/50 rounded-2xl p-4 sm:p-6 shadow-sm"
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "What is the WIN RIDGE IBO program?",
                    a: "Our Independent Business Owners (IBO) program is a strategic partnership designed for real estate professionals. It provides dedicated support, marketing resources, and growth consulting to ensure long-term success."
                  },
                  {
                    q: "How do I become a VIP Partner?",
                    a: "VIP Investor entry is typically through referral or selective application. We focus on strategic partners who align with our vision of high-yield growth and significant social impact."
                  },
                  {
                    q: "Where are your educational campuses located?",
                    a: "We operate several prestigious institutions and schools across key hubs, prioritizing world-class infrastructure and global academic standards."
                  },
                  {
                    q: "Does WIN RIDGE offer global services?",
                    a: "Yes, our Architecture, Interior Design, and Group consulting arms operate globally, bringing our signature blend of Indian excellence and international standards to projects worldwide."
                  }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-border/30 last:border-0 py-1">
                    <AccordionTrigger className="text-left font-serif text-base md:text-lg font-bold hover:no-underline hover:text-primary transition-colors py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base font-light leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}