import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AddCircle, Search } from "@mui/icons-material";

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

export function DonationsTable({ collections }: RecentCollectionsTableProps) {
  const [page, setPage] = useState(0); // Estado da página
  const [rowsPerPage] = useState(5); // Quantidade de itens por página

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(collections.length / rowsPerPage);

  // Função para renderizar os números de página
  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    pageNumbers.push(0); // Sempre mostra a primeira página

    if (totalPages > 1) {
      pageNumbers.push(1); // Sempre mostra a segunda página
    }

    // Sempre mostra a página 3 se existir
    if (totalPages > 2) {
      pageNumbers.push(2); // Página 3 sempre visível
    }

    // Adiciona a página atual se não for a primeira, segunda ou terceira
    if (page !== 0 && page !== 1 && page !== 2 && page < totalPages - 1) {
      pageNumbers.push(page); // Adiciona a página atual
    }

    // Adiciona os "..." quando necessário, mas não remove a última página
    if (page + 1 < totalPages - 1) {
      pageNumbers.push("..."); // Adiciona os "..."
    }

    // Sempre adiciona a última página, se não for visível
    if (page < totalPages - 1 && !pageNumbers.includes(totalPages - 1)) {
      pageNumbers.push(totalPages - 1); // Adiciona a última página
    }

    // Se estiver na última página, mostramos sempre o número da última página
    if (page === totalPages - 1) {
      if (!pageNumbers.includes(totalPages - 1)) {
        pageNumbers.push(totalPages - 1); // Última página visível
      }
    }

    return [...new Set(pageNumbers)]; // Garante que não haverá duplicados
  };

  return (
    <TableContainer component={Paper} className="p-10">
      <div className="flex w-full justify-between mb-4">
        <div className="flex w-2/3 gap-2">
          <div className="w-full bg-zinc-200 h-9 flex gap-2 p-3 justify-center items-center rounded-lg">
            <Search className="text-zinc-500" />
            <input
              type="text"
              className="w-full bg-transparent p-1 outline-none border-none"
              placeholder="Buscar..."
            />
          </div>
          <div>
            <ButtonGroup>
              <Button
                variant="contained"
                style={{
                  background: "#FF5266",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  boxShadow: "none",
                  fontWeight: "700",
                }}
              >
                Alimentos
              </Button>
              <Button sx={{ borderColor: "#d4d4d8", color: "#000" }}>
                Bringredos
              </Button>
              <Button sx={{ borderColor: "#d4d4d8", color: "#000" }}>
                Roupas
              </Button>
            </ButtonGroup>
          </div>
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
          {collections
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((collection) => (
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
      <div className="flex justify-between items-center p-2 mt-2">
        <div className="">
          <h3>
            Mostrando {page * rowsPerPage + 1} a{" "}
            {Math.min((page + 1) * rowsPerPage, collections.length)} de{" "}
            {collections.length}
          </h3>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={page === 0}
            onClick={() => handleChangePage(page - 1)}
            sx={{
              minWidth: "30px",
              height: "30px",
              borderRadius: "8px",
              padding: "0 0px 0px 5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "20px" }} />{" "}
          </Button>
          <div className="flex space-x-2 ">
            {renderPageNumbers().map((number, index) =>
              typeof number === "string" ? (
                <div
                  key={index}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#000",
                  }}
                >
                  {number}
                </div>
              ) : (
                <Button
                  key={index}
                  onClick={() => handleChangePage(number)}
                  variant="outlined"
                  sx={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    padding: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      number === page ? "#FF4444" : "transparent",
                    color: number === page ? "white" : "black",
                    fontWeight: number === page ? "bold" : "normal",
                    border:
                      number === page ? "2px solid #FF4444" : "1px solid #ccc",
                  }}
                >
                  {number + 1}
                </Button>
              )
            )}
          </div>
          <Button
            disabled={page >= totalPages - 1}
            onClick={() => handleChangePage(page + 1)}
            sx={{
              minWidth: "30px",
              height: "30px",
              borderRadius: "8px",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>
    </TableContainer>
  );
}
