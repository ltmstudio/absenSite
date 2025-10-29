'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/contact', label: 'Контакты' },
    { href: '/categories', label: 'Продукция' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      
      
      <div className="max-w-7xl mx-auto px-4 h-24 sm:px-6 lg:px-8 ">
      <div className="bg-black text-gray-300 text-sm  py-3 flex justify-end items-center space-x-2">
        {/* Глобус */}
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4 text-gray-400"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M2 12h20" />
  <path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z" />
        </svg>

        {/* Телефон */}
        <a
          href="tel:+99362319427"
          className="px-2 hover:text-orange-400 transition"
        >
          +993 62 31 94 27
        </a>

        {/* Почта */}
        <a
          href="mailto:inbox@absentm.com"
          className="px-2 hover:text-orange-400 transition"
        >
          inbox@absentm.com
        </a>
      </div>
        <div className="flex justify-between ">
          
          {/* Логотип */}
          <div className="flex items-center">
          <Link href="/" className="flex items-center">
        <Image
          src="/images/logo/logo.svg"   // путь в /public/images/
          alt="Absen logo"
          width={90}
          height={20}
          priority
        />
      </Link>
          </div>
          
          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
             
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href || (item.href === '/categories' && pathname.startsWith('/categories'))
                   ? 'bg-orange-200 text-orange-500'
  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Мобильная кнопка бургер-меню */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть главное меню</span>
              {/* Иконка гамбургера */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Иконка закрытия */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden sticky top-16 z-40 bg-black border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2 mx-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href || (item.href === '/categories' && pathname.startsWith('/categories'))
                     ? 'bg-orange-200 text-orange-500'
  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
