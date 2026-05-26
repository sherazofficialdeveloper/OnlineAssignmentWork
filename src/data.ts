/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PricingPackage, PaymentMethod } from "./types";

export const WHATSAPP_NUMBER = "+923091469628";
export const WHATSAPP_FORMATTED = "0309-1469628";

export const servicesData: Service[] = [
  {
    id: "handwritten",
    iconName: "PenTool",
    titleUrdu: "ہاتھ سے تحریر کا کام (Handwritten Work)",
    descriptionUrdu: "آپ کو تصاویر اور اسکین فائلز دی جائیں گی جنہیں صاف ستھری لکھائی میں صفحات پر لکھنا ہو گا۔ یہ کام طلباء اور اساتذہ کے اسائنمنٹس کے لیے ہے جس کا معاوضہ صفحات کی تعداد کے مطابق ملتا ہے۔",
  },
  {
    id: "ms-word",
    iconName: "FileText",
    titleUrdu: "ایم ایس ورڈ ٹائپنگ (MS Word Typing)",
    descriptionUrdu: "موبائل یا کمپیوٹر پر پی ڈی ایف اور امیجز کو ایم ایس ورڈ میں ٹائپ کریں۔ تیز رفتار اور درست ٹائپنگ کرنے والوں کے لیے روزانہ نئے پروجیکٹس دستیاب ہوتے ہیں۔",
  },
  {
    id: "pdf-submission",
    iconName: "FileSpreadsheet",
    titleUrdu: "پی ڈی ایف فائلز کی تیاری (PDF Assignments)",
    descriptionUrdu: "لکھے گئے صفحات کو موبائل کیمرے کے ذریعے اسکین کر کے، ترتیب وار پی ڈی ایف بنانا اور مقررہ پورٹلز یا ای میلز پر اپ لوڈ کرنے کا آسان کام سرانجام دیں۔",
  },
  {
    id: "daily-tasks",
    iconName: "CalendarDays",
    titleUrdu: "روزانہ ٹاسک اور تحریری کام (Daily Tasks)",
    descriptionUrdu: "بلا تاخیر روزانہ ملنے والے آسان آرٹیکلز اور معلوماتی اسائنمنٹس جنہیں مکمل کرنے پر شام کو روزانہ کی بنیاد پر ادائیگی کی جاتی ہے۔",
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    nameUrdu: "پاور ہینڈز پیکج 1",
    nameEnglish: "Starter Package 1",
    joiningFee: 1000,
    dailySalary: 4100,
    pages: 4,
    isRecommended: false
  },
  {
    id: 2,
    nameUrdu: "پرو رائٹر پیکج 2",
    nameEnglish: "Standard Package 2",
    joiningFee: 2600,
    dailySalary: 7200,
    pages: 5,
    isRecommended: false
  },
  {
    id: 3,
    nameUrdu: "الٹیمیٹ فاسٹ پیکج 3",
    nameEnglish: "Gold Recommended Package 3",
    joiningFee: 4100,
    dailySalary: 11200,
    pages: 6,
    isRecommended: true // Highlighted recommended card
  },
  {
    id: 4,
    nameUrdu: "سپر جینیئس پیکج 4",
    nameEnglish: "Elite Premium Package 4",
    joiningFee: 6200,
    dailySalary: 16400,
    pages: 8,
    isRecommended: false
  },
  {
    id: 5,
    nameUrdu: "ماسٹر ٹائپسٹ پیکج 5",
    nameEnglish: "Ultimate Master Package 5",
    joiningFee: 8000,
    dailySalary: 19100,
    pages: 9,
    isRecommended: false
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    name: "EasyPaisa",
    accountTitle: "Muhammad Aslam",
    accountNumber: "0309-1469628",
    instructionsUrdu: "ایزی پیسہ ایپ میں جائیں، رقم منتقل کریں اور اسکرین شاٹ محفوظ کر لیں۔",
    logoColor: "bg-emerald-600"
  },
  {
    name: "JazzCash",
    accountTitle: "Muhammad Aslam",
    accountNumber: "0309-1469628",
    instructionsUrdu: "جاز کیش ایپ میں اکاؤنٹ نمبر اور نام درج کر کے فیس منتقل کریں۔",
    logoColor: "bg-amber-500"
  }
];

// Helper to generate custom WhatsApp links
export function getWhatsAppLink(message: string): string {
  const cleaned = WHATSAPP_NUMBER.replace(/\+/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
