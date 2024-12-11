import { Button } from "@mui/material";
import { AddCircle } from "../icons/AddCircle";

interface HeaderProps {
  totalCollections: number;
}

export function HeaderDashCollectors({ totalCollections }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between mb-10">
      <div>
        <h1 className="text-xl text-red-400 font-semibold">
          Arrecadações Recentes
        </h1>
        <p className="text-sm">{totalCollections} arrecadações feitas</p>
      </div>
      <Button
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