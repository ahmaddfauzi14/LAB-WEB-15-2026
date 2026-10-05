const dataPraktikan = [ 
    { nama: "Budi", nilaiTugas: [80, 85, 90] }, 
    { nama: "Siti", nilaiTugas: [60, 60, 60] }, 
    { nama: "Andi", nilaiTugas: [90, 90, 90] }, 
    { nama: "Dewi", nilaiTugas: [75, 75, 75] }, 
    { nama: "Eko", nilaiTugas: [45, 45, 45] } 
]; 

function kalkulasi(nilai) {
    for (let i = 0; i < nilai.length; i++) {
        const data = nilai[i];
        let jumlah = data.nilaiTugas.reduce(function(a, b){
            return a + b
        }, 0)
        let rataRata = jumlah/data.nilaiTugas.length
        nilai[i] = {
            nama : data.nama,
            nilaiTugas : data.nilaiTugas,
            rataRata : rataRata
        }
    }
    return nilai
}

function validasi(nilai){
    for (let i = 0; i < nilai.length; i++) {
        const data = nilai[i];
        let status
        if (data.rataRata >= 75) {
            status = "Lulus"
        } else{
            status = "Tidak Lulus"
        }
        nilai[i] = {
            nama : data.nama,
            nilaiTugas : data.nilaiTugas,
            rataRata : data.rataRata,
            status : status
        }
    }
    return nilai
}

let akses = false

let namaAslab = prompt("Masukkan Nama Praktikan").toLowerCase()

if (namaAslab == "fauzi") {
    akses = true
}

if (akses) {
    kalkulasi(dataPraktikan)
    validasi(dataPraktikan)
    document.write(`
        <div class="font-serif">
            <div class="bg-indigo-500 flex flex-col gap-6 justify-center items-center p-12 rounded-b-3xl shadow-md text-white">
                <h1 class="text-6xl font-extrabold">Laporan Praktikum</h1>
                <h1 class="text-3xl font-bold capitalize">Nama Asisten Lab: ${namaAslab}</h1>
            </div>
        </div>
    `)
    document.write(`
        <div class="flex flex-col justify-center items-center bg-white my-4 mx-80 rounded-xl border border-black/25 shadow-lg p-12 md:mx-20">
        `)
    dataPraktikan.forEach(item => {
        let Nama = item.nama
        let RataRata = item.rataRata
        let Status = item.status

        let warnaStatus

        if (Status == "Lulus") {
            warnaStatus = "bg-emerald-100 text-emerald-700"
        } else {
            warnaStatus = "bg-red-100 text-red-700"
        }

        document.write(`
            <div class="bg-white shadow-lg rounded-2xl flex flex-row items-center justify-between hover:scale-105 transition-transform m-6 w-[700px] p-6 border border-l-8 border-l-indigo-500">
                <div class="flex flex-col space-x-0 justify-start gap-4">
                    <div class="font-bold text-5xl text-indigo-700">
                        <p>${Nama}</p>
                    </div>
                    <div class="font-bold text-xl text-blue-600">
                        <p>Nilai Rata-Rata: ${RataRata}</p>
                    </div>
                </div>
                <div class="font-bold text-md ${warnaStatus} px-4 py-2 rounded-full">
                    <p>${Status}</p>
                </div>
            </div>
        `)
    })
    document.write(`
        </div>
        `)

} else {
    document.write(`
        <h1 class="text-7xl">Siapako??</h1>
    `)
}