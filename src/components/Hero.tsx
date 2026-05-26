/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquareCode, FileSignature, Sparkles, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function Hero() {
  const whatsappLink = getWhatsAppLink(
    "Assalam-o-Alaikum! I am interested in joining the Assignment Work Platform. Please guide me on how to start."
  );

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden"
    >
      {/* Decorative background vectors */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-20">
        <div className="absolute w-full h-full rounded-full bg-blue-100 blur-[130px] -z-10 animate-pulse duration-10000" />
      </div>
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-red-100/50 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Canvas Element (Right Side on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none"
            >
              {/* Outer Decorative Card holding mock assignment work */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-50/50">
                <div className="absolute -top-4 -left-4 bg-red-500 text-white font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-bounce">
                  🔥 Daily Cash Out
                </div>
                
                {/* Simulated Document / Premium Design Card Component */}
                <div className="bg-blue-50/40 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center justify-between border-b border-blue-100 pb-3 mb-4">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-blue-800">
                      Sample Assignment Sheet
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Verified
                    </span>
                  </div>
                  
                  {/* Handwritten script demonstration */}
                  <div className="space-y-3.5" dir="rtl">
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest" dir="ltr">
                      Task # 4180
                    </p>
                    <p className="font-urdu text-lg font-bold text-blue-900 leading-relaxed text-right">
                      ہینڈ رائٹنگ کا آسان کام دستیاب ہے:
                    </p>
                    <div className="border-r-4 border-red-500 pr-3.5 space-y-1">
                      <p className="font-urdu text-sm text-gray-700 leading-relaxed text-right">
                        ۱۔ روزانہ صفحات خوش خط لکھیں۔
                      </p>
                      <p className="font-urdu text-sm text-gray-700 leading-relaxed text-right">
                        ۲۔ غلطی کے بغیر صفائی سے دہرائیں۔
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed border-blue-200 flex justify-between items-center" dir="ltr">
                      <span className="text-xs font-bold text-gray-500">Pages Completed</span>
                      <span className="text-sm font-extrabold text-blue-700">4 / 4 Pages</span>
                    </div>
                  </div>
                </div>

                {/* Floating Earnings Indicator Pop */}
                <div className="mt-5 flex items-center justify-between bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">
                        Today's Salary Paid
                      </p>
                      <p className="text-sm font-extrabold text-emerald-950">PKR 11,200/-</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-emerald-500 text-white px-2.5 py-1 rounded-full animate-pulse">
                    Success
                  </span>
                </div>

                {/* Reassurance Tags */}
                <div className="mt-5 grid grid-cols-3 gap-2.5 pt-1">
                  <div className="flex flex-col items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mb-1" />
                    <span className="text-[10px] font-bold text-gray-700 uppercase">Secure</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                    <CheckCircle2 className="h-4 w-4 text-red-500 mb-1" />
                    <span className="text-[10px] font-bold text-gray-700 uppercase">Immediate</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mb-1" />
                    <span className="text-[10px] font-bold text-gray-700 uppercase">Anywhere</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Urdu Content Copy Side (Left Side on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-7 flex flex-col text-right items-end" dir="rtl">
            {/* Inline Bilingual Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100/60 border border-blue-200 px-3.5 py-1.5 rounded-full mb-6 font-bold"
            >
              <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-xs text-blue-900 font-urdu leading-none">
                گھر بیٹھے رجسٹریشن کا آسان طریقہ
              </span>
              <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                ACTIVE 2026
              </span>
            </motion.div>

            {/* Urdu Title Header - Nastaliq and Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-urdu-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-[1.8] md:leading-[2.2] py-2 md:py-3 mb-6 text-right w-full"
            >
              اپنے گھر بیٹھے آسان{" "}
              <span className="text-blue-600 md:pb-2">
                ہینڈ رائٹنگ اور ٹائپنگ
              </span>{" "}
              کا کام کریں اور روزانہ شاندار تنخواہ حاصل کریں!
            </motion.h1>

            {/* Urdu Explanatory Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-urdu text-base sm:text-lg text-gray-600 leading-[1.9] max-w-2xl mb-8 text-right"
            >
              طالب علموں، گھریلو خواتین اور نوکری پیشہ افراد کے لیے بہترین روزگار کا سنہری موقع۔ کاغذی صفحات پر بنے ہوئے مواد کو صاف ستھری ہینڈ رائٹنگ میں خوش خط لکھیں یا موبائل پر ایم ایس ورڈ میں ٹائپ کریں۔ روزانہ کا کام شام کو مکمل کر کے براہِ راست اپنے ایزی پیسہ یا جاز کیش اکاؤنٹ میں تنخواہ وصول کریں۔
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row-reverse gap-4 w-full justify-start items-center"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-blue-700 hover:to-blue-800 text-white text-base font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-red-600/20 hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-1 font-urdu"
              >
                <span>ہم سے رابطہ کریں 📲 Get Started on WhatsApp</span>
              </a>
              <a
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-700 text-base font-extrabold px-8 py-3.5 rounded-2xl transition-all duration-200 font-urdu"
              >
                <span>پیکج کی تفصیلات دیکھیں (View Packages)</span>
              </a>
            </motion.div>

            {/* Simple stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full border-t border-gray-100 mt-12 pt-8 grid grid-cols-3 gap-4"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-blue-700">99.8%</p>
                <p className="font-urdu text-xs sm:text-sm text-gray-500 font-bold pt-1">کامیاب ممبران</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-red-600">PKR 15,000+</p>
                <p className="font-urdu text-xs sm:text-sm text-gray-500 font-bold pt-1">ماہانہ اوسط آمدنی</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-gray-900">0309-1469628</p>
                <p className="font-urdu text-xs sm:text-sm text-gray-500 font-bold pt-1">رابطہ واٹس ایپ نمبر</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
