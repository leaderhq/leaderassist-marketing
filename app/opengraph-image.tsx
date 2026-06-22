import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "LeaderCal — Scheduling built for leaders";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1b2e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26, marginBottom: 54 }}>
          <svg width="104" height="104" viewBox="0 0 48 48" fill="none">
            <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill="#0160ed" />
            <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill="#FFFFFF" />
            <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill="#5cb85c" />
          </svg>
          <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: -2, color: "#FFFFFF", display: "flex" }}>
            Leader<span style={{ color: "#5cb85c" }}>Cal</span>
          </div>
        </div>
        <div style={{ fontSize: 62, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, marginBottom: 8, display: "flex" }}>
          Scheduling built
        </div>
        <div style={{ fontSize: 62, fontWeight: 700, color: "#5cb85c", lineHeight: 1.08, marginBottom: 44, display: "flex" }}>
          for leaders.
        </div>
        <div style={{ fontSize: 27, fontWeight: 500, color: "#a1a1aa", display: "flex", maxWidth: 900 }}>
          Leadership booking profiles · team scheduling · smart availability
        </div>
      </div>
    ),
    { ...size },
  );
}
