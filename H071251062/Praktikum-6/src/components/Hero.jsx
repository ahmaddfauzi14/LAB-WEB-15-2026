function Hero() {
  const handleButtonClick = () => {
    console.log('Pesan dari Hero: Halo! Selamat datang di portofolio Ahmad Fauzi Ali.');
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden shadow-sm bg-gradient-to-b from-white from-30% to-[#9fc3f7] flex flex-col lg:block px-6 sm:px-10 lg:px-0 pt-10 lg:pt-0 lg:h-[680px]"
    >
      {/* Grid halus di latar */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />

      {/* Teks besar samar di belakang foto */}
      <p
        className="hidden sm:block absolute inset-x-0 top-[36%] text-center whitespace-nowrap font-extrabold uppercase leading-none text-[8rem] lg:text-[12.5rem] text-slate-300/40 select-none pointer-events-none"
      >
        Web &amp; UI/UX
      </p>

      {/* Kiri atas: sapaan dan tombol */}
      <div className="relative z-20 lg:absolute lg:left-12 lg:top-12">
        <h1 className="italic font-medium leading-[0.95] tracking-tight text-slate-900 text-7xl sm:text-8xl lg:text-[6.75rem]">
          SAYA
          <br />
          FAUZI
        </h1>
        {/* Tombol dengan event onClick untuk mencetak pesan di console */}
        <button
          onClick={handleButtonClick}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors cursor-pointer"
        >
          Klik untuk menyapa
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Kiri bawah: perkenalan singkat */}
      <p className="relative z-20 mt-8 lg:mt-0 max-w-xs lg:max-w-[17rem] text-base lg:text-lg font-medium leading-snug lg:absolute lg:left-12 lg:bottom-12">
        Halo, saya Ahmad Fauzi Ali, mahasiswa Sistem Informasi yang senang
        membuat solusi digital yang fungsional dan nyaman dipakai.
      </p>

      {/* Kanan atas: info kampus */}
      <div className="relative z-20 mt-6 lg:mt-0 lg:absolute lg:right-12 lg:top-14 lg:w-[19rem]">
        <p className="text-lg text-black font-medium">Universitas Hasanuddin</p>
        <p className="mt-1 text-base leading-snug text-slate-700">
          S1 Sistem Informasi, fokus pada web development dan perancangan UI/UX.
        </p>
      </div>

      {/* Kanan bawah: judul peran */}
      <p className="relative z-20 mt-6 lg:mt-0 font-extrabold uppercase leading-[1.05] text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-5xl lg:absolute lg:right-12 lg:bottom-12">
        Web
        <br />
        Developer
        <br />
        &amp; Designer
      </p>

      {/* Foto profil (PNG transparan) dari folder public/ */}
      <img
        src="/profile.png"
        alt="Foto Profil Ahmad Fauzi Ali"
        className="relative z-10 mx-auto mt-6 lg:mt-0 h-[24rem] sm:h-[30rem] w-auto object-contain object-bottom lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-[46%] lg:h-[93%] drop-shadow-xl"
      />
    </section>
  );
}

export default Hero;
