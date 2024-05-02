# Sistem Manajemen Penjualan Online:
## Membangun database untuk toko online yang mencakup informasi produk, pembeli, pesanan, transaksi, dan manajemen inventaris.


### Tabel Produk
CREATE TABLE Produk (
    ProdukID INT AUTO_INCREMENT PRIMARY KEY,
    NamaProduk VARCHAR(255) NOT NULL,
    Harga DECIMAL(10, 2) NOT NULL,
    Stok INT NOT NULL
);

### Tabel Pembeli
CREATE TABLE Pembeli (
    PembeliID INT AUTO_INCREMENT PRIMARY KEY,
    NamaPembeli VARCHAR(255) NOT NULL,
    Alamat VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

### Tabel Pesanan
CREATE TABLE Pesanan (
    PesananID INT AUTO_INCREMENT PRIMARY KEY,
    PembeliID INT,
    TanggalPesan DATE NOT NULL,
    FOREIGN KEY (PembeliID) REFERENCES Pembeli(PembeliID)
);

### Tabel DetailPesanan
CREATE TABLE DetailPesanan (
    DetailPesananID INT AUTO_INCREMENT PRIMARY KEY,
    PesananID INT,
    ProdukID INT,
    Jumlah INT NOT NULL,
    HargaSatuan DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PesananID) REFERENCES Pesanan(PesananID),
    FOREIGN KEY (ProdukID) REFERENCES Produk(ProdukID)
);

### Tabel Transaksi
CREATE TABLE Transaksi (
    TransaksiID INT AUTO_INCREMENT PRIMARY KEY,
    PesananID INT,
    TanggalTransaksi DATE NOT NULL,
    TotalHarga DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PesananID) REFERENCES Pesanan(PesananID)
);

### Tabel Inventaris
CREATE TABLE Inventaris (
    ProdukID INT AUTO_INCREMENT PRIMARY KEY,
    JumlahStok INT NOT NULL,
    FOREIGN KEY (ProdukID) REFERENCES Produk(ProdukID)
);


### Insert data ke tabel Produk
INSERT INTO Produk (NamaProduk, Harga, Stok) VALUES
('Laptop', 1200.00, 50),
('Smartphone', 500.00, 100),
('Printer', 150.00, 30),
('Mouse', 20.00, 200),
('Keyboard', 30.00, 150),
('Monitor', 200.00, 50),
('Headset', 50.00, 80),
('Webcam', 40.00, 40),
('External HDD', 80.00, 60),
('Wireless Router', 60.00, 70);

### Insert data ke tabel Pembeli
INSERT INTO Pembeli (NamaPembeli, Alamat, Email) VALUES
('Adli Rayhan', 'Jl. Merdeka No. 123', 'adli.rayhan@example.com'),
('Jamal Udin', 'Jl. Raya 456', 'jamal.udin@example.com'),
('Yanto Boru', 'Jl. Harmoni 789', 'yanto.boru@example.com'),
('Arif Doytro', 'Jl. Cipta No. 456', 'arif.doytro@example.com'),
('Charlie Dimanako', 'Jl. Damai 789', 'charlie.dimanako@example.com'),
('Eva Mutiara', 'Jl. Sejahtera No. 987', 'eva.mutiara@example.com'),
('Alim Udin', 'Jl. Bahagia 321', 'alim.udin@example.com'),
('Marfin Bangor', 'Jl. Indah No. 654', 'marfin.bangor@example.com'),
('Eca Karmila', 'Jl. Makmur 987', 'eca.karmila@example.com'),
('Layla Moonton', 'Jl. Sentosa No. 123', 'layla.moonton@example.com');

### Insert data ke tabel Pesanan
INSERT INTO Pesanan (PembeliID, TanggalPesan) VALUES
(1, '2024-02-01'),
(2, '2024-02-02'),
(3, '2024-02-03'),
(4, '2024-02-04'),
(5, '2024-02-05'),
(6, '2024-02-06'),
(7, '2024-02-07'),
(8, '2024-02-08'),
(9, '2024-02-09'),
(10, '2024-02-10');

