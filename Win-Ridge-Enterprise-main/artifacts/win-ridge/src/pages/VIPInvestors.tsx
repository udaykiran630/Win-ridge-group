import { motion, Variants } from "framer-motion";
import { Trophy, ShieldCheck, TrendingUp, Users, ArrowRight, Star, Gem, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function VIPInvestors() {
  return (
    <div className="flex flex-col min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
            <Star className="mr-2 h-4 w-4 fill-primary" />
            Exclusive Partnership Program
          </div>
          <h1 className="font-serif text-3xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tight text-center">
            Partner in <span className="text-primary italic">Prosperity</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unlocking high-yield growth opportunities for strategic investors while building a lasting legacy of social impact.
          </p>
        </motion.div>

        {/* Vision Image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="rounded-3xl overflow-hidden aspect-video sm:aspect-21/9 mb-10 sm:mb-12 relative shadow-2xl group"
        >
          <img 
            src="/vip-investors.png" 
            alt="VIP Investment Architecture" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Since 2001</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Elite Corporate Engagement</h2>
          </div>
        </motion.div>

        {/* Investment Pillars */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16"
        >
          <motion.div variants={slideUp} className="bg-card p-6 sm:p-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Wealth Creation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategic participation in high-value real estate and institutional projects with proven ROIs and risk-managed growth.
            </p>
          </motion.div>

          <motion.div variants={slideUp} className="bg-card p-6 sm:p-10 rounded-2xl border border-primary/30 shadow-xl relative overflow-hidden">
            <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center mb-6 text-white">
              <Briefcase className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Strategic Trust</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparent investment structures aligned with international corporate governance and the WIN RIDGE standard.
            </p>
          </motion.div>

          <motion.div variants={slideUp} className="bg-card p-6 sm:p-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Trophy className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Social Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every VIP investment fuels the WIN RIDGE Trust, empowering underprivileged communities through education and aid.
            </p>
          </motion.div>
        </motion.div>

        {/* Priority Tiers */}
        <div className="bg-secondary/50 rounded-3xl p-6 sm:p-16 mb-12 sm:mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-2xl sm:text-5xl font-bold mb-4 sm:mb-6">VIP Membership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exclusive privileges designed for our most committed strategic partners.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Star, title: "Priority Allocation", desc: "First access to new project launches and premium inventory." },
              { icon: ShieldCheck, title: "Risk Mitigation", desc: "Advanced due diligence and secure asset protection." },
              { icon: Gem, title: "Elite Networking", desc: "Connecting you with global business leaders and HNIs." },
              { icon: Users, title: "Concierge Support", desc: "Dedicated consultation for all investment inquiries." }
            ].map((benefit, i) => (
              <motion.div key={i} variants={slideUp} className="flex flex-col items-center text-center p-6 space-y-4">
                <benefit.icon className="h-10 w-10 text-primary mb-2" />
                <h4 className="font-serif text-xl font-bold">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="bg-primary rounded-4xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Trophy className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Begin Your Legacy</h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Join an exclusive group of visionaries shaping the future of business and society. Schedule a private consultation with our executive investment board today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-12 sm:h-14 font-bold text-primary group">
                  Inquire Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
