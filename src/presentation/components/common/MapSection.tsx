"use client";

import { useTranslations } from "next-intl";

export function MapSection() {
  const t = useTranslations("map");

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("description")}
          </p>
        </div>

        {/* Google Maps iframe */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333.7832487193144!2d58.4246639!3d37.9567704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffe8379e133b3%3A0x35d7dac85f055634!2z0YPQuy4g0JrRg9C70LjQtdCy0LAgMjYsIEHFn2dhYmF0LCDQotGD0YDQutC80LXQvdC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1730203800000!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("mapTitle")}
            className="w-full h-96 md:h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
