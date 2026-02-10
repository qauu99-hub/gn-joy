export default function VideoRow() {
  return (
    <section className="section">
      <div className="section-title">🎬 คลิปแนะนำ</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <img src="/mock/clip-thumb.jpg" alt="คลิปเที่ยว" />
            <div style={{ padding: 12, fontWeight: 500 }}>
              เที่ยวทะเลสวย น้ำใส
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}