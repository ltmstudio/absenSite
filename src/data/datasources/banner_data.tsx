import { BannerModel } from '../models/banner_model';

export class StaticDataSource {
    private static banners: BannerModel[] = [
    {
      id: 'rental-solutions',
      title: 'Absen для аренды и сцены',
      subtitle: 'Профессиональные LED-дисплеи',
      description: 'Мобильные LED-дисплеи для мероприятий, концертов и временных установок. Легко собрать, надежно и ярко.',
      buttonText: 'Узнать больше',
      buttonLink: '/solutions/rental',
      backgroundImage: '/images/banners/absen_1.jpg',
      backgroundColor: 'var(--overlay)',
      textColor: 'var(--primary-foreground)'
    },
    {
      id: 'all-in-one-display',
      title: 'Экран «все-в-одном» Absen',
      subtitle: 'Комплексное решение',
      description: 'Интегрированные LED-дисплеи с управлением и питанием в одном устройстве. Простота установки и эксплуатации.',
      buttonText: 'Смотреть решения',
      buttonLink: '/solutions/all-in-one',
      backgroundImage: '/images/banners/absen_2.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)'
    },
    {
      id: 'micro-led',
      title: 'МикроLED технологии Absen',
      subtitle: 'Следующее поколение дисплеев',
      description: 'Инновационные дисплеи с невероятной плотностью пикселей, идеальной цветопередачей и низким энергопотреблением.',
      buttonText: 'Изучить технологии',
      buttonLink: '/technologies/micro-led',
      backgroundImage: '/images/banners/absen_4.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)'
    },
    {
      id: 'outdoor-solutions',
      title: 'Уличные решения Absen',
      subtitle: 'Для любых погодных условий',
      description: 'Прочные дисплеи для улицы. Защита от влаги, пыли и экстремальных температур. Надежно 24/7.',
      buttonText: 'Выбрать решение',
      buttonLink: '/solutions/outdoor',
      backgroundImage: '/images/banners/absen_3.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)'
    },
    {
      id: 'creative-displays',
      title: 'Креативные LED-инсталляции Absen',
      subtitle: 'Уникальные формы и конфигурации',
      description: 'Создавайте впечатляющие инсталляции с гибкими и модульными дисплеями любых форм и размеров.',
      buttonText: 'Посмотреть проекты',
      buttonLink: '/projects/creative',
      backgroundImage: '/images/banners/absen_6.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)'
    }
 
  ];
  static getBanners(): BannerModel[] {
    return [...this.banners];
  }
};