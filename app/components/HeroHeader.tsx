export default function HeroHeader() {
  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img src="/logo.png" alt="เที่ยวทั่วไทย" style={{ height: 48 }} />
        <input
          placeholder="ค้นหาที่เที่ยว ร้านอาหาร คาเฟ่..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            background: "#16a34a",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 20,
            cursor: "pointer",
          }}
        >
          + โพสได้เอง
        </button>
      </div>
    </header>
  );
}