"use client";

import { useState } from 'react';
import type { ProductFAQ } from '../../../domain/entities/Product';

interface ProductFAQProps {
  faqs: ProductFAQ[];
}

export function ProductFAQ({ faqs }: ProductFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о продукте
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full px-6 py-5 text-left flex justify-between items-center transition-all duration-300 ${
                    openFAQ === faq.id 
                      ? 'bg-gray-50 border-b border-gray-200' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-5 bg-gray-50">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
