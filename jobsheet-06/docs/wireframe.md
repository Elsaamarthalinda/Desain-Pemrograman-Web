# Jobsheet 4 - UI/UX Design
# Nama: Elsa Marthalinda - TI 2B

## 6.3 Cara "Mencoba" Jobsheet Ini
1. Membayangkan bagaimana tampilannya kalau digambar mengikuti style.css
- Latar Belakang & Wadah: Elemen section atau pembungkus kartu login, berujung tumpul, dan memiliki bayangan lembut di latar halaman.
- Header / Judul: Berisi teks judul pada header dN heading Login Petugas.
- Formulir: Label input bertipe blok, sedangkan kolom input teks dan password memiliki border halus, sudut lengkung, serta batas lebar maksimal saat dibuka di mobile.
- Tombol [ Masuk ]: Mengikuti gaya teks putih tebal, tanpa border, dan berubah warna saat di-hover.
- Tautan Registrasi: Teks tautan tanpa garis bawah secara default, dan muncul garis bawah hanya saat disorot kursor (hover).

2. Bayangkan halaman mana yang terbuka di tiap kotak.
- [Petugas Login]: Terbuka halaman login.html untuk mengisi kredensial akses. 
- [Dashboard]: Terbuka beranda internal dashboard.html berisi statistik dan aksi cepat.
- [Pilih menu "Peminjaman Baru"]: Petugas menekan tombol pintas atau tautan di navbar.
- [Pilih Anggota] & [Pilih Buku (stok > 0)]: Terbuka form untuk memilih anggota dan buku yang tersedia.
- [Simpan]: Petugas menekan tombol submit untuk mengirim transaksi.
- [Stok buku berkurang 1]: Proses latar belakang (backend) mengurangi kuantitas stok di database.
- [Kembali ke Dashboard]: Tampilan kembali ke dashboard dengan pembaruan statistik dan riwayat.

3. Bandingkan navbar dan kartu statistik yang sudah berjalan dengan wireframe Dashboard Petugas.
- Navbar:
    - Sama: Menggunakan wadah Flexbox (header nav ul { display: flex; gap: 1.25rem; }) yang secara otomatis merapikan jarak antarmenu.
    - Baru: Terdapat penambahan satu item menu Peminjaman serta blok indikator sesi petugas (Nama Petugas) [Logout] di sebelah kanan memanfaatkan justify-content: space-between pada header.
- Kartu Statistik:
    - Sama Persis: Menggunakan layout CSS Grid main section, kartu berwarna abu-abu muda kebiruan (#eef4fa), judul abu-abu, dan nilai angka besar berwarna hijau #3d6c21. Struktur ini dipakai ulang sepenuhnya tanpa membuat CSS baru


## 6.4 Ide latihan Tambahan (Opsional)
1. Gambar wireframe halaman baru
```text
+-----------------------------+
|         SIMPUS-Mini         |
+-----------------------------+
|      [ Login Petugas ]      |
|                             |
| Username : [______________] |
| Password : [______________] |
|                             |
|          [ Masuk ]          |
|                             |
|  Belum punya akun? Daftar   |
+-----------------------------+
```

2. Buat user flow baru untuk skenario yang belum digambarkan
- [Petugas Login] -> [Dashboard] -> [Menu "Transaksi" / "Peminjaman"]
    - -> [Pilih Filter "Lewat Jatuh Tempo"] 
    - -> [Sistem Tampilkan Daftar Tunggakan] 
    - -> [Pilih Aksi: Detail / Hubungi Anggota] -> [Kembali ke Dashboard]

3. Identifikasi edge case tambahan yang mungkin belum tercatat
- Skenario Khusus: Petugas memproses peminjaman buku "Algoritma Dasar" untuk anggota A, padahal anggota A saat ini masih meminjam satu eksemplar buku tersebut dan belum mengembalikannya.
- Masalah:Terjadi penimbunan buku oleh satu orang anggota, sehingga anggota lain kehilangan akses terhadap stok yang ada.Berisiko memicu inkonsistensi data riwayat peminjaman ganda saat pengembalian.
- Solusi Penyelesaian:Aturan Bisnis (Business Rule): Sistem melakukan pengecekan data peminjaman aktif berdasarkan kombinasi anggota_id dan buku_id.Validasi Antarmuka/Sistem: Jika buku tersebut tercatat masih berstatus "Dipinjam" oleh anggota yang sama, sistem otomatis memblokir judul buku dari daftar pilihan (dropdown) atau memunculkan pesan peringatan: "Anggota ini masih memiliki peminjaman aktif untuk buku tersebut."

4. Implementasikan wireframe Login sebagai HTML statis (tanpa logika login sungguhan)