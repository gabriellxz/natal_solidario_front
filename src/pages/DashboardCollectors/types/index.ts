export interface Donation {
  id: number | string;
  selected: string[]; 
  quantities: { [key: string]: number }; 
  description: string; 
  formData: {
    firstName: string; 
    lastName: string; 
    contact: string; 
    cep: string; 
    city: string; 
    address: string; 
  };
  date: string; 
  time: string; 
}