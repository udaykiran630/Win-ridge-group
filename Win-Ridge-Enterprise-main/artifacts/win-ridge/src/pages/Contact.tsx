import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to invest, enroll, or partner with us, our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Corporate Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Address</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      WIN RIDGE Towers, Financial District<br />
                      Gachibowli, Hyderabad<br />
                      Telangana, India 500032
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm mt-1">+91 (40) 1234-5678</p>
                    <p className="text-muted-foreground text-sm">Toll Free: 1800-WIN-RIDGE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm mt-1">info@winridgegroup.com</p>
                    <p className="text-muted-foreground text-sm"></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Hours</h4>
                    <p className="text-muted-foreground text-sm mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Division of Interest</label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select a division...</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="education">Education</option>
                  <option value="architecture">Architecture & Design</option>
                  <option value="trust">Trust / Social Services</option>
                  <option value="other">Other / General</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-background" />
              </div>
              <Button type="submit" className="w-full h-12 text-base rounded-lg mt-2">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}