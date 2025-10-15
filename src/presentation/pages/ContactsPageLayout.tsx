"use client";

import { ContactFormPage } from '../components/common/ContactFormPage';
import { MapSection } from '../components/common/MapSection';

export function ContactsPageLayout() {
  return (
    <main className="flex-grow bg-white mx-auto h-full flex  justify-center items-center">
      {/* Контактная форма и карта в одной секции */}
      <section className="max-w-[70%] mx-auto bg-white grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-20 md:gap-20 lg:gap-50 xl:gap-50 py-20">    
            {/* Контактная форма */}
            <div>
              <ContactFormPage />
            </div>
            
            {/* Карта */}
            <div>
              <MapSection />
            </div>
      </section>
    </main>
  );
}