### Insert data ke tabel DetailPesanan
INSERT INTO DetailPesanan (PesananID, ProdukID, Jumlah, HargaSatuan) VALUES
(1, 3, 1, 150.00),
(1, 2, 3, 1500.00),
(2, 4, 5, 100.00),
(3, 5, 2, 60.00),
(4, 6, 1, 200.00),
(5, 7, 4, 200.00),
(6, 8, 1, 40.00),
(7, 9, 2, 160.00),
(8, 10, 1, 60.00),
(9, 1, 2, 2400.00);

### Insert data ke tabel Transaksi
INSERT INTO Transaksi (PesananID, TanggalTransaksi, TotalHarga) VALUES
(1, '2024-02-01', 2550.00),
(2, '2024-02-02', 1500.00),
(3, '2024-02-03', 500.00),
(4, '2024-02-04', 500.00),
(5, '2024-02-05', 120.00),
(6, '2024-02-06', 200.00),
(7, '2024-02-07', 800.00),
(8, '2024-02-08', 40.00),
(9, '2024-02-09', 160.00),
(10, '2024-02-10', 60.00);

### Insert data ke tabel Inventaris
INSERT INTO Inventaris (JumlahStok) VALUES
(50),
(100),
(30),
(200),
(150),
(50),
(80),
(40),
(60),
(70);


# Inner Join
### Menampilkan baris dari tabel Pesanan dan DetailPesanan yang memiliki nilai yang sesuai pada kolom PesananID.
SELECT *
FROM Pesanan
INNER JOIN DetailPesanan ON Pesanan.PesananID = DetailPesanan.PesananID;

# LEFT JOIN (LEFT OUTER JOIN):
### Menampilkan semua baris dari tabel Pesanan dan baris dari tabel DetailPesanan yang memiliki nilai yang sesuai pada kolom PesananID. Jika tidak ada nilai yang sesuai di tabel DetailPesanan, kolom dari tabel tersebut akan berisi nilai NULL.
SELECT *
FROM Pesanan
LEFT JOIN DetailPesanan ON Pesanan.PesananID = DetailPesanan.PesananID;

# RIGHT JOIN (RIGHT OUTER JOIN):
###  Menampilkan semua baris dari tabel DetailPesanan dan baris dari tabel Pesanan yang memiliki nilai yang sesuai pada kolom PesananID. Jika tidak ada nilai yang sesuai di tabel Pesanan, kolom dari tabel tersebut akan berisi nilai NULL.
SELECT *
FROM Pesanan
RIGHT JOIN DetailPesanan ON Pesanan.PesananID = DetailPesanan.PesananID;


## Alur jalannya aplikasi manajemen penjualan online dalam bentuk yang lebih ringkas:

### Pelanggan Melakukan Pembelian:
- Pelanggan memilih dan membeli produk.
- Pesanan dicatat dalam tabel Pesanan.
- Detail pesanan (produk, jumlah, harga) disimpan dalam tabel DetailPesanan.

### Manajemen Inventaris: 
- Stok produk dikurangkan berdasarkan pesanan yang diterima.
- Pembaruan stok dilakukan dalam tabel Inventaris.

### Transaksi Dicatat:
- Informasi transaksi (total harga, tanggal) disimpan dalam tabel Transaksi.

### Interaksi dengan Pelanggan:
- Konfirmasi pembelian dikirim ke pelanggan.
- Pelanggan dapat melacak pesanan dan statusnya.

### Manajemen Pelanggan:
- Informasi pelanggan disimpan dalam tabel Pembeli.
- Riwayat pembelian pelanggan dapat diakses.

- Alur ini mencakup proses dari pembelian produk hingga catatan transaksi dan interaksi dengan pelanggan, menggunakan tabel-tabel yang telah dibuat dalam database.