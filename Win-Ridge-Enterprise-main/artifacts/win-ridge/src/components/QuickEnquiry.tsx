import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring
} from "framer-motion";
import { MessageSquareMore, Send, User, Mail, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

export function QuickEnquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Magnetic Button Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const dX = useSpring(mouseX, springConfig);
  const dY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.4);
    mouseY.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="fixed right-0 top-[40%] -translate-y-1/2 z-40">
      <Sheet>
        <SheetTrigger asChild>
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ x: dX, y: dY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center gap-1 bg-primary text-primary-foreground py-1.5 md:py-2.5 px-1.5 md:px-2 rounded-l-lg shadow-2xl border-l border-y border-primary-foreground/20 backdrop-blur-sm hover:bg-primary/90 transition-colors group animate-bounce"
          >
            <span className="[writing-mode:vertical-lr] text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Enquiry</span>
            <div className="bg-primary-foreground/20 p-0.5 md:p-1 rounded-full group-hover:scale-110 transition-transform">
              <MessageSquareMore className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary-foreground" />
            </div>
          </motion.button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md border-l-primary/20 bg-background/95 backdrop-blur-xl overflow-y-auto px-4 sm:px-6">
          <SheetHeader className="space-y-1 pr-6">
            <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-0.5 shadow-inner">
              <MessageSquareMore className="h-4 w-4" />
            </div>
            <SheetTitle className="text-xl font-serif font-bold">Enquiry</SheetTitle>
            <SheetDescription className="text-xs">
              Fill out this form and our team will get back to you within 24 hours.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-4">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-bounce">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Message Sent!</h3>
                  <p className="text-xs text-muted-foreground">Thank you for reaching out. We will contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="q-name" className="text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider text-muted-foreground">
                        <User className="w-3 h-3 text-primary" /> Full Name
                      </Label>
                      <Input id="q-name" placeholder="Enter your name" required className="h-9 text-xs bg-muted/40 border-none focus-visible:ring-primary/50" />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-email" className="text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider text-muted-foreground">
                        <Mail className="w-3 h-3 text-primary" /> Email Address
                      </Label>
                      <Input id="q-email" type="email" placeholder="name@example.com" required className="h-9 text-xs bg-muted/40 border-none focus-visible:ring-primary/50" />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-phone" className="text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider text-muted-foreground">
                        <Phone className="w-3 h-3 text-primary" /> Phone Number
                      </Label>
                      <Input id="q-phone" type="tel" placeholder="+91 XXX XXX XXXX" required className="h-9 text-xs bg-muted/40 border-none focus-visible:ring-primary/50" />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-interest" className="text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider text-muted-foreground">
                        <Building2 className="w-3 h-3 text-primary" /> Interested In
                      </Label>
                      <select id="q-interest" className="w-full h-9 px-3 rounded-md border-none bg-muted/40 text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all cursor-pointer">
                        <option value="real-estate">Real Estate</option>
                        <option value="education">Education</option>
                        <option value="architecture">Architecture</option>
                        <option value="trust">Social Trust</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-message" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Message</Label>
                      <Textarea id="q-message" placeholder="Briefly describe your enquiry..." className="min-h-[60px] text-xs bg-muted/40 border-none focus-visible:ring-primary/50 resize-none" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-10 text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all rounded-lg relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
