import { CategoryModel } from "../models/category_model";

export class CategoryDataSource {
    private static categories: CategoryModel[] = [
        {
            id: 'indoor-displays',
            title: 'Внутренние LED-дисплеи',
            description: 'Современные LED-дисплеи для помещений: четкое изображение, яркие цвета, высокая надежность для бизнеса и рекламы.',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/indoor-displays'
        },
        {
            id: 'outdoor-displays',
            title: 'Уличные LED-дисплеи',
            description: 'Надёжные дисплеи для наружного применения. Стойкость к погодным условиям, яркость и долговечность.',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/outdoor-displays'
        },
        {
            id: 'rental-displays',
            title: 'Арендные LED-дисплеи',
            description: 'Мобильные LED-решения для мероприятий, концертов и временных инсталляций. Легкая сборка, высокое качество.',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/rental-displays'
        },
        {
            id: 'fine-pitch',
            title: 'MicroLed',
            description: 'Высокоплотные дисплеи для детализированного изображения. Идеально для студий, шоурумов и корпоративных помещений.',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/fine-pitch'
        },
        {
            id: 'creative-displays',
            title: 'Креативные LED-решения',
            description: 'Гибкие и модульные дисплеи для уникальных проектов. Создавайте впечатляющие визуальные инсталляции.',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/creative-displays'
        },
        {
            id: 'transparent-displays',
            title: 'Прозрачные LED-дисплеи',
            description: 'Инновационные прозрачные дисплеи для витрин, магазинов и рекламных проектов с эффектом «невидимого экрана».',
            backgroundImage: '/images/banners/led.png',
            href: '/categories/transparent-displays'
        },
    ]

    static getCategories(): CategoryModel[] {
        return [...this.categories];
    }
};