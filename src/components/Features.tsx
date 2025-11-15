import { Home, TrendingUp, Briefcase, Users, DollarSign, Lock } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Real Estate",
    description: "Tokenize properties for fractional ownership, rental yields, and global liquidity without traditional barriers.",
  },
  {
    icon: Users,
    title: "Influencer Brands",
    description: "Creators can tokenize their brand for fan engagement, revenue sharing, and exclusive content access.",
  },
  {
    icon: Briefcase,
    title: "Business Equity",
    description: "Companies tokenize equity for crowdfunding, transparent governance, and decentralized ownership.",
  },
  {
    icon: TrendingUp,
    title: "Global Trading",
    description: "Trade tokens seamlessly on Bitcoin-compatible marketplaces like Magic Eden with instant settlement.",
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Only 1% tokenization fee payable in BTC, eliminating expensive intermediaries.",
  },
  {
    icon: Lock,
    title: "KYC/AML Compliant",
    description: "Full regulatory compliance with SEC standards and secure document storage on IPFS.",
  },
];

const Features = () => {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            Democratizing access to high-value assets through blockchain tokenization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = [
              { border: 'neon-pink/30', hover: 'neon-pink', bg: 'neon-pink/10', text: 'neon-pink' },
              { border: 'neon-purple/30', hover: 'neon-purple', bg: 'neon-purple/10', text: 'neon-purple' },
              { border: 'neon-cyan/30', hover: 'neon-cyan', bg: 'neon-cyan/10', text: 'neon-cyan' },
              { border: 'neon-pink/30', hover: 'neon-pink', bg: 'neon-pink/10', text: 'neon-pink' },
              { border: 'neon-purple/30', hover: 'neon-purple', bg: 'neon-purple/10', text: 'neon-purple' },
              { border: 'neon-cyan/30', hover: 'neon-cyan', bg: 'neon-cyan/10', text: 'neon-cyan' },
            ];
            const color = colors[index];
            
            return (
              <div 
                key={index} 
                className={`p-8 bg-cyber-dark/50 border border-${color.border} rounded-lg backdrop-blur-sm hover:border-${color.hover} transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-full bg-${color.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 text-${color.text}`} />
                </div>
                <h3 className={`text-lg font-semibold mb-3 text-${color.text} uppercase tracking-wider`}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
