
# Proyek Frontend

[![Deployed on Vercel](https://vercel.com/button)](https://your-deployed-site.vercel.app)

Ini adalah proyek frontend untuk aplikasi yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS.

## Prasyarat

Pastikan Anda sudah menginstal hal-hal berikut di sistem Anda:

- Node.js (v14 atau yang lebih baru)
- npm (v6 atau yang lebih baru)

## Memulai

Ikuti langkah-langkah berikut untuk mengatur dan menjalankan proyek secara lokal:

### 1. Clone repositori

```bash
git clone https://github.com/AlvaroSeptra/frontendgrouph.git
```

### 2. Masuk ke direktori proyek

```bash
cd frontendgrouph
```

### 3. Instal dependensi

```bash
npm install
```

Perintah ini akan menginstal semua paket yang diperlukan yang tercantum di `package.json`.

### 4. Jalankan server pengembangan

```bash
npm run dev
```

Perintah ini akan memulai server pengembangan Next.js. Anda sekarang dapat melihat aplikasi di browser Anda di `http://localhost:3000`.

### 5. Membangun untuk Produksi

Jika Anda ingin membangun proyek untuk produksi, gunakan perintah berikut:

```bash
npm run build
```

Ini akan membuat build yang dioptimalkan dari aplikasi.

### 6. Menjalankan Server Produksi

Setelah membangun proyek, Anda dapat memulai server produksi dengan menggunakan:

```bash
npm start
```

Ini akan melayani build produksi yang dioptimalkan dari aplikasi.

## Struktur Folder

Proyek ini mengikuti struktur folder tertentu untuk mengatur kode secara efektif. Berikut adalah ikhtisar singkat dari folder utama:

- `app/`: Berisi logika aplikasi utama dan rute.
- `components/`: Komponen UI yang dapat digunakan kembali.
- `services/`: Integrasi API dan layanan.
- `types/`: Definisi tipe untuk TypeScript.
- `public/`: Aset publik seperti gambar, ikon, dll.

