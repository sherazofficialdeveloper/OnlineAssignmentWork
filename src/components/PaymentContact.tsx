/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion } from "motion/react";
import { User, Phone, CheckCircle2, ChevronRight, Copy, Check, QrCode } from "lucide-react";
import { pricingPackages, paymentMethods, getWhatsAppLink } from "../data";

interface PaymentContactProps {
  selectedPackageId: number | null;
  onSelectPackage: (packageId: number) => void;
}

export default function PaymentContact({ selectedPackageId, onSelectPackage }: PaymentContactProps) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [formError, setFormError] = useState("");

  // Select first package as default if none selected
  useEffect(() => {
    if (!selectedPackageId) {
      onSelectPackage(3); // Default to recommended Gold Package 3
    }
  }, [selectedPackageId, onSelectPackage]);

  const selectedPkg = pricingPackages.find((p) => p.id === selectedPackageId) || pricingPackages[2];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/-/g, ""));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      setFormError("برائے کرم اپنا نام درج کریں۔ (Please enter your name)");
      return;
    }
    if (!userPhone.trim()) {
      setFormError("برائے کرم اپنا واٹس ایپ نمبر درج کریں۔ (Please enter your WhatsApp number)");
      return;
    }
    setFormError("");

    // Build the pre-filled custom message for conversion
    const message = `Assalam-o-Alaikum! 
My Name is: ${userName}
My Contact Number is: ${userPhone}
Selected Package: Package ${selectedPkg.id} (${selectedPkg.nameEnglish})
Joining Fee: PKR ${selectedPkg.joiningFee}
Daily Salary: PKR ${selectedPkg.dailySalary}

I want to confirm my registration space on the Assignment Work Platform. Please guide me further.`;

    // Open WhatsApp link
    window.open(getWhatsAppLink(message), "_blank", "noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      {/* Visual background accents */}
      <div className="absolute left-0 bottom-10 w-96 h-96 rounded-full bg-blue-50 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block in Urdu with English note */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center" dir="rtl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dc2626] bg-red-100/60 border border-red-200/50 px-3.5 py-1.5 rounded-full mb-4">
            رجسٹریشن اور ادائیگی (Registration & Payment)
          </span>
          <h2 className="font-urdu-header text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-6 text-center leading-[1.8] md:leading-[2.2] py-2">
            فارم پُر کریں اور کام شروع کریں
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mb-6" />
          <p className="font-urdu text-base text-gray-500 leading-relaxed text-center">
            نیچے دیے گئے آسان طریقہ کار پر عمل کر کے اپنی رجسٹریشن کی درخواست جمع کروائیں۔ کوئی بھی سوال ہو تو براہ راست واٹس ایپ پر رہنمائی حاصل کریں۔
          </p>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CARD 1: USER INFO REGISTRATION FORM (LG: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl shadow-blue-500/5 relative overflow-hidden"
          >
            {/* Top design highlight element */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-800 to-red-600" />

            <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6" dir="rtl">
              <div>
                <h3 className="font-urdu text-xl font-black text-blue-950">۱۔ رجسٹریشن فارم (User Info Form)</h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1" dir="ltr">
                  Apply Online via WhatsApp Integration
                </p>
              </div>
              <span className="font-sans text-xs bg-blue-50 text-blue-700 font-extrabold px-3 py-1 rounded-full border border-blue-100 uppercase">
                Step 1 of 2
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm font-bold p-4 rounded-xl font-urdu text-right">
                  ⚠️ {formError}
                </div>
              )}

              {/* Package Select Dropdown representation inside Form */}
              <div>
                <label className="block text-sm font-extrabold text-blue-950 font-urdu mb-2.5">
                  منتخب کردہ کام کا پیکج (Selected Package) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pricingPackages.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onSelectPackage(p.id)}
                      className={`flex flex-col text-right justify-center p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        selectedPackageId === p.id
                          ? "bg-blue-50 border-2 border-blue-600 text-blue-950 shadow-md"
                          : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100/80"
                      }`}
                    >
                      <span className="font-urdu text-sm font-bold flex justify-between items-center w-full">
                        <span>{p.nameUrdu}</span>
                        {selectedPackageId === p.id && (
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                        )}
                      </span>
                      <span className="text-[10px] font-extrabold text-gray-500 font-sans mt-1">
                        Fee: PKR {p.joiningFee} | Sal: PKR {p.dailySalary}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Field Input */}
              <div>
                <label className="block text-sm font-extrabold text-blue-950 font-urdu mb-2.5">
                  اپنا نام درج کریں (Full Name) *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="مثال کے طور پر: محمد علی"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl py-3.5 pr-11 pl-4 text-sm font-urdu shadow-inner transition-colors outline-none text-right placeholder-gray-400"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Number Field Input */}
              <div>
                <label className="block text-sm font-extrabold text-blue-950 font-urdu mb-2.5">
                  اپنا واٹس ایپ نمبر درج کریں (WhatsApp Number) *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="مثال کے طور پر: 03001234567"
                    className="w-full bg-gray-50 hover:bg-gray-100/50 focus:bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl py-3.5 pr-11 pl-4 text-sm shadow-inner transition-colors outline-none text-right placeholder-gray-400"
                    dir="ltr"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <span className="block text-[11px] text-gray-400 font-bold mt-1.5" dir="ltr">
                  * Must be a valid WhatsApp active number.
                </span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-2 text-base font-urdu cursor-pointer mt-8"
              >
                <span>تفصیلات واٹس ایپ پر تصدیق کریں (Join on WhatsApp)</span>
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </form>
          </motion.div>

          {/* CARD 2: PAYMENT METHODS DISPLAY (LG: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-gradient-to-tr from-slate-50 to-slate-100 rounded-3xl p-6 sm:p-8 border border-blue-50 shadow-xl relative overflow-hidden"
          >
            {/* Design header in RTL */}
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-5 mb-6" dir="rtl">
              <div>
                <h3 className="font-urdu text-xl font-black text-blue-950">۲۔ پیمنٹ میڈیاز (Payment Accounts)</h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1" dir="ltr">
                  Official Merchant Accounts Info
                </p>
              </div>
              <span className="font-sans text-xs bg-red-100 text-red-600 font-extrabold px-3 py-1 rounded-full border border-red-200 uppercase">
                Step 2 of 2
              </span>
            </div>

            {/* Urdu Instructions */}
            <div className="bg-white border border-blue-100/80 p-4 rounded-2xl mb-6 text-right" dir="rtl">
              <h4 className="font-urdu text-sm font-extrabold text-[#111827] mb-2">اہم ہدایت براۓ ادائیگی:</h4>
              <p className="font-urdu text-xs text-gray-600 leading-relaxed font-semibold">
                اپنے منتخب کردہ پیکج کی جوائننگ فیس نیچے دیئے گئے سرکاری ایزی پیسہ یا جاز کیش اکاؤنٹ پر بھیجیں۔ رقم بھیجنے کے بعد نوٹیفکیشن اسکرین شاٹ کو واٹس ایپ ہیلپ ڈیسک پر لازمی فراہم کریں۔
              </p>
            </div>

            {/* Official Accounts Loop */}
            <div className="space-y-4 text-right">
              {paymentMethods.map((method, index) => (
                <div
                  key={method.name}
                  className="bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-blue-400 transition-all duration-300 relative group shadow-sm"
                >
                  {/* Account Name Indicator */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3.5 mb-4">
                    <span className="text-xs font-bold text-gray-500 font-urdu">{method.instructionsUrdu}</span>
                    <span className={`text-xs font-black uppercase tracking-widest text-white px-3 py-1 rounded-lg ${method.logoColor}`}>
                      {method.name}
                    </span>
                  </div>

                  {/* Account Details Panel */}
                  <div className="space-y-3" dir="rtl">
                    <div className="flex justify-between items-center bg-gray-50 hover:bg-blue-50/25 p-3 rounded-xl transition-colors">
                      <span className="text-xs font-bold text-gray-400">اکاؤنٹ ہولڈر نام</span>
                      <strong className="text-sm font-extrabold text-blue-950 font-urdu">{method.accountTitle}</strong>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50 hover:bg-blue-50/25 p-3 rounded-xl transition-colors">
                      <span className="text-xs font-bold text-gray-400">موبائل اکاؤنٹ نمبر</span>
                      <div className="flex items-center gap-1.5" dir="ltr">
                        <button
                          type="button"
                          onClick={() => handleCopy(method.accountNumber, index)}
                          className="p-1.5 rounded-lg bg-gray-200 hover:bg-blue-600 hover:text-white transition-all text-gray-600 cursor-pointer"
                          title="Copy Account Number"
                        >
                          {copiedIndex === index ? (
                            <Check className="h-3.5 w-3.5 text-emerald-600 animate-scale" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                        <strong className="text-sm font-black text-gray-800 tracking-wider">
                          {method.accountNumber}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visually Highly Clarified & Premium Payment Confirmation Section */}
            <div className="mt-8 bg-gradient-to-br from-red-50 to-amber-50 border-2 border-red-500/80 rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden" dir="rtl">
              {/* Internal Accent Element */}
              <div className="absolute top-0 right-0 h-1.5 w-full bg-red-500" />
              
              <div className="flex items-start gap-3 text-right">
                <div className="h-10 w-10 rounded-xl bg-red-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-red-500/20 font-sans">
                  <span className="text-lg font-black leading-none">!</span>
                </div>
                <div className="flex-grow space-y-3">
                  <h4 className="font-urdu text-base font-extrabold text-red-800 leading-none">
                    انتہائی اہم ہدایت (Crucial Confirmation Step)
                  </h4>
                  
                  {/* Highlighted Roman-Urdu & English Exact Instruction Text */}
                  <p className="font-sans text-sm font-extrabold text-gray-950 leading-relaxed text-right bg-white border-r-4 border-red-500 p-3 rounded-lg shadow-sm">
                    “Payment send karne ke baad screenshot WhatsApp par zaroor send karein taake confirmation ho sake.”
                  </p>
                  
                  <p className="font-urdu text-xs text-gray-750 leading-relaxed font-semibold">
                    ادائیگی بھیجنے کے بعد، رسید کا واضح اسکرین شاٹ نیچے دیئے گئے واٹس ایپ نمبر پر فوراً شیئر کریں تاکہ آپ کی رجسٹریشن کی فوری تصدیق ہو سکے۔
                  </p>
                </div>
              </div>

              {/* Verified WhatsApp Link & Click-to-Chat Accent */}
              <div className="mt-5 pt-4 border-t border-dashed border-red-200/80 flex flex-col sm:flex-row-reverse justify-between items-center gap-3">
                <div className="text-right flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-urdu text-xs font-bold text-gray-500">آفیشل ہیلپ ڈیسک واٹس ایپ:</span>
                </div>
                <a
                  href="https://wa.me/923091469628?text=Hello!%20I%20have%20sent%20the%20joining%20fee.%20Here%20is%20the%20screenshot%20of%20my%20payment%20for%20registration%20confirmation."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm px-4.5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer font-sans"
                  dir="ltr"
                >
                  <span>WhatsApp: +92 309 1469628</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
