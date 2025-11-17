import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Coins, Lock, Users, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const distributionData = [
  { name: "Community/Investors", value: 50, color: "hsl(328 100% 54%)" },
  { name: "Development", value: 30, color: "hsl(280 88% 39%)" },
  { name: "Team", value: 20, color: "hsl(187 100% 50%)" },
];

const utilities = [
  {
    icon: Coins,
    title: "Tokenization Fees",
    description: "Pay for property tokenization fees and platform services",
    color: "neon-pink",
  },
  {
    icon: Rocket,
    title: "Premium Features",
    description: "Access exclusive premium features and advanced analytics",
    color: "neon-purple",
  },
  {
    icon: Users,
    title: "Governance Staking",
    description: "Stake tokens for governance rights and protocol decisions (future)",
    color: "neon-cyan",
  },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gradient-radial))]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Fair distribution and transparent allocation for sustainable growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Token Distribution Chart */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-purple/30 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-neon-pink">Token Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(240 20% 6%)', 
                    border: '1px solid hsl(280 88% 39% / 0.3)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground font-light">
                    {item.name}: <span className="text-foreground">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Information */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-cyan/30 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">Supply Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Total Supply</p>
                  <p className="text-3xl font-bold text-foreground">21,000,000</p>
                  <p className="text-xs text-muted-foreground mt-1">ESTR Tokens (Fixed)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Community/Investors</p>
                  <p className="text-3xl font-bold text-neon-pink">10,500,000</p>
                  <p className="text-xs text-muted-foreground mt-1">50% of Total Supply</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Rune ID</p>
                  <p className="text-xl font-mono text-neon-purple">902650:1531</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Vesting Schedule</p>
                  <p className="text-sm text-foreground/80 font-light leading-relaxed">
                    Team allocation (20%) vested over 3 years to ensure long-term alignment and commitment to the project's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-pink/30 p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-neon-purple">Token Utility</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {utilities.map((utility, index) => {
              const Icon = utility.icon;
              return (
                <div 
                  key={index} 
                  className="group p-6 rounded-xl bg-background/50 border border-border/50 hover:border-neon-cyan/50 transition-all hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-${utility.color}/10 mb-4`}>
                    <Icon className={`h-6 w-6 text-${utility.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {utility.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {utility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Magic Eden Button */}
        <div className="mt-12 text-center">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-neon-pink/50 transition-all"
          >
            <a 
              href="https://magiceden.io/runes/ESTATERUNE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Explore ESTR Rune on Magic Eden
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
