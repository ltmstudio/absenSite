// data/datasources/products.ts
import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: 'hc-v3',
    categoryId: 'indoor-displays',
    heroImage: '/images/banners/absen_1.jpg',

    // i18n-ключи (namespace: "products")
    name: 'hc-v3.name',
    description: 'hc-v3.description',
    slogan: 'hc-v3.slogan',

    technicalSpecs: [
      {
        // products.hc-v3.technicalSpecs.pixelPitch.label / .unit
        name: 'hc-v3.technicalSpecs.pixelPitch',
        value: '2.5',
        unit: 'mm',
      },
      {
        // products.hc-v3.technicalSpecs.brightness.label / .unit
        name: 'hc-v3.technicalSpecs.brightness',
        value: '6000',
        unit: 'cdPerM2',
      },
      {
        // products.hc-v3.technicalSpecs.contrast.label
        name: 'hc-v3.technicalSpecs.contrast',
        value: '10000:1',
      },
      {
        // products.hc-v3.technicalSpecs.viewAngle.label / .unit
        name: 'hc-v3.technicalSpecs.viewAngle',
        value: '160',
        unit: 'degree',
      },
      {
        // products.hc-v3.technicalSpecs.refreshRate.label / .unit
        name: 'hc-v3.technicalSpecs.refreshRate',
        value: '3840',
        unit: 'hz',
      },
    ],

    advantages: [
      {
        id: '1',
        icon: '⚡',
        value: '6000',
        // products.hc-v3.advantages.1.title / .description
        title: 'hc-v3.advantages.1.title',
        description: 'hc-v3.advantages.1.description',
      },
      {
        id: '2',
        icon: '🔧',
        value: '',
        title: 'hc-v3.advantages.2.title',
        description: 'hc-v3.advantages.2.description',
      },
    ],

    applications: [
      {
        id: '1',
        icon: '🏢',
        title: 'hc-v3.applications.1.title',
        description: 'hc-v3.applications.1.description',
      },
      {
        id: '2',
        icon: '🛍️',
        title: 'hc-v3.applications.2.title',
        description: 'hc-v3.applications.2.description',
      },
    ],

    faqs: [
      {
        id: '1',
        question: 'hc-v3.faqs.1.question',
        answer: 'hc-v3.faqs.1.answer',
      },
    ],
  },

  {
    id: 'outdoor-premium',
    categoryId: 'outdoor-displays',
    heroImage: '/images/banners/absen_2.jpg',

    // i18n-ключи (namespace: "products")
    name: 'outdoor-premium.name',
    description: 'outdoor-premium.description',
    slogan: 'outdoor-premium.slogan',

    technicalSpecs: [
      {
        // products.outdoor-premium.technicalSpecs.pixelPitch.label / .unit
        name: 'outdoor-premium.technicalSpecs.pixelPitch',
        value: '4.8',
        unit: 'mm',
      },
      {
        // products.outdoor-premium.technicalSpecs.brightness.label / .unit
        name: 'outdoor-premium.technicalSpecs.brightness',
        value: '8000',
        unit: 'cdPerM2',
      },
      {
        // products.outdoor-premium.technicalSpecs.contrast.label
        name: 'outdoor-premium.technicalSpecs.contrast',
        value: '15000:1',
      },
      {
        // products.outdoor-premium.technicalSpecs.protection.label / .unit
        name: 'outdoor-premium.technicalSpecs.protection',
        value: 'IP65',
      },
    ],

    advantages: [
      {
        id: '1',
        icon: '🛡️',
        value: '',
        title: 'outdoor-premium.advantages.1.title',
        description: 'outdoor-premium.advantages.1.description',
      },
    ],

    applications: [
      {
        id: '1',
        icon: '🏙️',
        title: 'outdoor-premium.applications.1.title',
        description: 'outdoor-premium.applications.1.description',
      },
    ],

    faqs: [
      {
        id: '1',
        question: 'outdoor-premium.faqs.1.question',
        answer: 'outdoor-premium.faqs.1.answer',
      },
    ],
  },
];
