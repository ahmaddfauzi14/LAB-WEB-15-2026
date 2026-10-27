function About() {
  const introParagraphs = [
    'Saya adalah mahasiswa aktif Program Studi Sistem Informasi di Universitas Hasanuddin yang berfokus pada teknologi web modern dan perancangan pengalaman pengguna (UI/UX).',
    'Ketertarikan saya berawal dari eksplorasi bagaimana sebuah kode program dan desain antarmuka dapat berkolaborasi menghasilkan solusi digital nyata yang mempermudah aktivitas masyarakat. Saya berpengalaman mengerjakan proyek berbasis web, analisis sistem, serta perancangan prototype interaktif.',
    'Saat ini saya terus memperdalam ekosistem JavaScript, React, serta praktik arsitektur antarmuka berbasis komponen yang bersih dan terstandarisasi.',
  ];

  const stats = [
    { id: 1, value: '4', label: 'Proyek di Galeri' },
    { id: 2, value: '8', label: 'Keahlian Teknis' },
    { id: 3, value: 'S1', label: 'Sistem Informasi' },
    { id: 4, value: 'Unhas', label: 'Universitas' },
  ];

  const personalData = [
    { id: 1, label: 'Nama Lengkap', value: 'Ahmad Fauzi Ali' },
    { id: 2, label: 'NIM', value: 'H071251062' },
    { id: 3, label: 'Program Studi', value: 'S1 Sistem Informasi' },
    { id: 4, label: 'Universitas', value: 'Universitas Hasanuddin' },
    { id: 5, label: 'Minat Utama', value: 'Web Development & UI/UX Design' },
    { id: 6, label: 'Status', value: 'Mahasiswa Aktif' },
  ];

  return (
    <section
      id="about"
      className="shadow-sm bg-gradient-to-b from-[#bcd9fb] via-white via-40% to-white p-5 sm:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Foto di panel biru */}
        <div className="h-80 md:h-[24rem] rounded-2xl overflow-hidden bg-gradient-to-b from-[#d6e7fc] to-[#8db6f0] flex items-end justify-center">
          <img
            src="/profile.png"
            alt="Ahmad Fauzi Ali"
            className="h-[92%] w-auto object-contain"
          />
        </div>

        <div>
          <p className="text-sm text-slate-500">Tentang Saya</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-slate-900">
            Menggabungkan kode dan desain untuk solusi yang berguna
          </h2>
          <div className="mt-5 space-y-3">
            {introParagraphs.map((paragraf, index) => (
              <p key={index} className="text-sm leading-relaxed text-slate-500">
                {paragraf}
              </p>
            ))}
          </div>
          <a
            href="#gallery"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Lihat Proyek
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Angka ringkas */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        {stats.map((item) => (
          <div key={item.id}>
            <p className="text-4xl sm:text-5xl font-medium text-slate-900">{item.value}</p>
            <p className="mt-3 text-sm text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Data diri dari array of object menggunakan .map() dan key={item.id} */}
      <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6">
        <h3 className="md:col-span-5 text-2xl sm:text-3xl font-medium text-slate-900">Data Diri</h3>
        <dl className="md:col-span-7 divide-y divide-slate-200">
          {personalData.map((item) => (
            <div key={item.id} className="py-3 grid grid-cols-3 gap-3 text-sm">
              <dt className="text-slate-400">{item.label}</dt>
              <dd className="col-span-2 text-slate-900">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
