import runeImage from "@/assets/rune-protocol.jpg";

const AboutProtocol = () => {
  return (
    <section id="protocol" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is the{" "}
              <span className="text-primary">Rune Protocol</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Rune protocol is a revolutionary standard for creating fungible tokens 
              directly on the Bitcoin blockchain. Unlike traditional tokenization methods, 
              Runes leverage Bitcoin's unparalleled security and decentralization.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Built on the foundation of Bitcoin's UTXO model, Runes offer a simple, 
              efficient way to represent real-world assets with the trustlessness and 
              immutability that only Bitcoin can provide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Bitcoin-Native Security</div>
                  <div className="text-muted-foreground">Inherit Bitcoin's battle-tested security model</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Simple & Efficient</div>
                  <div className="text-muted-foreground">Streamlined token operations with minimal overhead</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Truly Decentralized</div>
                  <div className="text-muted-foreground">No trusted intermediaries or centralized control</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={runeImage} 
              alt="Rune Protocol Visualization" 
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProtocol;
