"use client";

import { useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "calculators", label: "Calculators", icon: "🧮" },
  { id: "homeowner", label: "Existing Homeowner", icon: "🏠" },
  { id: "selfemployed", label: "Business Owner", icon: "💼" },
  { id: "rates", label: "Market Rates", icon: "📈" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeTab_ = tabs.find((t) => t.id === activeTab);

  const handleSelect = (id: string) => {
    onTabChange(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className="no-print"
      style={{
        background: "#111111",
        borderBottom: "1px solid #2A2A2A",
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}
    >
      {/* ── Desktop: horizontal tabs ── */}
      <div className="hidden sm:block" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex" }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  padding: "15px 24px",
                  fontSize: "12px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  border: "none",
                  borderBottom: isActive ? "3px solid #C8202A" : "3px solid transparent",
                  background: "transparent",
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.38)",
                  cursor: "pointer",
                  transition: "color 120ms, background 120ms",
                  marginBottom: "-1px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.75)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.38)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: hamburger + stacked dropdown ── */}
      <div className="sm:hidden">
        {/* Trigger bar */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "13px 20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "16px" }}>{activeTab_?.icon}</span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              {activeTab_?.label}
            </span>
          </span>
          {/* Chevron */}
          <span
            style={{
              display: "inline-block",
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
              lineHeight: 1,
              transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 200ms",
            }}
          >
            ›
          </span>
        </button>

        {/* Stacked dropdown */}
        {mobileOpen && (
          <div
            style={{
              background: "#1A1A1A",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelect(tab.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 20px",
                    background: isActive ? "rgba(200,32,42,0.12)" : "transparent",
                    border: "none",
                    borderLeft: isActive ? "3px solid #C8202A" : "3px solid transparent",
                    borderBottom: "1px solid #222222",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 100ms",
                  }}
                >
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>{tab.icon}</span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                    }}
                  >
                    {tab.label}
                  </span>
                  {isActive && (
                    <span style={{ marginLeft: "auto", color: "#C8202A", fontSize: "16px" }}>✓</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
