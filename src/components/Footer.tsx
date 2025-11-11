import logo from "@/assets/logo.png";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-neon-purple/30 bg-cyber-darker py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Estaterune" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Tokenizing real-world assets with Bitcoin's Rune protocol.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://x.com/estaterune" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-neon-pink uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#technology" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Technology</a></li>
              <li><a href="#tokenomics" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Roadmap</a></li>
              <li><a href="https://www.estaterune.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-neon-purple uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Whitepaper</a></li>
              <li><a href="https://magiceden.io/runes/ESTATERUNE" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Trade on Magic Eden</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Beta Access</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-neon-cyan uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-light">KYC/AML Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neon-purple/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">© 2025 Estaterune. All rights reserved.</p>
          <p className="text-xs text-muted-foreground font-light">Rune ID: 902650:1531</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
