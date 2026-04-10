import { CategoryDefinition, RatingOption } from './types';

export const DEFAULT_OPTIONS: RatingOption[] = ['Best', 'Good', 'AVG', 'Below AVG'];
export const SALES_OPTIONS: RatingOption[] = ['100%', '70%', '50%', 'Below 50%'];

export const CATEGORIES: CategoryDefinition[] = [
  { id: 'dailyPlanning', title: 'DAILY PLANNING', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'productKnowledge', title: 'PRODUCT KNOWLEDGE', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'prospecting', title: 'PROSPECTING', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'resolvingComplaints', title: 'RESOLVING COMPLAINTS SKILL', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'customerRelation', title: 'CUSTOMER RELATION', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'farmLevelWork', title: 'QUALITY OF FARM LEVEL WORK', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'otherSegmentsWork', title: 'QUALITY OF OTHER SEGMENTS WORK', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'promotionMaterial', title: 'PROMOTION MATERIAL USES', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'gettingWorkFromDist', title: 'SKILL OF GETTING WORK FROM DISTRIBUTOR', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'bagSetting', title: 'BAG SETTING', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'marketInformation', title: 'MARKET INFORMATION', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'productivity', title: 'PRODUCTIVITY', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'punctuality', title: 'PUNCTUALITY', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'salesExpectation', title: 'SALES EXPECTATION VS ACH', section: 'Performance', options: SALES_OPTIONS },
  { id: 'careOfVehicle', title: 'CARE OF VEHICLE', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'routePlan', title: 'ROUTE PLAN', section: 'Performance', options: DEFAULT_OPTIONS },
  { id: 'howToAskQuestions', title: 'HOW TO ASK QUESTIONS', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'customerInformation', title: 'CUSTOMER INFORMATION', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'preparationBeforeCalling', title: 'PREPARATION BEFORE CALLING', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'initialSalesCall', title: 'INITIAL SALES CALL (GETTING ATTENTION)', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'identifyingCustomerNeeds', title: 'IDENTIFYING CUSTOMER NEEDS', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'responseHandling', title: 'RESPONSE HANDLING', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'productDifferentiation', title: 'PRODUCT DIFFERENTIATION', section: 'Professionalism', options: DEFAULT_OPTIONS },
  { id: 'gettingCommitment', title: 'GETTING COMMITMENT FOR ORDER', section: 'Professionalism', options: DEFAULT_OPTIONS },
];

export const GROUPS = ['AGILE', 'DYNAMIC', 'ELITE'];
export const TERRITORIES = ['Rawalpindi', 'Islamabad', 'Lahore', 'Karachi'];
export const DESIGNATIONS = ['Area Sales Manager', 'Territory Manager', 'Sales Officer'];
