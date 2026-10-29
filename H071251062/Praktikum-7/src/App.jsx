import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import RingkasanPesanan from './components/RingkasanPesanan';
import FormPesan from './components/FormPesan';
import Footer from './components/Footer';

// Data menu ditulis satu kali di App.jsx sebagai array of objects sesuai instruksi
const DATA_MENU = [
  {
    id: 1,
    nama: 'Kopi Susu',
    kategori: 'Kopi',
    harga: 18000,
    tersedia: true,
    deskripsi: 'Espresso dengan susu segar dan gula aren.',
  },
  {
    id: 2,
    nama: 'Americano',
    kategori: 'Kopi',
    harga: 15000,
    tersedia: true,
    deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.',
  },
  {
    id: 3,
    nama: 'Cappuccino',
    kategori: 'Kopi',
    harga: 22000,
    tersedia: true,
    deskripsi: 'Espresso, susu panas, dan busa susu tebal.',
  },
  {
    id: 4,
    nama: 'Matcha Latte',
    kategori: 'Non-Kopi',
    harga: 24000,
    tersedia: true,
    deskripsi: 'Teh hijau matcha dengan susu.',
  },
  {
    id: 5,
    nama: 'Teh Tarik',
    kategori: 'Non-Kopi',
    harga: 14000,
    tersedia: false,
    deskripsi: 'Teh susu yang ditarik hingga berbusa.',
  },
  {
    id: 6,
    nama: 'Cokelat Panas',
    kategori: 'Non-Kopi',
    harga: 20000,
    tersedia: true,
    deskripsi: 'Cokelat pekat dengan susu hangat.',
  },
  {
    id: 7,
    nama: 'Roti Bakar',
    kategori: 'Makanan',
    harga: 16000,
    tersedia: true,
    deskripsi: 'Roti tebal dengan selai cokelat dan keju.',
  },
  {
    id: 8,
    nama: 'Pisang Goreng',
    kategori: 'Makanan',
    harga: 12000,
    tersedia: false,
    deskripsi: 'Pisang goreng renyah dengan taburan keju.',
  },
  {
    id: 9,
    nama: 'Nasi Goreng',
    kategori: 'Makanan',
    harga: 25000,
    tersedia: true,
    deskripsi: 'Nasi goreng kampung dengan telur mata sapi.',
  },
];

