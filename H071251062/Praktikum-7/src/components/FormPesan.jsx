import { useState } from 'react';

function FormPesan({ onSubmitPesanan, totalItem }) {
  // State lokal untuk input form pemesanan
  const [nama, setNama] = useState('');
  const [nomorMeja, setNomorMeja] = useState('');
  const [pesanPeringatan, setPesanPeringatan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi 1: Periksa apakah ada pesanan yang dipilih
    if (totalItem === 0) {
      setPesanPeringatan('Pesanan masih kosong! Silakan pilih minimal satu menu terlebih dahulu.');
      return;
    }

    // Validasi 2: Periksa apakah nama sudah diisi
    if (!nama.trim()) {
      setPesanPeringatan('Nama pemesan wajib diisi. Silakan tuliskan nama Anda.');
      return;
    }

    // Validasi 3: Periksa apakah nomor meja sudah diisi
    if (!nomorMeja.trim()) {
      setPesanPeringatan('Nomor meja wajib diisi. Silakan tuliskan nomor meja Anda.');
      return;
    }

    // Jika semua data valid:
    setPesanPeringatan('');
    onSubmitPesanan({
      nama: nama.trim(),
      nomorMeja: nomorMeja.trim(),
    });

    // Mengosongkan form input setelah pesanan terkirim
    setNama('');
    setNomorMeja('');
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-stone-300 shadow-sm overflow-hidden">
      {/* Header Form */}
      <div className="p-4 sm:p-5 border-b-2 border-stone-200 bg-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-black text-stone-900">Data Pemesan</h2>
            <p className="text-xs font-medium text-stone-600">Lengkapi data untuk konfirmasi pesanan</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-4">
        {/* Pesan Peringatan Validasi (Jika data belum benar atau pesanan masih kosong) */}
        {pesanPeringatan && (
          <div className="p-3.5 rounded-xl bg-amber-100 border-2 border-amber-600 text-amber-950 flex items-start gap-2.5 text-xs font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-amber-900 flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="leading-relaxed">
              {pesanPeringatan}
            </div>
          </div>
        )}

        {/* Input Nama Pemesan */}
        <div>
          <label htmlFor="nama" className="block text-xs font-bold text-stone-800 mb-1.5">
            Nama Pelanggan <span className="text-rose-600">*</span>
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Dimas Aditya"
            className="w-full px-3.5 py-2.5 rounded-xl text-sm font-medium border-2 border-stone-300 focus:outline-none focus:border-amber-800 transition-colors placeholder:text-stone-400 bg-white"
          />
        </div>

        {/* Input Nomor Meja */}
        <div>
          <label htmlFor="nomorMeja" className="block text-xs font-bold text-stone-800 mb-1.5">
            Nomor Meja <span className="text-rose-600">*</span>
          </label>
          <input
            id="nomorMeja"
            type="text"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="Contoh: Meja 05"
            className="w-full px-3.5 py-2.5 rounded-xl text-sm font-medium border-2 border-stone-300 focus:outline-none focus:border-amber-800 transition-colors placeholder:text-stone-400 bg-white"
          />
        </div>

        {/* Tombol Kirim Pesanan */}
        <button
          type="submit"
          className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-stone-900 hover:bg-stone-950 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span>Kirim Pesanan Sekarang</span>
        </button>
      </form>
    </div>
  );
}

export default FormPesan;
