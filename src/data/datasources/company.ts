import { CompanyInfoModel } from "../models/company_model";

export class StaticDataSource {
  private static companyInfo: CompanyInfoModel = {
    stats: [
      {
        number: "24",
        label: "года опыта",
        description: "в LED-технологиях"
      },
      {
        number: "60,000+",
        label: "довольных клиентов",
        description: "по всему миру"
      },
      {
        number: "140+",
        label: "стран",
        description: "где работают наши решения"
      }
    ],
    services: [
      {
        title: "Экономия бюджета",
        description: "Оптимальное соотношение цена/качество без переплат. Только проверенные решения Absen."
      },
      {
        title: "Быстрый результат",
        description: "Готовые решения под ваши задачи за минимальное время, от подбора до установки."
      },
      {
        title: "Надежность",
        description: "Проверенное оборудование с гарантией качества и долгим сроком службы."
      },
      {
        title: "Поддержка 24/7",
        description: "Техническая помощь и консультации в любое время, когда вам это нужно."
      }
    ]
  };

  static getCompanyInfo(): CompanyInfoModel {
    return { ...this.companyInfo };
  }
}