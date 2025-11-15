import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neon-purple/30 bg-cyber-darker/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Estaterune" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/70 hover:text-neon-pink transition-colors text-sm uppercase tracking-wider font-light">
            About
          </a>
          <a href="#technology" className="text-foreground/70 hover:text-neon-cyan transition-colors text-sm uppercase tracking-wider font-light">
            Technology
          </a>
          <a href="#roadmap" className="text-foreground/70 hover:text-neon-pink transition-colors text-sm uppercase tracking-wider font-light">
            Roadmap
          </a>
        </nav>

        <Button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 transition-opacity border-0" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
          Beta Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
