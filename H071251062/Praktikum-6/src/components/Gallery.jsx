import foto1 from '../assets/gallery/project1.png';
import foto2 from '../assets/gallery/project2.png';
import foto3 from '../assets/gallery/project3.png';
import foto4 from '../assets/gallery/project4.png';

function Gallery() {
  const galleryList = [
    {
      id: 1,
      judul: 'SRPS (Smart Reclamation System)',
      kategori: 'Web Application & DSS',
      src: foto1,
      deskripsi: 'Sistem pendukung keputusan reklamasi pit void tambang dengan pembobotan AHP dan perankingan TOPSIS.',
    },
    {
      id: 2,
      judul: "PilahKi' (Waste Management)",
      kategori: 'UI/UX Design',
      src: foto2,
      deskripsi: 'Aplikasi edukasi pemilahan dan daur ulang sampah rumah tangga dengan pendekatan User-Centered Design.',
    },
    {
      id: 3,
      judul: 'TitikLapak (Smart UMKM)',
      kategori: 'Mobile App Design',
      src: foto3,
      deskripsi: 'Aplikasi rekomendasi titik jualan strategis untuk pelaku UMKM berbasis analisis heatmap dan AI Advisor.',
    },
    {
      id: 4,
      judul: 'SweetBox (Dessert Store)',
      kategori: 'Frontend Web Development',
      src: foto4,
      deskripsi: 'Website etalase dan pemesanan dessert interaktif dengan antarmuka yang responsif.',
    },
  ];

  return (
    <section
      id="gallery"
      className="shadow-sm bg-gradient-to-b from-[#bcd9fb] to-[#dcebfd] p-5 sm:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-end">
        <div>
          <p className="text-sm text-slate-600">Galeri Proyek</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-slate-900">
            Karya dan proyek yang pernah saya kerjakan
          </h2>
        </div>
        <p className="text-sm text-slate-600 md:max-w-sm md:ml-auto">
          Dokumentasi beberapa proyek di bidang sistem informasi, desain
          antarmuka, dan pengembangan web.
        </p>
      </div>

      {/* Render list dari array of object dengan .map() dan key={foto.id} */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
        {galleryList.map((foto) => (
          <article key={foto.id}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200">
              {/* Foto galeri yang diimpor dari src/assets/gallery/ */}
              <img
                src={foto.src}
                alt={foto.judul}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <h3 className="text-xl font-medium">{foto.judul}</h3>
                <p className="mt-1 text-xs text-white/75">{foto.kategori}</p>
              </div>
            </div>
            <p className="mt-3 px-1 text-sm leading-relaxed text-slate-700">{foto.deskripsi}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
