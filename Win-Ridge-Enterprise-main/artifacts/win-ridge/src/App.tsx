import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VoiceChatbot } from "@/components/VoiceChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { QuickEnquiry } from "@/components/QuickEnquiry";
import { LoadingIntro } from "@/components/LoadingIntro";
import NotFound from "@/pages/not-found";
import { useState } from "react";

import Home from "@/pages/Home";
import Education from "@/pages/Education";
import About from "@/pages/About";
import RealEstate from "@/pages/RealEstate";
import Architecture from "@/pages/Architecture";
import Team from "@/pages/Team";
import Trust from "@/pages/Trust";
import VIPInvestors from "@/pages/VIPInvestors";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

import { useEffect } from "react";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/real-estate" component={RealEstate} />
          <Route path="/architecture" component={Architecture} />
          <Route path="/team" component={Team} />
          <Route path="/trust" component={Trust} />
          <Route path="/vip-investors" component={VIPInvestors} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <VoiceChatbot />
      <WhatsAppButton />
      <QuickEnquiry />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingIntro onComplete={() => setIsLoading(false)} />}
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;