import axios from "axios";
import { Donation } from "../types";
export async function getDonations(): Promise<Donation[]> {
  const response = await axios.get("http://localhost:3000/donations");
  return response.data;
}

export async function createDonation(data: Donation): Promise<Donation> {
  const response = await axios.post('http://localhost:3000/donations', data);
  return response.data;
}