"use client";

import Image from "next/image";
import { StaticDataSource } from '../../../data/datasources/company';
import { useTranslations } from "next-intl";

export function AboutCompanyBlock() {
  const t = useTranslations("aboutCompany");
  const tc = useTranslations("companyData");
  const companyInfo = StaticDataSource.getCompanyInfo();

  // Debug
  console.log('Company info:', companyInfo);

  if (!companyInfo || !companyInfo.stats || !companyInfo.services) {
    return (
      <section className="py-24 bg-gray-100">
        <div className="max-w-[100%] mx-auto px-4 text-center">
          <p className="text-gray-600">{t("loading")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-[90%] sm:max-w-[80%] mx-auto px-4 sm:px-6 md:px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.rich("headerTitle", {
              orange: (text) => <span className="text-orange-500">{text}</span>
            })}
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("headerSubtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Stats */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {t("statsTitle")}
              </h3>

              <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-6">
                {companyInfo.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      {stat.icon && (
                        <Image
                          src={stat.icon}
                          alt={stat.label}
                          width={75}
                          height={50}
                          style={{ zIndex: 999 }}
                          className="opacity-100 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                    </div>

                    <div className="relative">
                      <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>

                      <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                      {tc(stat.label)}
                      </div>

                      <div className="text-xs md:text-sm text-gray-500">
                      {tc(stat.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("missionTitle")}
                </h3>

                <p className="text-orange-100 text-lg leading-relaxed">
                  {t("missionText")}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {t("serviceTitle")}
              </h3>

              <div className="space-y-6">
                {companyInfo.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {tc(service.title)}
                        </h4>

                        <p className="text-gray-600 leading-relaxed">
                        {tc(service.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* CTA bottom */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-sm font-medium">{t("ctaBottom")}</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
