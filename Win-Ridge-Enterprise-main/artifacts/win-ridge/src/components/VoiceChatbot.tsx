import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function VoiceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello, I am the WIN RIDGE AI Assistant. How may I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  
  const recognitionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          handleSend(transcript, true);
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const KNOWLEDGE_BASE = [
    {
      keywords: ['who', 'what', 'win ridge', 'company', 'group', 'about'],
      answer: "WIN RIDGE Group is a prestigious global conglomerate. We have a legacy of over 25 years of proven excellence since our founding in 2001. We operate across Real Estate, Architecture & Interior Design, Education, and VIP Investor partnerships."
    },
    {
      keywords: ['real estate', 'property', 'properties', 'apartment', 'house', 'plot', 'ibo'],
      answer: "Our Real Estate division is spearheaded by visionary leaders like Mr. Mukunda Naidu. We offer premium residential developments, RERA-compliant commercial properties, and the renowned Independent Business Owners (IBO) program empowering entrepreneurs."
    },
    {
      keywords: ['education', 'university', 'school', 'phd', 'student', 'business school', 'degree'],
      answer: "WIN RIDGE Education focuses on shaping the leaders of tomorrow. Our ecosystem spans from premium early childhood Boarding Schools, to WIN RIDGE University for undergraduate degrees, all the way to advanced research and our Business School for leadership."
    },
    {
      keywords: ['architecture', 'interior', 'exterior', 'design', 'luxury', 'build', 'vastu', '3d'],
      answer: "Our Award-Winning Architecture & Design Studio delivers total turnkey solutions. We specialize in photorealistic 3D visualization, artistic conceptual sketches, and meticulous Vastu-aligned blueprints to craft aesthetic masterpieces."
    },
    {
      keywords: ['trust', 'social', 'service', 'investors', 'vip', 'impact'],
      answer: "WIN RIDGE Trust is dedicated to philanthropy and community development. Concurrently, our VIP Investors program offers an elite corporate partnership strictly by referral, promising high-yield strategic growth and legacy building."
    },
    {
      keywords: ['contact', 'location', 'address', 'phone', 'email', 'where', 'reach'],
      answer: "To consult our experts, you can schedule an online quick enquiry through our platform, or visit our central headquarters. Our digital chatbot is always available to guide you to the right department."
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon'],
      answer: "Hello! Welcome to WIN RIDGE Enterprise. I am your AI assistant. Would you like to know about our Real Estate projects, Architecture portfolio, Education institutions, or VIP programs today?"
    }
  ];

  const getAssistantResponse = (userText: string) => {
    const text = userText.toLowerCase();
    let bestMatch = KNOWLEDGE_BASE[0]; // Default to general info
    let maxKeywordsMatched = 0;

    KNOWLEDGE_BASE.forEach(entry => {
      const matchCount = entry.keywords.reduce((acc, kw) => acc + (text.includes(kw) ? 1 : 0), 0);
      if (matchCount > maxKeywordsMatched) {
        maxKeywordsMatched = matchCount;
        bestMatch = entry;
      }
    });

    return bestMatch.answer;
  };

  const handleSend = async (text: string = inputText, useVoice: boolean = false) => {
    if (!text.trim()) return;
    
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);

    // Simulate AI thinking
    setTimeout(() => {
      const reply = getAssistantResponse(text);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      if (useVoice) {
        speak(reply);
      }
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-80 sm:w-96 mb-4 shadow-xl border-primary/20 bg-background/95 backdrop-blur-md">
          <CardHeader className="flex flex-row items-center justify-between py-3 border-b border-border/50">
            <CardTitle className="text-base font-semibold text-primary flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              WIN RIDGE AI
            </CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] p-4" ref={scrollRef}>
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-3 border-t border-border/50 gap-2">
            <div className="flex-1 flex gap-2">
              <Input 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend(inputText, false)}
                placeholder="Ask a question..."
                className="bg-transparent border-border/50 focus-visible:ring-primary/50"
              />
              <Button size="icon" variant="outline" onClick={() => handleSend(inputText, false)}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              size="icon" 
              variant={isListening ? "default" : "secondary"}
              className={`rounded-full ${isListening ? 'bg-destructive hover:bg-destructive/90 animate-pulse' : ''}`}
              onClick={toggleListen}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-primary" />}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {!isOpen && (
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}