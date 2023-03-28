export interface Claim {
  objectId: string;
  insured_card_number: string;
  insured_name: string;
  dob: string;
  gender: 'Male' | 'Female';
  hospital: string;
  admission_date: string;
  medical_case: string;
  estimated_cost: string;
  treating_physician: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  remarks: string;
}
