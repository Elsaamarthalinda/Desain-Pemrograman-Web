<?php
session_start();

// Hapus semua data session
session_unset();
session_destroy();

// Mulai session baru khusus untuk menampung pesan notifikasi
session_start();
$_SESSION['notif'] = "Data session berhasil direset!";

// Redirect kembali ke halaman utama/list
header('Location: index.php'); // Atau 'buku/list.php' sesuai halaman utama kamu
exit;