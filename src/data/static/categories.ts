export interface Category {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: 'indoor-displays',
    title: 'Внутренние дисплеи',
    description: 'Высококачественные LED-дисплеи для помещений с отличной цветопередачей и четкостью',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/indoor-displays'
  },
  {
    id: 'outdoor-displays',
    title: 'Уличные дисплеи',
    description: 'Прочные и надежные LED-дисплеи для наружного использования в любых погодных условиях',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/outdoor-displays'
  },
  {
    id: 'rental-displays',
    title: 'Арендные дисплеи',
    description: 'Мобильные LED-дисплеи для мероприятий, конференций и временных установок',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/rental-displays'
  },
  {
    id: 'creative-displays',
    title: 'Креативные решения',
    description: 'Уникальные формы и конфигурации LED-дисплеев для создания впечатляющих инсталляций',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/creative-displays'
  },
  {
    id: 'fine-pitch',
    title: 'Fine Pitch дисплеи',
    description: 'Высокоплотные LED-дисплеи с минимальным шагом пикселей для детализированного изображения',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/fine-pitch'
  },
  {
    id: 'transparent-displays',
    title: 'Прозрачные дисплеи',
    description: 'Инновационные прозрачные LED-дисплеи для создания современных витрин и инсталляций',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/transparent-displays'
  },
  {
    id: 'curved-displays',
    title: 'Изогнутые дисплеи',
    description: 'Гибкие LED-дисплеи с возможностью изгиба для создания объемных визуальных эффектов',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/curved-displays'
  },
  {
    id: 'stadium-displays',
    title: 'Стадионные дисплеи',
    description: 'Крупноформатные LED-дисплеи для спортивных арен и больших площадок',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/stadium-displays'
  },
  {
    id: 'control-systems',
    title: 'Системы управления',
    description: 'Профессиональное программное обеспечение и оборудование для управления LED-дисплеями',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/control-systems'
  },
  {
    id: 'accessories',
    title: 'Аксессуары',
    description: 'Комплектующие, крепления и дополнительные элементы для LED-дисплеев',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/accessories'
  }
];

