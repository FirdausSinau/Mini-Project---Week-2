// navigasi seluler
const btnMenu = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
btnMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    const sedangTerbuka = navMenu.classList.contains('show');
    btnMenu.setAttribute('aria-expanded', sedangTerbuka);
});

// data kegiatan
const dataKegiatan = [
    { judul: "Pengenalan Python untuk Pemula", kategori: "Workshop" },
    { judul: "Karir sebagai Data Analyst", kategori: "Sharing Session" },
    { judul: "Analisis Data Gempa BMKG", kategori: "Project" },
    { judul: "Visualisasi Data dengan Tableau", kategori: "Workshop" }
];
const containerKegiatan = document.getElementById('kegiatan-container');

// tampilkan kegiatan
function renderKegiatan(data) {
    containerKegiatan.replaceChildren();
    if (data.length === 0) {
        const pesanKosong = document.createElement('p');
        pesanKosong.textContent = "Tidak ada kegiatan di kategori ini.";
        containerKegiatan.appendChild(pesanKosong);
        return;
    }
    data.forEach(function (item) {
        const kartu = document.createElement('div');
        kartu.className = 'card';
        const teksKategori = document.createElement('span');
        teksKategori.className = 'card-kategori';
        teksKategori.textContent = item.kategori;
        const teksJudul = document.createElement('h3');
        teksJudul.textContent = item.judul;
        kartu.appendChild(teksKategori);
        kartu.appendChild(teksJudul);
        containerKegiatan.appendChild(kartu);
    });
}

// saring data
const tombolFilter = document.querySelectorAll('.filter-btn');
tombolFilter.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
        tombolFilter.forEach(function (btn) { btn.classList.remove('active'); });
        tombol.classList.add('active');
        const kategoriDipilih = tombol.getAttribute('data-category');
        if (kategoriDipilih === 'semua') {
            renderKegiatan(dataKegiatan);
        } else {
            const dataTersaring = dataKegiatan.filter(function (item) {
                return item.kategori === kategoriDipilih;
            });
            renderKegiatan(dataTersaring);
        }
    });
});
renderKegiatan(dataKegiatan);