// Design System - Централизованная система цветов
export const theme = {
  // Основные цвета из CSS переменных
  colors: {
    // Семантические цвета
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    muted: 'var(--muted)',
    'muted-foreground': 'var(--muted-foreground)',
    border: 'var(--border)',
    input: 'var(--input)',
    
    // Основные цвета
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary-foreground)',
    },
    secondary: {
      DEFAULT: 'var(--secondary)',
      foreground: 'var(--secondary-foreground)',
    },
    accent: {
      DEFAULT: 'var(--accent)',
      foreground: 'var(--accent-foreground)',
    },
    destructive: {
      DEFAULT: 'var(--destructive)',
      foreground: 'var(--destructive-foreground)',
    },
    ring: 'var(--ring)',
    
    // LED-специфичные цвета
    led: {
      primary: 'var(--led-primary)',
      secondary: 'var(--led-secondary)',
      accent: 'var(--led-accent)',
      success: 'var(--led-success)',
      warning: 'var(--led-warning)',
    },
    
    // Дополнительные цвета
    lightGray: 'var(--ligtGray)',
    overlay: 'var(--overlay)',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};

// Предустановленные стили для компонентов
export const componentStyles = {
  // Кнопки
  button: {
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md',
    secondary: 'border-2 border-border hover:border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out hover:bg-secondary hover:shadow-lg hover:shadow-border/30 hover:-translate-y-0.5 active:translate-y-0',
    white: 'bg-background hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md',
    ghost: 'text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-all duration-200 ease-out hover:bg-secondary hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0',
  },
  
  // Заголовки
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight',
    h2: 'text-3xl md:text-4xl font-bold text-foreground leading-tight',
    h3: 'text-2xl md:text-3xl font-semibold text-foreground leading-tight',
    h4: 'text-xl md:text-2xl font-semibold text-foreground leading-tight',
  },
  
  // Текст
  text: {
    body: 'text-lg text-muted-foreground leading-relaxed',
    small: 'text-sm text-muted-foreground leading-relaxed',
    caption: 'text-xs text-muted leading-relaxed',
  },
  
  // Контейнеры
  container: {
    base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-full mx-auto px-4 sm:px-6 lg:px-8',
  },
  
  // Сетки
  grid: {
    '3-6-3': 'grid grid-cols-12 gap-6',
    '4-4-4': 'grid grid-cols-12 gap-6',
    '6-6': 'grid grid-cols-12 gap-6',
    '3-3-3-3': 'grid grid-cols-12 gap-6',
  },
  
  // Карточки
  card: {
    base: 'bg-background rounded-lg shadow-md border border-border p-6',
    elevated: 'bg-background rounded-lg shadow-lg border border-border p-6',
    flat: 'bg-background rounded-lg border border-border p-6',
  },
  
  // Секции
  section: {
    base: 'py-16',
    large: 'py-20',
    small: 'py-12',
  },
  
  // Фоновые цвета
  background: {
    primary: 'bg-background',
    secondary: 'bg-secondary',
    dark: 'bg-foreground', // Используем семантический цвет foreground
    accent: 'bg-accent',
    muted: 'bg-muted',
    transparent: 'bg-transparent',
    overlay: 'bg-overlay',
  }
};

// Утилиты для быстрого применения стилей
export const utils = {
  // Центрирование
  center: 'flex items-center justify-center',
  centerText: 'text-center',
  
  // Отступы
  spacing: {
    section: 'py-16',
    sectionLarge: 'py-20',
    sectionSmall: 'py-12',
  },
  
  // Флекс
  flex: {
    between: 'flex items-center justify-between',
    center: 'flex items-center justify-center',
    start: 'flex items-center justify-start',
    end: 'flex items-center justify-end',
  }
};

// Функция для комбинирования стилей секций
export const createSectionStyles = (background: keyof typeof componentStyles.background, padding: 'base' | 'large' | 'small' = 'base') => {
  return `${componentStyles.section[padding]} ${componentStyles.background[background]}`;
};

// Утилиты для работы с цветами
export const colorUtils = {
  // Получить CSS переменную цвета
  getColorVar: (colorName: string) => `var(--${colorName})`,
  
  // Создать класс Tailwind с цветом
  createColorClass: (property: 'bg' | 'text' | 'border', colorName: string) => `${property}-${colorName}`,
  
  // Создать класс с CSS переменной
  createVarClass: (property: 'bg' | 'text' | 'border', varName: string) => `${property}-[var(--${varName})]`,
  
  // Семантические цвета для разных состояний
  semantic: {
    success: 'text-led-success',
    warning: 'text-led-warning',
    error: 'text-destructive',
    info: 'text-led-accent',
  },
  
  // Цвета для разных типов контента
  content: {
    heading: 'text-foreground',
    body: 'text-muted-foreground',
    caption: 'text-muted',
    link: 'text-primary hover:text-primary/80',
  }
};
