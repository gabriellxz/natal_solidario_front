import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { AddCircle } from "../icons/AddCircle";

interface Collection {
  id: number | string;
  donationType: string;
  quantity: number;
  collector: string;
  donor: string;
  date: string;
  time: string;
}

interface RecentCollectionsTableProps {
  collections: Collection[];
}

export function RecentCollectionsTable({
  collections,
}: RecentCollectionsTableProps) {
  // Ordena as arrecadações pela data mais recente
  const sortedCollections = [...collections].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB.getTime() - dateA.getTime(); // Ordena em ordem decrescente
  });

  // Seleciona apenas os 5 itens mais recentes
  const recentCollections = sortedCollections.slice(0, 5);

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
          {recentCollections.map((collection) => (
            <TableRow key={collection.id}>
              <TableCell>{collection.id}</TableCell>
              <TableCell>{collection.donationType}</TableCell>
              <TableCell>{collection.quantity}</TableCell>
              <TableCell>{collection.collector}</TableCell>
              <TableCell>{collection.donor}</TableCell>
              <TableCell>{`${collection.date} ${collection.time}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
