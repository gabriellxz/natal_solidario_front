import { Button } from "@mui/material";
import { Search } from "../icons/Search";
import { AddCircle } from "../icons/AddCircle";
import { CategoryFilter } from "./CategoryFilter";

interface HeaderProps {
  searchText: string;
  setSearchText: (text: string) => void;
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
  navigate: (path: string, options?: { replace: boolean }) => void;
}

export function HeaderDonations({
  searchText,
  setSearchText,
  categoryFilter,
  setCategoryFilter,
  navigate,
}: HeaderProps) {
  return (
    <div className="flex w-full justify-between mb-4">
      <div className="flex w-2/3 gap-2">
        <div className="w-full bg-zinc-200 h-9 flex gap-2 p-3 justify-center items-center rounded-lg">
          <Search className="size-5" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-transparent p-1 outline-none border-none"
            placeholder="Buscar..."
          />
        </div>
        <CategoryFilter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </div>
      <Button
        onClick={() => {
          navigate("/dashboard-collectors/new-donation", { replace: true });
        }}
        endIcon={<AddCircle />}
        variant="contained"
        sx={{
          background: "#9EC3FF",
          color: "#000000",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "none",
          ":hover": {
            boxShadow: "0.5px 0.5px 1px  #3f3f46",
          },
        }}
      >
        Nova Doação
      </Button>
    </div>
  );
}