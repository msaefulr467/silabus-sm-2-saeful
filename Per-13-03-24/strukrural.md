-Menginstall npm init -y ✅
-Selanjutnya ubah main pada package json dari index.js menjadi app.js✅
-Buat File app.js✅
-Buat Folder db/connection.js✅
-Menginstall npm instal express body-parser mysql cors✅
-Menginstal npm -g nodemon✅
-Buat file dengan nama .gitignore✅
-Konfigurasi db/connection.js ke mysql✅
-Buat database baru dengan nama smk_bazma_todo✅
-Konfigurasi db/connection.js ke mysql✅
-Konfigurasi app.js✅
-Buat table todo: id, title, description✅
 create table todo(
    -> id int primary key auto_increment,
    -> title varchar(255) not null,
    -> description text);   
-Konfigurasi membaca file todo rest api✅
-Menjalankan get todos menggunakan thunder client✅
-Konfigurasi menambahkan data todo rest api✅
-Menjalankan menambahkan data baru todo rest api menggunakan thunder olients✅
-Setting headers = Accept = application✅
-Setting Content-Type = application/json✅
-[Tugas] Membuat validasi untuk mengirim data todo yang wajib diisikan, artinya validasi tersebut harus jalan dengan npm validator.
"title.require" : "Title Wajib diisi.",
"title.min": "Title minimal 1 karakter",
"title.max": "Title maksimal 255 karakter",
-Konfigurasi mengubah data todo berdasarkan id rest api menggunakan thunder client✅
-[Tugas] Membuat validasi ketika di update datanya tidak boleh kosong sama dengan pin mengirim data. ()
"title.require" : "Title Wajib diisi.",
"title.min": "Title minimal 1 karakter",
"title.max": "Title maksimal 255 karakter",
-Konfigurasi delete data todo berdasarkan id rest api menggunakan thunder clients✅
-Konfigurasi melihat data berdasarkan id rest api menggunakan thunder clients✅
-Konfidurasi bug affectedRows menjadi length    
-Membuat Folder Helper
-Membuat file responJson.js
-Membuat Controllers✅
    -Membuat File: TodoController.js✅
        -Membuat const function getAllTodo ()
        -Membuat const function storeTodo ()
        -Membuat const function updateTodo ()
        -Membuat const function showTodo ()
        -Membuat const function deleteTodo ()
-Membuat Routes ✅
    -Membuat File: TodoRoute.js✅
        Membuat get todo [GET]✅
Konfigurasi app.js
    -Mengubah struktur kode Todo => ['/api/todos'] (Get, Post, Put, Patch, Delete, Get/:id)