function App() {
  // State utama aplikasi (mengikuti prinsip "satu data, satu state")
  const [pesanan, setPesanan] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [ucapanTerimaKasih, setUcapanTerimaKasih] = useState(null);
  // Derived Values (kalkulasi langsung tanpa duplikasi state)
  const totalItem = pesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);

  // Filter daftar menu berdasarkan kategori aktif
  const menuTersaring =
    kategoriAktif === 'Semua'
      ? DATA_MENU
      : DATA_MENU.filter((menu) => menu.kategori === kategoriAktif);

  // Handler untuk menambah menu ke dalam pesanan
  const handleTambahPesanan = (menu) => {
    // Menu yang sedang habis tidak boleh bisa dipesan
    if (!menu.tersedia) return;

    setPesanan((prevPesanan) => {
      const existingItem = prevPesanan.find((item) => item.id === menu.id);
      if (existingItem) {
        return prevPesanan.map((item) =>
          item.id === menu.id ? { ...item, jumlah: item.jumlah + 1 } : item
        );
      }
      return [
        ...prevPesanan,
        {
          id: menu.id,
          nama: menu.nama,
          harga: menu.harga,
          jumlah: 1,
        },
      ];
    });
  };

  // Handler menambah kuantitas menu dari ringkasan pesanan
  const handleTambahKuantitas = (id) => {
    setPesanan((prevPesanan) =>
      prevPesanan.map((item) =>
        item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item
      )
    );
  };

  // Handler mengurangi kuantitas menu dari ringkasan pesanan
  const handleKurangKuantitas = (id) => {
    setPesanan((prevPesanan) =>
      prevPesanan
        .map((item) => (item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item))
        .filter((item) => item.jumlah > 0)
    );
  };

  // Handler menghapus menu tertentu dari ringkasan pesanan
  const handleHapusPesanan = (id) => {
    setPesanan((prevPesanan) => prevPesanan.filter((item) => item.id !== id));
  };

  // Handler mengosongkan seluruh pesanan
  const handleResetPesanan = () => {
    setPesanan([]);
  };

  // Handler submit pesanan: menampilkan ucapan terima kasih & mengosongkan pesanan
  const handleSubmitPesanan = ({ nama, nomorMeja }) => {
    setUcapanTerimaKasih({
      nama,
      nomorMeja,
      daftarPesanan: [...pesanan],
      totalItem: totalItem,
      totalHarga: totalHarga,
      waktu: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });

    // Mengosongkan pesanan setelah berhasil dikirim
    setPesanan([]);
  };

  // Format harga rupiah untuk modal
  const formatRupiah = (nominal) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(nominal);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100 text-stone-900">
      {/* Navbar di bagian atas dengan counter pesanan & total harga */}
      <Navbar totalItem={totalItem} totalHarga={totalHarga} />

      {/* Konten Utama */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Selamat Datang Solid */}
        <div className="mb-8 p-7 rounded-3xl bg-stone-900 border-4 border-amber-700 text-white shadow-md">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase bg-amber-700 text-white rounded-md mb-3">
              Selamat Datang di Kedai Kopi Senja
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              Nikmati Kopi Pilihan & Santapan Hangat
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium">
              Silakan pilih menu favorit Anda di layar tablet ini, periksa ringkasan pesanan,
              lalu masukkan nama dan nomor meja untuk mengirimkan pesanan ke barista kami.
            </p>
          </div>
        </div>

        {/* Layout Tablet & Desktop: Kiri Daftar Menu, Kanan Ringkasan & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Menu List & Filter (8 kolom) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <MenuList
              daftarMenu={menuTersaring}
              kategoriAktif={kategoriAktif}
              onPilihKategori={setKategoriAktif}
              onTambahPesanan={handleTambahPesanan}
            />
          </div>

          {/* Kolom Kanan: Ringkasan Pesanan & Form Pemesanan (5/4 kolom) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-28">
            <RingkasanPesanan
              pesanan={pesanan}
              totalItem={totalItem}
              totalHarga={totalHarga}
              onTambah={handleTambahKuantitas}
              onKurang={handleKurangKuantitas}
              onHapus={handleHapusPesanan}
              onResetPesanan={handleResetPesanan}
            />

            <FormPesan
              onSubmitPesanan={handleSubmitPesanan}
              totalItem={totalItem}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal / Dialog Ucapan Terima Kasih Setelah Pesanan Terkirim */}
      {ucapanTerimaKasih && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-stone-800 text-center relative overflow-hidden animate-scaleUp">
            {/* Hiasan Atas Solid */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-stone-900 mb-1">
              Terima Kasih, Pesanan Terkirim!
            </h3>
            <p className="text-xs sm:text-sm font-medium text-stone-600 mb-6">
              Pesanan Anda telah diteruskan ke kasir dan dapur Kedai Kopi Senja.
            </p>

            {/* Rincian Nota / Bukti Pemesanan Solid */}
            <div className="bg-stone-100 rounded-2xl p-5 border-2 border-stone-300 text-left mb-6 space-y-3">
              <div className="flex justify-between items-center text-xs pb-2 border-b-2 border-stone-200">
                <span className="text-stone-600 font-bold">Nama Pelanggan:</span>
                <span className="font-black text-stone-900">{ucapanTerimaKasih.nama}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b-2 border-stone-200">
                <span className="text-stone-600 font-bold">Nomor Meja:</span>
                <span className="font-black text-amber-900">{ucapanTerimaKasih.nomorMeja}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b-2 border-stone-200">
                <span className="text-stone-600 font-bold">Waktu Pemesanan:</span>
                <span className="font-bold text-stone-800">{ucapanTerimaKasih.waktu} WIB</span>
              </div>

              {/* Rincian Item */}
              <div className="pt-1">
                <p className="text-xs font-black text-stone-800 mb-2">Item yang dipesan:</p>
                <div className="space-y-1.5 max-h-36 overflow-y-auto text-xs pr-1">
                  {ucapanTerimaKasih.daftarPesanan.map((item) => (
                    <div key={item.id} className="flex justify-between text-stone-700 font-medium">
                      <span>
                        {item.nama} <span className="font-bold text-stone-900">x{item.jumlah}</span>
                      </span>
                      <span className="font-bold text-stone-900">
                        {formatRupiah(item.harga * item.jumlah)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Bayar */}
              <div className="pt-3 border-t-2 border-stone-200 flex justify-between items-center text-sm font-black text-stone-900">
                <span>Total ({ucapanTerimaKasih.totalItem} item):</span>
                <span className="text-amber-900 text-lg font-black">
                  {formatRupiah(ucapanTerimaKasih.totalHarga)}
                </span>
              </div>
            </div>

            <p className="text-xs font-medium text-stone-600 mb-6">
              Silakan duduk santai, pesanan Anda akan segera diantarkan langsung ke meja Anda.
            </p>

            {/* Tombol Tutup / Buat Pesanan Baru */}
            <button
              type="button"
              onClick={() => setUcapanTerimaKasih(null)}
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-amber-700 hover:bg-amber-800 active:scale-[0.98] transition-all shadow-md"
            >
              Kembali ke Menu Utama
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
