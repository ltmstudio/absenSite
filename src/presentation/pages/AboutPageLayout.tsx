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
      <ContactForm />
    </main>
  );
}
