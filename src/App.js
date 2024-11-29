import React, { useState } from "react";
import './style.css';


function App() {
  // State untuk angka1, angka2, dan hasil
  const [angka1, setAngka1] = useState("");
  const [angka2, setAngka2] = useState("");
  const [hasilTambah, setHasilTambah] = useState(null);
  const [hasilKurang, setHasilKurang] = useState(null);
  const [hasilKali, setHasilKali] = useState(null);
  const [hasilBagi, setHasilBagi] = useState(null);

  // Fungsi aritmatika
  const tambah = (a, b) => a + b;
  const kurang = (a, b) => a - b;
  const kali = (a, b) => a * b;
  const bagi = (a, b) => (b === 0 ? "Error: Tidak dapat membagi dengan nilai 0" : a / b);

  // Fungsi untuk menghitung hasil
  const handleSubmit = () => {
    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    setHasilTambah(tambah(num1, num2));
    setHasilKurang(kurang(num1, num2));
    setHasilKali(kali(num1, num2));
    setHasilBagi(bagi(num1, num2));
  };



return (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1>Kalkulator Aritmatika</h1>
    <div>
      <label>
        Angka 1: {" "}
        <input
          type="number"
          value={angka1}
          onChange={(e) => setAngka1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Angka 2: {" "}
        <input
          type="number"
          value={angka2}
          onChange={(e) => setAngka2(e.target.value)}
        />
      </label>
    </div>
    <div>
      <button onClick={handleSubmit} style={{ margin: "10px 0" }}>
        Submit
      </button>
    </div>
    <h2>Hasil</h2>
    <p>Penjumlahan: <span>{hasilTambah}</span></p>
    <p>Pengurangan: <span>{hasilKurang}</span></p>
    <p>Perkalian: <span>{hasilKali}</span></p>
    <p>Pembagian: <span>{hasilBagi}</span></p>
  </div>
);
}

export default App;