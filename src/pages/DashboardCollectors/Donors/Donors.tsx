import { DonorsTable } from "../components/DonorsTable/DonorsTable";

// Define the donor type
type Donor = {
  id: number;
  name: string;
  amount: number;
  city: string;
  phone: string;
  donationDate: string;
  donationTime: string;
};

// Use the type in the component
export function Donors() {
  const donors: Donor[] = [
    {
      id: 1,
      name: "John Doe",
      amount: 100,
      city: "Acarape",
      phone: "123-456-7890",
      donationDate: "2024-12-01",
      donationTime: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      amount: 200,
      city: "Barreira",
      phone: "987-654-3210",
      donationDate: "2024-12-02",
      donationTime: "02:00 PM",
    },
  ];

  return (
    <div>
      <DonorsTable donors={donors} isLoading={false} />
    </div>
  );
}
