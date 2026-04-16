"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 no-print">
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Background image — more visible */}
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
        {/* Subtle dark gradient overlay */}
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
            justifyContent: "space-between",
          }}
        >
          {/* Left — AZ stacked logo, larger */}
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <Image
              src="/AZ-Logo-White-Stack.png"
              alt="AZ & Associates"
              width={80}
              height={80}
              style={{ opacity: 0.95 }}
            />
          </div>

          {/* Center — title + courtesy with Rio Group logo */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates&nbsp;&nbsp;|&nbsp;&nbsp;Client Advisor
            </div>
            <div
              style={{
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={72}
                height={18}
                style={{ opacity: 0.4 }}
              />
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
            </div>
          </div>

          {/* Right — spacer to balance logo */}
          <div style={{ flexShrink: 0, width: "80px" }} />
        </div>

        {/* Mobile */}
        <div
          className="sm:hidden flex items-center justify-between"
          style={{ position: "relative", zIndex: 1, height: "68px", padding: "0 16px" }}
        >
          <Image
            src="/AZ-Logo-White-Stack.png"
            alt="AZ & Associates"
            width={52}
            height={52}
            style={{ opacity: 0.92 }}
          />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.88)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              A.Z. &amp; Associates | Client Advisor
            </div>
            <div
              style={{
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <span style={{ fontSize: "8px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                Courtesy of
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={56}
                height={14}
                style={{ opacity: 0.35 }}
              />
            </div>
          </div>
          <div style={{ width: "52px" }} />
        </div>
      </div>
    </header>
  );
}
