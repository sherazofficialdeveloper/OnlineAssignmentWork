/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, MessageSquareText, ShieldAlert, ArrowUp } from "lucide-react";
import { WHATSAPP_FORMATTED, getWhatsAppLink } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const footerContactLink = getWhatsAppLink("Hi! I would like to contact your team about the assignment writing services.");

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-gray-800">
          
          {/* Logo Brand / Info */}
          <div className="md:col-span-5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                Assignment Work Platform
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto md:mx-0">
              Your premier gateway for independent writing and typing assignments at home. Providing safe, verified, daily-salaried opportunities across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 text-center">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
              Resources & Navigation
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#packages" className="hover:text-white transition-colors">Packages</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact Registration</a>
            </div>
          </div>

          {/* Direct Support Contacts */}
          <div className="md:col-span-3 text-center md:text-right">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 md:text-right">
              Support Line
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <span className="text-gray-500 mr-1.5 font-normal">WhatsApp:</span>
                <a href={footerContactLink} target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline">
                  {WHATSAPP_FORMATTED}
                </a>
              </li>
              <li>
                <span className="text-gray-500 mr-1.5 font-normal">Inquiries:</span>
                <span className="text-gray-300">support@assignmentwork.platform</span>
              </li>
              <li>
                <span className="text-gray-500 mr-1.5 font-normal">Location:</span>
                <span className="text-gray-400">Online Service, PK</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-gray-600 font-bold tracking-widest uppercase">
              Bismillah Online Work • Assignment Services
            </p>
            <p className="text-[10px] text-gray-500 mt-1 font-medium">
              &copy; {currentYear} Assignment Work Platform. This site is for online typing assignment enrollment. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-gray-800/60 text-[10px] font-bold text-red-400 border border-gray-800 px-3 py-1 rounded-full uppercase tracking-wider">
              <ShieldAlert className="h-3 w-3" />
              <span>Verifiable Deposits Only</span>
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all cursor-pointer shadow-md"
              title="Scroll to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
