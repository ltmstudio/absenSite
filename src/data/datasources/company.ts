import { CompanyInfoModel } from "../models/company_model";

export class StaticDataSource {
  private static companyInfo: CompanyInfoModel = {
    stats: [
      {
        number: "24",
        label: "stats.1.label",
        description: "stats.1.description",
        icon: "/images/icons/calendar.png",
      },
      {
        number: "60,000+",
        label: "stats.2.label",
        description: "stats.2.description",
        icon: "/images/icons/hand3.png",
      },
      {
        number: "140+",
        label: "stats.3.label",
        description: "stats.3.description",
        icon: "/images/icons/map.png",
      }
    ],
    services: [
      {
        title: "services.1.title",
        description: "services.1.description"
      },
      {
        title: "services.2.title",
        description: "services.2.description"
      },
      {
        title: "services.3.title",
        description: "services.3.description"
      },
      {
        title: "services.4.title",
        description: "services.4.description"
      }
    ]
  };

  static getCompanyInfo(): CompanyInfoModel {
    return { ...this.companyInfo };
  }
}
