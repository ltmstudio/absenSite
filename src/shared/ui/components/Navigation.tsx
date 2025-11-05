'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/contact', label: 'Контакты' },
    { href: '/categories', label: 'Продукция' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  flex-nowrap gap-4">

          {/* ЛОГО + МЕНЮ */}
          <div className="flex items-center gap-3 md:gap-5 lg:gap-8 flex-nowrap">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo.svg"
                alt="Absen logo"
                width={90}
                height={20}
                className="h-auto w-24 md:w-28"
                priority
              />
            </Link>

            {/* Меню рядом с логотипом */}
            <div className="hidden md:flex items-center gap-2 md:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-1 rounded-md text-xs md:text-sm font-medium transition-colors ${
                    pathname === item.href ||
                    (item.href === '/categories' && pathname.startsWith('/categories'))
                      ? 'bg-orange-200 text-orange-600'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Контакты (только на lg и выше) */}
          <div className="hidden md:flex items-center text-sm text-gray-300 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z" />
            </svg>
            <a href="tel:+99362319427" className="hover:text-orange-400 whitespace-nowrap">
              +993 62 31 94 27
            </a>
            <a href="mailto:info@absentm.com" className="hover:text-orange-400 whitespace-nowrap">
              info@absentm.com
            </a>
          </div>

          {/* Кнопка бургер-меню (мобилка) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Открыть главное меню</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-black border-t border-gray-800 mt-2 rounded-lg`}
        >
          <div className="px-3 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href ||
                  (item.href === '/categories' && pathname.startsWith('/categories'))
                    ? 'bg-orange-200 text-orange-600'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Контакты (мобилка) */}
            <div className="mt-3 border-t border-gray-800 pt-3 text-gray-300 space-y-2">
              <div className="flex items-center gap-2 text-sm">
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
                <span>Global</span>
              </div>
              <a href="tel:+99362319427" className="block text-sm hover:text-orange-400">
                +993 62 31 94 27
              </a>
              <a href="mailto:inbox@absentm.com" className="block text-sm hover:text-orange-400 break-all">
                inbox@absentm.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
