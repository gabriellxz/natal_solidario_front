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
  Popover,
  Divider,
} from "@mui/material";
import { AddCircle } from "../icons/AddCircle";
import { Search } from "../icons/Search";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { EllipsisVertical } from "../icons/EllipsisVertical";
import { useNavigate } from "react-router-dom";
import { Donation } from "../../types";
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
  const id = open ? "simple-popover" : undefined;

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
                  ":hover":
                    categoryFilter === "Alimentos"
                      ? undefined
                      : { background: "#fee2e2" },
                  borderColor: "#78716c",
                }}
              >
                Alimentos
              </Button>

              <Button
                variant={
                  categoryFilter === "Brinquedos" ? "contained" : "outlined"
                }
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === "Brinquedos" ? null : "Brinquedos"
                  )
                }
                sx={{
                  background:
                    categoryFilter === "Brinquedos" ? "#FF5266" : undefined,
                  color:
                    categoryFilter === "Brinquedos" ? "#FFFFFF" : "#3f3f46",
                  fontWeight:
                    categoryFilter === "Brinquedos" ? "700" : "normal",
                  ":hover":
                    categoryFilter === "Brinquedos"
                      ? undefined
                      : { background: "#fee2e2" },
                  borderColor: "#78716c",
                }}
              >
                Brinquedos
              </Button>

              <Button
                variant={categoryFilter === "Roupas" ? "contained" : "outlined"}
                onClick={() =>
                  setCategoryFilter(
                    categoryFilter === "Roupas" ? null : "Roupas"
                  )
                }
                sx={{
                  background:
                    categoryFilter === "Roupas" ? "#FF5266" : undefined,
                  color: categoryFilter === "Roupas" ? "#FFFFFF" : "#3f3f46",
                  fontWeight: categoryFilter === "Roupas" ? "700" : "normal",
                  ":hover":
                    categoryFilter === "Roupas"
                      ? undefined
                      : { background: "#fee2e2" },
                  borderColor: "#78716c",
                }}
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
              <TableRow key={donation.id}>
                <TableCell>{donation.id}</TableCell>
                <TableCell>{donation.selected.join(", ")}</TableCell>
                <TableCell>
                  {donation.quantities[donation.selected[0]]}
                </TableCell>
                <TableCell>
                  {donation.formData.firstName} {donation.formData.lastName}
                </TableCell>
                <TableCell>{donation.formData.firstName}</TableCell>
                <TableCell width="150px">{`${donation.date} ${donation.time}`}</TableCell>
                <TableCell align="left">
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
                      <button className="text-red-500">Excluir</button>
                    </div>
                  </Popover>
                </TableCell>
              </TableRow>
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
  );
}
