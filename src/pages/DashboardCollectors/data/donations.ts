import axios from "axios";
interface Donation {
  id: number | string;
  donationType: string;
  quantity: number;
  collector: string;
  donor: string;
  date: string;
  time: string;
}
export async function getDonations(): Promise<Donation[]> {
  const response = await axios.get("http://localhost:3000/donations");
  return response.data;
}
