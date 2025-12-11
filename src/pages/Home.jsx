import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products'; // Pastikan path ini benar
import { Search } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <div className="px-4 space-y-6">
      
      {/* BAGIAN ATAS: Banner & Search (Layout Flex di Laptop) */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* 1. Hero Banner (Di Laptop ambil lebar 70%) */}
        <div className="w-full lg:w-3/4">
          <HeroBanner />
        </div>

        {/* 2. Search & Kategori (Di Laptop pindah ke kanan banner) */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          {/* Search Bar */}
          <div className="bg-white border border-gray-200 rounded-xl flex items-center px-3 py-3 shadow-sm focus-within:ring-2 ring-green-100">
            <Search size={20} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari produk..." 
              className="w-full ml-2 outline-none text-sm text-gray-700"
            />
          </div>

          {/* Kategori Desktop (Grid kotak-kotak kecil) */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 hidden lg:block">
            <h3 className="font-bold text-gray-700 mb-3 text-sm">Kategori</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs transition ${
                    activeCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Kategori Mobile (Scroll Samping) - Hilang di Laptop */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                activeCategory === cat
                  ? 'bg-green-600 text-white font-medium shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. LIST PRODUK (RESPONSIVE GRID) */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-red-100 p-1.5 rounded-lg animate-pulse">
            <span className="text-xl">🔥</span>
          </div>
          <h2 className="font-bold text-gray-800 text-lg">Hot Deals</h2>
        </div>
        
        {/* 👇 INI KUNCI GRID RESPONSIVE NYA */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </div>
  );
}