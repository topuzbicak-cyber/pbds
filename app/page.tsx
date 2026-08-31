"use client";

import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <div style={styles.logo}>PBDS</div>
          <h1>Talebiniz Alındı ✓</h1>
          <p>Talebiniz başarıyla oluşturuldu.</p>

          <button style={styles.button} onClick={() => setSent(false)}>
            Yeni Talep Oluştur
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>PBDS</div>

        <h1 style={styles.title}>
          Profesyonel Bıçak Değişim Sistemi
        </h1>

        <p style={styles.description}>
          Bıçak değişimi ve diğer taleplerinizi aşağıdaki formdan
          bize iletebilirsiniz.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label style={styles.label}>Yetkili Kişi</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Ad Soyad"
            required
          />

          <label style={styles.label}>Talep Türü</label>
          <select style={styles.input} required defaultValue="">
            <option value="" disabled>
              Talep türünü seçin
            </option>
            <option>Erken bıçak değişimi</option>
            <option>Kırık bıçak bildirimi</option>
            <option>Kayıp bıçak bildirimi</option>
            <option>Ek bıçak talebi</option>
            <option>Bıçak adedi değişikliği</option>
            <option>Yeni bıçak modeli talebi</option>
            <option>Diğer</option>
          </select>

          <label style={styles.label}>Bıçak Modeli</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Örn: Şef bıçağı 20 cm"
          />

          <label style={styles.label}>Adet</label>
          <input
            style={styles.input}
            type="number"
            min="1"
            placeholder="Adet"
          />

          <label style={styles.label}>Açıklama</label>
          <textarea
            style={{ ...styles.input, minHeight: "100px" }}
            placeholder="Talebinizi yazın"
          />

          <label style={styles.label}>Fotoğraf</label>
          <input style={styles.input} type="file" accept="image/*" />

          <button style={styles.button} type="submit">
            Talebi Gönder
          </button>
        </form>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    maxWidth: "620px",
    margin: "0 auto",
    background: "white",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  },

  logo: {
    display: "inline-block",
    background: "#111827",
    color: "white",
    fontWeight: "bold",
    padding: "10px 14px",
    borderRadius: "8px",
    marginBottom: "20px",
    letterSpacing: "2px",
  },

  title: {
    margin: "0 0 10px",
    fontSize: "28px",
  },

  description: {
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "30px",
  },

  label: {
    display: "block",
    fontWeight: "600",
    marginTop: "18px",
    marginBottom: "7px",
  },

  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    marginTop: "28px",
    padding: "14px",
    background: "#111827",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
