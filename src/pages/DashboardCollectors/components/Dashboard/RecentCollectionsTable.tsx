import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Donation } from "../../types";
import { HeaderDashCollectors } from "./HeaderDashCollectors";
import { CollectionRow } from "./CollectionRow";
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

  return (
    <TableContainer component={Paper} className="p-10 font-poppins">
      <HeaderDashCollectors totalCollections={collections.length} />
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
            <CollectionRow
              key={collection.id}
              collection={collection}
              onMenuClick={handleClick}
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
