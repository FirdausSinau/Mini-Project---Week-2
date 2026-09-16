// mode gelap
const btnTema = document.getElementById('theme-toggle');
btnTema.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = 'Mode Terang';
    } else {
        btnTema.textContent = 'Mode Gelap';
    }
});

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

// buka jawaban
const tombolFaq = document.querySelectorAll('.faq-btn');
tombolFaq.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
        const jawaban = tombol.nextElementSibling;
        const sedangBuka = tombol.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-answer').forEach(function (isi) { isi.hidden = true; });
        document.querySelectorAll('.faq-btn').forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'false');
            btn.querySelector('.faq-arrow').textContent = '+';
        });
        if (!sedangBuka) {
            jawaban.hidden = false;
            tombol.setAttribute('aria-expanded', 'true');
            tombol.querySelector('.faq-arrow').textContent = '-';
        }
    });
});

// validasi pendaftaran
const formGabung = document.getElementById('form-gabung');
const kotakSukses = document.getElementById('success-box');
function hapusPesanError() {
    document.querySelectorAll('.error-msg').forEach(function (span) {
        span.textContent = '';
    });
}
formGabung.addEventListener('submit', function (event) {
    event.preventDefault();
    hapusPesanError();
    const inputNama = document.getElementById('nama').value.trim();
    const inputEmail = document.getElementById('email').value.trim();
    const inputAlasan = document.getElementById('alasan').value.trim();
    let formValid = true;
    if (inputNama === '') {
        document.getElementById('error-nama').textContent = "Nama tidak boleh kosong.";
        formValid = false;
    }
    if (inputEmail === '' || !inputEmail.includes('@')) {
        document.getElementById('error-email').textContent = "Email kampus tidak valid.";
        formValid = false;
    }
    if (inputAlasan.length < 5) {
        document.getElementById('error-alasan').textContent = "Motivasi minimal 5 karakter.";
        formValid = false;
    }
    if (formValid === true) {
        document.getElementById('summary-nama').textContent = inputNama;
        document.getElementById('summary-email').textContent = inputEmail;
        document.getElementById('summary-alasan').textContent = inputAlasan;
        formGabung.hidden = true;
        kotakSukses.hidden = false;
    }
});

// daftar ulang
document.getElementById('btn-reset').addEventListener('click', function () {
    formGabung.reset();
    kotakSukses.hidden = true;
    formGabung.hidden = false;
});

// balik ke atas
const tombolKeAtas = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        tombolKeAtas.hidden = false;
    } else {
        tombolKeAtas.hidden = true;
    }
});
tombolKeAtas.addEventListener('click', function () {
    window.scrollTo(0, 0);
});