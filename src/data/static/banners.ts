export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
}

export const absenBanners: Banner[] = [
  {
    id: 'rental-solutions',
    title: 'Решения Absen для аренды и сцены',
    subtitle: 'Профессиональные LED-дисплеи',
    description: 'Мобильные и надежные LED-дисплеи для мероприятий, концертов и временных установок. Быстрая сборка, высокое качество изображения.',
    buttonText: 'Узнать больше',
    buttonLink: '/solutions/rental',
    backgroundImage: '/images/banners/led.png',
    backgroundColor: '#1f2937',
    textColor: '#ffffff'
  },
  {
    id: 'all-in-one-display',
    title: 'Экран «все-в-одном»',
    subtitle: 'Интегрированные решения',
    description: 'Комплексные LED-решения с встроенной системой управления, обработки сигнала и питания. Максимальная простота установки и эксплуатации.',
    buttonText: 'Смотреть решения',
    buttonLink: '/solutions/all-in-one',
    backgroundImage: '/images/banners/absen-a2709.png',
    backgroundColor: '#374151',
    textColor: '#ffffff'
  },
  {
    id: 'micro-led',
    title: 'МикроLED технологии',
    subtitle: 'Следующее поколение дисплеев',
    description: 'Инновационные микроLED дисплеи с невероятной плотностью пикселей, идеальной цветопередачей и энергоэффективностью.',
    buttonText: 'Изучить технологии',
    buttonLink: '/technologies/micro-led',
    backgroundImage: '/images/banners/led.png',
    backgroundColor: '#111827',
    textColor: '#ffffff'
  },
  {
    id: 'outdoor-solutions',
    title: 'Уличные LED-решения',
    subtitle: 'Для любых погодных условий',
    description: 'Прочные и надежные LED-дисплеи для наружного использования. Защита от влаги, пыли и экстремальных температур.',
    buttonText: 'Выбрать решение',
    buttonLink: '/solutions/outdoor',
    backgroundImage: '/images/banners/absen-a2709.png',
    backgroundColor: '#1e40af',
    textColor: '#ffffff'
  },
  {
    id: 'creative-displays',
    title: 'Креативные LED-инсталляции',
    subtitle: 'Уникальные формы и конфигурации',
    description: 'Создавайте впечатляющие визуальные инсталляции с помощью гибких и модульных LED-дисплеев любых форм и размеров.',
    buttonText: 'Посмотреть проекты',
    buttonLink: '/projects/creative',
    backgroundImage: '/images/banners/led.png',
    backgroundColor: '#7c3aed',
    textColor: '#ffffff'
  }
];

