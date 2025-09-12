import { Category } from '../../domain/entities/Category';
import { Banner } from '../../domain/entities/Category';
import { CompanyInfo } from '../../domain/entities/Category';
import { CategoryRepository, BannerRepository, CompanyRepository } from '../../domain/repositories/CategoryRepository';

// Модели данных (DTO)
export interface CategoryModel {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  href: string;
}

export interface BannerModel {
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

export interface CompanyInfoModel {
  stats: Array<{
    number: string;
    label: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
}

// Источник данных - статические данные
export class StaticDataSource {
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
          id: 'creative-displays',
          title: 'Креативные LED-решения',
          description: 'Гибкие и модульные дисплеи для уникальных проектов. Создавайте впечатляющие визуальные инсталляции.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/creative-displays'
        },
        {
          id: 'fine-pitch',
          title: 'Fine Pitch LED-дисплеи',
          description: 'Высокоплотные дисплеи для детализированного изображения. Идеально для студий, шоурумов и корпоративных помещений.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/fine-pitch'
        },
        {
          id: 'transparent-displays',
          title: 'Прозрачные LED-дисплеи',
          description: 'Инновационные прозрачные дисплеи для витрин, магазинов и рекламных проектов с эффектом «невидимого экрана».',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/transparent-displays'
        },
        {
          id: 'curved-displays',
          title: 'Изогнутые LED-дисплеи',
          description: 'Гибкие LED-дисплеи для создания объемных визуальных эффектов и уникальных архитектурных решений.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/curved-displays'
        },
        {
          id: 'stadium-displays',
          title: 'Стадионные LED-дисплеи',
          description: 'Крупноформатные дисплеи для спортивных арен, мероприятий и трансляций в высоком разрешении.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/stadium-displays'
        },
        {
          id: 'control-systems',
          title: 'Системы управления LED',
          description: 'Программное обеспечение и оборудование для точного управления LED-дисплеями, мониторинга и настройки.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/control-systems'
        },
        {
          id: 'accessories',
          title: 'Аксессуары для LED-дисплеев',
          description: 'Крепления, комплектующие и дополнительные элементы для оптимальной работы и установки дисплеев.',
          backgroundImage: '/images/banners/led.png',
          href: '/categories/accessories'
        }
      ];
      
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
      
      private static companyInfo: CompanyInfoModel = {
        stats: [
          {
            number: "24",
            label: "года опыта",
            description: "в LED-технологиях"
          },
          {
            number: "60,000+",
            label: "довольных клиентов",
            description: "по всему миру"
          },
          {
            number: "140+",
            label: "стран",
            description: "где работают наши решения"
          }
        ],
        services: [
          {
            title: "Экономия бюджета",
            description: "Оптимальное соотношение цена/качество без переплат. Только проверенные решения Absen."
          },
          {
            title: "Быстрый результат",
            description: "Готовые решения под ваши задачи за минимальное время, от подбора до установки."
          },
          {
            title: "Надежность",
            description: "Проверенное оборудование с гарантией качества и долгим сроком службы."
          },
          {
            title: "Поддержка 24/7",
            description: "Техническая помощь и консультации в любое время, когда вам это нужно."
          }
        ]
      };
      

  static getCategories(): CategoryModel[] {
    return [...this.categories];
  }

  static getBanners(): BannerModel[] {
    return [...this.banners];
  }

  static getCompanyInfo(): CompanyInfoModel {
    return { ...this.companyInfo };
  }
}
