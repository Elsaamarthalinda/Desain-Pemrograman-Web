// ===== Hamburger menu (JS-driven, menggantikan checkbox hack) =====
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// ===== Hitung jumlah baris tabel (Counter dinamis) =====
function updateTableCounter() {
    const counter = document.getElementById("table-counter");
    const table = document.querySelector(".table-responsive table");
    if (!counter || !table) return;

    const allRows = table.querySelectorAll("tbody tr");
    const total = allRows.length;

    let visibleCount = 0;
    allRows.forEach(function (row) {
        if (row.style.display !== "none") {
            visibleCount++;
        }
    });

    counter.textContent = "Menampilkan " + visibleCount + " dari " + total + " buku";
}

// ===== Konfirmasi hapus (front-end only, belum ke server) =====
function initHapusConfirm() {
    document.querySelectorAll(".btn-delete, .btn-hapus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const nama = row ? row.querySelector("td")?.textContent.trim() : "data ini";
            const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
            if (yakin && row) {
                row.remove();
                updateTableCounter(); // Perbarui counter setelah baris dihapus
            }
        });
    });
}

// ===== Filter/pencarian tabel real-time (Hanya kolom pertama) =====
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        const keyword = input.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(function (row) {
            const firstCol = row.querySelector("td");
            const teks = firstCol ? firstCol.textContent.toLowerCase() : "";
            row.style.display = teks.includes(keyword) ? "" : "none";
        });

        updateTableCounter(); // Perbarui counter setelah filter diketik
    });
}

// ===== Validasi form (client-side) =====
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    // Daftar konfigurasi field yang akan divalidasi
    const aturanValidasi = [
        {
            selector: "[name='judul'], [name='nama']",
            cek: (input) => input.value.trim() === "",
            pesan: "Field ini wajib diisi."
        },
        {
            selector: "[name='pengarang']",
            cek: (input) => input.value.trim() === "",
            pesan: "Pengarang wajib diisi."
        },
        {
            selector: "[name='no_anggota']",
            cek: (input) => input.value.trim() === "",
            pesan: "No. Anggota wajib diisi."
        },
        {
            selector: "[name='tahun']",
            cek: (input) => {
                const nilai = parseInt(input.value, 10);
                return isNaN(nilai) || nilai < 1900 || nilai > 2026;
            },
            pesan: "Tahun harus di antara 1900-2026."
        },
        {
            selector: "[name='stok']",
            cek: (input) => {
                const nilai = parseInt(input.value, 10);
                return isNaN(nilai) || nilai < 0;
            },
            pesan: "Stok tidak boleh negatif."
        },
        {
            selector: "[name='isbn']",
            cek: (input) => {
                const val = input.value.trim();
                return val !== "" && !/^[0-9-]+$/.test(val);
            },
            pesan: "ISBN hanya boleh berisi angka dan tanda hubung (-)."
        }
    ];

    form.addEventListener("submit", function (e) {
        let valid = true;

        // Perulangan untuk memeriksa tiap aturan secara berurutan
        aturanValidasi.forEach((aturan) => {
            const el = form.querySelector(aturan.selector);
            // Hanya periksa jika elemen input benar-benar ada di form halaman saat ini
            if (el) {
                if (aturan.cek(el)) {
                    tampilkanError(el, aturan.pesan);
                    valid = false;
                } else {
                    hapusError(el);
                }
            }
        });

        if (!valid) {
            e.preventDefault();
        }
    });
}

// Inisialisasi seluruh fungsi setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
    updateTableCounter(); // Inisialisasi hitungan pertama saat halaman dibuka
});