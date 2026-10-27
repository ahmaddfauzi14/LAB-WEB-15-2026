function Skills() {
  const skillList = [
    'HTML5 & Modern CSS3',
    'JavaScript (ES6+)',
    'React.js & Vite',
    'Tailwind CSS',
    'UI/UX Design (Figma)',
    'Python Programming',
    'PostgreSQL & Database Design',
    'Git & GitHub Version Control',
  ];

  return (
    <section id="skills" className="shadow-sm bg-white p-5 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-end">
        <div>
          <p className="text-sm text-slate-500">Keahlian</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-slate-900">
            Teknologi yang saya pelajari dan gunakan
          </h2>
        </div>
        <p className="text-sm text-slate-500 md:max-w-sm md:ml-auto">
          Kumpulan bidang teknis yang saya terapkan di proyek-proyek kuliah,
          dari antarmuka sampai basis data.
        </p>
      </div>

      {/* Keahlian dari array string menggunakan .map() dan key={index} */}
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {skillList.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 py-5 border-b border-slate-200 text-lg sm:text-xl font-medium text-slate-900"
          >
            <span>{skill}</span>
            <span className="text-sm font-normal text-slate-400">0{index + 1}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
