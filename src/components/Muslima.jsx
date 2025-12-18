import React, { useState } from "react";
import img from '../assets/Rectangle 21.png'

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  brand: "Dolce & Gabbana",
  type: "Подвеска",
  price: "175 000 ₽",
  image: img,
}));

const Muslima = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP NAVBAR ===== */}
      <header className="bg-[#2f2f2f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm flex gap-6 opacity-80">
            <span>Контрагентам</span>
            <span>Дизайнерам</span>
            <span>Вакансии</span>
          </div>

          
          <div className="flex items-center gap-2 text-2xl font-semibold">
           
            OJJO
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span>Поиск</span>
            <span>Вход / Регистрация</span>
            <span>♡</span>
          </div>
        </div>
      </header>

      {/* ===== CATEGORIES + SEARCH ===== */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Categories */}
          <div className="flex gap-8 text-sm text-gray-700">
            {[
              "Бренд",
              "Цена",
              "Для кого",
              "Коллекция",
              "Сезон",
              "Событие",
            ].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 hover:text-black"
              >
                {item}
                <span className="text-xs">▾</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 text-sm w-64 outline-none"
          />
        </div>
      </div>

      {/* ===== PRODUCTS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt="product"
                className="w-full h-[220px] object-cover mb-4"
              />
              <p className="text-gray-400 text-sm mb-1">{product.type}</p>
              <h3 className="font-medium mb-3">
                {product.brand}
              </h3>
              <button className="bg-[#2f2f2f] text-white px-5 py-2 text-sm">
                {product.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Muslima;
