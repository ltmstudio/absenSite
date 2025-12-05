"use client";

import { useState } from "react";
import { Button } from "../../../shared/ui/components";
import { createSectionStyles } from "../../../shared/theme/theme";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contactDark");

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
    <section className={`${createSectionStyles("dark", "large")} bg-black text-white`}>
      <div className="max-w-[100%] w-full mx-auto px-4">

        {/* Header */}
        <div className="text-left mb-16 flex flex-col md:flex-row justify-between w-full">
          <div>
            <h2 className="text-6xl font-bold mb-4 text-background text-center md:text-left">
              {t("title")}
            </h2>
            <h3 className="text-3xl font-light mb-8 text-background text-center md:text-left">
              {t("subtitle")}
            </h3>
          </div>
          <div className="flex-1"></div>
          <div className="flex-2 text-center md:text-right text-lg mx-auto md:mx-0">
            <p className="text-background/80">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mx-auto">
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
                <label className="block text-sm font-medium mb-2 text-background/80">
                  {t("name")}
                </label>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                   
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  {t("company")}
                </label>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                   
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  {t("email")}
                </label>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  {t("phone")}
                </label>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-background/80">
                {t("message")}
              </label>
              <div className="border-b border-gray-600 pb-2">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
                 
                />
              </div>
            </div>

            {/* Privacy + Submit */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between pt-8">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 bg-transparent border border-white rounded"
                />
                <label htmlFor="privacy" className="text-sm text-background/80">
                  {t("privacy")}
                </label>
              </div>

              <Button
                variant="white"
                size="md"
                onClick={handleSubmit}
                className="px-8"
              >
                {t("submit")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
