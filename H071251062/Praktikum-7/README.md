# Tugas Praktikum 7 | React Hooks (State & Props)
## Kasus: Kedai Kopi Senja

Aplikasi pemesanan mandiri (*Self-Ordering Tablet*) untuk **Kedai Kopi Senja** milik Dimas. Aplikasi ini dirancang untuk diletakkan pada tablet di setiap meja pelanggan guna mempermudah pemilihan menu, melihat detail menu, serta mengirimkan pesanan langsung tanpa antre di kasir.

---

## 📋 Fitur Utama Sesuai Spesifikasi

1. **Katalog Menu Lengkap**:
   - Menampilkan 9 menu otentik Kedai Kopi Senja lengkap dengan kategori dan harga.
   - Filter kategori instan (`Kopi`, `Non-Kopi`, `Makanan`, dan opsi `Semua`).
2. **Detail Menu Mandiri (*Independent State*)**:
   - Setiap kartu menu dapat dibuka dan ditutup detail deskripsinya tanpa memengaruhi kartu menu lainnya.
   - Dikelola dengan local state `useState` pada masing-masing komponen `MenuCard`.
3. **Proteksi Menu Habis**:
   - Menu yang stoknya habis (`tersedia: false`) ditandai dengan badge "Habis" dan tombol "Tambah" otomatis dinonaktifkan (*disabled*), sehingga tidak dapat dipesan.
4. **Sinkronisasi Angka Real-Time**:
   - Jumlah pesanan dan total harga tersinkronisasi secara otomatis di bagian atas halaman (`Navbar`) dan di `RingkasanPesanan` dengan nilai yang selalu sama (*derived state*).
5. **Kontrol Ringkasan Pesanan**:
   - Pelanggan dapat menambah kuantitas (+), mengurangi kuantitas (-), menghapus menu tertentu, atau mengosongkan seluruh pesanan.
6. **Form Pemesanan & Validasi Lengkap**:
   - Pelanggan mengisi nama dan nomor meja pada `FormPesan`.
   - Validasi aktif: Jika pesanan masih kosong atau nama/nomor meja belum diisi, muncul pesan peringatan yang jelas dan tidak menerima pesanan diam-diam.
7. **Konfirmasi Pesanan & Reset Otomatis**:
   - Setelah pesanan berhasil dikirim, muncul ucapan terima kasih beserta bukti pemesanan.
   - Form input dan daftar pesanan otomatis dikosongkan kembali untuk sesi pemesanan berikutnya.

---

## 🛠️ Kepatuhan Terhadap Ketentuan Umum

1. **Teknologi**:
   - Menggunakan React (Vite) dengan JavaScript (JSX) dan *function component*.
   - Styling murni menggunakan **Tailwind CSS**.
   - Tidak menggunakan *class component*, *library state management* (Redux/Zustand/Context), maupun UI component library siap pakai (Bootstrap/MUI/Chakra UI).
2. **Hook**:
   - State hanya dibuat menggunakan `useState` yang diimpor sebagai named import (`import { useState } from 'react';`) dan dipanggil di level paling atas komponen.
3. **State Immutability**:
   - Data yang memengaruhi UI disimpan dalam state dan diperbarui tanpa mutasi langsung (menggunakan setter dengan spread operator, `.map()`, `.filter()`).
4. **Props & Destructuring**:
   - Seluruh props diterima dengan *destructuring* di parameter fungsi.
   - Nilai angka dan boolean dikirim dengan kurung kurawal `{ }`.
5. **Daftar & Keys**:
   - Render daftar menggunakan `.map()` dengan properti `key` unik berdasarkan `id` data (bukan index perulangan).
6. **Event & DOM**:
   - Menggunakan event handler bawaan React (`onClick`, `onChange`, `onSubmit`).
   - Tidak memanipulasi DOM secara langsung (*no querySelector / innerHTML*).
7. **Satu Sumber Data Menu**:
   - Data menu didefinisikan satu kali di `App.jsx` dan dialirkan ke komponen anak melalui props.
8. **Satu Data, Satu State**:
   - Menghindari duplikasi state (misal `kategoriAktif` hanya berada di `App.jsx`, total pesanan dan total harga dihitung sebagai derived values).
9. **Satu Komponen, Satu Berkas**:
   - Seluruh komponen berada di `src/components/`, dinamai secara `PascalCase`, dan diekspor menggunakan `export default`.
10. **Console Bersih**:
    - Bebas error dan warning di console browser. Semua form input menggunakan *controlled inputs*.

---

## 📁 Struktur Berkas

```
kopi-senja/
├── dist/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FormPesan.jsx
│   │   ├── MenuCard.jsx
│   │   ├── MenuList.jsx
│   │   ├── Navbar.jsx
│   │   └── RingkasanPesanan.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Cara Menjalankan Proyek

1. **Buka terminal di direktori proyek**:
   ```bash
   cd kopi-senja
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka URL lokal yang muncul (biasanya `http://localhost:5173`) di browser.

3. **Build untuk produksi**:
   ```bash
   npm run build
   ```
