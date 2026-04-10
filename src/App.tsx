/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReportData } from './types';
import { CATEGORIES } from './constants';
import { MOCK_VISIT_HISTORY, MOCK_PERFORMANCE_HISTORY } from './mockHistory';
import StepBasicInfo from './components/StepBasicInfo';
import StepCategory from './components/StepCategory';
import SummaryView from './components/SummaryView';
import { ClipboardCheck } from 'lucide-react';

const INITIAL_DATA: ReportData = {
  basicInfo: {
    date: new Date().toISOString().split('T')[0],
    visitorName: '',
    group: 'AGILE',
    salesPerson: 'Ali Sheikh',
    territory: 'Rawalpindi',
    designation: 'Area Sales Manager',
  },
  performance: {
    dailyPlanning: '',
    productKnowledge: '',
    prospecting: '',
    resolvingComplaints: '',
    customerRelation: '',
    farmLevelWork: '',
    otherSegmentsWork: '',
    promotionMaterial: '',
    gettingWorkFromDist: '',
    bagSetting: '',
    marketInformation: '',
    productivity: '',
    punctuality: '',
    salesExpectation: '',
    careOfVehicle: '',
    routePlan: '',
  },
  professionalism: {
    howToAskQuestions: '',
    customerInformation: '',
    preparationBeforeCalling: '',
    initialSalesCall: '',
    identifyingCustomerNeeds: '',
    responseHandling: '',
    productDifferentiation: '',
    gettingCommitment: '',
  },
};

export default function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ReportData>(INITIAL_DATA);

  const handleBasicInfoChange = (basicInfo: ReportData['basicInfo']) => {
    setData(prev => ({ ...prev, basicInfo }));
  };

  const handleRatingChange = (categoryId: string, section: 'performance' | 'professionalism', value: string) => {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [categoryId]: value
      }
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const reset = () => {
    setData(INITIAL_DATA);
    setStep(0);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <StepBasicInfo
          data={data.basicInfo}
          history={MOCK_VISIT_HISTORY}
          onChange={handleBasicInfoChange}
          onNext={nextStep}
        />
      );
    }

    if (step <= CATEGORIES.length) {
      const categoryIndex = step - 1;
      const category = CATEGORIES[categoryIndex];
      const sectionKey = category.section.toLowerCase() as 'performance' | 'professionalism';
      const nextCategory = CATEGORIES[categoryIndex + 1];

      const currentCategory = category;
      const sectionData = data[sectionKey] as Record<string, string>;
      const currentValue = sectionData[currentCategory.id] || '';
      const categoryHistory = MOCK_PERFORMANCE_HISTORY[currentCategory.id] || [];

      return (
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <StepCategory
            category={currentCategory}
            value={currentValue}
            history={categoryHistory}
            onChange={(val: string) => handleRatingChange(currentCategory.id, sectionKey, val)}
            onNext={() => nextStep()}
            onBack={() => prevStep()}
            isLast={step === CATEGORIES.length}
            nextTitle={nextCategory?.title}
          />
        </motion.div>
      );
    }

    return <SummaryView data={data} onReset={reset} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Progress Bar */}
        {step > 0 && step <= CATEGORIES.length && (
          <div className="max-w-lg mx-auto space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Progress</span>
              <span>{Math.round((step / CATEGORIES.length) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step / CATEGORIES.length) * 100}%` }}
                className="h-full bg-blue-600 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Header (only for steps) */}
        {step <= CATEGORIES.length && (
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-200">
              <ClipboardCheck className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Visit Jaiza App</h1>
          </div>
        )}

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer info */}
        {step <= CATEGORIES.length && (
          <p className="text-center text-slate-400 text-xs">
            Step {step} of {CATEGORIES.length} • Visit Jaiza Performance Report
          </p>
        )}
      </div>
    </div>
  );
}
