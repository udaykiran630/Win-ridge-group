import { motion, Variants } from "framer-motion";
import { Heart, Users, HandHeart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Trust() {
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
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <Heart className="mr-2 h-4 w-4" />
            WIN RIDGE Trust
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Giving Back to Society</h1>
          <p className="text-lg text-muted-foreground">
            Our non-profit arm dedicated to community service, social empowerment, and lifting those in need.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="rounded-2xl overflow-hidden aspect-21/9 mb-12 relative"
        >
          <img 
            src="/trust.png" 
            alt="Community Service" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div variants={slideUp} className="bg-card p-8 rounded-2xl border border-border">
            <HandHeart className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">Community Relief</h3>
            <p className="text-muted-foreground text-sm">Providing essential resources, food, and medical assistance to underprivileged communities across the region.</p>
          </motion.div>
          <motion.div variants={slideUp} className="bg-card p-8 rounded-2xl border border-border">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">Education Scholarships</h3>
            <p className="text-muted-foreground text-sm">Funding the education of bright, deserving students who lack the financial means to pursue their academic dreams.</p>
          </motion.div>
          <motion.div variants={slideUp} className="bg-card p-8 rounded-2xl border border-border">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">Skill Development</h3>
            <p className="text-muted-foreground text-sm">Organizing free vocational training and skill development camps to empower the youth for better employment.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Social responsibility is at the core of WIN RIDGE Group's ethos. We welcome partnerships, volunteers, and contributions to expand our reach and impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto">Volunteer With Us</Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto">Partner Initiatives</Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}