function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🛒 Kantin Borç Hesaplama</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>Toplam Borç</h2>
        <h1 style={{ color: "#22c55e" }}>0 ₺</h1>
      </div>

      <input
        type="text"
        placeholder="🔍 Ürün ara..."
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "none",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "15px",
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        🗑️ Borcu Çek / Sıfırla
      </button>
    </div>
  );
}

export default App;