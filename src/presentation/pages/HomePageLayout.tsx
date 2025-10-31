"use client";

import { CategoriesSection } from '../components/category';
import { BannerSlider,  AboutCompanyBlock, ContactForm, HeroSection } from '../components/common';
import NewsBlock from '../components/common/NewsCarousel';


export function HomePageLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <section className="categories-section">
          <div className="max-w-[80%] mx-auto">
            <CategoriesSection />
          </div>
        </section>
        <section>
          <div className="max-w-[90%] sm:max-w-[80%] mx-auto">
              <NewsBlock />
          </div>
          
        </section>
        

        {/* Banner Slider Section */}
        <section>
          <div className="max-w-[90%] sm:max-w-[80%]  mx-auto ">
            <BannerSlider
              autoSlide={true}
              slideInterval={6000}
            />
          </div>
        </section>

        {/* Why Absen Section */}
        <section className="why-absen-section">
          <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[60%]  mx-auto">
            {/* <WhyAbsenBlock /> */}
          </div>
        </section>

        {/* About Company Section */}
        <AboutCompanyBlock />

        {/* Contact Form Section */}
       
        <section className="bg-black mx-auto">
          <div className="max-w-[90%]  sm:max-w-[80%] mx-auto">
          <ContactForm />
          </div>
          
        </section>
      </main>
    </div>
  );
}
