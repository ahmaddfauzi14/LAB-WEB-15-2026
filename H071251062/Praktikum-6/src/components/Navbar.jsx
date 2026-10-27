function Navbar() {
  const menuList = [
    { id: 1, name: 'Beranda', href: '#hero' },
    { id: 2, name: 'Tentang Saya', href: '#about' },
    { id: 3, name: 'Keahlian', href: '#skills' },
    { id: 4, name: 'Galeri Proyek', href: '#gallery' },
  ];

  const handleMenuClick = (menuName) => {
    console.log(`Menu diklik: ${menuName}`);
  };

  return (
    <header className="sticky top-0 z-50 pt-3 pb-3">
      <nav className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[calc(72rem-2.5rem)] mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-sm px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <a href="#hero" className="text-lg sm:text-xl italic font-medium text-slate-900">
          Ahmad Fauzi Ali
        </a>

        {/* Menu dari array menggunakan .map() dan key */}
        <ul className="order-last md:order-none w-full md:w-auto flex items-center justify-between md:justify-start gap-4 md:gap-8 text-xs sm:text-sm font-medium text-slate-900 overflow-x-auto">
          {menuList.map((menu) => (
            <li key={menu.id} className="">
              <a
                href={menu.href}
                onClick={() => handleMenuClick(menu.name)}
                className="hover:text-blue-700 transition-colors"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gallery"
          className="px-5 py-2 rounded-full bg-blue-700 text-white text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          Lihat Proyek
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
