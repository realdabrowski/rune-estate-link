import { Bitcoin, Shield, Layers } from "lucide-react";

const AboutProtocol = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              The Problem
            </span>
          </h2>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            High-value assets like real estate, business equity, and inheritances are illiquid, 
            intermediary-dependent, and inaccessible to most investors. Traditional systems lack 
            transparency, impose high barriers to entry, and fail to provide enduring ownership guarantees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-lg text-foreground/80 font-light leading-relaxed mb-12">
            Estaterune transforms real-world assets into fractional, tradable tokens on Bitcoin using 
            the Runes protocol. We eliminate intermediaries, enable micro-investments, and ensure 
            immutable ownership through blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-pink/30 backdrop-blur-sm hover:border-neon-pink transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-6 mx-auto" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
              <Bitcoin className="w-8 h-8 text-neon-pink" />
            </div>
            <h3 className="text-xl font-semibold text-neon-pink mb-4 text-center uppercase tracking-wider">
              Bitcoin Security
            </h3>
            <p className="text-foreground/70 text-center font-light">
              Leverage Bitcoin's unmatched security through Proof-of-Work consensus and 
              immutable blockchain infrastructure.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-purple/30 backdrop-blur-sm hover:border-neon-purple transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-6 mx-auto" style={{ boxShadow: 'var(--shadow-neon-purple)' }}>
              <Layers className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold text-neon-purple mb-4 text-center uppercase tracking-wider">
              Runes Protocol
            </h3>
            <p className="text-foreground/70 text-center font-light">
              Efficient fungible tokens etched directly on Bitcoin with streamlined 
              operations and minimal overhead.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-cyan/30 backdrop-blur-sm hover:border-neon-cyan transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-6 mx-auto" style={{ boxShadow: 'var(--shadow-neon-cyan)' }}>
              <Shield className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-neon-cyan mb-4 text-center uppercase tracking-wider">
              Full Transparency
            </h3>
            <p className="text-foreground/70 text-center font-light">
              All transactions and ownership records stored immutably on blockchain 
              with complete auditability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProtocol;
