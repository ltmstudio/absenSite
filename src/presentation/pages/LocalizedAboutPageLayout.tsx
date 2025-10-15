"use client";

import { AboutHeroSection } from '../components/common/AboutHeroSection';
import { AboutCompanyBlock } from '../components/common/AboutCompanyBlock';

export function LocalizedAboutPageLayout() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* О компании */}
      <AboutCompanyBlock />
      

    </main>
  );
}
