# Matchaca Cafe - Tugas 2 Pemrograman Web

Implementasi Web Server Express, Parameter Routing, dan Modularitas SSR EJS.

| | |
|---|---|
| **Nama** | [Catherine Soenarjo] |
| **NIM** | [42530026] |
| **Mata Kuliah** | Pemrograman Web |
| **Tema** | Tema A - Daftar Menu Kafe |

## Video Penjelasan

Tonton video walkthrough di YouTube: https://youtu.be/Ac4Izwg73VU?si=QvV4pVUMXcid3Pps 

## Deskripsi

Aplikasi web sederhana untuk menampilkan menu kafe (Matchaca Cafe) dengan Server-Side Rendering menggunakan Express dan EJS. Data menu berupa array objek JavaScript lokal (tanpa database).

Aplikasi terdiri dari dua halaman:

1. **Halaman Katalog**: menampilkan daftar menu dan filter kategori memakai **Query Parameter** (`req.query`).
2. **Halaman Detail**: menampilkan informasi lengkap satu menu berdasarkan **Route Parameter** (`req.params`).

## Teknologi

- Node.js
- Express
- EJS (template engine)
- HTML & CSS

## Cara Akses
Buka di browser: `http://localhost:8000`

## Daftar Rute

| URL | Fungsi |
|-----|--------|
| `/` | Halaman katalog, menampilkan semua menu |
| `/?kategori=matcha` | Katalog dengan filter kategori (dibaca lewat `req.query.kategori`) |
| `/?kategori=kopi` | Array filter kategori tersebut kosong, menampilkan "Menu untuk kategori ini tidak tersedia."  |
| `/menu/:id` | Halaman detail menu (dibaca lewat `req.params.id`), contoh: `/menu/1` |
| `/menu/99` | ID tidak ditemukan, menampilkan page "Menu tidak ditemukan" (status 404) |

Kategori yang tersedia: `matcha`, `tea`, `foods`, `sweets`.

## Fitur Utama

- **Query Parameter**: rute katalog membaca `req.query.kategori` untuk menyaring array menu.
- **Route Parameter**: rute detail membaca `req.params.id` untuk mencari menu dengan ID unik.
- **Penanganan data tidak ditemukan**: ID atau halaman yang tidak ada menampilkan halaman 404.
- **EJS Partials**: `header.ejs` (navbar) dan `footer.ejs` dipisahkan ke berkas modular dan dipanggil dengan `include`.
- **Output aman**: semua nilai dinamis dicetak dengan tag `<%= %>`.
- **Static files**: CSS dan gambar disajikan lewat middleware `express.static`.
- **Path absolut**: folder `views` dan `public` dikunci memakai modul `path`.

## Struktur Proyek

```
pemweb-tugas2-[NIM]/
├── app.js                  # Konfigurasi Express, EJS, static files, router, 404
├── package.json
├── package-lock.json
├── node_modules/
├── .gitignore
├── routes/
│   └── page.routes.js      # Definisi rute
├── controllers/
│   └── page.controller.js  # Logika filter, pencarian ID, res.render()
├── data/
│   └── menu.js             # Data menu (array objek)
├── views/
│   ├── pages/
│   │   ├── main.ejs       # Halaman katalog
│   │   ├── detail.ejs      # Halaman detail
│   │   └── notFound.ejs    # Halaman 404
│   └── partials/
│       ├── header.ejs      # Head, Navbar
│       └── footer.ejs      # Footer, Penutup
└── public/
    ├── css/style.css
    └── images/
```

## Alur Singkat

```
Browser -> URL (/menu?kategori=tea)
        -> Router mencocokkan rute
        -> Controller menyiapkan data
        -> res.render('pages/main', { pageTitle, dll })
        -> EJS digabung dengan data menjadi HTML murni
        -> HTML dikirim ke browser
```
