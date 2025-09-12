"use client";

import { useTranslations } from 'next-intl';

export function LocalizedAboutPageLayout() {
  const t = useTranslations('pages.about');

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            {t('description')}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('mission')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Наша миссия - предоставлять инновационные решения, которые помогают нашим клиентам достигать своих целей. 
                Мы стремимся к совершенству в каждом проекте и создаем долгосрочные партнерские отношения.
              </p>
              <p className="text-lg text-gray-600">
                С 2020 года мы работаем с клиентами по всему миру, предоставляя качественные услуги и продукты.
              </p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('vision')}
              </h3>
              <p className="text-gray-600 mb-4">
                Мы видим будущее, где технологии служат людям и делают мир лучше. 
                Наша цель - быть лидерами в инновациях и создавать решения, которые меняют жизнь к лучшему.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('values')}
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Качество превыше всего</li>
                <li>• Инновации и креативность</li>
                <li>• Честность и прозрачность</li>
                <li>• Клиентоориентированность</li>
                <li>• Командная работа</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600">
              Профессионалы, которые делают возможным невозможное
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                АК
              </div>
              <h3 className="text-xl font-semibold mb-2">Алексей Ковалев</h3>
              <p className="text-gray-600 mb-2">CEO & Основатель</p>
              <p className="text-sm text-gray-500">
                Более 10 лет опыта в IT-индустрии
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                МП
              </div>
              <h3 className="text-xl font-semibold mb-2">Мария Петрова</h3>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-sm text-gray-500">
                Эксперт в области разработки ПО
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                ДС
              </div>
              <h3 className="text-xl font-semibold mb-2">Дмитрий Сидоров</h3>
              <p className="text-gray-600 mb-2">Дизайн-директор</p>
              <p className="text-sm text-gray-500">
                Создает красивые и функциональные интерфейсы
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
