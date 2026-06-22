import { ImageResponse } from "next/og";

// Apple touch icon (180×180) — navy tile with the chevron mark.
// Middle chevron is white so it reads on the navy field.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1b2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none">
          <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill="#0160ed" />
          <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill="#FFFFFF" />
          <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill="#5cb85c" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
