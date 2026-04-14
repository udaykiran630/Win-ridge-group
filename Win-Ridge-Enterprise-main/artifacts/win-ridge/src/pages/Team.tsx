import { motion, Variants } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Gongada Mukunda Naidu",
    role: "Chairman & Managing Director",
    initials: "CMD",
    bio: "The visionary leader driving WIN RIDGE Group’s growth, built on a 25+ year legacy of excellence across Education, Trust, Real Estate, Architecture, and Maintenance."
  },
  {
    name: "Gadi Padmavathi",
    role: "Vice Chairman",
    initials: "VCM",
    bio: "Managing institutional partnerships, academic excellence, and corporate governance supported by expertise in Education, Trust, Real Estate, Architecture & Maintenance."
  },
  {
    name: "Shanthi Sharon",
    role: "Executive Director",
    initials: "ED",
    bio: "Driving operational excellence and executing the board's strategic vision across all five divisions, she is an accomplished architect & emerging entrepreneur."
  },
  {
    name: "Jesua Bushan Naidu",
    role: "Director",
    initials: "DIR",
    bio: "Overseeing division-specific performance, financial health, and continuous innovation, he is an emerging entrepreneur in Education and Trust."
  }
];

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

export default function Team() {
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Leadership</h1>
          <p className="text-lg text-muted-foreground">
            The visionary minds guiding WIN RIDGE Group towards an empowered and prosperous future.
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
            src="/team.png"
            alt="Boardroom"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={slideUp}
              className={`bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all shadow-sm hover:shadow-xl ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center border-2 border-primary mb-6 shadow-xl">
                <span className="text-2xl font-serif font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-1">{member.name}</h3>
              <p className="font-medium text-primary mb-3">{member.role}</p>
              <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <button className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></button>
                <button className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}