/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Star, BadgeAlert, Award } from "lucide-react";
import { pricingPackages } from "../data";
import { PricingPackage } from "../types";

interface PackagesProps {
  selectedPackageId: number | null;
  onSelectPackage: (packageId: number) => void;
}

export default function Packages({ selectedPackageId, onSelectPackage }: PackagesProps) {
  
  const handleSelect = (pkg: PricingPackage) => {
    onSelectPackage(pkg.id);
    
    // Smooth scroll to the registration division
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-blue-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center" dir="rtl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dc2626] bg-red-100/60 border border-red-200/50 px-3.5 py-1.5 rounded-full mb-4">
            پیکجز اور روزانہ آمدنی (Packages & Salaries)
          </span>
          <h2 className="font-urdu-header text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-6 text-center leading-[1.8] md:leading-[2.2] py-2 md:py-3">
            اپنے پسندیدہ پیکج کا انتخاب کریں
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mb-6" />
          <p className="font-urdu text-base text-gray-500 leading-relaxed text-center">
            ہم نے ممبران کی سہولت کے لیے ۵ مختلف پیکجز مرتب کیے ہیں۔ جتنا بڑا پیکج منتخب کریں گے، روزانہ لکھنے کے صفحات اور معاوضہ اسی حساب سے زیادہ ہو گا!
          </p>
        </div>

        {/* 5-Column Responsive Wrapper on Large Screens, grid otherwise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-4 items-stretch">
          {pricingPackages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            const isRecommended = pkg.isRecommended;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pkg.id * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 ${
                  isRecommended
                    ? "bg-gradient-to-b from-blue-900 to-blue-950 text-white shadow-2xl shadow-blue-900/40 border-4 border-red-500 scale-102 lg:-translate-y-2 lg:scale-105 z-10"
                    : isSelected
                    ? "bg-white border-4 border-blue-600 text-gray-900 shadow-xl"
                    : "bg-white border-2 border-blue-100 text-gray-900 shadow-md hover:shadow-xl hover:border-blue-300"
                }`}
              >
                {/* Crown badge for recommended package & selection indicator */}
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 leading-none">
                    <Star className="h-3 w-3 fill-white" />
                    <span>Best Deal</span>
                  </div>
                )}

                {/* Pricing / Page Specs Body */}
                <div className="text-center pb-5 border-b border-dashed border-gray-100 mb-5 relative">
                  {/* Package ID Badge */}
                  <span className={`inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full mb-3.5 ${
                    isRecommended ? "bg-red-500 text-white" : "bg-blue-50 text-blue-700"
                  }`}>
                    Package {pkg.id}
                  </span>

                  {/* Urdu & English Package Name */}
                  <h3 className={`text-base font-extrabold font-urdu tracking-tight leading-snug mb-1 ${
                    isRecommended ? "text-white" : "text-blue-950"
                  }`}>
                    {pkg.nameUrdu}
                  </h3>
                  <div className={`text-[10px] font-bold ${isRecommended ? "text-blue-200" : "text-gray-400"}`}>
                    {pkg.nameEnglish}
                  </div>

                  {/* Daily Salary (Highlight Section) */}
                  <div className="my-5">
                    <span className={`block text-[10px] font-black uppercase tracking-wider ${
                      isRecommended ? "text-red-400" : "text-red-500"
                    }`}>
                      Daily Salary (روزانہ کا معاوضہ)
                    </span>
                    <span className="text-2xl sm:text-3xl font-black tracking-tight flex items-center justify-center gap-1">
                      <span className="text-xs font-bold font-sans">PKR</span>
                      {pkg.dailySalary.toLocaleString()}
                    </span>
                    <span className={`block text-[10px] font-semibold mt-1 font-urdu ${
                      isRecommended ? "text-emerald-300" : "text-emerald-600"
                    }`}>
                      ہمیشہ وقت پر ادائیگی (Same-Day Paid)
                    </span>
                  </div>
                </div>

                {/* Productive requirements checklist */}
                <div className="space-y-4 mb-8 text-right flex-grow" dir="rtl">
                  {/* Daily Pages Requirement */}
                  <div className="flex items-start gap-2">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      isRecommended ? "bg-red-500 text-white" : "bg-blue-100 text-blue-700"
                    }`}>
                      <Check className="h-3.5 w-3.5 stroke-[3px]" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? "text-blue-200" : "text-gray-400"}`} dir="ltr">
                        Daily Requirement
                      </p>
                      <p className={`text-sm font-extrabold font-urdu ${isRecommended ? "text-white" : "text-gray-900"}`}>
                        روزانہ صفحات: <span className="font-sans text-base font-black text-red-500">{pkg.pages}</span> صفحات
                      </p>
                    </div>
                  </div>

                  {/* Registration/Joining Fee details */}
                  <div className="flex items-start gap-2">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      isRecommended ? "bg-red-500 text-white" : "bg-blue-100 text-blue-700"
                    }`}>
                      <Check className="h-3.5 w-3.5 stroke-[3px]" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? "text-blue-200" : "text-gray-400"}`} dir="ltr">
                        One-Time Joining Fee
                      </p>
                      <p className={`text-sm font-extrabold font-urdu ${isRecommended ? "text-white" : "text-gray-900"}`}>
                        شامل ہونے کی فیس: <span className="font-sans text-base font-black text-blue-600">{pkg.joiningFee.toLocaleString()}</span> روپے
                      </p>
                    </div>
                  </div>

                  {/* Guaranteed Work status */}
                  <div className="flex items-start gap-2">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      isRecommended ? "bg-red-500 text-white" : "bg-blue-100 text-blue-700"
                    }`}>
                      <Check className="h-3.5 w-3.5 stroke-[3px]" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? "text-blue-200" : "text-gray-400"}`} dir="ltr">
                        Job Guarantee
                      </p>
                      <p className={`text-xs font-bold font-urdu ${isRecommended ? "text-white" : "text-gray-700"}`}>
                        لامحدود کام کی گارنٹی (Lifetime Access)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Select Package Action Button */}
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm uppercase tracking-wide cursor-pointer transition-all duration-300 transform active:scale-95 ${
                    isRecommended
                      ? "bg-red-500 text-white shadow-lg hover:bg-emerald-500 hover:shadow-emerald-500/20"
                      : isSelected
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-50 text-blue-800 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                  }`}
                >
                  {isRecommended ? (
                    <span className="flex items-center justify-center gap-1.5 font-urdu">
                      <Award className="h-4 w-4" />
                      پیکج منتخب کریں (Select)
                    </span>
                  ) : (
                    <span className="font-urdu">پیکج منتخب کریں (Select)</span>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
