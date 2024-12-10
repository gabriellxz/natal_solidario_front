import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Popover,
  Divider,
} from "@mui/material";
import { AddCircle } from "../icons/AddCircle";
import { EllipsisVertical } from "../icons/EllipsisVertical";
import { useState } from "react";
import { Donation } from "../../types";
interface RecentCollectionsTableProps {
  collections: Donation[];
  isLoading: boolean;
}

export function RecentCollectionsTable({
  collections,
  isLoading,
}: RecentCollectionsTableProps) {
  // Ordena as arrecadações pela data mais recente
  const sortedCollections = [...collections].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB.getTime() - dateA.getTime(); // Ordena em ordem decrescente
  });

  // Seleciona apenas os 5 itens mais recentes
  const recentCollections = sortedCollections.slice(0, 5);

  // popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <TableContainer component={Paper} className="p-10 font-poppins">
      <div className="flex w-full items-center justify-between mb-10">
        <div>
          <h1 className="text-xl text-red-400 font-semibold">
            Arrecadações Recentes
          </h1>
          <p className="text-sm">{collections.length} arrecadações feitas</p>
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tipo de Doação</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Arrecadador</TableCell>
            <TableCell>Doador</TableCell>
            <TableCell>Data e Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <h2>carregando...</h2>}
          {recentCollections.map((collection) => (
            <TableRow key={collection.id}>
              <TableCell>{collection.id}</TableCell>
                <TableCell>{collection.selected.join(", ")}</TableCell>
                <TableCell>
                  {collection.quantities[collection.selected[0]]}
                </TableCell>
                <TableCell>
                  {collection.formData.firstName} {collection.formData.lastName}
                </TableCell>
                <TableCell>{collection.formData.firstName}</TableCell>
                <TableCell width="150px">{`${collection.date} ${collection.time}`}</TableCell>
              <TableCell width="150px">{`${collection.date} ${collection.time}`}</TableCell>
              <TableCell>
                <button aria-describedby={id} onClick={handleClick}>
                  <EllipsisVertical />
                </button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    sx: {
                      boxShadow: "none",
                      border: "1px solid #a1a1aa",
                      padding: "8px 10px",
                    },
                  }}
                >
                  <div className="space-y-1 text-sm">
                    <button>Ver detalhes</button> <br />
                    <Divider />
                    <button>Editar</button> <br />
                    <Divider />
                    <button className="text-red-600">Apagar</button>
                  </div>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
