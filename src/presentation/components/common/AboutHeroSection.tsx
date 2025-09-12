"use client";

import { Button } from '../../../shared/ui';

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/images/banners/led.png')` }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      {/* Контент */}
      <div className="relative z-10 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              О компании Absen
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-8 leading-none">
              Создаем будущее LED-технологий
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-3xl">
              Более 20 лет мы создаем инновационные LED-решения, которые превосходят ожидания и открывают новые возможности для бизнеса по всему миру
            </p>
            
            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="white" 
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Наши продукты
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративный элемент снизу */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
