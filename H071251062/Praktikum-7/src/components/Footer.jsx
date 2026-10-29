function Footer() {
  return (
    <footer className="mt-16 bg-stone-900 border-t-4 border-amber-700 text-stone-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-black text-white text-sm">
              Kedai Kopi Senja &copy; {new Date().getFullYear()}
            </p>
            <p className="text-xs font-medium text-stone-400 mt-0.5">
              Sistem Self-Ordering Meja Pelanggan &bull; Dibuat untuk Efisiensi Pemesanan
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-stone-300">
            <span>Buka Setiap Hari: 08.00 - 22.00 WIB</span>
            <span>&bull;</span>
            <span className="text-amber-400 bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Meja Tablet Mode</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
