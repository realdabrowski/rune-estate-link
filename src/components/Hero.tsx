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
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] uppercase">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Estaterune
            </span>
          </h2>
          
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
