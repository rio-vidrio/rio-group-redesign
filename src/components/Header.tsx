"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 no-print">
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/az-associates-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            filter: "brightness(0.45)",
            transform: "scale(1.03)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.55) 100%)",
            zIndex: 0,
          }}
        />

        {/* Desktop */}
        <div
          className="hidden sm:flex"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            height: "90px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Center — title + courtesy */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.95)",
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates&nbsp;&nbsp;|&nbsp;&nbsp;Client Advisor
            </div>
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={78}
                height={20}
                style={{ opacity: 0.7 }}
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="sm:hidden flex items-center justify-center"
          style={{ position: "relative", zIndex: 1, height: "68px", padding: "0 16px" }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.93)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates | Client Advisor
            </div>
            <div
              style={{
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={64}
                height={16}
                style={{ opacity: 0.65 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
