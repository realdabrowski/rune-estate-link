import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-radial)' }} />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Animated Logo */}
          <div className="mb-12 flex flex-col items-center justify-center animate-float-in">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 animate-pulse-glow">
              {/* Glow Backing */}
              <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 to-neon-cyan/10 blur-2xl rounded-2xl" />
              
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="neonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(328 100% 54%)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(187 100% 50%)', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer Box */}
                <rect 
                  x="5" y="5" width="90" height="90" rx="12" 
                  fill="none" 
                  stroke="url(#neonGrad)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  className="animate-draw" 
                  filter="url(#glow)" 
                />
                
                {/* Rune R */}
                <g filter="url(#glow)">
                  {/* Vertical Spine */}
                  <path 
                    d="M 35 25 L 35 75" 
                    fill="none" 
                    stroke="url(#neonGrad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    className="animate-draw delay-300" 
                  />
                  {/* Top Triangle Loop */}
                  <path 
                    d="M 35 25 L 65 45 L 35 50" 
                    fill="none" 
                    stroke="url(#neonGrad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="animate-draw delay-500" 
                  />
                  {/* Bottom Leg */}
                  <path 
                    d="M 35 50 L 65 75" 
                    fill="none" 
                    stroke="url(#neonGrad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    className="animate-draw delay-700" 
                  />
                </g>
              </svg>
            </div>

            {/* Animated Title */}
            <h2 className="text-3xl md:text-5xl font-light mb-3 tracking-[0.2em] uppercase text-neon-cyan animate-neon-flicker delay-700">
              ESTATERUNE
            </h2>
          </div>
          
          <div className="inline-block mb-8 px-6 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30" style={{ boxShadow: 'var(--shadow-neon-purple)' }}>
            <span className="text-neon-cyan text-sm font-light uppercase tracking-widest">Rune ID: 902650:1531</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Real World Assets
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-foreground/50 font-light mb-12 tracking-[0.3em] uppercase">
            Powered by Bitcoin
          </p>
          
          <p className="text-base md:text-lg text-foreground/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Tokenize real estate, inheritances, valuables, and equity on Bitcoin blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-pink/80 to-neon-purple/80 text-white hover:opacity-80 transition-opacity border-0 text-sm tracking-wide group"
              asChild
            >
              <a href="https://ipfs.io/ipfs/bafkreicqpukjmfl6atbnj2bvc33s2zel222sxmgc7t43xhwzmzcylmsa6q" target="_blank" rel="noopener noreferrer">
                Download Whitepaper
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-cyber-dark/30 border border-border/50">
              <div className="text-3xl font-light text-neon-purple mb-2">$3.7T</div>
              <div className="text-muted-foreground tracking-wider text-xs font-light">Market Opportunity</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-cyber-dark/30 border border-border/50">
              <div className="text-3xl font-light text-neon-cyan mb-2">2025</div>
              <div className="text-muted-foreground tracking-wider text-xs font-light">Launch Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
