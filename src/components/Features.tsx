import { Shield, Zap, Lock, Globe, BarChart3, Coins } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Built on Bitcoin's proven security infrastructure with multi-signature support and cold storage options.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Lightning-fast token transfers and settlements powered by Bitcoin's efficient UTXO model.",
  },
  {
    icon: Lock,
    title: "Full Custody Control",
    description: "Maintain complete ownership of your assets with non-custodial wallet integration.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your tokenized assets from anywhere in the world, 24/7/365.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance, monitor transactions, and analyze your portfolio in real-time.",
  },
  {
    icon: Coins,
    title: "Multi-Asset Support",
    description: "Tokenize various asset classes from real estate to commodities and securities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="text-primary">Modern Tokenization</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to tokenize, manage, and trade real-world assets 
            on the most secure blockchain network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-secondary/50 transition-all duration-300 border-border hover:border-primary/50 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
