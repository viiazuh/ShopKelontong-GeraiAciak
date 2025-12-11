import { ShoppingCart, Store, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* 👇 PERUBAHAN PENTING:
          Ganti 'max-w-md' jadi 'max-w-7xl'.
          Sekarang Navbar akan melebar mengikuti ukuran layar laptop.
      */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* 1. BAGIAN KIRI: LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-sm hover:scale-105 transition">
            <Store size={24} />
          </div>
          <div>
            <h1 className="font-bold text-green-600 text-lg leading-tight">
              Kedai Aciak
            </h1>
            <p className="text-[10px] text-gray-400 font-medium">
              Grosir & Eceran
            </p>
          </div>
        </div>

        {/* 2. BAGIAN TENGAH: MENU (Hanya Muncul di Laptop/Desktop) 
            'hidden md:flex' artinya: di HP sembunyi, di layar Medium ke atas baru muncul.
        */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="text-green-600 font-bold">Beranda</a>
          <a href="#" className="hover:text-green-600 transition">Semua Produk</a>
          <a href="#" className="hover:text-green-600 transition">Promo</a>
          <a href="#" className="hover:text-green-600 transition">Hubungi Kami</a>
        </div>

        {/* 3. BAGIAN KANAN: TOMBOL */}
        <div className="flex items-center gap-3">
          
          {/* Tombol Login (Desktop Only) */}
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition">
            <User size={18} />
            Masuk
          </button>

          {/* Garis Pemisah Kecil (Desktop Only) */}
          <div className="hidden md:block w-px h-6 bg-gray-200"></div>

          {/* Tombol Keranjang (Selalu Muncul) */}
          <button className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm animate-pulse">
              0
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}