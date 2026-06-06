import { SmoothScroll } from "./smooth-scroll";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { TrustSection } from "./trust-section";
import { ProductShowcase } from "./product-showcase";
import { FeatureGrid } from "./feature-grid";
import { CollaborationSection } from "./collaboration-section";
import { QuickStartSection } from "./quick-start-section";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="landing-bg min-h-screen text-white overflow-x-hidden">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <TrustSection />
      <ProductShowcase />
      <FeatureGrid />
      <CollaborationSection />
      <QuickStartSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
