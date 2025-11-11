import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Estaterune
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#protocol" className="text-foreground/80 hover:text-primary transition-colors">
            Protocol
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
