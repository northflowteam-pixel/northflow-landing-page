import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck,
  Mail,
  Play,
  Calendar,
  MessageSquare,
  Calculator,
  DollarSign,
  Send,
  Bot,
  User,
  Sparkles,
  Minimize2,
  Loader2,
  Instagram,
  Linkedin,
  Video
} from 'lucide-react';

// --- Components ---

interface FadeInProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const NorthflowLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center group">
    {/* 3D N Concept */}
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <defs>
        <linearGradient id="n-gradient-1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="n-gradient-2" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Left Vertical */}
      <path d="M10 8L10 32L16 30L16 10L10 8Z" fill="url(#n-gradient-1)" />
      {/* Diagonal */}
      <path d="M16 10L16 16L24 30L24 32L16 10Z" fill="url(#n-gradient-2)" opacity="0.9" />
      {/* Right Vertical */}
      <path d="M24 8L24 32L30 30L30 10L24 8Z" fill="url(#n-gradient-1)" />
    </svg>
    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const CelestialRain = () => {
  const [stars, setStars] = useState<{ id: number; left: string; delay: string; duration: string; height: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 40; 
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 3}s`,
      height: Math.random() * 40 + 20,
      opacity: Math.random() * 0.4 + 0.1
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="celestial-star"
          style={{
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            height: `${star.height}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NorthflowLogo />
          <span className="text-xl font-bold tracking-tight text-white">Northflow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solution" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Solution</a>
          <a href="#results" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Results</a>
          <a 
            href="https://cal.com/northflow-digital-fb72jd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] cursor-pointer"
          >
            Get a Free Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#solution" className="text-slate-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Solution</a>
          <a href="#results" className="text-slate-300 hover:text-orange-400" onClick={() => setIsOpen(false)}>Results</a>
          <a 
            href="https://cal.com/northflow-digital-fb72jd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 text-white px-5 py-3 rounded-lg font-bold text-center block shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
            onClick={() => setIsOpen(false)}
          >
            Get a Free Audit
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <CelestialRain />
        
        {/* Neon Glows - Updated to Orange/Purple/Blue mix */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        <FadeIn>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10 mb-8 orange-glow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Instant Lead Capture</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="relative">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
            The Job You Lost Today? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">
              Someone Else Booked It in Under 60 Seconds
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Every missed call is $500+ going to your competitor. We make sure you respond in <span className="text-white font-bold">under 60 seconds</span>—every single time.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            {/* Primary Button */}
            <a 
              href="https://cal.com/northflow-digital-fb72jd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.7)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Get a Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#calculator" 
              onClick={scrollToCalculator}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer"
            >
              Calculate Lost Revenue
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
          
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            Most service jobs go to the first business that responds
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const TechTicker = () => {
  const tickerItems = [
    "Instant Lead Response", 
    "Zero Missed Calls", 
    "SMS Automation", 
    "24/7 Availability", 
    "Smart Qualification", 
    "CRM Integration", 
    "Revenue Protection", 
    "Northflow Intelligence"
  ];

  return (
    <div className="w-full bg-slate-950 border-y border-white/5 py-6 overflow-hidden relative z-20">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <div className="flex select-none">
        <motion.div 
          className="flex whitespace-nowrap flex-nowrap"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <div className="flex gap-16 pr-16">
             {tickerItems.map((item, i) => (
                <div key={`a-${i}`} className="flex items-center gap-2 text-slate-500 font-medium tracking-widest text-xs uppercase opacity-70">
                  <Sparkles className="w-3 h-3 text-orange-500/40" />
                  {item}
                </div>
             ))}
          </div>
          <div className="flex gap-16 pr-16">
             {tickerItems.map((item, i) => (
                <div key={`b-${i}`} className="flex items-center gap-2 text-slate-500 font-medium tracking-widest text-xs uppercase opacity-70">
                  <Sparkles className="w-3 h-3 text-orange-500/40" />
                  {item}
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Local Service Businesses <br/>
            <span className="text-orange-500">Lose Jobs Every Day</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
           {/* Card 1 */}
           <FadeIn delay={0.1} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <Phone className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Missed Calls</h3>
              <p className="text-slate-400 leading-relaxed">
                You're on a job site or with family. The phone rings, you can't answer. That potential client hangs up and calls the next guy on Google.
              </p>
           </FadeIn>

           {/* Card 2 */}
           <FadeIn delay={0.2} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <Clock className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Slow Follow-Up</h3>
              <p className="text-slate-400 leading-relaxed">
                Form leads sit in your inbox for hours. By the time you call them back, they've already booked with someone who answered instantly.
              </p>
           </FadeIn>

           {/* Card 3 */}
           <FadeIn delay={0.3} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <TrendingUp className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Lost Revenue</h3>
              <p className="text-slate-400 leading-relaxed">
                Every missed call and slow response is money left on the table. Your marketing dollars are wasted if you don't capture the lead.
              </p>
           </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-[#050b18] relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold tracking-wide">
              THE HYBRID SYSTEM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Instant Response. <br />
              <span className="text-white">Every Lead. Every Time.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We deploy a complete safety net for your business. When you can't pick up, our system instantly engages the lead via SMS and Voice, qualifies them, and keeps them warm until you can take over.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Not Just an 'AI Receptionist'", desc: "A full lead capture workflow that works across phone, SMS, and web forms." },
                { title: "Under 60 Seconds", desc: "Speed is everything. We guarantee your leads hear from you instantly." },
                { title: "Zero Missed Opportunities", desc: "Capture every dollar you're currently letting slip through the cracks." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
             {/* Abstract System UI Visualization */}
             <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
               {/* Dotted Lines Background */}
               <div className="absolute inset-0 opacity-10" 
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <div className="relative z-10 space-y-8">
                 {/* Step 1 */}
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/5">
                        <Phone className="w-5 h-5 text-red-400" />
                     </div>
                     <div>
                       <p className="text-slate-400 text-xs uppercase font-bold">Incoming Call</p>
                       <p className="text-white font-medium">Missed Call (Job Site)</p>
                     </div>
                   </div>
                   <span className="text-xs text-slate-500">10:42 AM</span>
                 </div>

                 {/* Arrow */}
                 <div className="flex justify-center -my-2">
                   <div className="h-8 w-0.5 bg-orange-500/50"></div>
                 </div>

                 {/* Step 2 */}
                 <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                      <p className="text-orange-400 text-xs font-bold uppercase">AI Instant Action</p>
                    </div>
                    <p className="text-white text-sm">
                      "Hi, this is [Your Business]. Sorry I missed you! Are you looking for a quote?"
                    </p>
                 </div>

                 {/* Arrow */}
                 <div className="flex justify-center -my-2">
                   <div className="h-8 w-0.5 bg-orange-500/50"></div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                        <Calendar className="w-5 h-5 text-green-400" />
                     </div>
                     <div>
                       <p className="text-slate-400 text-xs uppercase font-bold">Outcome</p>
                       <p className="text-white font-medium">Appointment Booked</p>
                     </div>
                   </div>
                   <span className="text-xs text-slate-500">10:43 AM</span>
                 </div>

               </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  return (
    <section id="results" className="py-24 bg-[#050b18]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white mb-2">Built for Canadian Service Businesses</h2>
           <p className="text-slate-400">Serving Toronto, Vancouver, Calgary, Montreal and everywhere in between.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn className="bg-slate-900 border border-white/5 p-8 rounded-2xl">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-green-500/10 rounded-lg">
                 <TrendingUp className="w-8 h-8 text-green-400" />
               </div>
               <div>
                 <h3 className="text-4xl font-bold text-white mb-2 text-glow-green">391%</h3>
                 <p className="text-slate-400">Increase in conversion when leads are contacted within 1 minute.</p>
               </div>
             </div>
          </FadeIn>
          <FadeIn delay={0.1} className="bg-slate-900 border border-white/5 p-8 rounded-2xl">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-blue-500/10 rounded-lg">
                 <ShieldCheck className="w-8 h-8 text-blue-400" />
               </div>
               <div>
                 <h3 className="text-4xl font-bold text-white mb-2">78%</h3>
                 <p className="text-slate-400">Of customers choose the first business that responds to them.</p>
               </div>
             </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
             { quote: "Since using Northflow, I haven't missed a single estimate request. It pays for itself in one job.", author: "Mike R.", type: "HVAC Owner", loc: "Etobicoke, ON" },
             { quote: "Competitors are still calling back 2 hours later. By then, we've already booked the appointment.", author: "Sarah L.", type: "Cleaning Services", loc: "Calgary, AB" },
             { quote: "Simple to use. The instant text response is a game changer for when I'm under a sink.", author: "Dave P.", type: "Plumber", loc: "Surrey, BC" }
          ].map((t, i) => (
            <React.Fragment key={i}>
              <FadeIn delay={0.2 + (i * 0.1)} className="glass-card p-8 rounded-xl relative">
                <div className="mb-4 flex text-orange-400">★★★★★</div>
                <p className="text-slate-300 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.type} • {t.loc}</p>
                  </div>
                </div>
              </FadeIn>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const RevenueCalculator = () => {
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [missedCalls, setMissedCalls] = useState(5);
  const [closeRate, setCloseRate] = useState(30);
  
  const monthlyLoss = missedCalls * 4 * (closeRate / 100) * avgJobValue;
  const yearlyLoss = monthlyLoss * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10 mb-4">
             <Calculator className="w-4 h-4 text-orange-500" />
             <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Revenue Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See How Much Money You're <br/>
            <span className="text-orange-500">Leaving on the Table</span>
          </h2>
          <p className="text-slate-400">Adjust the sliders to estimate your lost revenue from missed calls.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          {/* Inputs */}
          <div className="space-y-10">
            {/* Avg Job Value */}
            <div>
              <div className="flex justify-between text-white mb-4">
                <span className="font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-orange-500"/> Average Job Value</span>
                <span className="font-bold text-orange-400">${avgJobValue}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="50" 
                value={avgJobValue} 
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>$100</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Missed Calls */}
            <div>
              <div className="flex justify-between text-white mb-4">
                <span className="font-semibold flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500"/> Missed Calls Per Week</span>
                <span className="font-bold text-orange-400">{missedCalls} calls</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1" 
                value={missedCalls} 
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
               <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 call</span>
                <span>50 calls</span>
              </div>
            </div>

            {/* Close Rate */}
            <div>
              <div className="flex justify-between text-white mb-4">
                <span className="font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-orange-500"/> Estimated Close Rate</span>
                <span className="font-bold text-orange-400">{closeRate}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5" 
                value={closeRate} 
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
               <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-slate-950 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-all">
              <div className="absolute inset-0 bg-red-500/5 blur-xl group-hover:bg-red-500/10 transition-all"></div>
              <div className="relative z-10 text-center">
                <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide text-sm">Potential Monthly Loss</p>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">{formatCurrency(monthlyLoss)}</p>
                <p className="text-red-400 text-sm font-medium">Monthly Revenue</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/40 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.1)]">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="relative z-10 text-center">
                 <div className="flex items-center justify-center gap-2 mb-2">
                   <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
                   <p className="text-red-300 font-bold uppercase tracking-wide text-sm">Potential Yearly Loss</p>
                 </div>
                 <p className="text-5xl md:text-6xl font-extrabold text-white mb-2 text-glow-red tracking-tight">
                   {formatCurrency(yearlyLoss)}
                 </p>
                 <p className="text-slate-400 text-sm">Don't let this slide. Capture it with Northflow.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Stop Losing Revenue. <br />
              <span className="text-orange-500">Book Your Audit.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We'll analyze your current response times, identify exactly where you're leaking money, and show you how to fix it in under 15 minutes.
            </p>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl mb-8">
               <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">What We'll Cover:</h4>
               <ul className="space-y-3">
                 {[
                   "Missed call volume analysis",
                   "Response speed test vs. local competitors",
                   "Revenue leakage calculation",
                   "Custom automation roadmap"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </FadeIn>

          {/* Right: Booking Card */}
          <FadeIn delay={0.2}>
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative group transform hover:-translate-y-1 transition-all duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               
               {/* Mock Calendar Header */}
               <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                   <Video className="w-7 h-7 text-white" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl">Discovery Call</h4>
                   <p className="text-slate-400 flex items-center gap-2 mt-1">
                     <Clock className="w-4 h-4" /> 15 Min Video Call
                   </p>
                 </div>
               </div>

               {/* Booking Button */}
               <a 
                 href="https://cal.com/northflow-digital-fb72jd"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full mb-4 no-underline"
               >
                 <button className="w-full bg-white hover:bg-orange-50 text-slate-950 text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer">
                   <Calendar className="w-5 h-5" />
                   Book Discovery Call
                 </button>
               </a>
               
               <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 Live Calendar Integration
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <NorthflowLogo />
           <span className="text-lg font-bold text-white">Northflow</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
           <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
           <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
           <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <a 
              href="https://www.instagram.com/northflow_digital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-orange-500 transition-all border border-white/5"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/northflow-digital-b95521399/?originalSubdomain=ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="text-slate-500 text-sm">
            <span>&copy; {new Date().getFullYear()} Northflow. Made in Canada 🇨🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50 selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <TechTicker />
      <Problem />
      <Solution />
      {/* HowItWorks Section Removed as requested */}
      <Proof />
      <RevenueCalculator />
      <CTASection />
      <Footer />
      {/* @ts-ignore */}
      <elevenlabs-convai agent-id="agent_5701kfvcxy7wfyytbs8c9mbx0q8f"></elevenlabs-convai>
    </main>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);