import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Coins, Lock, Users, Rocket, ExternalLink, Shield, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const distributionData = [
  { name: "Public Sale", value: 25, amount: "5.25M", color: "hsl(328 100% 54%)" },
  { name: "Community Growth", value: 25, amount: "5.25M", color: "hsl(187 100% 50%)" },
  { name: "Treasury/Reserves", value: 20, amount: "4.2M", color: "hsl(280 88% 39%)" },
  { name: "Ecosystem Dev", value: 15, amount: "3.15M", color: "hsl(142 76% 36%)" },
  { name: "Team/Founders", value: 10, amount: "2.1M", color: "hsl(47 96% 53%)" },
  { name: "Liquidity/Marketing", value: 5, amount: "1.05M", color: "hsl(217 91% 60%)" },
];

const principles = [
  {
    icon: Shield,
    title: "Fairness First",
    description: "No inflation. Fixed 21M supply with vesting locks to prevent dumps and ensure long-term alignment.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "50% allocated to public sale and community growth—largest share goes to ecosystem participants.",
  },
  {
    icon: TrendingUp,
    title: "Utility Aligned",
    description: "EST rewards asset tokenization, staking, and governance, driving real-world adoption on Bitcoin.",
  },
  {
    icon: Rocket,
    title: "RWA Revolution",
    description: "Supporting the $4T+ real estate tokenization boom with Bitcoin-native infrastructure.",
  },
];

