export interface Language {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
}

export interface Passenger {
  id: number;
  paid: boolean;
}

export interface SeatStatus {
  [key: number]: 'empty' | 'occupied' | 'paid';
}

export type VehicleType = 'microbus' | 'minibus';

export interface Translations {
  title: string;
  subtitle: string;
  basicSetup: string;
  feePerPerson: string;
  totalPassengers: string;
  setupComplete: string;
  collectionTracker: string;
  amountCollected: string;
  enterAmount: string;
  totalExpected: string;
  stillNeeded: string;
  collectionComplete: string;
  passengerTracker: string;
  passenger: string;
  paid: string;
  notPaid: string;
  markAsPaid: string;
  markAsUnpaid: string;
  paidCount: string;
  remainingCount: string;
  changeCalculator: string;
  customerPaying: string;
  changeDue: string;
  noChangeNeeded: string;
  quickActions: string;
  reset: string;
  collectFromAll: string;
  summary: string;
  totalFare: string;
  collected: string;
  remaining: string;
  progress: string;
  conductorTips: string;
  tips: string[];
  suggestedChange: string;
  egp200: string;
  egp100: string;
  egp50: string;
  egp20: string;
  egp10: string;
  egp5: string;
  egp1: string;
  piasters50: string;
  piasters25: string;
}
