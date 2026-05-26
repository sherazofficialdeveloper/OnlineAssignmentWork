/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquareDot } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function WhatsAppFloatingButton() {
  const whatsappLink = getWhatsAppLink(
    "Assalam-o-Alaikum! Please guide me about the available home-based handwritten and typing assignment projects."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 pointer-events-none">
      
      {/* Dynamic Animated Urdu Tooltip Pill */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="pointer-events-auto hidden md:flex items-center gap-1.5 bg-gradient-to-l from-emerald-600 to-emerald-500 text-white font-urdu text-xs font-bold px-4 py-2 rounded-2xl shadow-xl shadow-emerald-600/10 border border-emerald-400/20"
      >
        <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
        <span>ابھی واٹس ایپ پر بات کریں!</span>
      </motion.div>

      {/* Actual Action Button with double-ring ripple pulse effects */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto h-16 w-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 cursor-pointer relative group"
        title="Chat on WhatsApp"
      >
        {/* Repeating background wave pulse rings */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-45 delay-300 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full border-4 border-emerald-400/20 animate-pulse pointer-events-none" />

        <MessageSquareDot className="h-8 w-8 stroke-[2.5px] group-hover:scale-110 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
