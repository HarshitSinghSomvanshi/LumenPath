// --- Icons ---
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const TerminalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><line x1="12" y1="12" x2="12" y2="8"/></svg>;
const CpuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

// --- Components ---
const GlowButton = ({ children, primary, fullWidth }) => (
    <button className={`relative group px-6 py-3 font-bold text-sm rounded-lg transition-all duration-300 ${fullWidth ? 'w-full' : ''}
        ${primary 
        ? 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]' 
        : 'border border-emerald-900/50 text-emerald-100 hover:border-emerald-500 hover:text-white bg-emerald-950/30'}`}>
        {children}
    </button>
);

const TechTag = ({ text }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-800/50 font-mono">
        {text}
    </span>
);

const EngineCard = ({ icon, title, subtitle, children, accent = "emerald" }) => {
    const borderColor = accent === "emerald" ? "hover:border-emerald-500/50" : "hover:border-teal-500/50";
    const glowColor = accent === "emerald" ? "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]" : "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]";

    return (
        <div className={`group bg-[#082012] border border-emerald-900/40 rounded-2xl p-6 transition-all duration-300 ${borderColor} ${glowColor} relative z-10`}>
        <div className="mb-4 p-3 bg-emerald-950/50 rounded-xl inline-block border border-emerald-900/50">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <p className={`text-sm font-mono mb-4 ${accent === "emerald" ? "text-emerald-400" : "text-teal-400"}`}>{subtitle}</p>
        {children}
        </div>
    );
};

const MarketTicker = () => {
    const items = [
        { skill: "Python", val: "+2.4%" }, { skill: "Rust", val: "+5.1%" }, { skill: "React", val: "+0.8%" },
        { skill: "K8s", val: "+3.2%" }, { skill: "PHP", val: "-1.2%" }, { skill: "AI Ethics", val: "+12%" },
        { skill: "Flutter", val: "+1.9%" }, { skill: "Go", val: "+4.4%" }, { skill: "SQL", val: "+0.5%" },
        { skill: "AWS", val: "+1.1%" }, { skill: "C++", val: "+0.3%" }, { skill: "GenAI", val: "+15.6%" }
    ];

    return (
        <div className="w-full bg-[#031108] border-b border-emerald-900/30 py-2 overflow-hidden flex fixed top-[80px] z-40 backdrop-blur-sm">
            <div className="flex gap-8 items-center whitespace-nowrap ticker-content">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs font-mono text-emerald-100/60">
                        <span>{item.skill}</span>
                        <span className={item.val.includes('+') ? 'text-emerald-400' : 'text-red-400'}>{item.val}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PricingCard = ({ title, price, features, primary }) => (
    <div className={`p-8 rounded-2xl border flex flex-col h-full relative ${primary ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'bg-[#082012] border-emerald-900/30'}`}>
        {primary && (
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded">MOST POPULAR</span>
            </div>
        )}
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-white mb-6">{price}</div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-emerald-100/70">
                    <span className="text-emerald-500"><CheckIcon /></span> {f}
                </li>
            ))}
        </ul>
        <GlowButton primary={primary} fullWidth>Choose Plan</GlowButton>
    </div>
);

const LumenPathPrototype = () => {
    return (
        <div className="min-h-screen bg-[#051a0d] text-white font-sans selection:bg-emerald-900 selection:text-emerald-50 overflow-x-hidden">
        
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-teal-900/20 blur-[100px] rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay"></div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-emerald-900/30 backdrop-blur-md fixed w-full z-50 top-0 bg-[#051a0d]/80">
            <div className="flex items-center gap-2">
            <div className="text-emerald-400"><LayersIcon /></div>
            <div className="text-xl font-bold tracking-tighter text-white">
                Lumen<span className="text-emerald-400">Path</span>.
            </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-emerald-100/70">
            <a href="#engines" className="hover:text-emerald-400 transition-colors">Technology</a>
            <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            </div>
            <div className="flex gap-4">
            <button className="text-sm font-semibold text-emerald-100/70 hover:text-white">Log In</button>
            <GlowButton primary>Get Started</GlowButton>
            </div>
        </nav>

        <MarketTicker />

        {/* Hero Section */}
        <main className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-sm font-mono mb-6">
                <div className="w-4 h-4"><TerminalIcon /></div>
                RAG Pipeline Active. Knowledge Graph Online.
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                Navigate the Job Market with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Mathematical Precision.</span>
                </h1>
                
                <p className="text-lg text-emerald-100/80 mb-8 max-w-lg leading-relaxed">
                Stop guessing based on outdated blogs. Lumen Path uses a real-time <strong>Knowledge Graph</strong> to analyze your skills against live market data.
                </p>
                
                <div className="flex gap-4">
                <GlowButton primary>
                    <span className="flex items-center gap-2">
                    Analyze My Profile <span className="w-4 h-4"><ArrowRightIcon /></span>
                    </span>
                </GlowButton>
                <GlowButton>View Demo Path</GlowButton>
                </div>
                <div className="mt-8 flex items-center gap-4 text-xs text-emerald-100/40 font-mono">
                    <span>POWERED BY:</span>
                    <span className="flex items-center gap-1"><DatabaseIcon size={12}/> GEMINI 1.5</span>
                    <span className="flex items-center gap-1"><NetworkIcon size={12}/> VECTOR DB</span>
                </div>
            </div>
            
            {/* Hero Visualization */}
            <div className="relative h-[400px] bg-[#082012] border border-emerald-900/50 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                <div className="w-full h-full relative">
                    {[...Array(25)].map((_,i) => (
                        <div key={i} className="absolute w-1.5 h-1.5 bg-emerald-700/60 rounded-full" style={{top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, opacity: Math.random()}}></div>
                    ))}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                        <path d="M 50,350 C 150,250 250,300 350,50" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" filter="drop-shadow(0 0 8px #10b981)"/>
                        <circle cx="50" cy="350" r="6" fill="#10b981" />
                        <circle cx="350" cy="50" r="6" fill="#10b981" />
                    </svg>
                </div>
                </div>
                <div className="absolute top-10 left-10 p-4 bg-[#051a0d]/90 backdrop-blur border border-emerald-500/30 rounded-lg shadow-lg">
                <div className="text-xs text-emerald-200/70 mb-2 font-mono">&gt; DETECTED GAP:</div>
                <div className="flex gap-2 items-center">
                    <TechTag text="React Native" />
                    <span className="text-emerald-500"><ArrowRightIcon /></span>
                    <TechTag text="Flutter" />
                </div>
                </div>
            </div>
            </div>
        </main>

        {/* Sections for Engines, Dashboard, and Pricing would follow here as per the original structure */}
        {/* ... (truncated for brevity, keep the same structure as original JSX) */}
        
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LumenPathPrototype />);
