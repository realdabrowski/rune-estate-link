import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-neon-purple/30 bg-cyber-darker py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Tokenizing real-world assets with Bitcoin's Rune protocol.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://x.com/estaterune" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-pink transition-colors" aria-label="Follow us on X">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://njump.me/nprofile1qqsfjwdts9zdeasuu6pshdt5vtjnnjc5jugmxtv28xenhhl3fm6zlrcxzswva" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-pink transition-colors" aria-label="Follow us on Nostr">
                <svg className="h-5 w-5" viewBox="0 0 875 875" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 437.5 C 0 196.084 196.084 0 437.5 0 C 678.916 0 875 196.084 875 437.5 C 875 678.916 678.916 875 437.5 875 C 196.084 875 0 678.916 0 437.5 Z M 437.5 79.101 C 239.771 79.101 79.101 239.771 79.101 437.5 C 79.101 635.229 239.771 795.899 437.5 795.899 C 635.229 795.899 795.899 635.229 795.899 437.5 C 795.899 239.771 635.229 79.101 437.5 79.101 Z M 437.5 711.549 C 288.672 711.549 167.798 590.674 167.798 441.846 C 167.798 293.019 288.672 172.144 437.5 172.144 C 586.328 172.144 707.202 293.019 707.202 441.846 C 707.202 590.674 586.328 711.549 437.5 711.549 Z M 437.5 623.753 C 538.672 623.753 620.36 542.065 620.36 440.893 C 620.36 339.721 538.672 258.033 437.5 258.033 C 336.328 258.033 254.64 339.721 254.64 440.893 C 254.64 542.065 336.328 623.753 437.5 623.753 Z"/>
                </svg>
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
