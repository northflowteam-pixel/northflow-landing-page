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
  Video,
  Trophy,
  ChevronDown,
  ChevronUp,
  Maple
} from 'lucide-react';

// --- Tracking Utility ---
const trackEvent = (eventName: string, params?: any) => {
  // Log for development
  console.log(`[Analytics] Event: ${eventName}`, params);
  
  // Prepare for GA4 or other analytics (if available in window)
  // @ts-ignore
  if (typeof window.gtag === 'function') {
    // @ts-ignore
    window.gtag('event', eventName, params);
  }
};

// --- Components ---

interface FadeInProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
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
  const phoneNumber = "514-703-0909";
  const phoneLink = "tel:+15147030909";

  const handleNavClick = (linkName: string) => {
    trackEvent('navigation_clicked', { link: linkName });
  };

  const handlePhoneClick = () => {
    trackEvent('phone_number_clicked', { location: 'navbar' });
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NorthflowLogo />
          <span className="text-xl font-bold tracking-tight text-white">Northflow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#audit" onClick={() => handleNavClick('solution')} className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Solution</a>
          <a href="#results" onClick={() => handleNavClick('results')} className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Results</a>
          
          {/* Phone Link Desktop */}
          <a onClick={handlePhoneClick} href={phoneLink} className="flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors">
            <div className="bg-orange-500/20 p-2 rounded-full">
              <Phone className="w-4 h-4 text-orange-500" />
            </div>
            {phoneNumber}
          </a>

          <a 
            href="https://cal.com/northflow-digital-fb72jd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_navbar_clicked')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] cursor-pointer hover:-translate-y-0.5"
          >
            Get a Free Audit
          </a>
        </div>

        {/* Mobile Right Section */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Phone Link Mobile */}
          <a onClick={handlePhoneClick} href={phoneLink} className="flex items-center gap-2 text-white font-medium">
            <div className="bg-orange-500/20 p-2 rounded-full">
              <Phone className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-semibold">{phoneNumber}</span>
          </a>
          
          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#audit" className="text-slate-300 hover:text-orange-400" onClick={() => { setIsOpen(false); handleNavClick('solution_mobile'); }}>Solution</a>
          <a href="#results" className="text-slate-300 hover:text-orange-400" onClick={() => { setIsOpen(false); handleNavClick('results_mobile'); }}>Results</a>
          <a 
            href="https://cal.com/northflow-digital-fb72jd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 text-white px-5 py-3 rounded-lg font-bold text-center block shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
            onClick={() => { setIsOpen(false); trackEvent('cta_navbar_mobile_clicked'); }}
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
    trackEvent('calculator_link_clicked');
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
        
        {/* Neon Glows */}
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
          <div className="flex flex-col items-center gap-4 w-full">
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              {/* Primary Button */}
              <a 
                href="https://cal.com/northflow-digital-fb72jd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_hero_clicked')}
                className="w-full sm:w-auto bg-white text-slate-950 px-8 py-5 rounded-lg font-bold text-xl hover:bg-orange-50 transition-all hover:-translate-y-1 shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Your Free Audit
                <ArrowRight className="w-6 h-6" />
              </a>
              
              {/* Secondary Button */}
              <a 
                href="#calculator" 
                onClick={scrollToCalculator}
                className="w-full sm:w-auto px-8 py-5 rounded-lg font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer hover:-translate-y-1"
              >
                Calculate Lost Revenue
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
            <p className="text-sm text-slate-500 font-medium">No commitment • Takes 3 minutes</p>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
            <span className="flex items-center gap-1.5"><span className="text-lg">🍁</span> Canadian-owned • Serving businesses coast to coast</span>
          </div>
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
  const scrollToSolution = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackEvent('see_how_fix_clicked');
    const element = document.getElementById('solution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problem" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Local Service Businesses <br/>
            <span className="text-orange-500">Lose Jobs Every Day</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {/* Card 1 */}
           <FadeIn delay={0.1} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:scale-105 transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <Phone className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Missed Calls</h3>
              <p className="text-slate-400 leading-relaxed">
                You're on a job site or with family. The phone rings, you can't answer. That potential client hangs up and calls the next guy on Google.
              </p>
           </FadeIn>

           {/* Card 2 */}
           <FadeIn delay={0.2} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:scale-105 transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <Clock className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Slow Follow-Up</h3>
              <p className="text-slate-400 leading-relaxed">
                Form leads sit in your inbox for hours. By the time you call them back, they've already booked with someone who answered instantly.
              </p>
           </FadeIn>

           {/* Card 3 */}
           <FadeIn delay={0.3} className="glass-card p-8 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:scale-105 transition-all duration-300">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/50 transition-colors">
                <TrendingUp className="w-7 h-7 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:text-glow-red transition-all">Lost Revenue</h3>
              <p className="text-slate-400 leading-relaxed">
                Every missed call and slow response is money left on the table. Your marketing dollars are wasted if you don't capture the lead.
              </p>
           </FadeIn>
        </div>

        <FadeIn delay={0.4} className="text-center">
           <a 
             href="#solution" 
             onClick={scrollToSolution}
             className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-orange-400 transition-colors group"
           >
             See How We Fix This
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </a>
        </FadeIn>
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
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

        <FadeIn delay={0.3} className="text-center">
            <a 
              href="https://cal.com/northflow-digital-fb72jd"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_solution_clicked')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
        </FadeIn>
      </div>
    </section>
  );
};

