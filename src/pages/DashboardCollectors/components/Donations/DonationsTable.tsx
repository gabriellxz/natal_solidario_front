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
} from "@mui/material";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { useNavigate } from "react-router-dom";
import { Donation } from "../../types";
import { DonationRow } from "./DonationRow";
import { HeaderDonations } from "./HeaderDonations";
interface DonationsTableProps {
  donations: Donation[];
  isLoading: boolean;
}

export function DonationsTable({ donations, isLoading }: DonationsTableProps) {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState(""); // Estado para pesquisa
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null); // Estado para categoria

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const filteredDonations = donations
    .filter((donation) => {
      const searchTerm = searchText.toLowerCase();
      // Filtro de busca (nome do doador, id e categorias selecionadas)
      return (
        donation.selected.join(" ").toLowerCase().includes(searchTerm) ||
        donation.formData.firstName.toLowerCase().includes(searchTerm) ||
        donation.formData.lastName.toLowerCase().includes(searchTerm) ||
        donation.id.toString().toLowerCase().includes(searchTerm)
      );
    })
    .filter((donation) => {
      // Filtro de categoria (se a categoria está selecionada)
      return categoryFilter
        ? donation.selected.some((category) => category === categoryFilter)
        : true; // Se não houver filtro de categoria, retorna todas as doações
    });
  const totalPages = Math.ceil(filteredDonations.length / rowsPerPage);

  // popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
    <div>
      <TableContainer component={Paper} className="p-10">
        <HeaderDonations
          searchText={searchText}
          setSearchText={setSearchText}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          navigate={navigate}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Categorias</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Nome do Doador</TableCell>
              <TableCell>Responsável</TableCell>
              <TableCell>Data e Hora</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {isLoading ? (
            <h2>carregando...</h2>
          ) : !donations.length ? (
            <h2>Nenhuma doação encontrada</h2>
          ) : (
            ""
          )}
            {filteredDonations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((donation) => (
                <DonationRow
                  key={donation.id}
                  donation={donation}
                  onMenuClick={handleClick}
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={handleClose}
                />
              ))}
          </TableBody>
        </Table>
      <div className="flex justify-between items-center p-2 mt-2">
        <div>
          <h3>
            Mostrando {page * rowsPerPage + 1} a{" "}
            {Math.min((page + 1) * rowsPerPage, filteredDonations.length)} de{" "}
            {filteredDonations.length}
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
    </div>
  );
}
