<?php
$page_title = "Beranda";
include __DIR__ . '/includes/header.php';

$totalBuku = count($_SESSION['buku'] ?? []);
$totalAnggota = count($_SESSION['anggota'] ?? []);

// ===== Tambahan notifikasi reset data =====
if (isset($_SESSION['notif'])) {
    echo "<script>alert('" . $_SESSION['notif'] . "');</script>";
    unset($_SESSION['notif']); // Hapus session agar tidak muncul terus saat di-refresh
}

?>
        <section>
            <h2>Selamat Datang di Sistem Perpustakaan Mini</h2>
            <p>Aplikasi sederhana untuk mengelola data buku dan anggota perpustakaan.</p>
        </section>

        <section>
            <h2>Ringkasan</h2>
            <article>
                <h3>Total Buku</h3>
                <p><?php echo $totalBuku; ?></p>
            </article>
            <article>
                <h3>Total Anggota</h3>
                <p><?php echo $totalAnggota; ?></p>
            </article>
            <article>
                <h3>Sedang Dipinjam</h3>
                <p>0</p>
            </article>
        </section>

        <p><a href="reset_data.php" onclick="return confirm('Yakin ingin mereset data session?');">Reset Data</a></p>
<?php include __DIR__ . '/includes/footer.php'; ?>