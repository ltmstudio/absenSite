export interface CompanyInfoModel {
    stats: Array<{
      number: string;
      label: string;
      description: string;
      icon: string;
    }>;
    services: Array<{
      title: string;
      description: string;
    }>;
  }
  