import { motion, Variants } from "framer-motion";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Privacy() {
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
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground italic">Last Updated: April 2024</p>
          </div>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">1. Information Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              WIN RIDGE Group collects information that you provide directly to us, such as when you fill out an enquiry form, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">2. Use of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Process your enquiries and provide requested services.</li>
              <li>Send you updates, newsletters, and marketing communications.</li>
              <li>Improve our website and customer service experience.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect the security of your personal information both online and offline. However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">4. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies to enhance user experience. Cookies are small files placed on your device. You can choose to accept or decline cookies through your browser settings, though this may impact some functionality of the site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">5. Third-party Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information that we hold. To exercise these rights, please contact our data privacy officer at info@winridgegroup.com.
            </p>
          </section>

          <section className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground text-center italic">
              WIN RIDGE Group reserves the right to update this Privacy Policy at any time. Changes will be reflected on this page.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