const ConversionGraph = () => {
  const data = [78, 35, 15, 7, 3];
  
  // Calculate coordinates relative to 100x50 viewBox
  // Map x from 0 to 100
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 45 - ((val / 80) * 35);
    return { x, y };
  });

  // Generate a smooth cubic bezier path through the points
  const generateSmoothPath = (points: {x:number, y:number}[]) => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    
    // Using Catmull-Rom spline algorithm converted to Cubic Bezier
    // for a tension of 1 (standard catmull-rom)
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = i > 0 ? points[i - 1] : points[0];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i < points.length - 2 ? points[i + 2] : p2;

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;

        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return d;
  };

  const curvePath = generateSmoothPath(points);
  // Close the area path for the gradient fill to the corners
  const areaPath = `${curvePath} L 100,50 L 0,50 Z`;

  return (
    <FadeIn className="mt-16 w-full max-w-4xl mx-auto">
      <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-10 relative overflow-hidden">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
             <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
               <TrendingUp className="w-6 h-6 text-red-500" />
             </div>
             <span>
               How Response Time <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 text-glow-red">Kills Conversions</span>
             </span>
          </h3>

           <div className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white overflow-hidden self-start">
              <span className="absolute inset-0 border border-red-500/50 rounded-full"></span>
              <span className="absolute inset-0 bg-red-500/10 blur-md"></span>
              <span className="relative z-10 flex items-center gap-2 text-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                96% Drop
              </span>
              <span className="absolute -inset-1 rounded-full border border-red-500/20 animate-pulse"></span>
           </div>
        </div>

        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] z-10">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
             <defs>
               <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="rgba(249, 115, 22, 0.4)" />
                 <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
               </linearGradient>
               <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                 <stop offset="0%" stopColor="#f97316" />
                 <stop offset="50%" stopColor="#fb923c" />
                 <stop offset="100%" stopColor="#f97316" />
               </linearGradient>
             </defs>

             {/* Grid lines */}
             {[10, 20, 30, 40].map(y => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
             ))}

             {/* Area Fill */}
             <motion.path 
                d={areaPath}
                fill="url(#graphGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
             />

             {/* Smooth Line */}
             <motion.path
               d={curvePath}
               fill="none"
               stroke="url(#lineGradient)"
               strokeWidth="0.8"
               strokeLinecap="round"
               strokeLinejoin="round"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
          </svg>

          {/* X Axis Labels */}
          <div className="flex justify-between text-[10px] md:text-xs text-slate-400 mt-2 px-1">
            <span>&lt;1 min</span>
            <span>5 min</span>
            <span>10 min</span>
            <span>30 min</span>
            <span>1 hr+</span>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-600 text-center">
          Source: InsideSales.com & Harvard Business Review
        </div>
      </div>
    </FadeIn>
  )
}

