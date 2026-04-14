import { motion, Variants } from "framer-motion";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="space-y-12"
        >
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground italic">Last Updated: April 2024</p>
          </div>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the WIN RIDGE Group website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">2. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content, original features, and functionality of this website, including but not limited to text, graphics, logos, and images, are the exclusive property of WIN RIDGE Group and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">3. Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily view the materials on WIN RIDGE Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose.</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">4. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on WIN RIDGE Group's website are provided on an 'as is' basis. WIN RIDGE Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">5. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall WIN RIDGE Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WIN RIDGE Group's website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">6. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <section className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground text-center italic">
              Terms and Conditions are subject to change without prior notice. Please check this page regularly for updates.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
