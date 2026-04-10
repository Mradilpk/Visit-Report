import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { ReportData } from '../types';
import { CATEGORIES } from '../constants';
import { format } from 'date-fns';

export const exportToPDF = (data: ReportData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  doc.text('VISIT JAIZA REPORT', pageWidth / 2, 20, { align: 'center' });

  // Basic Info
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  let y = 35;
  doc.text(`Date: ${data.basicInfo.date}`, 20, y);
  doc.text(`Visitor Name: ${data.basicInfo.visitorName}`, 100, y);
  y += 10;
  doc.text(`Group: ${data.basicInfo.group}`, 20, y);
  doc.text(`Sales Person: ${data.basicInfo.salesPerson}`, 100, y);
  y += 10;
  doc.text(`Territory: ${data.basicInfo.territory}`, 20, y);
  doc.text(`Designation: ${data.basicInfo.designation}`, 100, y);

  y += 20;

  // Performance Table
  doc.setFontSize(14);
  doc.text('Quality of Performance', 20, y);
  y += 5;

  const performanceRows = CATEGORIES.filter(c => c.section === 'Performance').map(c => [
    c.title,
    (data.performance as any)[c.id] || 'N/A'
  ]);

  (doc as any).autoTable({
    startY: y,
    head: [['Category', 'Rating']],
    body: performanceRows,
    theme: 'striped',
    headStyles: { fillColor: [52, 152, 219] }
  });

  y = (doc as any).lastAutoTable.finalY + 15;

  // Professionalism Table
  doc.setFontSize(14);
  doc.text('Quality of Professionalism', 20, y);
  y += 5;

  const professionalismRows = CATEGORIES.filter(c => c.section === 'Professionalism').map(c => [
    c.title,
    (data.professionalism as any)[c.id] || 'N/A'
  ]);

  (doc as any).autoTable({
    startY: y,
    head: [['Category', 'Rating']],
    body: professionalismRows,
    theme: 'striped',
    headStyles: { fillColor: [46, 204, 113] }
  });

  doc.save(`Visit_Jaiza_Report_${data.basicInfo.visitorName}_${format(new Date(), 'yyyyMMdd')}.pdf`);
};

export const exportToExcel = (data: ReportData) => {
  const basicInfo = [
    ['VISIT JAIZA REPORT'],
    [],
    ['Date', data.basicInfo.date],
    ['Visitor Name', data.basicInfo.visitorName],
    ['Group', data.basicInfo.group],
    ['Sales Person', data.basicInfo.salesPerson],
    ['Territory', data.basicInfo.territory],
    ['Designation', data.basicInfo.designation],
    [],
    ['QUALITY OF PERFORMANCE'],
    ['Category', 'Rating']
  ];

  const performanceRows = CATEGORIES.filter(c => c.section === 'Performance').map(c => [
    c.title,
    (data.performance as any)[c.id] || 'N/A'
  ]);

  const professionalismHeader = [
    [],
    ['QUALITY OF PROFESSIONALISM'],
    ['Category', 'Rating']
  ];

  const professionalismRows = CATEGORIES.filter(c => c.section === 'Professionalism').map(c => [
    c.title,
    (data.professionalism as any)[c.id] || 'N/A'
  ]);

  const worksheetData = [
    ...basicInfo,
    ...performanceRows,
    ...professionalismHeader,
    ...professionalismRows
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  XLSX.writeFile(workbook, `Visit_Jaiza_Report_${data.basicInfo.visitorName}_${format(new Date(), 'yyyyMMdd')}.xlsx`);
};
