import React from 'react';
import { FiChevronDown, FiBell, FiUser, FiTag, FiNavigation, FiSquare, FiCalendar, FiCreditCard, FiMinus, FiSliders, FiStar } from 'react-icons/fi';
import ComponentCard from '@/components/ComponentCard';

const components = [
  {
    title: "Accordion",
    description: "Accordion is used for showing and hiding content but only one item can stay open at a time.",
    icon: <FiChevronDown />
  },
  {
    title: "Alert",
    description: "Alert informs users about important events.",
    icon: <FiBell />
  },
  {
    title: "Avatar",
    description: "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
    icon: <FiUser />
  },
  {
    title: "Badge",
    description: "Badges are used to inform the user of the status of specific data.",
    icon: <FiTag />
  },
  {
    title: "Breadcrumbs", 
    description: "Breadcrumbs helps users to navigate through the website.",
    icon: <FiNavigation />
  },
  {
    title: "Button",
    description: "Buttons allow the user to take actions or make choices.",
    icon: <FiSquare />
  },
  {
    title: "Calendar",
    description: "Calendar includes styles for different calendar libraries.",
    icon: <FiCalendar />
  },
  {
    title: "Card",
    description: "Cards are used to group and display content in a way that is easily readable.",
    icon: <FiCreditCard />
  },
  {
    title: "Carousel",
    description: "Carousel untuk menampilkan konten dalam format slideshow.",
    icon: <FiSquare />
  },
  {
    title: "Checkbox",
    description: "Checkbox untuk memilih beberapa opsi dari daftar.",
    icon: <FiSquare />
  },
  {
    title: "Collapse",
    description: "Collapse untuk menyembunyikan dan menampilkan konten.",
    icon: <FiChevronDown />
  },
  {
    title: "Countdown",
    description: "Countdown timer untuk menghitung mundur waktu.",
    icon: <FiCalendar />
  },
  {
    title: "Drawer",
    description: "Panel geser yang muncul dari sisi layar.",
    icon: <FiSquare />
  },
  {
    title: "Dropdown",
    description: "Menu dropdown untuk menampilkan daftar pilihan.",
    icon: <FiChevronDown />
  },
  {
    title: "Footer",
    description: "Footer untuk bagian bawah halaman web.",
    icon: <FiSquare />
  },
  {
    title: "Input",
    description: "Input fields untuk mengumpulkan data dari pengguna.",
    icon: <FiSquare />
  },
  {
    title: "Loading",
    description: "Indikator loading untuk menunjukkan proses.",
    icon: <FiSquare />
  },
  {
    title: "Menu",
    description: "Menu navigasi untuk mengatur tautan.",
    icon: <FiNavigation />
  },
  {
    title: "Modal",
    description: "Dialog modal untuk menampilkan konten penting.",
    icon: <FiSquare />
  },
  {
    title: "Navbar",
    description: "Navigation bar untuk header website.",
    icon: <FiNavigation />
  },
  {
    title: "Progress",
    description: "Progress bar untuk menunjukkan kemajuan.",
    icon: <FiSquare />
  },
  {
    title: "Radio",
    description: "Radio button untuk memilih satu opsi dari daftar.",
    icon: <FiSquare />
  },
  {
    title: "Select",
    description: "Select dropdown untuk memilih opsi dari daftar.",
    icon: <FiChevronDown />
  },
  {
    title: "Tabs",
    description: "Tab untuk mengorganisir konten dalam kategori.",
    icon: <FiSquare />
  },
  {
    title: "Toast",
    description: "Notifikasi toast untuk feedback singkat.",
    icon: <FiBell />
  },
  {
    title: "Tooltip",
    description: "Tooltip untuk menampilkan informasi tambahan.",
    icon: <FiTag />
  },
  {
    title: "Table",
    description: "Tabel untuk menampilkan data dalam format baris dan kolom.",
    icon: <FiSquare />
  },
  {
    title: "Timeline",
    description: "Timeline untuk menampilkan urutan kejadian secara kronologis.",
    icon: <FiCalendar />
  },
  {
    title: "Toggle",
    description: "Toggle switch untuk mengaktifkan/menonaktifkan fitur.",
    icon: <FiSquare />
  },
  {
    title: "Pagination",
    description: "Navigasi halaman untuk data yang banyak.",
    icon: <FiNavigation />
  },
  {
    title: "Rating",
    description: "Komponen rating untuk memberikan penilaian.",
    icon: <FiStar />
  },
  {
    title: "Skeleton",
    description: "Loading placeholder untuk konten yang belum dimuat.",
    icon: <FiSquare />
  },
  {
    title: "Stepper",
    description: "Indikator langkah-langkah dalam proses.",
    icon: <FiNavigation />
  },
  {
    title: "Chip",
    description: "Label kompak untuk menampilkan informasi.",
    icon: <FiTag />
  },
  {
    title: "Divider",
    description: "Garis pemisah untuk memisahkan konten.",
    icon: <FiMinus />
  },
  {
    title: "Slider",
    description: "Kontrol geser untuk memilih nilai dalam rentang.",
    icon: <FiSliders />
  },
  {
    title: "File Upload",
    description: "Komponen untuk mengunggah file ke sistem.",
    icon: <FiSquare />
  },
  {
    title: "Rich Text Editor",
    description: "Editor teks dengan format yang kaya untuk membuat konten.",
    icon: <FiSquare />
  },
  {
    title: "Charts",
    description: "Visualisasi data dalam berbagai format grafik.",
    icon: <FiSquare />
  },
  {
    title: "Image Gallery",
    description: "Galeri gambar dengan fitur preview dan zoom.",
    icon: <FiSquare />
  },
  {
    title: "Video Player",
    description: "Pemutar video dengan kontrol pemutaran.",
    icon: <FiSquare />
  },
  {
    title: "Audio Player",
    description: "Pemutar audio dengan kontrol pemutaran.",
    icon: <FiSquare />
  },
  {
    title: "Map",
    description: "Peta interaktif untuk menampilkan lokasi.",
    icon: <FiSquare />
  },
  {
    title: "Color Picker",
    description: "Pemilih warna dengan format HEX/RGB/HSL.",
    icon: <FiSquare />
  },
  {
    title: "Date Picker",
    description: "Pemilih tanggal dengan kalender interaktif.",
    icon: <FiCalendar />
  },
  {
    title: "Time Picker",
    description: "Pemilih waktu dengan format 12/24 jam.",
    icon: <FiSquare />
  },
  {
    title: "Tree View",
    description: "Tampilan hierarki data dalam bentuk pohon.",
    icon: <FiSquare />
  },
  {
    title: "Kanban Board",
    description: "Papan kanban untuk manajemen tugas.",
    icon: <FiSquare />
  },
  {
    title: "Spreadsheet",
    description: "Tabel spreadsheet untuk manipulasi data.",
    icon: <FiSquare />
  },
  {
    title: "PDF Viewer",
    description: "Penampil dokumen PDF terintegrasi.",
    icon: <FiSquare />
  },
  {
    title: "Code Editor",
    description: "Editor kode dengan syntax highlighting.",
    icon: <FiSquare />
  },
  {
    title: "Virtual Scroll",
    description: "Scroll virtual untuk menangani data dalam jumlah besar.",
    icon: <FiSquare />
  },
  {
    title: "Drag & Drop",
    description: "Fitur drag and drop untuk memindahkan elemen.",
    icon: <FiSquare />
  },
  {
    title: "Infinite Scroll",
    description: "Scroll tak terbatas untuk memuat data secara bertahap.",
    icon: <FiSquare />
  },
  {
    title: "Masonry Grid",
    description: "Grid layout dengan tinggi dinamis seperti Pinterest.",
    icon: <FiSquare />
  },
  {
    title: "Password Input",
    description: "Input password dengan toggle visibility.",
    icon: <FiSquare />
  },
  {
    title: "OTP Input",
    description: "Input OTP dengan auto-focus dan validasi.",
    icon: <FiSquare />
  },
  {
    title: "Phone Input",
    description: "Input nomor telepon dengan kode negara.",
    icon: <FiSquare />
  },
  {
    title: "Signature Pad",
    description: "Pad untuk tanda tangan digital.",
    icon: <FiSquare />
  },
  {
    title: "Barcode Scanner",
    description: "Scanner untuk membaca barcode dan QR code.",
    icon: <FiSquare />
  },
  {
    title: "Keyboard",
    description: "Keyboard virtual untuk input touch screen.",
    icon: <FiSquare />
  },
  {
    title: "Popover",
    description: "Tampilan popup yang muncul saat mengklik elemen.",
    icon: <FiSquare />
  },
  {
    title: "Sidebar",
    description: "Panel samping untuk navigasi atau konten tambahan.",
    icon: <FiSquare />
  },
  {
    title: "Wizard",
    description: "Panduan langkah demi langkah untuk proses kompleks.",
    icon: <FiSquare />
  },
  {
    title: "Sortable List",
    description: "Daftar yang bisa diurutkan dengan drag and drop.",
    icon: <FiSquare />
  },
  {
    title: "Comparison Slider",
    description: "Slider untuk membandingkan dua gambar.",
    icon: <FiSliders />
  },
  {
    title: "Multi Select",
    description: "Select dengan kemampuan memilih multiple opsi.",
    icon: <FiSquare />
  }
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-base-100 rounded-box p-8">
        <h1 className="text-4xl font-bold mb-4">{components.length} Components</h1>
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search components..." 
              className="input input-bordered w-full pr-10"
            />
            <button className="btn btn-ghost btn-sm absolute right-2 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component, index) => (
          <ComponentCard 
            key={index}
            {...component}
          />
        ))}
      </div>
    </div>
  );
} 