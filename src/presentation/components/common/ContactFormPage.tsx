"use client";

import { useState } from 'react';
import { Button } from '../../../shared/ui/components';

export function ContactFormPage() {
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
        <div className="w-full">


            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                    Свяжитесь с нами
                </h2>
                <h3 className="text-2xl font-light mb-6 text-gray-700">
                    Мы готовы ответить на ваши вопросы
                </h3>
                <p className="text-base text-gray-600">
                    Absen — это дизайн и технологическая студия, которая работает с бизнесом по всему миру, чтобы создать или развить их имидж через инновационные LED-решения.
                </p>
            </div>

            {/* Form */}
            <div className="w-full">
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-8">

                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                                Имя
                            </label>
                            <div className="border-b border-gray-300 pb-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                                    placeholder="Ваше имя"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                                Компания
                            </label>
                            <div className="border-b border-gray-300 pb-2">
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                                    placeholder="Название компании"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                                E-mail
                            </label>
                            <div className="border-b border-gray-300 pb-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                                Телефон
                            </label>
                            <div className="border-b border-gray-300 pb-2">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                                    placeholder="+993 64 123456"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                            Сообщение
                        </label>
                        <div className="border-b border-gray-300 pb-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
                                placeholder="Расскажите о вашем проекте или вопросе..."
                            />
                        </div>
                    </div>

                    {/* Privacy and Submit */}
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between pt-8">
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="w-4 h-4 bg-transparent border border-gray-400 rounded"
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-600">
                                Моя информация не будет передана третьим лицам
                            </label>
                        </div>

                         <Button
                             variant="primary"
                             size="lg"
                             onClick={handleSubmit}
                             className="px-8"
                         >
                             Отправить сообщение
                         </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
