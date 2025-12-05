import { CategoryModel } from "../models/category_model";

export class CategoryDataSource {
    private static categories: CategoryModel[] = [
        {
            id: 'indoor-displays',
            title: 'indoor-displays.title',
            description: 'indoor-displays.description',
            backgroundImage: '/images/banners/led-1.png',
            href: '/categories/indoor-displays'
        },
        {
            id: 'outdoor-displays',
            title: 'outdoor-displays.title',
            description: 'outdoor-displays.description',
            backgroundImage: '/images/banners/absen_3.jpg',
            href: '/categories/outdoor-displays'
        },
        {
            id: 'rental-displays',
            title: 'rental-displays.title',
            description: 'rental-displays.description',
            backgroundImage: '/images/banners/arenda.jpg',
            href: '/categories/rental-displays'
        },
        {
            id: 'fine-pitch',
            title: 'fine-pitch.title',
            description: 'fine-pitch.description',
            backgroundImage: '/images/banners/absen_5.png',
            href: '/categories/fine-pitch'
        },
        {
            id: 'creative-displays',
            title: 'creative-displays.title',
            description: 'creative-displays.description',
            backgroundImage: '/images/banners/cr.jpg',
            href: '/categories/creative-displays'
        },
        {
            id: 'transparent-displays',
            title: 'transparent-displays.title',
            description: 'transparent-displays.description',
            backgroundImage: '/images/banners/opac.jpg',
            href: '/categories/transparent-displays'
        }
    ];

    static getCategories(): CategoryModel[] {
        return [...this.categories];
    }
}
