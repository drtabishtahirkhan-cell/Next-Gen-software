export const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;

export type BloodType = (typeof bloodTypes)[number];

export type Donor = {
  id: string;
  name: string;
  phone: string;
  bloodType: BloodType;
  city: string;
  status: 'Eligible' | 'Review' | 'Deferred';
  lastDonation: string;
};

export type BloodRequest = {
  id: string;
  patientName: string;
  hospital: string;
  bloodType: BloodType;
  units: number;
  urgency: 'Routine' | 'Urgent' | 'Emergency';
  status: 'Pending' | 'Approved' | 'Fulfilled';
};

export const donors: Donor[] = [];
export const bloodRequests: BloodRequest[] = [];

export const inventorySeed = {
  'A+': 42,
  'A-': 18,
  'B+': 37,
  'B-': 14,
  'AB+': 21,
  'AB-': 9,
  'O+': 64,
  'O-': 26,
};
