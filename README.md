# DA Community: Mini Project Modul 2

Landing page interaktif untuk komunitas Data Analyst Enthusiast Politeknik Negeri Bandung. Dibangun dari landing page statis Modul 1, ditambah perilaku JavaScript murni tanpa framework atau library.

## Live Demo & Repositori

- Live Site: https://firdaussinau.github.io/Mini-Project---Week-2/
- Repository: https://github.com/FirdausSinau/Mini-Project---Week-2

## Fitur Interaktif

1. **Navigasi mobile.** Tombol Menu membuka dan menutup `#nav-menu`, atribut `aria-expanded` ikut berganti nilai.
2. **Daftar kegiatan dinamis.** Data `dataKegiatan` (array of objects) dirender ke DOM lewat `createElement`, dibersihkan dengan `replaceChildren` supaya tidak ada duplikasi saat render ulang.
3. **Filter kategori.** Tombol filter memilah `dataKegiatan` pakai `.filter()` tanpa mengubah array asli, termasuk state kosong saat kategori tidak punya item.
4. **FAQ accordion.** Klik satu pertanyaan menutup jawaban lain secara otomatis, `aria-expanded` dan ikon `+`/`-` disinkronkan.
5. **Form pendaftaran dengan validasi.** Nama, email, dan motivasi divalidasi sebelum submit. Input tidak valid menampilkan pesan error di bawah kolom terkait, input valid menyembunyikan form dan menampilkan ringkasan data.
6. **Tombol kembali ke atas.** Muncul otomatis saat halaman digulir lebih dari 200px, klik membawa kembali ke posisi awal.
7. **Mode gelap.** Tombol tema menambah dan menghapus class `dark-mode` pada `body`, variabel warna CSS berubah mengikuti.

## Cara Menjalankan

Buka `index.html` langsung lewat browser. Proyek ini belum memakai `fetch` atau data eksternal, jadi tidak wajib server lokal. Live Server (ekstensi VS Code) tetap bisa dipakai kalau mau reload otomatis saat mengedit.

## Struktur Folder

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Batas Teknis

- Vanilla JavaScript, tanpa framework atau library UI.
- `app.js` dipanggil dari `<head>` dengan atribut `defer`.
- Belum memakai `fetch`, `Promise`, atau `async/await`. Materi itu dinilai lewat Task 3 dan homework Modul 2, bukan mini project ini.
- Semua interaksi memakai `addEventListener`, bukan atribut inline seperti `onclick`.
- Data dari input pengguna ditampilkan lewat `textContent`, bukan `innerHTML`.

## Keterbatasan

- Validasi email baru mengecek keberadaan tanda `@`, belum memverifikasi domain kampus secara spesifik.

## Proses Pengerjaan & Penggunaan AI

Pengerjaan mengikuti Batas Penggunaan AI pada modul: acceptance criteria dan versi awal kode ditulis sendiri, AI dipakai untuk penjelasan konsep dan hint diagnosis bertahap saat debugging, bukan untuk menghasilkan task secara utuh (setengah utuh tapi :v). Log lengkap ada di Worksheet Mahasiswa Modul 2, Bagian H.

## Refleksi Singkat

- **Konsep yang sudah dipahami:** manipulasi DOM dengan `createElement` dan `replaceChildren` untuk menampilkan data array ke halaman secara dinamis.
- **Kesalahan yang paling membantu:** `SyntaxError` saat mem-parsing JSON yang rusak, yang menunjukkan pentingnya memastikan struktur data valid sebelum diolah program.
- **Keputusan teknis:** memakai kembali struktur HTML dan CSS dasar dari Modul 1 supaya tetap konsisten, lalu menambahkan perilaku secara bertahap.
- **Target berikutnya:** `fetch`, `Promise`, dan `async/await` untuk menangani data asinkron.

## Saran

Deadline terlalu mepet dan bobot terlalu banyak.
