import { DonationsTable } from "../components/Donations/DonationsTable";
import { useQuery } from "@tanstack/react-query";
import { getDonations } from "../data/donations";

export function Donations() {
  const { data: donations = [], isLoading } = useQuery({
    queryKey: ["donations"],
    queryFn: getDonations,
  });

  return (
    <div>
      <DonationsTable donations={donations} isLoading={isLoading}/>
    </div>
  );
}
