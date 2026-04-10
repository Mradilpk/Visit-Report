import { HistoryEntry } from './types';

export const MOCK_VISIT_HISTORY: HistoryEntry[] = [
  { date: '15-Jan-26' },
  { date: '10-Jan-26' },
  { date: '5-Jan-26' },
  { date: '28-Dec-25' },
];

export const MOCK_PERFORMANCE_HISTORY: Record<string, HistoryEntry[]> = {
  dailyPlanning: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  productKnowledge: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  prospecting: [
    { date: '15-Jan-26', rating: 'AVG' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'Below AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
  resolvingComplaints: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  customerRelation: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  farmLevelWork: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  otherSegmentsWork: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  promotionMaterial: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  gettingWorkFromDist: [
    { date: '15-Jan-26', rating: 'AVG' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
  bagSetting: [
    { date: '15-Jan-26', rating: 'Best' },
    { date: '10-Jan-26', rating: 'Best' },
    { date: '5-Jan-26', rating: 'Good' },
    { date: '28-Dec-25', rating: 'Good' },
  ],
  marketInformation: [
    { date: '15-Jan-26', rating: 'Best' },
    { date: '10-Jan-26', rating: 'Best' },
    { date: '5-Jan-26', rating: 'Good' },
    { date: '28-Dec-25', rating: 'Good' },
  ],
  productivity: [
    { date: '15-Jan-26', rating: 'Best' },
    { date: '10-Jan-26', rating: 'Best' },
    { date: '5-Jan-26', rating: 'Good' },
    { date: '28-Dec-25', rating: 'Good' },
  ],
  punctuality: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  salesExpectation: [
    { date: '15-Jan-26', rating: '50%' },
    { date: '10-Jan-26', rating: 'Below 50%' },
    { date: '5-Jan-26', rating: 'Below 50%' },
    { date: '28-Dec-25', rating: 'Below 50%' },
  ],
  careOfVehicle: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  routePlan: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  howToAskQuestions: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  customerInformation: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  preparationBeforeCalling: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  initialSalesCall: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'AVG' },
  ],
  identifyingCustomerNeeds: [
    { date: '15-Jan-26', rating: 'AVG' },
    { date: '10-Jan-26', rating: 'Below AVG' },
    { date: '5-Jan-26', rating: 'Below AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
  responseHandling: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'Good' },
    { date: '5-Jan-26', rating: 'AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
  productDifferentiation: [
    { date: '15-Jan-26', rating: 'Good' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'Below AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
  gettingCommitment: [
    { date: '15-Jan-26', rating: 'AVG' },
    { date: '10-Jan-26', rating: 'AVG' },
    { date: '5-Jan-26', rating: 'Below AVG' },
    { date: '28-Dec-25', rating: 'Below AVG' },
  ],
};
