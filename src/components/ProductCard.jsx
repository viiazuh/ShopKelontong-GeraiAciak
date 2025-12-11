// src/components/ProductCard.jsx
import { Plus } from 'lucide-react';

// 👇 TAMBAHKAN KATA 'default' DI SINI
export default function ProductCard({ product }) {
  
  // Format Rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition">
      {/* Gambar & Badge Diskon */}
      <div className="relative mb-3">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full aspect-square object-cover rounded-xl bg-gray-50" 
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
            -{product.discount}
          </span>
        )}
      </div>

      {/* Detail Produk */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 leading-snug">{product.name}</h3>
        <p className="text-[10px] text-gray-400 mt-1">{product.desc}</p>
      </div>

      {/* Harga */}
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-sm">{formatRupiah(product.price)}</span>
        </div>
        {product.originalPrice && (
          <span className="text-[10px] text-gray-300 line-through">{formatRupiah(product.originalPrice)}</span>
        )}
      </div>

      {/* Tombol Tambah */}
      <button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition shadow-red-200 shadow-sm">
        <Plus size={14} />
        TAMBAH
      </button>
    </div>
  );
}