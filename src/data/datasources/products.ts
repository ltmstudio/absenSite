import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: 'hc-v3',
    name: 'Серия НС V3',
    description: 'Интеллектуальный дисплей высокого разрешения с тыльным обслуживанием',
    categoryId: 'indoor-displays',
    heroImage: '/images/banners/absen_1.jpg',
    slogan: 'Яркость для любых условий',
    technicalSpecs: [
      { name: 'Шаг пикселя', value: '2.5', unit: 'мм' },
      { name: 'Яркость', value: '6000', unit: 'кд/м²' },
      { name: 'Контрастность', value: '10000:1' },
      { name: 'Угол обзора', value: '160°' },
      { name: 'Частота обновления', value: '3840', unit: 'Гц' }
    ],
    advantages: [
      {
        id: '1',
        icon: '⚡',
        title: 'Высокая яркость',
        value: '6000',
        description: 'Обеспечивает четкое изображение даже при ярком освещении'
      },
      {
        id: '2',
        icon: '🔧',
        title: 'Легкое обслуживание',
        value: '',
        description: 'Тыльное обслуживание для удобства монтажа и ремонта'
      }
    ],
    applications: [
      {
        id: '1',
        icon: '🏢',
        title: 'Офисные здания',
        description: 'Информационные дисплеи в корпоративных центрах'
      },
      {
        id: '2',
        icon: '🛍️',
        title: 'Торговые центры',
        description: 'Рекламные экраны и навигационные системы'
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'Какова гарантия на дисплей?',
        answer: 'Гарантия составляет 3 года на основные компоненты.'
      }
    ]
  },
  {
    id: 'outdoor-premium',
    name: 'Outdoor Premium',
    description: 'Уличный дисплей премиум-класса с защитой от погодных условий',
    categoryId: 'outdoor-displays',
    heroImage: '/images/banners/absen_2.jpg',
    slogan: 'Надежность под открытым небом',
    technicalSpecs: [
      { name: 'Шаг пикселя', value: '4.8', unit: 'мм' },
      { name: 'Яркость', value: '8000', unit: 'кд/м²' },
      { name: 'Контрастность', value: '15000:1' },
      { name: 'Защита', value: 'IP65' }
    ],
    advantages: [
      {
        id: '1',
        icon: '🛡️',
        title: 'Защита IP65',
        value: '',
        description: 'Полная защита от пыли и воды'
      }
    ],
    applications: [
      {
        id: '1',
        icon: '🏙️',
        title: 'Уличная реклама',
        description: 'Билборды и рекламные щиты'
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'Работает ли дисплей зимой?',
        answer: 'Да, дисплей работает в диапазоне от -40°C до +60°C.'
      }
    ]
  }
];
