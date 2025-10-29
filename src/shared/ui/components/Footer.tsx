import React from 'react';
import Link from 'next/link';
import { componentStyles } from '../../theme/theme';

export function Footer() {
  return (
    <footer className={`${componentStyles.background.dark} text-background`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-background">Absen</h3>
            <p className="text-background/80 mb-4">
              Ведущий производитель LED-дисплеев для любых задач и применений. 
              Инновационные решения для бизнеса, развлечений и рекламы.
            </p>
          </div>
          
          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Продукция</h4>
            <ul className="space-y-2">
              <li><Link href="/categories/indoor-displays" className="text-background/80 hover:text-background transition-colors">Внутренние дисплеи</Link></li>
              <li><Link href="/categories/outdoor-displays" className="text-background/80 hover:text-background transition-colors">Уличные дисплеи</Link></li>
              <li><Link href="/categories/rental-displays" className="text-background/80 hover:text-background transition-colors">Арендные дисплеи</Link></li>
              <li><Link href="/categories/creative-displays" className="text-background/80 hover:text-background transition-colors">Креативные решения</Link></li>
            </ul>
          </div>
          
          {/* Контакты и социальные сети */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Контакты</h4>
            <ul className={`space-y-2 text-background/80`}>
              <li className="flex items-center space-x-2">
                <span className="text-background">📞</span>
                <span>+993 62 319427</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-background">📞</span>
                <span>+993 12 754393</span>
              </li> 
              <li className="flex items-center space-x-2">
                <span className="text-background">✉️</span>
                <span>inbox@absentm.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-background">📍</span>
                <span>г. Ашхабад, Беркарарлык этрапы, 2127 ул. (Г. Гулыева), 26А</span>
              </li>
            </ul>
            
            {/* Социальные сети */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-background">Мы в соцсетях</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Telegram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="WhatsApp">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@AbsenLED" className="text-background/80 hover:text-background transition-colors" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/absenled/" className="text-background/80 hover:text-background transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2a5.75 5.75 0 0 0-5.75 5.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.8A5.7 5.7 0 1 0 17.7 12a5.7 5.7 0 0 0-5.7-5.7zm0 1.7A4 4 0 1 1 8 12a4 4 0 0 1 4-4zm5.25-.95a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`border-t border-border mt-8 pt-8 text-center text-background/80`}>
          <p>&copy; 2025 Absen. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
