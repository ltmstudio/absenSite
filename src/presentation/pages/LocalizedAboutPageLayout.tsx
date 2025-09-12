"use client";

import { useTranslations } from 'next-intl';
import { AboutHeroSection } from '../components/common/AboutHeroSection';
import { AboutCompanyBlock } from '../components/common/AboutCompanyBlock';

export function LocalizedAboutPageLayout() {
  const t = useTranslations('pages.about');

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* О компании */}
      <AboutCompanyBlock />
      

    </main>
  );
}
