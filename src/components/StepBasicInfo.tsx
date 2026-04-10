import React from 'react';
import { ReportData, HistoryEntry } from '../types';
import { GROUPS, TERRITORIES, DESIGNATIONS } from '../constants';

interface Props {
  data: ReportData['basicInfo'];
  history: HistoryEntry[];
  onChange: (data: ReportData['basicInfo']) => void;
  onNext: () => void;
}

export default function StepBasicInfo({ data, history, onChange, onNext }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">VISIT JAIZA REPORT</h2>
        <p className="text-slate-500 text-sm">Enter basic visit information to begin</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Date</label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Visitor Name</label>
          <input
            type="text"
            name="visitorName"
            value={data.visitorName}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Group</label>
            <select
              name="group"
              value={data.group}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Group</option>
              {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sales Person</label>
            <input
              type="text"
              name="salesPerson"
              value={data.salesPerson}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Territory</label>
            <select
              name="territory"
              value={data.territory}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Territory</option>
              {TERRITORIES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Designation</label>
            <select
              name="designation"
              value={data.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Designation</option>
              {DESIGNATIONS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Previous Visit Summary */}
      <div className="mt-8 space-y-3">
        <div className="bg-slate-100 py-2 px-4 rounded-lg text-center">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Previous Visit Summary</h3>
        </div>
        <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
          {history.map((entry, i) => (
            <div key={i} className="py-3 px-4 text-center text-sm font-bold text-slate-900 bg-white">
              {entry.date}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!data.date || !data.visitorName}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
      >
        Next: Quality of Performance
      </button>
    </div>
  );
}
