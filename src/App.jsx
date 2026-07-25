const shellStyle = {
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  color: "#f4f7fb",
  background:
    "radial-gradient(circle at top, rgba(52, 122, 255, 0.32), transparent 42%), #020810",
  fontFamily:
    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const cardStyle = {
  width: "min(100%, 440px)",
  padding: "32px 24px",
  borderRadius: "24px",
  border: "1px solid rgba(148, 163, 184, 0.25)",
  background: "rgba(10, 16, 28, 0.92)",
  boxShadow: "0 24px 80px rgba(2, 8, 16, 0.45)",
};

const badgeStyle = {
  display: "inline-flex",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "rgba(34, 197, 94, 0.16)",
  color: "#86efac",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.02em",
};

const listStyle = {
  margin: "24px 0 0",
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: "12px",
  color: "#cbd5e1",
};

const itemStyle = {
  padding: "14px 16px",
  borderRadius: "16px",
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148, 163, 184, 0.12)",
};

const checklist = [
  "React + Vite arayüzü hazır",
  "Capacitor Android senkronizasyonu destekleniyor",
  "GitHub Actions ile debug APK üretilebilir",
];

export default function App() {
  return (
    <main style={shellStyle}>
      <section style={cardStyle}>
        <span style={badgeStyle}>Debug APK hazır</span>
        <h1 style={{ margin: "18px 0 12px", fontSize: "34px", lineHeight: 1.1 }}>
          AstrogameWAR
        </h1>
        <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>
          Android debug paketi için gerekli web kabuğu başarıyla yüklendi.
        </p>
        <ul style={listStyle}>
          {checklist.map((item) => (
            <li key={item} style={itemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
