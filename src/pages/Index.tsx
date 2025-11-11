import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutProtocol from "@/components/AboutProtocol";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutProtocol />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
