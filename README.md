# DA Community - Mini Project Modul 2

Landing page interaktif untuk komunitas **Data Analyst Enthusiast Politeknik Negeri Bandung (DA Community)**. Proyek ini dibangun murni menggunakan pendekatan *Vanilla* tanpa tambahan *framework* atau *library* eksternal.

## 🚀 Fitur Interaktif (Vanilla JavaScript)

1. **Mode Gelap (Dark Mode):** Mengubah tema visual web secara dinamis menggunakan manipulasi class CSS pada tag `body`.
2. **Navigasi Mobile:** Menu responsif yang dapat dibuka-tutup pada layar seluler dengan dukungan aksesibilitas atribut `aria-expanded`.
3. **Daftar Dinamis:** Mengolah data *array of object* dan merender kartu kegiatan ke dalam DOM menggunakan `createElement()` dan `replaceChildren()`.
4. **Penyaring Kategori (Filter):** Memilah daftar kegiatan berdasarkan kategori yang diklik (*Workshop*, *Sharing Session*, *Project*).
5. **FAQ Accordion:** Menampilkan dan menyembunyikan jawaban pertanyaan umum secara bergantian dengan pengelolaan atribut `hidden`.
6. **Validasi Form & Ringkasan Data:** Memvalidasi input nama, email, dan motivasi sebelum dikirim. Menampilkan pesan error spesifik jika tidak valid, dan memunculkan kotak ringkasan data jika sukses.
7. **Tombol Kembali ke Atas:** Tombol melayang yang muncul otomatis saat halaman digulir ke bawah untuk memudahkan navigasi.

## 📁 Struktur Berkas

```text
├── index.html        # Kerangka utama dokumen HTML
├── css/
│   └── style.css     # Tata letak, variabel warna, dan gaya visual (termasuk Dark Mode)
└── js/
    └── app.js        # Logika interaksi Vanilla JS murni
