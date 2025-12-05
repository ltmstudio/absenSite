import { BannerModel } from '../models/banner_model';

export class StaticDataSource {
  private static banners: BannerModel[] = [
    {
      id: 'rental-solutions',
      title: 'banners.rental-solutions.title',
      subtitle: 'banners.rental-solutions.subtitle',
      description: 'banners.rental-solutions.description',
      buttonText: 'banners.rental-solutions.buttonText',
      buttonLink: '/solutions/rental',
      backgroundImage: '/images/banners/absen_1.jpg',
      backgroundColor: 'var(--overlay)',
      textColor: 'var(--primary-foreground)',
    },
    {
      id: 'all-in-one-display',
      title: 'banners.all-in-one-display.title',
      subtitle: 'banners.all-in-one-display.subtitle',
      description: 'banners.all-in-one-display.description',
      buttonText: 'banners.all-in-one-display.buttonText',
      buttonLink: '/solutions/all-in-one',
      backgroundImage: '/images/banners/absen_2.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)',
    },
    {
      id: 'micro-led',
      title: 'banners.micro-led.title',
      subtitle: 'banners.micro-led.subtitle',
      description: 'banners.micro-led.description',
      buttonText: 'banners.micro-led.buttonText',
      buttonLink: '/technologies/micro-led',
      backgroundImage: '/images/banners/absen_4.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)',
    },
    {
      id: 'outdoor-solutions',
      title: 'banners.outdoor-solutions.title',
      subtitle: 'banners.outdoor-solutions.subtitle',
      description: 'banners.outdoor-solutions.description',
      buttonText: 'banners.outdoor-solutions.buttonText',
      buttonLink: '/solutions/outdoor',
      backgroundImage: '/images/banners/absen_3.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)',
    },
    {
      id: 'creative-displays',
      title: 'banners.creative-displays.title',
      subtitle: 'banners.creative-displays.subtitle',
      description: 'banners.creative-displays.description',
      buttonText: 'banners.creative-displays.buttonText',
      buttonLink: '/projects/creative',
      backgroundImage: '/images/banners/absen_6.jpg',
      backgroundColor: 'var(--led-secondary)',
      textColor: 'var(--primary-foreground)',
    },
  ];

  static getBanners(): BannerModel[] {
    return [...this.banners];
  }
}
