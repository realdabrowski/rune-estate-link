import { Coins, TrendingUp, Lock, Zap } from "lucide-react";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-32 relative overflow-hidden bg-cyber-darker/50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-pink/30 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
              ESTR Tokenomics
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            The ESTR utility token powers the Estaterune ecosystem with a fixed supply of 100 million tokens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-pink/30 backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4 mx-auto" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
              <Coins className="w-8 h-8 text-neon-pink" />
            </div>
            <div className="text-3xl font-bold text-neon-pink mb-2" style={{ textShadow: 'var(--shadow-neon-pink)' }}>100M</div>
            <div className="text-foreground/70 text-sm uppercase tracking-wider font-light">Fixed Supply</div>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-purple/30 backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 mx-auto" style={{ boxShadow: 'var(--shadow-neon-purple)' }}>
              <TrendingUp className="w-8 h-8 text-neon-purple" />
            </div>
            <div className="text-3xl font-bold text-neon-purple mb-2" style={{ textShadow: 'var(--shadow-neon-purple)' }}>1%</div>
            <div className="text-foreground/70 text-sm uppercase tracking-wider font-light">Platform Fee</div>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-cyan/30 backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4 mx-auto" style={{ boxShadow: 'var(--shadow-neon-cyan)' }}>
              <Lock className="w-8 h-8 text-neon-cyan" />
            </div>
            <div className="text-3xl font-bold text-neon-cyan mb-2" style={{ textShadow: 'var(--shadow-neon-cyan)' }}>Staking</div>
            <div className="text-foreground/70 text-sm uppercase tracking-wider font-light">Governance</div>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-pink/30 backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4 mx-auto" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
              <Zap className="w-8 h-8 text-neon-pink" />
            </div>
            <div className="text-3xl font-bold text-neon-pink mb-2" style={{ textShadow: 'var(--shadow-neon-pink)' }}>Utility</div>
            <div className="text-foreground/70 text-sm uppercase tracking-wider font-light">Ecosystem Access</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-purple/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-neon-purple mb-4 uppercase tracking-wider">Fee Payment</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              Users pay a 1% tokenization fee in ESTR or BTC. ESTR tokens are used for platform operations, 
              creating demand and supporting the ecosystem.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-pink/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-neon-pink mb-4 uppercase tracking-wider">Staking & Governance</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              ESTR holders can stake tokens to participate in platform governance decisions, 
              influencing protocol upgrades and asset listings.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-cyber-dark/50 border border-neon-cyan/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-neon-cyan mb-4 uppercase tracking-wider">Liquidity & Development</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              Fees fund liquidity pools, development, and ecosystem growth. A portion supports 
              DeFi integrations on Layer-2 solutions like Stacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
