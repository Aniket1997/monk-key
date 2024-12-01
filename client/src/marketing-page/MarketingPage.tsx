import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "../component/AppAppBar.tsx";
import Hero from "../component/Hero.tsx";
import Highlights from "./components/Highlights.tsx";
import Pricing from "./components/Pricing.tsx";
import Features from "./components/Features.tsx";
import Testimonials from "./components/Testimonials.tsx";
import FAQ from "./components/FAQ.tsx";
import Footer from "../component/Footer.tsx";
import AppTheme from "../shared-theme/AppTheme.tsx";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <div id="features-section">
          <Features />
        </div>
        <Divider />
        <div id="testimonials-section">
          <Testimonials />
        </div>
        <Divider />
        <div id="heighlight-section">
          <Highlights />
        </div>
        <Divider />
        <div id="pricing-section">
          <Pricing />
        </div>
        <Divider />
        <div id="faq-section">
          <FAQ />
        </div>
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
