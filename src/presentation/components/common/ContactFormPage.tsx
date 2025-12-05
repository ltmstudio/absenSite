"use client";

import { useState } from "react";
import { Button } from "../../../shared/ui/components";
import { useTranslations } from "next-intl";

export function ContactFormPage() {
  const t = useTranslations("contactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          {t("title")}
        </h2>
        <h3 className="text-2xl font-light mb-6 text-gray-700">
          {t("subtitle")}
        </h3>
        <p className="text-base text-gray-600">{t("description")}</p>
      </div>

      {/* Form */}
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-8"
        >
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                {t("name")}
              </label>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                  placeholder={t("namePlaceholder")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                {t("company")}
              </label>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                  placeholder={t("companyPlaceholder")}
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                {t("email")}
              </label>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                  placeholder={t("emailPlaceholder")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                {t("phone")}
              </label>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                  placeholder={t("phonePlaceholder")}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              {t("message")}
            </label>
            <div className="border-b border-gray-300 pb-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>
          </div>

          {/* Privacy + Button */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between pt-8">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 bg-transparent border border-gray-400 rounded"
              />
              <label
                htmlFor="privacy"
                className="text-sm text-gray-600"
              >
                {t("privacy")}
              </label>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              className="px-8"
            >
              {t("submit")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
