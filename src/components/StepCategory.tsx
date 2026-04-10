import React from 'react';
import { CategoryDefinition, HistoryEntry } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  category: CategoryDefinition;
  value: string;
  history: HistoryEntry[];
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  nextTitle?: string;
}

export default function StepCategory({ category, value, history, onChange, onNext, onBack, isLast, nextTitle }: Props) {
  return (
    <div className="space-y-8 max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
          {category.section}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
          {category.title}
        </h2>
        <p className="text-slate-500 text-sm italic">Choose of the below option</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {category.options.map((option, index) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 group ${
              value === option
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                value === option ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'
              }`}>
                {value === option && <div className="w-2 h-2 bg-white rounded-full" />}
              </span>
              <span className="font-semibold">{index + 1}. {option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Previous Performance Summary */}
      <div className="mt-8 space-y-3">
        <div className="bg-slate-100 py-2 px-4 rounded-lg text-center">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Previous Performance Summary</h3>
        </div>
        <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
          {history.map((entry, i) => (
            <div key={i} className="py-3 px-4 flex justify-between items-center text-sm bg-white">
              <span className="font-bold text-slate-900">{entry.date}</span>
              <span className="text-slate-600">{entry.rating}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 px-4 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all active:scale-[0.98]"
        >
          <ChevronLeft size={20} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!value}
          className="flex-[2] py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
        >
          {isLast ? 'Finish Report' : `Next: ${nextTitle || 'Next Step'}`}
          {!isLast && <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
}
