/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../data";

// Helper component to render Lucide Icons dynamically
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urdu Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center" dir="rtl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-600 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-4">
            ہماری خدمات (Our Services)
          </span>
          <h2 className="font-urdu-header text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] mb-6 text-center leading-[1.8] md:leading-[2.2] py-2 md:py-3">
            آپ کو کس قسم کا کام کرنا ہو گا؟
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mb-6" />
          <p className="font-urdu text-base text-gray-500 leading-relaxed text-center">
            ہمارے پلیٹ فارم پر آپ کو انتہائی آسان اور منافع بخش کام فراہم کیے جاتے ہیں، جنہیں آپ کسی بھی وقت اپنے گھر کے پرسکون ماحول میں مکمل کر سکتے ہیں۔
          </p>
        </div>

        {/* Services Grid (Urdu RTL content, English icon mappings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(30 64 175 / 0.1), 0 8px 10px -6px rgb(30 64 175 / 0.1)"
              }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-blue-50 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between text-right shadow-sm shadow-blue-500/5"
              dir="rtl"
            >
              <div>
                {/* Dynamic Styled Icon container */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 mb-6 border border-blue-100 self-start">
                  <DynamicIcon name={service.iconName} className="h-7 w-7" />
                </div>

                {/* Urdu title */}
                <h3 className="font-urdu text-lg font-bold text-blue-950 mb-3.5 leading-snug">
                  {service.titleUrdu}
                </h3>

                {/* Urdu description */}
                <p className="font-urdu text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                  {service.descriptionUrdu}
                </p>
              </div>

              {/* Minimal footer action indicator inside card */}
              <div className="pt-4 border-t border-dashed border-gray-100 flex items-center justify-between font-bold" dir="ltr">
                <span className="text-xs uppercase tracking-wider text-red-500 bg-red-50 px-2.5 py-1 rounded-md">
                  Active
                </span>
                <span className="text-xs font-semibold text-blue-600 font-urdu dir-rtl">
                  پروجیکٹ دستیاب ہے
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom service support statement */}
        <div className="mt-16 bg-blue-50/50 border border-blue-100/60 rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto" dir="rtl">
          <p className="font-urdu text-sm sm:text-base text-blue-900 font-bold leading-relaxed">
            💡 <strong className="text-red-600">نوٹ:</strong> کام شروع کرنے کے لیے آپ کو کسی قسم کے پہلے سے کام کے تجربے کی ضرورت نہیں ہے۔ ہماری ٹیم آپ کو رجسٹریشن مکمل ہونے پر مکمل تفصیلی ویڈیوز اور تربیتی مواد (Traning Material) فراہم کرے گی۔
          </p>
        </div>

      </div>
    </section>
  );
}
