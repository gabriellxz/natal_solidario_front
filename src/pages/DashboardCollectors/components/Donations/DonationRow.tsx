import { Divider, Popover, TableCell, TableRow } from "@mui/material";
import { Donation } from "../../types";
import { EllipsisVertical } from "../icons/EllipsisVertical";

interface DonationRowProps {
  donation: Donation;
  onMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  handleClose: () => void;
}

export function DonationRow({
  donation,
  onMenuClick,
  anchorEl,
  open,
  handleClose,
}: DonationRowProps) {
  const id = open ? "simple-popover" : undefined;
  return (
    <TableRow key={donation.id}>
      <TableCell>{donation.id}</TableCell>
      <TableCell>{donation.selected.join(", ")}</TableCell>
      <TableCell>{donation.quantities[donation.selected[0]]}</TableCell>
      <TableCell>
        {donation.formData.firstName} {donation.formData.lastName}
      </TableCell>
      <TableCell>{donation.formData.firstName}</TableCell>
      <TableCell width="150px">{`${donation.date} ${donation.time}`}</TableCell>
      <TableCell align="left">
        <button aria-describedby={id} onClick={onMenuClick}>
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
  );
}