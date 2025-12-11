import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import { products, categories } from './data/products';
import { Search, Store, Loader2 } from 'lucide-react';

export default function App() {
  // 1. State
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 2. Simulasi Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 3. Tampilan Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Hiasan Background Blur */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

        {/* Logo Animasi */}
        <div className="mb-6 relative">
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center animate-bounce">
            <Store size={40} className="text-green-600" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-green-200 rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Spinner */}
        <div className="flex items-center gap-2 text-green-700 font-medium">
          <Loader2 className="animate-spin" size={20} />
          <span>Memuat Kedai Aciak...</span>
        </div>
      </div>
    );
  }

  // 4. Tampilan Utama (Responsive Desktop & Mobile)
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans animate-in fade-in duration-700">
      <Navbar />

      {/* CONTAINER UTAMA: max-w-7xl agar lebar di Desktop, px-4 agar ada jarak di HP */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        
        {/* BAGIAN ATAS: Flexbox (Kolom di HP, Baris di Laptop) */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          
          {/* 1. Hero Banner (Lebar Penuh di HP, 3/4 di Laptop) */}
          <div className="w-full lg:w-3/4">
            <HeroBanner />
          </div>

          {/* 2. Search & Categories (Pindah ke samping kanan di Laptop) */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            
            {/* Search Bar */}
            <div className="bg-white border border-gray-200 rounded-xl flex items-center px-3 py-3 shadow-sm focus-within:ring-2 ring-green-100 transition">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Cari beras, minyak, dll..." 
                className="w-full ml-2 outline-none text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Categories */}
            {/* Di Laptop jadi kotak, Di HP jadi scroll samping */}
            <div className="bg-white lg:p-4 lg:border lg:border-gray-100 lg:rounded-xl">
              <h3 className="hidden lg:block font-bold text-gray-700 mb-3 text-sm">Kategori</h3>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide lg:flex-wrap lg:pb-0">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 lg:px-3 py-1.5 rounded-full lg:rounded-lg text-sm whitespace-nowrap transition active:scale-95 ${
                      activeCategory === cat
                        ? 'bg-green-600 text-white font-medium shadow-md shadow-green-200'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH: List Produk */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-100 p-1.5 rounded-lg animate-pulse">
              <span className="text-xl">🔥</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-800 text-lg">Hot Deals</h2>
              <p className="text-xs text-gray-500">Penawaran terbatas, buruan!</p>
            </div>
          </div>
          
          {/* GRID RESPONSIVE: 
              - HP (Default): grid-cols-2 
              - Tablet (md): grid-cols-3
              - Laptop (lg): grid-cols-4 
              - Layar Besar (xl): grid-cols-5 
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}