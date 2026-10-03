document.addEventListener("DOMContentLoaded", function () {
    // Memanggil fungsi generik dengan data dan kunci anggota
    muatDataTabel("../data/anggota.json", ["no_anggota", "nama", "alamat", "no_hp"]);

    // Event listener jika tombol muat ulang ada di halaman
    const btnReload = document.getElementById("btn-reload");
    if (btnReload) {
        btnReload.addEventListener("click", function () {
            muatDataTabel("../data/anggota.json", ["no_anggota", "nama", "alamat", "no_hp"]);
        });
    }
});