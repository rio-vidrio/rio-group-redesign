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
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 100%)",
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
            padding: "0 48px",
            height: "88px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            {/* Top row: AZ logo | CLIENT ADVISOR */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <Image
                src="/AZ-Logo-White-Strip.png"
                alt="A.Z. & Associates"
                width={200}
                height={38}
                style={{ height: "38px", width: "auto", display: "block" }}
                priority
              />
              <span style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Client Advisor
              </span>
            </div>
            {/* Bottom: Designed by Rio Group logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "8px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={62}
                height={16}
                style={{ opacity: 0.6 }}
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="sm:hidden flex items-center justify-center"
          style={{ position: "relative", zIndex: 1, height: "68px", padding: "0 20px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Image
                src="/AZ-Logo-White-Strip.png"
                alt="A.Z. & Associates"
                width={140}
                height={27}
                style={{ height: "27px", width: "auto", display: "block" }}
                priority
              />
              <span style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Client Advisor
              </span>
            </div>
            {/* Bottom: Designed by */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                Designed by
              </span>
              <Image
                src="/rio-group-landscape.png"
                alt="The Rio Group"
                width={50}
                height={13}
                style={{ opacity: 0.55 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
