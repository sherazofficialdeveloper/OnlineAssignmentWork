/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  iconName: string; // references Lucide icons dynamically
  titleUrdu: string;
  descriptionUrdu: string;
}

export interface PricingPackage {
  id: number;
  nameUrdu: string;
  nameEnglish: string;
  joiningFee: number;
  dailySalary: number;
  pages: number;
  isRecommended?: boolean;
}

export interface PaymentMethod {
  name: string;
  accountTitle: string;
  accountNumber: string;
  instructionsUrdu: string;
  logoColor: string; // Tailwind class colors
}