const Proof = () => {
  return (
    <section id="results" className="py-24 bg-[#050b18]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             The Numbers <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">Don't Lie</span>
           </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn className="bg-slate-900 border border-white/5 p-8 rounded-2xl relative group hover:border-orange-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300">
             <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-6 group-hover:bg-orange-500/20 transition-colors">
               <Trophy className="w-8 h-8 text-orange-500" />
             </div>
             <motion.h3 
               className="text-3xl font-bold text-red-500 mb-2 text-glow-red"
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
             >
               78%
             </motion.h3>
             <p className="text-lg font-semibold text-orange-400 mb-3">Choose the First Responder</p>
             <p className="text-slate-400 leading-relaxed">
               78% of customers buy from the company that responds to their inquiry first. Speed wins.
             </p>
          </FadeIn>
          
          {/* Card 2 */}
          <FadeIn delay={0.1} className="bg-slate-900 border border-white/5 p-8 rounded-2xl relative group hover:border-orange-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300">
             <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-6 group-hover:bg-orange-500/20 transition-colors">
               <Clock className="w-8 h-8 text-orange-500" />
             </div>
             <motion.h3 
               className="text-3xl font-bold text-red-500 mb-2 text-glow-red"
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
             >
               5 Minutes
             </motion.h3>
             <p className="text-lg font-semibold text-orange-400 mb-3">Before Leads Move On</p>
             <p className="text-slate-400 leading-relaxed">
               The odds of contacting a lead drop by 80% after just 5 minutes. You're racing against the clock.
             </p>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.2} className="bg-slate-900 border border-white/5 p-8 rounded-2xl relative group hover:border-orange-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300">
             <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-6 group-hover:bg-orange-500/20 transition-colors">
               <TrendingUp className="w-8 h-8 text-orange-500" />
             </div>
             <motion.h3 
               className="text-3xl font-bold text-green-400 text-glow-green mb-2"
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
             >
               391%
             </motion.h3>
             <p className="text-lg font-semibold text-orange-400 mb-3">Conversion Increase</p>
             <p className="text-slate-400 leading-relaxed">
               Conversion rates skyrocket by 391% when leads are contacted within the first minute.
             </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="text-center mt-8">
           <p className="text-slate-500 text-sm font-medium mb-12">
            Source: Harvard Business Review & InsideSales.com research
          </p>
        </FadeIn>

        <ConversionGraph />

        <FadeIn delay={0.4} className="text-center mt-12">
            <a 
              href="https://cal.com/northflow-digital-fb72jd"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_stats_clicked')}
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 group overflow-hidden"
            >
              <span className="absolute inset-0 border border-orange-500/50 rounded-full group-hover:border-orange-500/80 transition-colors"></span>
              <span className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-orange-200 transition-colors text-shadow-sm">
                Stop Losing Jobs - Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute -inset-1 rounded-full border border-orange-500/20 animate-pulse"></span>
            </a>
        </FadeIn>
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index) {
      trackEvent('faq_opened', { index });
    }
  };

  const faqs = [
    {
      q: "How is this different from a traditional receptionist?",
      a: "Receptionists have hours, take breaks, and can only handle one call at a time. Northflow is instant, 24/7, and handles unlimited concurrent calls, ensuring you never miss an opportunity."
    },
    {
      q: "Do I need to fire my staff?",
      a: "Absolutely not. Our system handles the initial lead capture, qualification, and booking. This frees up your existing staff to focus on high-value tasks, customer service, and closing deals."
    },
    {
      q: "How long does setup take?",
      a: "We can have your custom AI infrastructure built, tested, and live in less than 7 days. We handle the entire onboarding process for you."
    },
    {
      q: "What types of businesses do you work with?",
      a: "We specialize in local service businesses like HVAC, Plumbing, Roofing, Landscaping, Real Estate, and Law Firms—essentially any business where a missed call means lost revenue."
    },
    {
      q: "What happens if the AI can't answer a complex question?",
      a: "The system is trained on your specific business knowledge. If a question falls outside its scope, it politely takes a detailed message and escalates it to your team immediately via SMS or email."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-slate-400">Everything you need to know about automating your lead response.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'bg-slate-900 border-orange-500/30' : 'bg-slate-900/50 border-white/5 hover:border-l-4 hover:border-l-orange-500 hover:bg-slate-900/80'}`}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

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
               
               {/* Loss Aversion */}
               <div className="mb-6 text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                 <p className="text-red-300 font-medium text-sm">⚠️ Every day you wait = More jobs going to your competitors</p>
               </div>
               
               {/* Mock Calendar Header */}
               <div className="flex items-center gap-4 mb-6 relative z-10">
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

               {/* Risk Reversal */}
               <div className="mb-6 space-y-2">
                 {["No credit card required", "No long-term contract", "Cancel anytime"].map((item, i) => (
                   <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                   </div>
                 ))}
               </div>

               {/* Booking Button */}
               <a 
                 href="https://cal.com/northflow-digital-fb72jd"
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={() => trackEvent('cta_final_clicked')}
                 className="block w-full mb-4 no-underline"
               >
                 <button className="w-full bg-white hover:bg-orange-50 text-slate-950 text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer">
                   <Calendar className="w-5 h-5" />
                   Get Your Free Audit Now
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
  // Scroll depth tracking
  useEffect(() => {
    let thresholds = [25, 50, 75, 100];
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      thresholds = thresholds.filter(t => {
        if (scrollPercent >= t) {
          trackEvent(`scroll_${t}_percent`);
          return false;
        }
        return true;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <FAQ />
      <CTASection />
      <Footer />
      {/* @ts-ignore */}
      <elevenlabs-convai agent-id="agent_5701kfvcxy7wfyytbs8c9mbx0q8f"></elevenlabs-convai>
    </main>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);