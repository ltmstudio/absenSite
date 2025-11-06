"use client";

import { AboutHeroSection } from '../components/common/AboutHeroSection';
import { AboutCompanyBlock } from '../components/common/AboutCompanyBlock';
import { ContactForm } from '../components/common/ContactForm';

export function AboutPageLayout() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* О компании */}
      <AboutCompanyBlock />
      <section className="bg-black mx-auto">
          <div className="max-w-[90%]  sm:max-w-[80%] mx-auto">
          <ContactForm />
          </div>
          </section>
    </main>
  );
}
