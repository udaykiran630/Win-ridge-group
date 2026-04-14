import { motion, Variants } from "framer-motion";
import { History, Target, Shield, Award, Archive, MapPin, GraduationCap, Heart, HandHeart, Utensils, Shirt, Crown } from "lucide-react";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Legacy of Excellence</h1>
          <p className="text-lg text-muted-foreground">
            For over 25 years, WIN RIDGE Group has been a pillar of innovation, trust, and growth in Hyderabad and beyond.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid md:grid-cols-2 gap-12 items-center mb-12"
        >
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold">A Quarter Century of Trust</h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              What started as a visionary real estate venture has evolved into a formidable conglomerate spanning education, business consulting, architecture, and social services. Our journey is defined by an unwavering commitment to quality and a deep understanding of our community's needs.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Headquartered in the vibrant city of Hyderabad, India, we have touched the lives of thousands—building homes, shaping careers, and fostering sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
              <History className="w-8 h-8 mx-auto text-primary mb-3" />
              <h3 className="font-bold text-xl mb-1">2001</h3>
              <p className="text-sm text-muted-foreground">Established</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 text-center mt-8">
              <Award className="w-8 h-8 mx-auto text-primary mb-3" />
              <h3 className="font-bold text-xl mb-1">25+</h3>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-secondary/50 p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted and globally recognized conglomerate, delivering unparalleled value across real estate, education, and social initiatives while maintaining the highest standards of integrity and excellence.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower individuals and businesses through innovative real estate solutions, world-class education, and impactful social programs, fostering a prosperous and sustainable future for all our stakeholders.
            </p>
          </div>
        </motion.div>

        {/* Old School Heritage Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10" />
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <History className="w-64 h-64" />
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-sm">
                  <Archive className="w-4 h-4" /> Educational Heritage
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">THE SCHOOL</h2>
                <h3 className="text-xl md:text-2xl text-primary font-semibold">Jan 2001 — 2017</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A proud foundation of our educational legacy, <strong className="text-foreground">THE SCHOOL</strong> provided exceptional education following the State Syllabus for students from Nursery through 10th Class. At its peak, it proudly served a vibrant community of over <strong className="text-foreground">1,200 students</strong>.
                </p>
                <div className="bg-secondary/40 rounded-2xl p-6 border border-border/50 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">Operational Campus (2008 - 2017)</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Komatipally, Bobbili,<br />
                        Vizianagaram District, Andhra Pradesh 535558
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4 py-1">
                  * Though this institution is now closed, the values and excellence it instilled continue to drive the WIN RIDGE group forward today.
                </p>
              </div>

              <div className="w-full md:w-1/3 relative z-10">
                <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group/card cursor-default shadow-lg">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mb-6 shadow-xl border-2 border-primary/20 group-hover/card:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="font-serif font-bold text-4xl mb-2 text-foreground">1,200+</h4>
                  <p className="text-sm text-primary font-semibold uppercase tracking-widest">Alumni Nurtured</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Educational Trust Heritage Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10" />
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="absolute -left-12 -bottom-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000 text-primary">
              <Heart className="w-64 h-64 fill-primary/10" />
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-sm">
                  <Heart className="w-4 h-4" /> Social Impact Heritage
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">Mukund Education & Training Solutions Society</h2>
                <h3 className="text-xl md:text-2xl text-primary font-semibold italic">Education Trust (2008 — 2016)</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Driven by a core belief in equal opportunity, this dedicated trust was a beacon of hope for many. It was established with the noble mission of making quality education accessible to those in need.
                </p>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-primary">
                    <Shield className="w-6 h-6" />
                    <p className="font-medium">Direct Impact: Free education provided to 50 deserving students.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4 py-1">
                  * Although the society concluded its operations in 2016, the commitment to social responsibility remains a cornerstone of the WIN RIDGE ethos.
                </p>
              </div>

              <div className="w-full md:w-1/3 relative z-10">
                <div className="aspect-square rounded-3xl bg-linear-to-tr from-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group/social cursor-default shadow-lg">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mb-6 shadow-xl border-2 border-primary/20 group-hover/social:scale-110 transition-transform duration-500">
                    <Heart className="w-12 h-12 text-primary fill-primary/20" />
                  </div>
                  <h4 className="font-serif font-bold text-4xl mb-2 text-foreground">50</h4>
                  <p className="text-sm text-primary font-semibold uppercase tracking-widest text-center">Scholarships Awarded</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Trust Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mt-12 mb-10 relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10" />
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000 text-primary">
              <HandHeart className="w-64 h-64 fill-primary/10" />
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-sm">
                  <HandHeart className="w-4 h-4" /> Active Community Support
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">Social Trust</h2>
                <h3 className="text-xl md:text-2xl text-primary font-semibold italic">Serving Humanity (2017 — Present)</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Since 2017, our Social Trust has been at the forefront of community service, dedicated to providing essential support and basic needs to the underprivileged. We believe that collective effort can create significant positive change.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm backdrop-blur-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5 text-foreground">Food Distribution</h4>
                      <p className="text-xs text-muted-foreground">Providing nutritional support to those in need.</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm backdrop-blur-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5 text-foreground">Clothing Assistance</h4>
                      <p className="text-xs text-muted-foreground">Ensuring comfort and dignity through essential wear.</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4 py-1">
                  * Our mission continues as we strive to reach more lives and provide a helping hand to our community every single day.
                </p>
              </div>

              <div className="w-full md:w-1/3 relative z-10 text-center">
                <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group/social-active cursor-default shadow-lg">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/social-active:opacity-100 transition-opacity duration-300" />
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mb-6 shadow-xl border-2 border-primary/20 group-hover/social-active:scale-110 transition-transform duration-500">
                    <HandHeart className="w-12 h-12 text-primary fill-primary/20" />
                  </div>
                  <h4 className="font-serif font-bold text-3xl mb-1 text-foreground">Active</h4>
                  <p className="text-sm text-primary font-semibold uppercase tracking-widest">Ongoing Service</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VIP Investors Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mt-10 mb-10 relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10" />
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="absolute -left-12 -top-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000 text-primary">
              <Crown className="w-64 h-64 fill-primary/10" />
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-sm">
                  <Crown className="w-4 h-4" /> Elite Partnerships
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">VIP Investors</h2>
                <h3 className="text-xl md:text-2xl text-primary font-semibold italic">A Legacy of Shared Growth (2001 — Present)</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Since 2001, our VIP Investors have been integral to the WIN RIDGE Group's success story. These elite partnerships are built on a foundation of mutual trust, exceptional returns, and a shared vision for a prosperous future.
                </p>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-primary">
                    <Award className="w-6 h-6" />
                    <p className="font-medium text-foreground">Exclusivity & Excellence: Dedicated to our most valued investment partners who have been with us for over two decades.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4 py-1">
                  * Our VIP investment program continues to expand, offering unique opportunities and strategic growth for our long-term partners.
                </p>
              </div>

              <div className="w-full md:w-1/3 relative z-10 text-center">
                <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group/vip cursor-default shadow-lg">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/vip:opacity-100 transition-opacity duration-300" />
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mb-6 shadow-xl border-2 border-primary/20 group-hover/vip:scale-110 transition-transform duration-500">
                    <Crown className="w-12 h-12 text-primary fill-primary/20" />
                  </div>
                  <h4 className="font-serif font-bold text-3xl mb-1 text-foreground">Elite</h4>
                  <p className="text-sm text-primary font-semibold uppercase tracking-widest text-center">Investment Circle</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}