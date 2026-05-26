/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import PaymentContact from "./components/PaymentContact";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(3); // Default to Gold Package 3

  const handleSelectPackage = (packageId: number) => {
    setSelectedPackageId(packageId);
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-blue-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Sticky English Navigation Header */}
      <Navbar />

      {/* Full-width content wrapper */}
      <main className="flex-grow">
        {/* Urdu Hero banner & WhatsApp action */}
        <Hero />

        {/* Urdu Services cards list */}
        <Services />

        {/* Interactive Pricing/Packages panels */}
        <Packages
          selectedPackageId={selectedPackageId}
          onSelectPackage={handleSelectPackage}
        />

        {/* User data registration & Bank accounts display */}
        <PaymentContact
          selectedPackageId={selectedPackageId}
          onSelectPackage={handleSelectPackage}
        />

        {/* Deep visual Urdu Conversion block */}
        <CTASection />
      </main>

      {/* English Sleek Footer footer */}
      <Footer />
    </div>
  );
}
