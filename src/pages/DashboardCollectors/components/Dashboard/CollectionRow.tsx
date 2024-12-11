import { Divider, Popover, TableCell, TableRow } from "@mui/material";
import { EllipsisVertical } from "../icons/EllipsisVertical";
import { Donation } from "../../types";

interface TableRowProps {
  collection: Donation;
  onMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  handleClose: () => void;
}

export function CollectionRow({
  collection,
  onMenuClick,
  anchorEl,
  open,
  handleClose,
}: TableRowProps) {
  const id = open ? "simple-popover" : undefined;

  return (
    <TableRow>
      <TableCell>{collection.id}</TableCell>
      <TableCell>{collection.selected.join(", ")}</TableCell>
      <TableCell>{collection.quantities[collection.selected[0]]}</TableCell>
      <TableCell>
        {collection.formData.firstName} {collection.formData.lastName}
      </TableCell>
      <TableCell>{collection.formData.firstName}</TableCell>
      <TableCell width="150px">{`${collection.date} ${collection.time}`}</TableCell>
      <TableCell>
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
            <button className="text-red-600">Apagar</button>
          </div>
        </Popover>
      </TableCell>
    </TableRow>
  );
}