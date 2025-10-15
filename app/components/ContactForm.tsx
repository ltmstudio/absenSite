import React from 'react';
import { Button } from '@/src/shared/ui';

export const ContactForm = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg">
      {/* Первый ряд - заголовок и подзаголовок слева */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Есть идея?</h2>
          <p className="text-lg text-gray-300">Расскажите нам о ней</p>
        </div>
        
        {/* Описание компании справа */}
        <div className="flex-1 text-right">
          <p className="text-sm text-gray-300 leading-relaxed">
            Absen — это производитель LED-дисплеев<br />
            мирового уровня, который работает<br />
            с компаниями по всему миру для создания<br />
            или развития их имиджа через технологии.
          </p>
        </div>
      </div>

      {/* Второй ряд - поля формы */}
      <div className="space-y-6 mb-8">
        {/* Первая строка - Имя и Компания */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Имя</label>
            <div className="border-b border-gray-600 pb-2">
              <input 
                type="text" 
                className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Компания</label>
            <div className="border-b border-gray-600 pb-2">
              <input 
                type="text" 
                className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Вторая строка - Email и Телефон */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <div className="border-b border-gray-600 pb-2">
              <input 
                type="email" 
                className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Телефон</label>
            <div className="border-b border-gray-600 pb-2">
              <input 
                type="tel" 
                className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Третья строка - Сообщение */}
        <div>
          <label className="block text-sm font-medium mb-2">Сообщение</label>
          <div className="border-b border-gray-600 pb-2">
            <textarea 
              className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none resize-none"
              rows={3}
              placeholder=""
            />
          </div>
        </div>
      </div>

      {/* Третий ряд - чекбокс и кнопка */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="privacy" 
            className="w-4 h-4 bg-transparent border border-gray-400 rounded"
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
            Моя информация не будет передана третьим лицам
          </label>
        </div>
        
        <Button variant="primary" size="lg">
          Отправить сообщение
        </Button>
      </div>
    </div>
  );
};
