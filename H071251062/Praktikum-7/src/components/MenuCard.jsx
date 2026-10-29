import { useState } from 'react';

function MenuCard({ menu, onTambahPesanan }) {
  // State lokal untuk membuka dan menutup detail setiap menu tanpa memengaruhi kartu menu lainnya
  const [bukaDetail, setBukaDetail] = useState(false);

  // Format harga mata uang Rupiah
  const formatRupiah = (nominal) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(nominal);
  };

  // Badge warna solid berdasarkan kategori
  const kategoriBadgeStyle = {
    'Kopi': 'bg-amber-800 text-white',
    'Non-Kopi': 'bg-emerald-800 text-white',
    'Makanan': 'bg-orange-800 text-white',
  };

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md ${
        menu.tersedia
          ? 'border-stone-300 hover:border-amber-700 bg-white'
          : 'border-stone-200 bg-stone-100'
      }`}
    >
      <div className="p-5">
        {/* Header Kartu: Kategori & Ketersediaan */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full shadow-xs ${
              kategoriBadgeStyle[menu.kategori] || 'bg-stone-800 text-white'
            }`}
          >
            {menu.kategori}
          </span>

          {menu.tersedia ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-700 px-2.5 py-0.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Tersedia
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-rose-700 px-2.5 py-0.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Habis
            </span>
          )}
        </div>

        {/* Nama Menu & Harga */}
        <div className="mb-3">
          <h3 className="text-lg font-black text-stone-900 leading-snug">
            {menu.nama}
          </h3>
          <p className="text-base font-black text-amber-900 mt-1">
            {formatRupiah(menu.harga)}
          </p>
        </div>

        {/* Tombol Toggle Buka Detail (Independent State) */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setBukaDetail(!bukaDetail)}
            className="text-xs font-bold text-stone-700 hover:text-amber-900 flex items-center gap-1 focus:outline-none transition-colors"
          >
            <span>{bukaDetail ? 'Sembunyikan Detail' : 'Lihat Detail Menu'}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform duration-200 ${
                bukaDetail ? 'rotate-180 text-amber-900' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Area Deskripsi Detail Menu */}
          {bukaDetail && (
            <div className="mt-2.5 p-3.5 rounded-xl bg-stone-100 border-2 border-stone-200 text-xs text-stone-800 leading-relaxed">
              <p className="font-bold text-stone-900 mb-0.5">Deskripsi:</p>
              <p className="font-medium">{menu.deskripsi}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bagian Bawah Kartu: Tombol Aksi Tambah */}
      <div className="p-4 bg-stone-50 border-t-2 border-stone-200 mt-auto">
        {menu.tersedia ? (
          <button
            type="button"
            onClick={() => onTambahPesanan(menu)}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-amber-700 hover:bg-amber-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Tambah</span>
          </button>
        ) : (
          <button
            type="button"
            disabled={true}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-stone-500 bg-stone-200 border border-stone-300 cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-stone-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span>Menu Habis</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuCard;
