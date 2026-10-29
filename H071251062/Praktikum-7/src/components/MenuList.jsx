import MenuCard from './MenuCard';

function MenuList({ daftarMenu, kategoriAktif, onPilihKategori, onTambahPesanan }) {
  // Daftar kategori yang tersedia untuk dipilih pelanggan
  const kategoriList = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan'];

  return (
    <section className="space-y-6">
      {/* Bar Navigasi Filter Kategori */}
      <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-black text-stone-900">
              Daftar Pilihan Menu
            </h2>
            <p className="text-xs font-medium text-stone-600">
              Pilih kategori untuk menyaring menu favorit Anda
            </p>
          </div>

          {/* Tombol-tombol Kategori */}
          <div className="flex flex-wrap items-center gap-2">
            {kategoriList.map((kategori) => {
              const isAktif = kategoriAktif === kategori;
              return (
                <button
                  key={kategori}
                  type="button"
                  onClick={() => onPilihKategori(kategori)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                    isAktif
                      ? 'bg-amber-800 text-white shadow-md'
                      : 'bg-stone-200 text-stone-800 hover:bg-stone-300 border border-stone-300'
                  }`}
                >
                  {kategori}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid Menu Kartu */}
      {daftarMenu.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {daftarMenu.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              onTambahPesanan={onTambahPesanan}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-stone-300 p-12 text-center">
          <p className="text-stone-600 font-bold text-sm">
            Tidak ada menu yang ditemukan untuk kategori ini.
          </p>
        </div>
      )}
    </section>
  );
}

export default MenuList;
