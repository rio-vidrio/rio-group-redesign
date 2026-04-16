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
            padding: "0 40px",
            height: "90px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>
            {/* Top row: Logo | Client Advisor */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <Image
                src="/AZ-Logo-White-Strip.png"
                alt="A.Z. & Associates"
                width={240}
                height={46}
                style={{ height: "46px", width: "auto", display: "block" }}
                priority
              />
              <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.3)" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Client Advisor
              </span>
            </div>
            {/* Bottom: Designed by The Rio Group — centered */}
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={72}
                height={18}
                style={{ opacity: 0.65 }}
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="sm:hidden flex items-center justify-center"
          style={{ position: "relative", zIndex: 1, height: "68px", padding: "0 16px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
            {/* Top row: Logo | Client Advisor */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Image
                src="/AZ-Logo-White-Strip.png"
                alt="A.Z. & Associates"
                width={150}
                height={29}
                style={{ height: "29px", width: "auto", display: "block" }}
                priority
              />
              <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.3)" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Client Advisor
              </span>
            </div>
            {/* Bottom: Designed by — centered */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ fontSize: "7px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={52}
                height={13}
                style={{ opacity: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
