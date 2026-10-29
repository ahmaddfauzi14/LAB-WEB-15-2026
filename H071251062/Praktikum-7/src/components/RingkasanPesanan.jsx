function RingkasanPesanan({
  pesanan,
  totalItem,
  totalHarga,
  onTambah,
  onKurang,
  onHapus,
  onResetPesanan,
}) {
  // Format harga mata uang Rupiah
  const formatRupiah = (nominal) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(nominal);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-stone-300 shadow-sm overflow-hidden">
      {/* Header Ringkasan Pesanan */}
      <div className="p-4 sm:p-5 border-b-2 border-stone-200 flex items-center justify-between bg-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-700 text-white flex items-center justify-center shadow-xs">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-black text-stone-900">Ringkasan Pesanan</h2>
            <p className="text-xs font-medium text-stone-600">Periksa pesanan sebelum memesan</p>
          </div>
        </div>

        {pesanan.length > 0 && (
          <button
            type="button"
            onClick={onResetPesanan}
            className="text-xs font-bold text-rose-800 bg-rose-100 hover:bg-rose-200 border border-rose-300 px-2.5 py-1 rounded-lg transition-colors"
          >
            Kosongkan
          </button>
        )}
      </div>

      {/* Konten Daftar Item Pesanan */}
      <div className="p-4 sm:p-5">
        {pesanan.length === 0 ? (
          <div className="py-8 px-4 text-center">
            <p className="text-sm font-bold text-stone-800">Belum ada pesanan</p>
            <p className="text-xs font-medium text-stone-600 mt-1 max-w-xs mx-auto">
              Pilih menu yang Anda sukai lalu klik tombol <b>Tambah</b> untuk memasukkannya ke ringkasan pesanan.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {pesanan.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border-2 border-stone-200"
              >
                {/* Info Menu */}
                <div className="flex-1 pr-2">
                  <h4 className="text-sm font-black text-stone-900 leading-tight">
                    {item.nama}
                  </h4>
                  <div className="text-xs font-medium text-stone-600 mt-0.5">
                    {formatRupiah(item.harga)} x {item.jumlah}
                  </div>
                  <div className="text-xs font-black text-amber-900 mt-1">
                    {formatRupiah(item.harga * item.jumlah)}
                  </div>
                </div>

                {/* Kontrol Kuantitas & Tombol Hapus */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-white border-2 border-stone-300 rounded-lg shadow-xs overflow-hidden">
                    <button
                      type="button"
                      onClick={() => onKurang(item.id)}
                      className="w-7 h-7 flex items-center justify-center text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-colors font-black text-sm"
                      title="Kurangi kuantitas"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-black text-stone-900">
                      {item.jumlah}
                    </span>
                    <button
                      type="button"
                      onClick={() => onTambah(item.id)}
                      className="w-7 h-7 flex items-center justify-center text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-colors font-black text-sm"
                      title="Tambah kuantitas"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onHapus(item.id)}
                    className="p-1.5 text-stone-500 hover:text-rose-700 bg-stone-100 hover:bg-rose-100 rounded-lg border border-stone-200 transition-colors"
                    title="Hapus dari pesanan"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ringkasan Total Pesanan & Harga */}
        <div className="mt-5 pt-4 border-t-2 border-stone-200 space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-700">
            <span className="font-bold">Jumlah Pesanan:</span>
            <span className="font-black text-stone-900">{totalItem} item</span>
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base font-black text-stone-900 pt-2 border-t border-stone-200">
            <span>Total Harga:</span>
            <span className="text-amber-900 text-xl font-black">{formatRupiah(totalHarga)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingkasanPesanan;
