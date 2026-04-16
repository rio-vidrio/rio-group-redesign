"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import WizardShell from "@/components/wizard/WizardShell";
import Calculators from "@/components/Calculators";
import ProgramReference from "@/components/ProgramReference";
import MarketRates from "@/components/MarketRates";
import SettingsPanel from "@/components/SettingsPanel";
import ExistingHomeowner from "@/components/ExistingHomeowner";
import SelfEmployedWizard from "@/components/SelfEmployedWizard";
import { fetchLiveRates, saveRates } from "@/lib/rateStore";

export default function Home() {
  const [activeTab, setActiveTab] = useState("calculators");

  useEffect(() => {
    const tryFetchRates = async () => {
      const live = await fetchLiveRates();
      if (live) saveRates(live);
    };
    tryFetchRates();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#111111" }}>
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main
        className="px-4 sm:px-6 py-8 md:py-10"
        style={{ background: "#111111", minHeight: "calc(100vh - 72px)" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Keep all tabs mounted so state is never lost */}
          <div style={{ display: activeTab === "wizard" ? "block" : "none" }}><WizardShell onTabChange={setActiveTab} /></div>
          <div style={{ display: activeTab === "calculators" ? "block" : "none" }}><Calculators /></div>
          <div style={{ display: activeTab === "programs" ? "block" : "none" }}><ProgramReference /></div>
          <div style={{ display: activeTab === "rates" ? "block" : "none" }}><MarketRates /></div>
          <div style={{ display: activeTab === "homeowner" ? "block" : "none" }}><ExistingHomeowner /></div>
          <div style={{ display: activeTab === "selfemployed" ? "block" : "none" }}><SelfEmployedWizard onTabChange={setActiveTab} /></div>
          <div style={{ display: activeTab === "settings" ? "block" : "none" }}><SettingsPanel /></div>
        </div>
      </main>

      <footer
        className="no-print"
        style={{
          borderTop: "1px solid #1E1E1E",
          background: "#0A0A0A",
          textAlign: "center",
          padding: "24px",
          marginTop: "32px",
        }}
      >
        <p className="text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.3)" }}>
          A.Z. &amp; Associates — Home Buying Advisor
        </p>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.15)" }}>
          All estimates for informational purposes only. Subject to lender approval.
        </p>
      </footer>
    </div>
  );
}
