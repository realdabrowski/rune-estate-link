import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logo from "@/assets/ER_logo.png";
import { BetaAccessForm } from "./BetaAccessForm";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          <a href="#tokenomics" className="text-foreground/70 hover:text-neon-purple transition-colors text-sm uppercase tracking-wider font-light">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-foreground/70 hover:text-neon-pink transition-colors text-sm uppercase tracking-wider font-light">
            Roadmap
          </a>
        </nav>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 transition-opacity border-0" style={{ boxShadow: 'var(--shadow-neon-pink)' }}>
              Beta Access
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] bg-cyber-darker/95 border-neon-purple/30 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                Request Beta Access
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Join Estaterune's beta program and tokenize your real-world assets on Bitcoin's Rune protocol.
              </DialogDescription>
            </DialogHeader>
            <BetaAccessForm onSuccess={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
