import { ImageResponse } from "next/og";

export const socialCardAlt =
  "Kokou Espoir ATIVON — Génie industriel, données et digitalisation";
export const socialCardSize = { width: 1200, height: 630 };
export const socialCardContentType = "image/png";

export function createSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f8fafc",
          background:
            "linear-gradient(135deg, #07111f 0%, #0f253d 55%, #103b37 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#5eead4",
            fontSize: 26,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          Génie industriel · Données · Digitalisation
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Kokou Espoir ATIVON
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 960,
              color: "#cbd5e1",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            Amélioration continue, analyse de données industrielles et outils
            numériques utiles au terrain.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#94a3b8",
            fontSize: 24,
          }}
        >
          Lean / TRS · Python / SQL · Node-RED / IoT · Qualité
        </div>
      </div>
    ),
    socialCardSize,
  );
}
