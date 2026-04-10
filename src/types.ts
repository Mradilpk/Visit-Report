export interface HistoryEntry {
  date: string;
  rating?: string;
}

export interface ReportData {
  basicInfo: {
    date: string;
    visitorName: string;
    group: string;
    salesPerson: string;
    territory: string;
    designation: string;
  };
  performance: {
    dailyPlanning: string;
    productKnowledge: string;
    prospecting: string;
    resolvingComplaints: string;
    customerRelation: string;
    farmLevelWork: string;
    otherSegmentsWork: string;
    promotionMaterial: string;
    gettingWorkFromDist: string;
    bagSetting: string;
    marketInformation: string;
    productivity: string;
    punctuality: string;
    salesExpectation: string;
    careOfVehicle: string;
    routePlan: string;
  };
  professionalism: {
    howToAskQuestions: string;
    customerInformation: string;
    preparationBeforeCalling: string;
    initialSalesCall: string;
    identifyingCustomerNeeds: string;
    responseHandling: string;
    productDifferentiation: string;
    gettingCommitment: string;
  };
}

export type RatingOption = 'Best' | 'Good' | 'AVG' | 'Below AVG' | '100%' | '70%' | '50%' | 'Below 50%';

export interface CategoryDefinition {
  id: string;
  title: string;
  section: 'Performance' | 'Professionalism';
  options: RatingOption[];
}
