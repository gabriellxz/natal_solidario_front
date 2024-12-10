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
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Search } from "../icons/Search";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { EllipsisVertical } from "../icons/EllipsisVertical";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

// Define the Donor type based on your data structure
interface Donor {
  id: number | string;
  name: string;
  amount: number;
  city: string;
  phone: string;
  donationDate: string;
  donationTime: string;
}

// Props for the DonorsTable component
interface DonorsTableProps {
  donors: Donor[];
  isLoading: boolean;
}

export function DonorsTable({ donors, isLoading }: DonorsTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState(""); // Search state
  const [cityFilter, setCityFilter] = useState<string | null>(null); // City filter state
  const [donationTypeFilter, setDonationTypeFilter] = useState<string[]>([]); // Donation type filter state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To manage dropdown open/close state

  // Handle page change
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  // Handle donation type filter change
  const handleDonationTypeChange = (type: string) => {
    setDonationTypeFilter((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  // Filter the donors data based on the search and filters
  const filteredDonors = donors
    .filter((donor) => {
      const searchTerm = searchText.toLowerCase();
      return (
        donor.name.toLowerCase().includes(searchTerm) ||
        donor.city.toLowerCase().includes(searchTerm) ||
        donor.phone.toLowerCase().includes(searchTerm) ||
        donor.id.toString().toLowerCase().includes(searchTerm)
      );
    })
    .filter((donor) =>
      cityFilter ? donor.city === cityFilter : true
    )
    .filter((donor) =>
      donationTypeFilter.length
        ? donationTypeFilter.includes(donor.city) // Adjust this filter as needed
        : true
    );

  // Total pages calculation
  const totalPages = Math.ceil(filteredDonors.length / rowsPerPage);

  return (
    <TableContainer component={Paper} className="p-10">
      <div className="flex w-full justify-between mb-4">
        <div className="flex w-2/3 gap-8">
          <div className="w-2/3 bg-zinc-200 h-9 flex gap-2 p-3 justify-center items-center rounded-lg">
            <Search className="size-5" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-transparent p-1 outline-none border-none"
              placeholder="Buscar"
            />
          </div>
         
          <div>
            <Button
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setIsMenuOpen(!isMenuOpen);
              }}
              sx={{
                background: "#9EC3FF",
                color: "#000000",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "none",
                ":hover": {
                  boxShadow: "0.5px 0.5px 1px  #3f3f46",
                },
                textTransform: "none", // Keep text as is (no uppercase)
                whiteSpace: "nowrap", // Prevent text from wrapping
              }}
            >
              Tipo de Doação
              {isMenuOpen ? <ArrowDropUp sx={{ marginLeft: "8px" }} /> : <ArrowDropDown sx={{ marginLeft: "8px" }} />}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {["Brinquedos", "Roupas", "Alimentos"].map((type) => (
                <MenuItem key={type}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={donationTypeFilter.includes(type)}
                        onChange={() => handleDonationTypeChange(type)}
                      />
                    }
                    label={type}
                  />
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div>
          <ButtonGroup sx={{ border: "1px #3f3f46", borderRadius: "8px" }}>
            {["Acarape", "Redenção", "Barreira"].map((city) => (
              <Button
                key={city}
                variant={cityFilter === city ? "contained" : "outlined"}
                onClick={() =>
                  setCityFilter(cityFilter === city ? null : city)
                }
                sx={{
                  background: cityFilter === city ? "#FF5266" : undefined,
                  color: cityFilter === city ? "#FFFFFF" : "#3f3f46",
                  fontWeight: cityFilter === city ? "700" : "normal",
                  borderRadius: "8px", // Adjust the border radius
                  ":hover":
                    cityFilter === city
                      ? ""
                      : { background: "#fee2e2" },
                  borderColor: "#78716c",
                }}
              >
                {city}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Data e Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <h2>carregando...</h2>
          ) : !donors.length ? (
            <h2>Nenhum doador encontrado</h2>
          ) : (
            ""
          )}
          {filteredDonors
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((donor) => (
              <TableRow key={donor.id}>
                <TableCell>{donor.id}</TableCell>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.amount}</TableCell>
                <TableCell>{donor.city}</TableCell>
                <TableCell>{donor.phone}</TableCell>
                <TableCell>{`${donor.donationDate} ${donor.donationTime}`}</TableCell>
                <TableCell align="left">
                  <button>
                    <EllipsisVertical />
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center p-2 mt-2">
        <div>
          <h3>
            Mostrando {page * rowsPerPage + 1} a{" "}
            {Math.min((page + 1) * rowsPerPage, filteredDonors.length)} de{" "}
            {filteredDonors.length}
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
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                onClick={() => handleChangePage(index)}
                variant={index === page ? "contained" : "outlined"}
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
                  backgroundColor: index === page ? "#FF4444" : undefined, // Page number background color
                  color: index === page ? "#FFFFFF" : undefined,
                }}
              >
                {index + 1}
              </Button>
            ))}
          </div>
          <Button
            disabled={page === totalPages - 1}
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