const utilities = [
  {
    icon: Coins,
    title: "Fee Discounts",
    description: "Holders get lower fees for tokenizing assets on Estaterune.com",
    color: "neon-pink",
  },
  {
    icon: Users,
    title: "Governance Rights",
    description: "Vote on new asset categories, integrations, and platform roadmap",
    color: "neon-purple",
  },
  {
    icon: Lock,
    title: "Exclusive Membership",
    description: "Access to whitelists, early mints, and exclusive content",
    color: "neon-cyan",
  },
  {
    icon: Rocket,
    title: "Ecosystem Priority",
    description: "Priority access for future Runes drops and Estaterune launches",
    color: "neon-pink",
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
            EST Distribution at a Glance
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-light leading-relaxed mb-4">
            Transparent Distribution for Lasting Value—EST powers Estaterune's RWA revolution on Bitcoin Runes
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A scarcity-driven model mirroring BTC's 21M cap, designed for tokenizing estates, valuables, equity, and inheritances
          </p>
        </div>

        {/* Key Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-neon-cyan">Design Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-neon-cyan/50 transition-all"
                >
                  <div className="inline-flex p-3 rounded-lg bg-neon-cyan/10 mb-4">
                    <Icon className="h-6 w-6 text-neon-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Distribution Breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-neon-pink">Distribution Breakdown</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Pie Chart */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-purple/30 p-8">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
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
              <div className="mt-6 space-y-3">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-foreground font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-foreground font-semibold">{item.value}%</span>
                      <span className="text-xs text-muted-foreground ml-2">({item.amount})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Information */}
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-cyan/30 p-8">
                <h4 className="text-xl font-semibold mb-6 text-neon-cyan">Supply Information</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Total Supply</p>
                    <p className="text-4xl font-bold text-foreground">21,000,000</p>
                    <p className="text-xs text-muted-foreground mt-1">EST Tokens (Fixed, No Inflation)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Rune ID</p>
                    <p className="text-xl font-mono text-neon-purple">902650:1531</p>
                    <a 
                      href="https://magiceden.io/runes/ESTATERUNE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-neon-cyan hover:text-neon-pink transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      Verify on Magic Eden <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Distribution Structure</p>
                    <p className="text-sm text-foreground/80 font-light leading-relaxed mb-3">
                      <span className="text-neon-pink font-semibold">Primary Slices:</span> 10 slices of 2.1M EST each for public sales, liquidity, and partnerships.
                    </p>
                    <p className="text-sm text-foreground/80 font-light leading-relaxed">
                      <span className="text-neon-cyan font-semibold">Micro Slices:</span> 10 packs of 210k EST for giveaways, community rewards, and viral growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background/50 border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Category</th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">Allocation</th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">Amount</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Vesting Schedule</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Public Sale</td>
                    <td className="p-4 text-sm text-center text-neon-pink font-semibold">25%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">5.25M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">6-12 month cliff</td>
                    <td className="p-4 text-sm text-muted-foreground">Fair Magic Eden launch (Q1 2026) for broad ecosystem access</td>
                  </tr>
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Community Growth</td>
                    <td className="p-4 text-sm text-center text-neon-cyan font-semibold">25%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">5.25M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">Milestone unlocks</td>
                    <td className="p-4 text-sm text-muted-foreground">Airdrops to Runes/Bitcoin holders, rewards for beta tokenizations</td>
                  </tr>
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Treasury/Reserves</td>
                    <td className="p-4 text-sm text-center text-neon-purple font-semibold">20%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">4.2M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">2-year DAO-governed</td>
                    <td className="p-4 text-sm text-muted-foreground">Compliance, security audits, strategic expansions and partnerships</td>
                  </tr>
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Ecosystem Dev</td>
                    <td className="p-4 text-sm text-center text-green-400 font-semibold">15%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">3.15M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">Grant-based release</td>
                    <td className="p-4 text-sm text-muted-foreground">Developer grants, DeFi integrations, estate yield protocols</td>
                  </tr>
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Team/Founders</td>
                    <td className="p-4 text-sm text-center text-yellow-400 font-semibold">10%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">2.1M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">2-3 year vesting (25% quarterly)</td>
                    <td className="p-4 text-sm text-muted-foreground">Founder incentive aligned with long-term platform growth</td>
                  </tr>
                  <tr className="hover:bg-background/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">Liquidity/Marketing</td>
                    <td className="p-4 text-sm text-center text-blue-400 font-semibold">5%</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">1.05M EST</td>
                    <td className="p-4 text-sm text-muted-foreground">Immediate release</td>
                    <td className="p-4 text-sm text-muted-foreground">EST-BTC liquidity pools, campaigns, strategic partnerships</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vesting & Mechanics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-purple/30 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple">Vesting & Anti-Dump Mechanics</h3>
            <div className="space-y-4 text-sm text-foreground/80 font-light leading-relaxed">
              <p>
                EST employs rigorous anti-dump measures to ensure sustainable growth and protect holders. 
                <span className="text-neon-pink font-semibold"> Cliff periods</span> prevent early sell pressure, 
                with public sale tokens locked for 6-12 months and team allocations vesting quarterly over 2-3 years.
              </p>
              <p>
                Platform tokenization fees (1-2%) contribute to <span className="text-neon-cyan font-semibold">buyback-and-burn mechanisms</span>, 
                reducing circulating supply over time and creating deflationary pressure aligned with adoption.
              </p>
              <p className="pt-4 border-t border-border">
                <span className="text-muted-foreground uppercase tracking-wider text-xs block mb-2">Roadmap Alignment</span>
                <span className="text-foreground">Etching:</span> Nov 2025 (Complete) • 
                <span className="text-foreground ml-2">Mint:</span> Q1 2026 • 
                <span className="text-foreground ml-2">Staking:</span> Q2 2026
              </p>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-cyan/30 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">Why This Matters</h3>
            <div className="space-y-4 text-sm text-foreground/80 font-light leading-relaxed">
              <p>
                <span className="text-neon-pink font-semibold">Decentralized ownership</span> is the cornerstone of Estaterune's vision. 
                By distributing 50% to public and community, we ensure no single entity controls the network, 
                fostering true decentralization in real-world asset tokenization.
              </p>
              <p>
                EST fuels adoption across <span className="text-neon-cyan font-semibold">movable and immovable assets</span>—from 
                estates and equity to valuables and inheritances. Each tokenization strengthens the ecosystem, 
                creating network effects in the emerging $4T+ RWA market.
              </p>
              <p>
                Built <span className="text-neon-purple font-semibold">utility-first</span>, EST complies with regulatory frameworks 
                (Howey Test), positioning Estaterune as the compliant, Bitcoin-native infrastructure for institutional and retail asset tokenization.
              </p>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-neon-pink/30 p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-neon-purple">Token Utility</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Explore EST Rune on Magic Eden
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-semibold"
          >
            <a 
              href="#" 
              className="inline-flex items-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Read Full Whitepaper
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
