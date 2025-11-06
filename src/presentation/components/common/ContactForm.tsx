"use client";

import { useState } from 'react';
import { Button } from '../../../shared/ui/components';
import { createSectionStyles } from '../../../shared/theme/theme';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={`${createSectionStyles('dark', 'large')} bg-black text-white `}>
      <div className="max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] w-full mx-auto px-4">
        
        {/* Header */}
        <div className="text-left mb-16 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  justify-between w-full">
          <div>
          <h2 className="text-center sm:text-center md:text-left lg:text-left xl:text-left text-6xl font-bold mb-4 text-background">
            Есть идея?
          </h2>
          <h3 className="text-center sm:text-center md:text-left lg:text-left xl:text-left text-3xl font-light mb-8 text-background">
            Расскажите нам о ней
          </h3>
          </div>
         <div className='flex-1'></div>
          
          <div className="flex-2 text-center sm:text-center md:text-right lg:text-right xl:text-right text-lg mx-auto ">
            <p className="text-background/80">
              Absen — это дизайн и технологическая студия, которая работает с бизнесом по всему миру, чтобы создать или развить их имидж через инновационные LED-решения.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mx-auto">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-8">
              
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-background/80">
                    Name
                  </label>
                  <div className="border-b border-gray-600 pb-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-background/80">
                    Company
                  </label>
                  <div className="border-b border-gray-600 pb-2">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-background/80">
                    e-mail
                  </label>
                  <div className="border-b border-gray-600 pb-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-background/80">
                    Phone
                  </label>
                  <div className="border-b border-gray-600 pb-2">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-background/80">
                  Message
                </label>
                <div className="border-b border-gray-600 pb-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Privacy and Submit */}
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-8 items-center justify-between pt-8">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 bg-transparent border border-white rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-background/80">
                    Моя информация не будет передана третьим лицам
                  </label>
                </div>
                
                <Button 
                  variant="white"
                  size="md"
                  onClick={handleSubmit}
                  className="px-8"
                >
                  Отправить сообщение
                </Button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
}
