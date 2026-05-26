/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, MessageCircleCode } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function CTASection() {
  const whatsappLink = getWhatsAppLink(
    "Assalam-o-Alaikum! I want to join Bismillah Assignment Work Platform right now. Please approve my registration!"
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-950 relative overflow-hidden text-white">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-600/10 blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        
        {/* Urdu text container with RTL support */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center" dir="rtl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-red-500 text-white font-extrabold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest leading-none shadow-lg shadow-red-500/20"
          >
            <Sparkles className="h-3.5 w-3.5 animate-spin duration-3000" />
            <span>ابھی شامل ہوں (Limited Seats Available)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-urdu-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.8] md:leading-[2.2] py-2 md:py-3 mb-6 text-center max-w-3xl"
          >
            کیا آپ آگے اسائنمنٹ لکھنے اور ٹائپنگ شروع کرنے کے لیے تیار ہیں؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-urdu text-base sm:text-lg text-blue-100 max-w-2xl mb-10 leading-[1.8] text-center"
          >
            وقت ضائع نہ کریں! ابھی ہمارے آفیشل واٹس ایپ ہیلپ ڈیسک پر کلک کریں اور اپنا رجسٹریشن پروسیس صرف ۵ منٹ میں مکمل کر کے فائلز حاصل کریں۔ کل سے ہی آپ کی آمدنی شروع ہو سکتی ہے!
          </motion.p>

          {/* Visually Bold WhatsApp CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-black px-10 py-5 rounded-3xl shadow-xl shadow-red-500/10 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 font-urdu"
            >
              <MessageCircleCode className="h-6 w-6 fill-white stroke-[2.5px] animate-pulse" />
              <span>ابھی واٹس ایپ پر شامل ہوں (Join Now on WhatsApp)</span>
            </a>
          </motion.div>

          {/* Supplementary prompt beneath */}
          <p className="mt-5 text-[11px] font-bold text-blue-300 font-sans uppercase tracking-widest" dir="ltr">
            * 24/7 Verified WhatsApp Business Services: +92 309 1469628
          </p>
        </div>

      </div>
    </section>
  );
}
