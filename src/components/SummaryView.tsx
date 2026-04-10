import React from 'react';
import { ReportData } from '../types';
import { CATEGORIES } from '../constants';
import { exportToPDF, exportToExcel } from '../utils/export';
import { FileText, Table, RefreshCcw } from 'lucide-react';

interface Props {
  data: ReportData;
  onReset: () => void;
}

export default function SummaryView({ data, onReset }: Props) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">REPORT SUMMARY</h2>
        <p className="text-slate-500">Review your visit jaiza report and download</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Basic Information</h3>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <span className="text-slate-500">Date:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.date}</span>
              <span className="text-slate-500">Visitor:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.visitorName}</span>
              <span className="text-slate-500">Group:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.group}</span>
              <span className="text-slate-500">Sales Person:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.salesPerson}</span>
              <span className="text-slate-500">Territory:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.territory}</span>
              <span className="text-slate-500">Designation:</span>
              <span className="font-semibold text-slate-900">{data.basicInfo.designation}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => exportToPDF(data)}
              className="w-full py-4 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-100 active:scale-[0.98]"
            >
              <FileText size={24} />
              Download PDF Report
            </button>
            <button
              onClick={() => exportToExcel(data)}
              className="w-full py-4 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-100 active:scale-[0.98]"
            >
              <Table size={24} />
              Download Excel Report
            </button>
            <button
              onClick={onReset}
              className="w-full py-4 flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              <RefreshCcw size={20} />
              Start New Report
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 max-h-[600px] overflow-y-auto">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest sticky top-0 bg-slate-50 py-2">Ratings Overview</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-3">Quality of Performance</h4>
                <div className="space-y-2">
                  {CATEGORIES.filter(c => c.section === 'Performance').map(c => (
                    <div key={c.id} className="flex justify-between items-center text-sm p-2 bg-white rounded-lg border border-slate-100">
                      <span className="text-slate-600">{c.title}</span>
                      <span className={`font-bold ${(data.performance as any)[c.id] === 'Best' || (data.performance as any)[c.id] === '100%' ? 'text-green-600' : 'text-blue-600'}`}>
                        {(data.performance as any)[c.id]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-green-600 uppercase mb-3">Quality of Professionalism</h4>
                <div className="space-y-2">
                  {CATEGORIES.filter(c => c.section === 'Professionalism').map(c => (
                    <div key={c.id} className="flex justify-between items-center text-sm p-2 bg-white rounded-lg border border-slate-100">
                      <span className="text-slate-600">{c.title}</span>
                      <span className="font-bold text-green-600">
                        {(data.professionalism as any)[c.id]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
