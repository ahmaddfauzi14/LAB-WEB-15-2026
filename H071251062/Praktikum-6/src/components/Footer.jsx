function Footer() {
  const currentYear = 2026;
  const authorName = 'Ahmad Fauzi Ali';

  return (
    <footer className="w-full px-3 sm:px-5 mt-5 pb-5">
      <div className="relative overflow-hidden rounded-3xl w-full bg-gradient-to-b from-[#dcebfd] to-[#9fc3f7] px-6 sm:px-10 py-12">
        <div
          className="absolute inset-0 bg-grid pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-slate-900 max-w-md">
            Terima kasih sudah berkunjung.
          </h2>
          <div className="mt-8 pt-5 border-t border-slate-900/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-slate-700">
            {/* Teks hak cipta berisi nama dan tahun */}
            <p>&copy; {currentYear} {authorName}. All rights reserved.</p>
            <p>Program Studi Sistem Informasi, Universitas Hasanuddin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
