// Satu sumber data untuk semua halaman (Beranda, Katalog, Detail).
// Jadi data tidak perlu ditulis berulang di tiap page.js.
//
// "warna" adalah class Tailwind untuk warna sampul buku.
// Ditulis lengkap (misal "bg-sky-700"), bukan disambung-sambung,
// supaya Tailwind bisa menemukannya saat membaca file ini.

export const books = [
  {
    id: "1",
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    kategori: "Novel",
    tahun: 2005,
    tersedia: true,
    warna: "bg-sky-700",
    sinopsis:
      "Kisah sepuluh anak di sebuah sekolah sederhana di Belitung yang tetap bersemangat belajar di tengah keterbatasan.",
  },
  {
    id: "2",
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    kategori: "Novel",
    tahun: 1980,
    tersedia: true,
    warna: "bg-orange-600",
    sinopsis:
      "Novel sejarah tentang Minke, pemuda pribumi pada masa kolonial Hindia Belanda yang mulai mempertanyakan keadilan.",
  },
  {
    id: "3",
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    tersedia: false,
    warna: "bg-emerald-700",
    sinopsis:
      "Pengantar Stoisisme yang ditulis santai, berisi cara menghadapi emosi dan hal-hal di luar kendali kita.",
  },
  {
    id: "4",
    judul: "Atomic Habits",
    penulis: "James Clear",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    tersedia: true,
    warna: "bg-amber-700",
    sinopsis:
      "Panduan membangun kebiasaan baik lewat perubahan kecil yang dilakukan terus-menerus.",
  },
  {
    id: "5",
    judul: "Sapiens",
    penulis: "Yuval Noah Harari",
    kategori: "Sains",
    tahun: 2011,
    tersedia: true,
    warna: "bg-indigo-700",
    sinopsis:
      "Sejarah singkat umat manusia, dari kemunculan Homo sapiens sampai dunia modern.",
  },
  {
    id: "6",
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    kategori: "Teknologi",
    tahun: 2008,
    tersedia: true,
    warna: "bg-slate-700",
    sinopsis:
      "Cara menulis kode yang rapi, mudah dibaca, dan mudah dirawat oleh siapa pun yang membukanya nanti.",
  },
  {
    id: "7",
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    kategori: "Novel",
    tahun: 2009,
    tersedia: false,
    warna: "bg-rose-700",
    sinopsis:
      "Enam santri dari daerah berbeda belajar di sebuah pondok di Jawa Timur dan saling menguatkan untuk bermimpi.",
  },
  {
    id: "8",
    judul: "Eloquent JavaScript",
    penulis: "Marijn Haverbeke",
    kategori: "Teknologi",
    tahun: 2011,
    tersedia: true,
    warna: "bg-teal-700",
    sinopsis:
      "Buku belajar JavaScript dari dasar sampai membuat program nyata di browser dan Node.js.",
  },
];

// Daftar kategori otomatis diambil dari data, tanpa duplikat.
export const kategoriList = [...new Set(books.map((b) => b.kategori))];
