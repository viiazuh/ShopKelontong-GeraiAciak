// src/components/HeroBanner.jsx
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="p-4">
      {/* Container Oranye (Spanduk Utama) */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        
        {/* Konten Teks */}
        <div className="relative z-10 w-3/4">
          <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-md border border-white/10">
            PROMO RAMADAN
          </span>
          <h2 className="text-2xl font-bold mt-3 leading-tight">
            Diskon Sembako s.d 50%
          </h2>
          <p className="text-xs text-orange-100 mt-1 mb-4">
            Khusus beras, minyak, dan sirup.
          </p>
          
          <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-bold shadow-md active:scale-95 transition flex items-center gap-1">
            Lihat Promo <ArrowRight size={16} />
          </button>
        </div>

        {/* Hiasan Lingkaran Blur (Biar Estetik) */}
        <div className="absolute -right-4 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400/30 rounded-full blur-xl"></div>
      </div>

      {/* Bagian Reward (Member) */}
      <div className="mt-4 bg-orange-100 border border-orange-200 rounded-xl p-4 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-orange-800 text-sm">Poin Member</h3>
          <p className="text-xs text-orange-600">Kumpulkan poin belanja!</p>
        </div>
        <button className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
          Daftar
        </button>
      </div>
    </div>
  );
}