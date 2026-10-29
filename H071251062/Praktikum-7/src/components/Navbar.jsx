function Navbar({ totalItem, totalHarga }) {

  return (
    <header className="sticky top-0 z-30 bg-stone-900 text-stone-100 shadow-md border-b-4 border-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Judul Kedai */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-amber-700 flex items-center justify-center text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 107.072 0l-.001.001M12 12v6m0 0l-2-2m2 2l2-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 19.5A2.5 2.5 0 016.5 17H20"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h10a2 2 0 012 2v3a4 4 0 01-4 4H8a4 4 0 01-4-4V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Kedai Kopi Senja
                </h1>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-amber-800 text-amber-100 rounded-md border border-amber-600">
                  Tablet Meja
                </span>
              </div>
              <p className="text-xs font-medium text-stone-300">
                Pesan Mandiri & Cepat Langsung dari Meja Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
