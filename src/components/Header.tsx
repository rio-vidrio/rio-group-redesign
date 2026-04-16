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
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates&nbsp;&nbsp;|&nbsp;&nbsp;Client Advisor
            </div>
            <div
              style={{
                marginTop: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.32)",
                }}
              >
                Courtesy of
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={72}
                height={18}
                style={{ opacity: 0.4 }}
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
                color: "rgba(255,255,255,0.88)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates | Client Advisor
            </div>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: "8px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                Courtesy of
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={60}
                height={15}
                style={{ opacity: 0.35 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
