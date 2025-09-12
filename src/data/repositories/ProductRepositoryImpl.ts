import { Product, ProductAdvantage, ProductApplication, ProductCase, ProductFAQ, TechnicalSpecification } from '../../domain/entities/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';

export class ProductRepositoryImpl implements ProductRepository {
  async getAll(): Promise<Product[]> {
    // Здесь будет логика получения всех продуктов
    return [];
  }

  async getById(id: string): Promise<Product | null> {
    // Здесь будет логика получения продукта по ID
    const products = this.getStaticProducts();
    return products.find(product => product.id === id) || null;
  }

  async getByCategory(categoryId: string): Promise<Product[]> {
    const products = this.getStaticProducts();
    return products.filter(product => product.categoryId === categoryId);
  }

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async search(query: string): Promise<Product[]> {
    const products = this.getStaticProducts();
    return products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  private getStaticProducts(): Product[] {
    return [
      // Indoor Displays
      {
        id: 'hc-v3',
        name: 'Серия НС V3',
        description: 'Интеллектуальный дисплей высокого разрешения с тыльным обслуживанием',
        categoryId: 'indoor-displays',
        heroImage: '/images/banners/absen_1.jpg',
        slogan: 'Яркость для любых условий',
        images: ['/images/banners/absen_1.jpg', '/images/banners/absen_2.jpg'],
        advantages: [
          { id: 'brightness', icon: '☀️', title: 'Яркость', description: 'Высокая яркость для четкого изображения', value: '5000 nits' },
          { id: 'resolution', icon: '📺', title: 'Разрешение', description: 'Высокое разрешение для детализированного изображения', value: 'P2.5' },
          { id: 'efficiency', icon: '⚡', title: 'Энергоэффективность', description: 'Низкое энергопотребление', value: '150W/m²' },
          { id: 'durability', icon: '🛡️', title: 'Устойчивость', description: 'Защита от влаги и пыли', value: 'IP65' },
          { id: 'installation', icon: '🔧', title: 'Простота установки', description: 'Легкая и быстрая установка', value: 'Быстрая сборка' }
        ],
        applications: [
          { id: 'stages', icon: '🎤', title: 'Сцены и концерты', description: 'Идеально для сцены и концертов', examples: ['Концертные залы', 'Театры', 'Конференц-залы'] },
          { id: 'retail', icon: '🏬', title: 'Розница', description: 'Эффективная реклама в магазинах', examples: ['Торговые центры', 'Магазины', 'Витрины'] },
          { id: 'sports', icon: '🏟️', title: 'Спорт', description: 'Динамичные спортивные трансляции', examples: ['Стадионы', 'Спортивные залы', 'Арены'] },
          { id: 'broadcast', icon: '🎥', title: 'Трансляции', description: 'Профессиональные трансляции', examples: ['Студии', 'Новостные каналы', 'События'] },
          { id: 'offices', icon: '🏢', title: 'Офисы', description: 'Корпоративные презентации', examples: ['Офисы', 'Банки', 'Корпоративные центры'] }
        ],
        cases: [
          { id: 'mall-case', title: 'LED-экран Absen HC V3 в торговом центре', description: 'Установлен в крупном торговом центре для рекламы и информации', image: '/images/banners/absen_1.jpg', location: 'Москва, ТЦ "Мега"', specifications: ['Размер: 5x3м', 'Яркость: 5000 nits', 'Работает при +40°C'] }
        ],
        faqs: [
          { id: 'weather', question: 'Можно ли использовать экран на улице при дожде?', answer: 'Да, экран имеет защиту IP65, что позволяет использовать его на улице в любую погоду.' },
          { id: 'maintenance', question: 'Как часто нужно обслуживать?', answer: 'Рекомендуется профилактическое обслуживание раз в 6 месяцев для обеспечения оптимальной работы.' },
          { id: 'warranty', question: 'Есть ли гарантия и поддержка?', answer: 'Предоставляется гарантия 3 года и круглосуточная техническая поддержка.' }
        ],
        specifications: [
          { name: 'Размер модуля', value: '320x160', unit: 'мм' },
          { name: 'Шаг пикселя', value: '2.5', unit: 'мм' },
          { name: 'Яркость', value: '5000', unit: 'nits' },
          { name: 'Угол обзора', value: '160', unit: '°' },
          { name: 'Вес', value: '12', unit: 'кг/м²' },
          { name: 'Энергопотребление', value: '150', unit: 'W/м²' },
          { name: 'Срок службы', value: '100000', unit: 'часов' }
        ],
        technicalSpecs: [
          { name: 'Размер модуля', value: '320x160', unit: 'мм' },
          { name: 'Шаг пикселя', value: '2.5', unit: 'мм' },
          { name: 'Яркость', value: '5000', unit: 'nits' },
          { name: 'Угол обзора', value: '160', unit: '°' },
          { name: 'Вес', value: '12', unit: 'кг/м²' },
          { name: 'Энергопотребление', value: '150', unit: 'W/м²' },
          { name: 'Срок службы', value: '100000', unit: 'часов' }
        ],
        catalogPdf: '/catalogs/hc-v3-catalog.pdf'
      },
      {
        id: 'jd-h',
        name: 'Серии JD-H',
        description: 'Новый стандарт визуальных технологий: инновационные прозрачные дисплеи',
        categoryId: 'indoor-displays',
        heroImage: '/images/banners/absen_2.jpg',
        slogan: 'Прозрачность нового уровня',
        images: ['/images/banners/absen_2.jpg', '/images/banners/absen_3.jpg'],
        advantages: [
          { id: 'transparency', icon: '👁️', title: 'Прозрачность', description: 'Высокая прозрачность для витрин', value: '85%' },
          { id: 'brightness', icon: '☀️', title: 'Яркость', description: 'Достаточная яркость для дневного света', value: '3500 nits' },
          { id: 'thin', icon: '📏', title: 'Тонкость', description: 'Ультратонкий дизайн', value: '12 мм' },
          { id: 'flexibility', icon: '🔄', title: 'Гибкость', description: 'Гибкие формы и размеры', value: 'Изогнутые формы' }
        ],
        applications: [
          { id: 'retail', icon: '🏬', title: 'Розница', description: 'Идеально для витрин магазинов', examples: ['Витрины', 'Магазины', 'Торговые центры'] },
          { id: 'offices', icon: '🏢', title: 'Офисы', description: 'Современные офисные решения', examples: ['Офисы', 'Банки', 'Корпоративные центры'] }
        ],
        cases: [
          { id: 'showroom-case', title: 'Прозрачный дисплей в шоуруме', description: 'Инновационное решение для демонстрации продукции', image: '/images/banners/absen_2.jpg', location: 'Санкт-Петербург, Шоурум', specifications: ['Прозрачность: 85%', 'Толщина: 12мм', 'Изогнутая форма'] }
        ],
        faqs: [
          { id: 'transparency-question', question: 'Насколько прозрачен экран?', answer: 'Экран имеет прозрачность 85%, что позволяет видеть объекты за ним.' },
          { id: 'installation-question', question: 'Сложно ли установить?', answer: 'Установка простая благодаря ультратонкому дизайну и специальным креплениям.' }
        ],
        specifications: [
          { name: 'Прозрачность', value: '85', unit: '%' },
          { name: 'Толщина', value: '12', unit: 'мм' },
          { name: 'Яркость', value: '3500', unit: 'nits' },
          { name: 'Угол обзора', value: '140', unit: '°' },
          { name: 'Вес', value: '8', unit: 'кг/м²' }
        ],
        technicalSpecs: [
          { name: 'Прозрачность', value: '85', unit: '%' },
          { name: 'Толщина', value: '12', unit: 'мм' },
          { name: 'Яркость', value: '3500', unit: 'nits' },
          { name: 'Угол обзора', value: '140', unit: '°' },
          { name: 'Вес', value: '8', unit: 'кг/м²' }
        ]
      },
      
      // Outdoor Displays
      {
        id: 'outdoor-premium',
        name: 'Outdoor Premium Series',
        description: 'Надежные уличные дисплеи с защитой от влаги и экстремальных температур',
        categoryId: 'outdoor-displays',
        heroImage: '/images/banners/absen_3.jpg',
        slogan: 'Надежность в любую погоду',
        images: ['/images/banners/absen_3.jpg', '/images/banners/absen_4.jpg'],
        advantages: [
          { id: 'weather', icon: '🌧️', title: 'Защита от погоды', description: 'Полная защита от дождя, снега и ветра', value: 'IP65' },
          { id: 'temperature', icon: '🌡️', title: 'Температурная устойчивость', description: 'Работает от -40°C до +60°C', value: '-40°C до +60°C' },
          { id: 'brightness', icon: '☀️', title: 'Высокая яркость', description: 'Достаточная яркость для солнечного света', value: '8000 nits' },
          { id: 'durability', icon: '🛡️', title: 'Долговечность', description: 'Срок службы до 10 лет', value: '10 лет' }
        ],
        applications: [
          { id: 'streets', icon: '🛣️', title: 'Улицы и дороги', description: 'Информационные табло и реклама', examples: ['Автодороги', 'Пешеходные зоны', 'Площади'] },
          { id: 'buildings', icon: '🏢', title: 'Здания', description: 'Фасадные дисплеи', examples: ['Офисные здания', 'Торговые центры', 'Отели'] }
        ],
        cases: [
          { id: 'highway-case', title: 'LED-экран на автомагистрали', description: 'Информационное табло на оживленной трассе', image: '/images/banners/absen_3.jpg', location: 'МКАД, Москва', specifications: ['Размер: 8x4м', 'Яркость: 8000 nits', 'Работает при -30°C'] }
        ],
        faqs: [
          { id: 'weather-faq', question: 'Можно ли использовать зимой?', answer: 'Да, экран работает при температуре до -40°C и имеет защиту от снега.' },
          { id: 'sun-faq', question: 'Видно ли изображение на солнце?', answer: 'Высокая яркость 8000 nits обеспечивает отличную видимость даже в яркий солнечный день.' }
        ],
        specifications: [
          { name: 'Защита', value: 'IP65', unit: '' },
          { name: 'Температура', value: '-40 до +60', unit: '°C' },
          { name: 'Яркость', value: '8000', unit: 'nits' },
          { name: 'Вес', value: '25', unit: 'кг/м²' },
          { name: 'Срок службы', value: '100000', unit: 'часов' }
        ],
        technicalSpecs: [
          { name: 'Защита', value: 'IP65', unit: '' },
          { name: 'Температура', value: '-40 до +60', unit: '°C' },
          { name: 'Яркость', value: '8000', unit: 'nits' },
          { name: 'Вес', value: '25', unit: 'кг/м²' },
          { name: 'Срок службы', value: '100000', unit: 'часов' }
        ]
      },
      {
        id: 'stadium-pro',
        name: 'Stadium Pro',
        description: 'Крупноформатные дисплеи для спортивных арен и мероприятий',
        categoryId: 'outdoor-displays',
        heroImage: '/images/banners/absen_4.jpg',
        slogan: 'Масштаб и качество',
        images: ['/images/banners/absen_4.jpg', '/images/banners/absen_5.png'],
        advantages: [
          { id: 'size', icon: '📏', title: 'Большой размер', description: 'Дисплеи до 1000 м²', value: 'до 1000 м²' },
          { id: 'distance', icon: '👁️', title: 'Дальность видимости', description: 'Видимость с расстояния до 500м', value: 'до 500м' },
          { id: 'brightness', icon: '☀️', title: 'Максимальная яркость', description: 'Яркость для стадионов', value: '10000 nits' },
          { id: 'reliability', icon: '⚡', title: 'Надежность', description: 'Бесперебойная работа 24/7', value: '24/7' }
        ],
        applications: [
          { id: 'stadiums', icon: '🏟️', title: 'Стадионы', description: 'Основные табло и информационные экраны', examples: ['Футбольные стадионы', 'Спортивные арены', 'Олимпийские объекты'] },
          { id: 'events', icon: '🎪', title: 'Мероприятия', description: 'Концерты и фестивали', examples: ['Концерты', 'Фестивали', 'Корпоративные события'] }
        ],
        cases: [
          { id: 'stadium-case', title: 'Главное табло стадиона', description: 'Центральное табло футбольного стадиона', image: '/images/banners/absen_4.jpg', location: 'Стадион "Лужники", Москва', specifications: ['Размер: 20x10м', 'Яркость: 10000 nits', 'HD качество'] }
        ],
        faqs: [
          { id: 'size-faq', question: 'Какой максимальный размер экрана?', answer: 'Мы можем создать экраны площадью до 1000 м² с любым соотношением сторон.' },
          { id: 'maintenance-faq', question: 'Как обслуживать большой экран?', answer: 'Предоставляется полное техническое обслуживание с выездом специалистов.' }
        ],
        specifications: [
          { name: 'Максимальный размер', value: '1000', unit: 'м²' },
          { name: 'Яркость', value: '10000', unit: 'nits' },
          { name: 'Дальность видимости', value: '500', unit: 'м' },
          { name: 'Разрешение', value: 'HD', unit: '' },
          { name: 'Вес', value: '30', unit: 'кг/м²' }
        ],
        technicalSpecs: [
          { name: 'Максимальный размер', value: '1000', unit: 'м²' },
          { name: 'Яркость', value: '10000', unit: 'nits' },
          { name: 'Дальность видимости', value: '500', unit: 'м' },
          { name: 'Разрешение', value: 'HD', unit: '' },
          { name: 'Вес', value: '30', unit: 'кг/м²' }
        ]
      },

      // Rental Displays
      {
        id: 'rental-mobile',
        name: 'Rental Mobile Series',
        description: 'Мобильные LED-дисплеи для мероприятий и временных инсталляций',
        categoryId: 'rental-displays',
        heroImage: '/images/banners/absen_5.png',
        slogan: 'Мобильность и качество',
        images: ['/images/banners/absen_5.png', '/images/banners/absen_6.jpg'],
        advantages: [
          { id: 'mobility', icon: '🚚', title: 'Мобильность', description: 'Быстрая установка и демонтаж', value: '2 часа' },
          { id: 'flexibility', icon: '🔄', title: 'Гибкость', description: 'Модульная конструкция', value: 'Любые размеры' },
          { id: 'quality', icon: '⭐', title: 'Качество', description: 'HD качество изображения', value: 'HD' },
          { id: 'reliability', icon: '🛡️', title: 'Надежность', description: 'Стабильная работа', value: '99.9%' }
        ],
        applications: [
          { id: 'events', icon: '🎪', title: 'Мероприятия', description: 'Концерты, фестивали, корпоративы', examples: ['Концерты', 'Фестивали', 'Корпоративы'] },
          { id: 'exhibitions', icon: '🏢', title: 'Выставки', description: 'Выставочные стенды и презентации', examples: ['Выставки', 'Конференции', 'Презентации'] }
        ],
        cases: [
          { id: 'concert-case', title: 'Концертная площадка', description: 'Мобильный экран для концерта', image: '/images/banners/absen_5.png', location: 'Парк Горького, Москва', specifications: ['Размер: 6x4м', 'HD качество', 'Установка за 2 часа'] }
        ],
        faqs: [
          { id: 'setup-faq', question: 'Сколько времени занимает установка?', answer: 'Стандартная установка занимает 2-3 часа в зависимости от размера экрана.' },
          { id: 'transport-faq', question: 'Как транспортируется экран?', answer: 'Экран поставляется в специальных контейнерах и может быть доставлен в любую точку города.' }
        ],
        specifications: [
          { name: 'Время установки', value: '2-3', unit: 'часа' },
          { name: 'Разрешение', value: 'HD', unit: '' },
          { name: 'Модульность', value: '100%', unit: '' },
          { name: 'Вес модуля', value: '15', unit: 'кг' },
          { name: 'Надежность', value: '99.9', unit: '%' }
        ],
        technicalSpecs: [
          { name: 'Время установки', value: '2-3', unit: 'часа' },
          { name: 'Разрешение', value: 'HD', unit: '' },
          { name: 'Модульность', value: '100%', unit: '' },
          { name: 'Вес модуля', value: '15', unit: 'кг' },
          { name: 'Надежность', value: '99.9', unit: '%' }
        ]
      },

      // Creative Displays
      {
        id: 'creative-flex',
        name: 'Creative Flex',
        description: 'Гибкие LED-дисплеи для уникальных архитектурных решений',
        categoryId: 'creative-displays',
        heroImage: '/images/banners/absen_6.jpg',
        slogan: 'Творчество без границ',
        images: ['/images/banners/absen_6.jpg', '/images/banners/absen-a2709.png'],
        advantages: [
          { id: 'flexibility', icon: '🔄', title: 'Гибкость', description: 'Изогнутые и сложные формы', value: '360°' },
          { id: 'creativity', icon: '🎨', title: 'Креативность', description: 'Уникальные дизайнерские решения', value: 'Без ограничений' },
          { id: 'quality', icon: '⭐', title: 'Качество', description: 'Высокое качество изображения', value: '4K' },
          { id: 'durability', icon: '🛡️', title: 'Прочность', description: 'Устойчивость к деформации', value: 'Высокая' }
        ],
        applications: [
          { id: 'architecture', icon: '🏗️', title: 'Архитектура', description: 'Интеграция в здания и сооружения', examples: ['Фасады зданий', 'Колонны', 'Арки'] },
          { id: 'art', icon: '🎭', title: 'Искусство', description: 'Интерактивные арт-инсталляции', examples: ['Музеи', 'Галереи', 'Публичные пространства'] }
        ],
        cases: [
          { id: 'building-case', title: 'Фасадное решение', description: 'Интеграция LED-экрана в фасад здания', image: '/images/banners/absen_6.jpg', location: 'Деловой центр, Москва', specifications: ['Изогнутая форма', '4K качество', 'Интеграция в архитектуру'] }
        ],
        faqs: [
          { id: 'shape-faq', question: 'Какие формы возможны?', answer: 'Мы можем создать экраны любой формы - от простых изгибов до сложных архитектурных решений.' },
          { id: 'integration-faq', question: 'Как интегрируется в здание?', answer: 'Экран разрабатывается индивидуально под архитектуру здания с учетом всех технических требований.' }
        ],
        specifications: [
          { name: 'Радиус изгиба', value: '360', unit: '°' },
          { name: 'Разрешение', value: '4K', unit: '' },
          { name: 'Толщина', value: '20', unit: 'мм' },
          { name: 'Вес', value: '18', unit: 'кг/м²' },
          { name: 'Прочность', value: 'Высокая', unit: '' }
        ],
        technicalSpecs: [
          { name: 'Радиус изгиба', value: '360', unit: '°' },
          { name: 'Разрешение', value: '4K', unit: '' },
          { name: 'Толщина', value: '20', unit: 'мм' },
          { name: 'Вес', value: '18', unit: 'кг/м²' },
          { name: 'Прочность', value: 'Высокая', unit: '' }
        ]
      },

      // Fine Pitch
      {
        id: 'micro-led-pro',
        name: 'Micro LED Pro',
        description: 'Инновационные дисплеи с невероятной плотностью пикселей',
        categoryId: 'fine-pitch',
        heroImage: '/images/banners/absen-a2709.png',
        slogan: 'Совершенство в деталях',
        images: ['/images/banners/absen-a2709.png', '/images/banners/led.png'],
        advantages: [
          { id: 'density', icon: '🔍', title: 'Плотность пикселей', description: 'Невероятно высокая плотность', value: 'P0.9' },
          { id: 'quality', icon: '⭐', title: 'Качество', description: 'Кристально четкое изображение', value: '4K+' },
          { id: 'viewing', icon: '👁️', title: 'Угол обзора', description: 'Отличная видимость с любого угла', value: '180°' },
          { id: 'efficiency', icon: '⚡', title: 'Энергоэффективность', description: 'Низкое энергопотребление', value: '100W/m²' }
        ],
        applications: [
          { id: 'broadcast', icon: '📺', title: 'Трансляции', description: 'Студии и телецентры', examples: ['Студии', 'Телецентры', 'Новостные каналы'] },
          { id: 'control', icon: '🎛️', title: 'Центры управления', description: 'Мониторинг и управление', examples: ['Центры управления', 'Диспетчерские', 'Ситуационные центры'] }
        ],
        cases: [
          { id: 'studio-case', title: 'Студийный экран', description: 'Профессиональный экран для телестудии', image: '/images/banners/absen-a2709.png', location: 'Телецентр "Останкино"', specifications: ['P0.9 пиксель', '4K качество', 'Студийное качество'] }
        ],
        faqs: [
          { id: 'pixel-faq', question: 'Насколько мелкий пиксель?', answer: 'Шаг пикселя составляет всего 0.9мм, что обеспечивает невероятную детализацию.' },
          { id: 'distance-faq', question: 'С какого расстояния видно?', answer: 'Экран можно рассматривать с расстояния менее 1 метра без потери качества.' }
        ],
        specifications: [
          { name: 'Шаг пикселя', value: '0.9', unit: 'мм' },
          { name: 'Разрешение', value: '4K+', unit: '' },
          { name: 'Угол обзора', value: '180', unit: '°' },
          { name: 'Энергопотребление', value: '100', unit: 'W/м²' },
          { name: 'Толщина', value: '15', unit: 'мм' }
        ],
        technicalSpecs: [
          { name: 'Шаг пикселя', value: '0.9', unit: 'мм' },
          { name: 'Разрешение', value: '4K+', unit: '' },
          { name: 'Угол обзора', value: '180', unit: '°' },
          { name: 'Энергопотребление', value: '100', unit: 'W/м²' },
          { name: 'Толщина', value: '15', unit: 'мм' }
        ]
      },

      // Transparent Displays
      {
        id: 'transparent-clear',
        name: 'Transparent Clear',
        description: 'Прозрачные дисплеи для витрин и рекламных проектов',
        categoryId: 'transparent-displays',
        heroImage: '/images/banners/led.png',
        slogan: 'Прозрачность будущего',
        images: ['/images/banners/led.png', '/images/banners/absen_1.jpg'],
        advantages: [
          { id: 'transparency', icon: '👁️', title: 'Прозрачность', description: 'Максимальная прозрачность', value: '90%' },
          { id: 'thin', icon: '📏', title: 'Тонкость', description: 'Ультратонкий дизайн', value: '8 мм' },
          { id: 'brightness', icon: '☀️', title: 'Яркость', description: 'Достаточная яркость для витрин', value: '4000 nits' },
          { id: 'flexibility', icon: '🔄', title: 'Гибкость', description: 'Гибкие формы и размеры', value: 'Любые формы' }
        ],
        applications: [
          { id: 'retail', icon: '🏬', title: 'Розница', description: 'Витрины и торговые зоны', examples: ['Витрины', 'Магазины', 'Торговые центры'] },
          { id: 'offices', icon: '🏢', title: 'Офисы', description: 'Современные офисные решения', examples: ['Офисы', 'Банки', 'Корпоративные центры'] }
        ],
        cases: [
          { id: 'showcase-case', title: 'Умная витрина', description: 'Интерактивная витрина магазина', image: '/images/banners/led.png', location: 'ТЦ "Европейский", Москва', specifications: ['Прозрачность: 90%', 'Толщина: 8мм', 'Интерактивность'] }
        ],
        faqs: [
          { id: 'transparency-faq', question: 'Насколько прозрачен экран?', answer: 'Экран имеет прозрачность 90%, что позволяет видеть товары за ним.' },
          { id: 'interaction-faq', question: 'Можно ли взаимодействовать с экраном?', answer: 'Да, экран поддерживает сенсорное управление и жесты.' }
        ],
        specifications: [
          { name: 'Прозрачность', value: '90', unit: '%' },
          { name: 'Толщина', value: '8', unit: 'мм' },
          { name: 'Яркость', value: '4000', unit: 'nits' },
          { name: 'Угол обзора', value: '160', unit: '°' },
          { name: 'Вес', value: '6', unit: 'кг/м²' }
        ],
        technicalSpecs: [
          { name: 'Прозрачность', value: '90', unit: '%' },
          { name: 'Толщина', value: '8', unit: 'мм' },
          { name: 'Яркость', value: '4000', unit: 'nits' },
          { name: 'Угол обзора', value: '160', unit: '°' },
          { name: 'Вес', value: '6', unit: 'кг/м²' }
        ]
      }
    ];
  }
}
