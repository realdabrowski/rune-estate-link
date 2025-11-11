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
          <div className="inline-block mb-8 px-6 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30" style={{ boxShadow: 'var(--shadow-neon-purple)' }}>
            <span className="text-neon-cyan text-sm font-light uppercase tracking-widest">Rune ID: 902650:1531</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent" style={{ textShadow: 'var(--shadow-neon-pink)' }}>
              Real World Assets
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-neon-pink font-light mb-12 tracking-wide" style={{ textShadow: 'var(--shadow-neon-pink)' }}>
            POWERED BY BITCOIN
          </p>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Tokenize real estate, inheritances, valuables, and equity on Bitcoin blockchain. 
            Democratizing access to high-value investments with unmatched security and transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 transition-opacity border-0 text-base uppercase tracking-wider group"
              style={{ boxShadow: 'var(--shadow-neon-pink)' }}
            >
              Join Beta Testing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-neon-cyan/50 bg-transparent text-neon-cyan hover:bg-neon-cyan/10 text-base uppercase tracking-wider"
            >
              Download Whitepaper
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-cyber-dark/50 border border-neon-pink/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-neon-pink mb-2" style={{ textShadow: 'var(--shadow-neon-pink)' }}>100M</div>
              <div className="text-muted-foreground uppercase tracking-wide text-sm font-light">ESTR Tokens</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-cyber-dark/50 border border-neon-purple/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-neon-purple mb-2" style={{ textShadow: 'var(--shadow-neon-purple)' }}>$3.7T</div>
              <div className="text-muted-foreground uppercase tracking-wide text-sm font-light">Market Opportunity</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-cyber-dark/50 border border-neon-cyan/20 backdrop-blur-sm">
              <div className="text-4xl font-bold text-neon-cyan mb-2" style={{ textShadow: 'var(--shadow-neon-cyan)' }}>2025</div>
              <div className="text-muted-foreground uppercase tracking-wide text-sm font-light">Launch Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
