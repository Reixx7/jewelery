import React, { useState } from 'react';
import blogitem from '../assets/blogitem.png'
import bgc from '../assets/bgc.png'

export default function JewelryWebsite() {
  const [activeCategory, setActiveCategory] = useState('СВАДЬБА');

  const categories = ['СВАДЬБА', 'МУЖУ', 'ЖЕНЕ', 'ПАРТНЕРУ', 'КОЛЛЕГАМ', 'РАДОСТЬ'];
  
  const products = [
    { id: 1, title: 'КОЛЬЦА', image: '/api/placeholder/400/400', alt: 'Золотые кольца на белом фоне' },
    { id: 2, title: 'СЕРЬГИ', image: '/api/placeholder/400/400', alt: 'Женщина в платье демонстрирует кольца на руках' },
    { id: 3, title: 'ПОДВЕСКИ', image: '/api/placeholder/400/400', alt: 'Серебряные подвески на цепочке' },
    { id: 4, title: 'ЗАПОНКИ', image: '/api/placeholder/400/400', alt: 'Бриллиантовое кольцо в держателе' },
    { id: 5, title: 'БРАСЛЕТЫ', image: '/api/placeholder/400/400', alt: 'Женщина с серьгами' },
    { id: 6, title: 'ЧАСЫ', image: '/api/placeholder/400/400', alt: 'Золотой текстурированный браслет' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать обручальные кольца молодоженам',
      image: '/api/placeholder/400/300',
      description: 'Свадебный блокнот с украшениями'
    },
    {
      id: 2,
      title: 'Запонки для мужа: 7 ключевых правил покупки аксессуара',
      image: '/api/placeholder/400/300',
      description: 'Элегантная тиара с драгоценными камнями'
    },
    {
      id: 3,
      title: 'Как выбрать обручальное кольцо идеальной формы',
      image: '/api/placeholder/400/300',
      description: 'Руки невесты с обручальными кольцами'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-zinc-800 text-white">
        <div className="container mx-auto px-4 absolute top-0 left-0 z-10 text-white ">
          <div className="flex items-center justify-between py-4 ">
            <div className="flex items-center space-x-8 text-sm">
              <a href="#" className="hover:text-gray-300">Бриллианты</a>
              <a href="#" className="hover:text-gray-300">Ювелирам</a>
              <a href="#" className="hover:text-gray-300">Новинки</a>
            </div>
            
            <div className="text-2xl font-light tracking-widest">
              OJJO
            </div>
            
            <div className="flex items-center space-x-6">
              <svg className="w-5 h-5 cursor-pointer hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm cursor-pointer hover:text-gray-300">Вход / Регистрация</span>
              <svg className="w-5 h-5 cursor-pointer hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <svg className="w-5 h-5 cursor-pointer hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[700px] bg-zinc-700 flex items-center justify-center">
            <img className="text-gray-400 text-sm h-[" src={bgc} alt="Background" />
          </div>
        </div>
        <div className="relative  h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-light mb-8">Долго, дорого, богато!</h1>
          <button className="px-8  py-3 border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
            КАТАЛОГ ИЗДЕЛИЙ
          </button>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-gray-100 py-6  ">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-gray-400 text-sm font-light">LOGO{i}.RU</div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-2">К МЕРОПРИЯТИЯМ</p>
          <h2 className="text-center text-3xl font-light mb-12">Настоящая красота здесь!</h2>
          
          {/* Category Tabs */}
          <div className="flex justify-center space-x-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm ${
                  activeCategory === cat
                    ? 'bg-zinc-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <div key={product.id} className="relative group cursor-pointer overflow-hidden bg-gray-100">
                <div className="aspect-square overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">[ {product.alt} ]</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                  <h3 className="text-white text-xl font-light tracking-wider">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Visit Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">НЕ НАШЛИ, ЧТО ИСКАЛИ?</p>
          <h2 className="text-3xl font-light mb-6">Посетите наши салоны в Москве</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Более 30 салонов по всему городу. В них работают специалисты, которые дают 
            экспертные советы и консультации по выбору ювелирных изделий. Вы можете 
            отремонтировать, купить или починить ваши украшения в наших магазинах.
          </p>
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300">
            НАЙТИ САЛОН
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-2">ПОЛЕЗНЫЕ СТАТЬИ</p>
          <h2 className="text-center text-3xl font-light mb-12">
            Лучшие советы по подбору дорогих подарков
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white shadow-md overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blogitem}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light text-gray-800 leading-relaxed">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors duration-300">
              ЧИТАТЬ НАШ БЛОГ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">OJJO</h3>
              <p className="text-gray-400 text-sm">
                Эксклюзивные ювелирные украшения для особых моментов
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Каталог</a></li>
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Оплата</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Контакты</h4>
              <p className="text-sm text-gray-400">
                8 (800) 000-00-00<br />
                info@ojjo.ru
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 OJJO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
       