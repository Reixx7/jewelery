import React from "react";

export default function ContactsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-300">Комплектация</a>
            <a href="#" className="text-sm hover:text-gray-300">Дизайнеров</a>
            <a href="#" className="text-sm hover:text-gray-300">Вакансии</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-gray-800 font-bold">O</span>
            </div>
            <span className="text-2xl font-bold tracking-wider">J J O</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-sm flex items-center gap-2">
              <span>🔍</span> Поиск
            </button>
            <a href="#" className="text-sm">Вход/Регистрация</a>
            <button className="text-xl">👤</button>
            <button className="text-xl">🤍</button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Главная</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Контакты</span>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <h1 className="text-3xl font-normal text-center mb-16 tracking-wide">КОНТАКТЫ</h1>
        
        <div className="grid grid-cols-4 gap-12 mb-16">
          <div className="text-center">
            <h3 className="font-medium mb-6">Главный офис</h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p className="flex items-start justify-center gap-2">
                <span>📍</span>
                <span>Невский 140, офис 1-5</span>
              </p>
              <p className="text-gray-500">Невский 140, офис 1-5</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-medium mb-6">Телефоны</h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span>8 (812) 458-56-45</span>
              </p>
              <p className="text-gray-500">8-911-878-00-00</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-medium mb-6">E-mail</h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <span>office@ojjo.com</span>
              </p>
              <p className="text-gray-500">sales@ojjo.com</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-medium mb-6">Доп. адреса</h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p className="flex items-start justify-center gap-2">
                <span>📍</span>
                <span>Невский 142, офис 1-5</span>
              </p>
              <p className="text-gray-500">Загородная 145, офис 11-15</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=600&fit=crop" 
            alt="Map" 
            className="w-full h-[500px] object-cover rounded"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-medium mb-6 text-sm tracking-wider">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Доставка</a></li>
                <li><a href="#" className="hover:text-gray-900">Оплата</a></li>
                <li><a href="#" className="hover:text-gray-900">Акции</a></li>
                <li><a href="#" className="hover:text-gray-900">Политика конфиденциальности</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-6 text-sm tracking-wider">ОПЛАТА</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper purus, nec pellentesque
              </p>
              <div className="flex gap-3">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                  <div className="flex">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full -ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-6 text-sm tracking-wider">КОНТАКТЫ</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>8 (812) 234-56-55</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>8 (812) 234-56-55</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>ojjo@ojjo.ru</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-6 text-sm tracking-wider">СОЦИАЛЬНЫЕ СЕТИ</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper purus, nec pellentesque
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-gray-800 rounded"></div>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-blue-800 rounded"></div>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-blue-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-red-600 rounded"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex justify-between text-xs text-gray-500">
            <p>© 2020 OJ JO jewelry</p>
            <p>Дизайн публичной оферты</p>
            <p>Компонентная</p>
            <p className="underline">Сделано Figma.info</p>
          </div>
        </div>
      </footer>
    </div>
  );
}