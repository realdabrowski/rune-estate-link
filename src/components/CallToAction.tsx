import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-pink/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
          </div>

          <div className="space-y-8 mb-20">
            <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-pink/30 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
                  <Calendar className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-pink mb-2 uppercase tracking-wider">Q3-Q4 2025</h3>
                  <p className="text-foreground/70 font-light">MVP dApp launch • Pilot tokenization (real estate, influencers, companies) • Beta testing • Marketplace integration</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-purple/30 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: 'var(--shadow-neon-purple)' }}>
                  <Calendar className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-purple mb-2 uppercase tracking-wider">Q1-Q2 2026</h3>
                  <p className="text-foreground/70 font-light">Commercial asset onboarding • Seed funding round • ESTR governance via staking • Layer-2 DeFi integration</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-cyan/30 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: 'var(--shadow-neon-cyan)' }}>
                  <Calendar className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-cyan mb-2 uppercase tracking-wider">2027+</h3>
                  <p className="text-foreground/70 font-light">Expansion to art, collectibles, intellectual property • Global partnerships • Enhanced DeFi features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-12 rounded-lg bg-cyber-dark/50 border border-neon-pink/30 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neon-pink" style={{ textShadow: 'var(--shadow-neon-pink)' }}>
              Join the Beta
            </h3>
            <p className="text-xl text-foreground/70 mb-10 font-light max-w-2xl mx-auto">
              Be among the first to tokenize real-world assets on Bitcoin. 
              Sign up for early access to the Estaterune platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 transition-opacity border-0 text-base uppercase tracking-wider group"
                style={{ boxShadow: 'var(--shadow-neon-pink)' }}
              >
                Apply for Beta Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-neon-cyan/50 bg-transparent text-neon-cyan hover:bg-neon-cyan/10 text-base uppercase tracking-wider"
              >
                Read Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
