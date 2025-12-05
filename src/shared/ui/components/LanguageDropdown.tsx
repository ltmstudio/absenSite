'use client';

import { useState, useTransition } from 'react';
import { useLocale } from 'next-intl';

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const setLang = (lang: 'ru' | 'en') => {
    startTransition(async () => {
      await fetch(`/api/locale?lang=${lang}`, { method: 'GET' });
      window.location.reload();
    });
  };

  return (
    <div className="relative select-none">
      {/* Кнопка */}
      <div
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 
          cursor-pointer
          px-3 py-1.5 
          rounded-full 
          bg-white/10
          hover:bg-white/20
          transition
          backdrop-blur-sm
        "
      >
        {/* Иконка-глобус */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z" />
        </svg>

        <span className="uppercase text-xs text-white opacity-80">
          {locale}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 
            w-40 
            bg-[#1c1c1e] 
            rounded-xl 
            shadow-2xl 
            border border-white/10
            py-2 
            z-50
            backdrop-blur-md
          "
        >
          {/* RU */}
          <button
            onClick={() => setLang('ru')}
            disabled={isPending}
            className={`
              w-full text-left px-4 py-2.5 
              flex items-center gap-2 
              text-sm transition
              ${
                locale === 'ru'
                  ? 'text-white font-semibold bg-white/10'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }
            `}
          >
            <span className="text-xs font-semibold opacity-70">RU</span>
            Русский
          </button>

          {/* Divider */}
          <div className="h-px bg-white/10 my-1 mx-2" />

          {/* EN */}
          <button
            onClick={() => setLang('en')}
            disabled={isPending}
            className={`
              w-full text-left px-4 py-2.5 
              flex items-center gap-2 
              text-sm transition
              ${
                locale === 'en'
                  ? 'text-white font-semibold bg-white/10'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }
            `}
          >
            <span className="text-xs font-semibold opacity-70">EN</span>
            English
          </button>
        </div>
      )}
    </div>
  );
}
