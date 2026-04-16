"use client";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "calculators", label: "Calculators" },
  { id: "homeowner", label: "Existing Homeowner" },
  { id: "selfemployed", label: "Business Owner" },
  { id: "rates", label: "Market Rates" },
  { id: "settings", label: "Settings" },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav
      className="no-print"
      style={{
        background: "#111111",
        borderBottom: "1px solid #2A2A2A",
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", overflowX: "auto" }} className="scrollbar-none">
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
    </nav>
  );
}
