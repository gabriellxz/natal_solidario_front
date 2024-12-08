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
import { AddCircle } from "../icons/AddCircle";
import { Search } from "../icons/Search";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";

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
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState(""); // Estado para pesquisa
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null); // Estado para categoria

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const filteredCollections = collections
    .filter((collection) => {
      const searchTerm = searchText.toLowerCase();
      return (
        collection.donationType.toLowerCase().includes(searchTerm) ||
        collection.collector.toLowerCase().includes(searchTerm) ||
        collection.donor.toLowerCase().includes(searchTerm) ||
        collection.id.toString().toLowerCase().includes(searchTerm)
      );
    })
    .filter((collection) =>
      categoryFilter ? collection.donationType === categoryFilter : true
    );

  const totalPages = Math.ceil(filteredCollections.length / rowsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    pageNumbers.push(0);
    if (totalPages > 1) pageNumbers.push(1);
    if (totalPages > 2) pageNumbers.push(2);
    if (page !== 0 && page !== 1 && page !== 2 && page < totalPages - 1)
      pageNumbers.push(page);
    if (page + 1 < totalPages - 1) pageNumbers.push("...");
    if (page < totalPages - 1 && !pageNumbers.includes(totalPages - 1))
      pageNumbers.push(totalPages - 1);
    if (page === totalPages - 1 && !pageNumbers.includes(totalPages - 1))
      pageNumbers.push(totalPages - 1);
    return [...new Set(pageNumbers)];
  };

  return (
    <TableContainer component={Paper} className="p-10">
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
          <div>
            <ButtonGroup sx={{ border: "1px #3f3f46" }}>
              <Button
                variant={
                  categoryFilter === "Alimentos" ? "contained" : "outlined"
                }
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === "Alimentos" ? null : "Alimentos"
                  )
                }
                sx={{
                  background:
                    categoryFilter === "Alimentos" ? "#FF5266" : undefined,
                  color: categoryFilter === "Alimentos" ? "#FFFFFF" : "#3f3f46",
                  fontWeight: categoryFilter === "Alimentos" ? "700" : "normal",
                  ":hover": categoryFilter === "Alimentos" ? "" : {background: "#fee2e2"},
                  borderColor: "#78716c"
                }}
              >
                Alimentos
              </Button>
              <Button
                sx={{
                  background:
                    categoryFilter === "Brinquedos" ? "#FF5266" : undefined,
                  color:
                    categoryFilter === "Brinquedos" ? "#FFFFFF" : "#3f3f46",
                  fontWeight:
                    categoryFilter === "Brinquedos" ? "700" : "normal",
                  ":hover": categoryFilter === "Brinquedos" ? "" : {background: "#fee2e2"},
                  borderColor: "#78716c"
                }}
                variant={
                  categoryFilter === "Brinquedos" ? "contained" : "outlined"
                }
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === "Brinquedos" ? null : "Brinquedos"
                  )
                }
              >
                Brinquedos
              </Button>
              <Button
                sx={{
                  background:
                    categoryFilter === "Roupas" ? "#FF5266" : undefined,
                  color: categoryFilter === "Roupas" ? "#FFFFFF" : "#3f3f46",
                  fontWeight: categoryFilter === "Roupas" ? "700" : "normal",
                  ":hover": categoryFilter === "Roupas" ? "" : {background: "#fee2e2"},
                  borderColor: "#78716c"
                }}
                variant={categoryFilter === "Roupas" ? "contained" : "outlined"}
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === "Roupas" ? null : "Roupas"
                  )
                }
              >
                Roupas
              </Button>
            </ButtonGroup>
          </div>
          {categoryFilter?.length && (
            <Button
              onClick={() => setCategoryFilter(null)}
              variant="text"
              sx={{
                color: "#3f3f46",
                ":hover": {
                  background: "transparent",
                  color: "#FF5266",
                },
              }}
            >
              limpar
            </Button>
          )}
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
          {filteredCollections
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
        <div>
          <h3>
            Mostrando {page * rowsPerPage + 1} a{" "}
            {Math.min((page + 1) * rowsPerPage, filteredCollections.length)} de{" "}
            {filteredCollections.length}
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
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <ArrowLeft className="size-4" />
          </Button>
          <div className="flex space-x-2">
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
                  variant={number === page ? "contained" : "outlined"}
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
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </TableContainer>
  );
}
