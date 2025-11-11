import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import securityImage from "@/assets/security.jpg";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${securityImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Tokenize Your Assets?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the future of asset management. Start tokenizing with the security 
            of Bitcoin and the innovation of Rune protocol today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              <div className="text-lg font-semibold">Company A</div>
              <div className="text-lg font-semibold">Company B</div>
              <div className="text-lg font-semibold">Company C</div>
              <div className="text-lg font-semibold">Company D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
