import { useState } from "react";
import { Popover, Divider } from "@mui/material";
import { EllipsisVertical } from "../../pages/DashboardCollectors/components/icons/EllipsisVertical";

// popover

export default function TableTargets() {
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
    <div className="bg-white mt-[94px] max-w-[1200px] w-full pb-[81px] border border-gray-400 rounded-3xl">
      <div className="p-[30px] pl-[70px] font-poppins text-lg font-medium">
        <span>Metas Cumpridas</span>
      </div>
      <div className="mt-[61px] font-poppins w-full">
        <table className="w-full">
          <thead className="w-full">
            <tr className="border-b border-gray-300 w-full">
              <th className="text-left sm:py-3 sm:px-6 md:pl-[46px] pl-[46px] font-medium">
                Nome
              </th>
              <th className="sm:text-left sm:py-3 sm:px-6 font-medium">
                N° de Doadores
              </th>
              <th className="sm:text-left sm:py-3 sm:px-6 font-medium">
                N° de Doações
              </th>
              <th className="sm:text-left sm:py-3 sm:px-6 font-medium">
                N° de Alimentos
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="border-b border-gray-200">
              <td className="py-6 px-6 pl-[46px] whitespace-nowrap">
                Neto Betania
              </td>
              <td className="py-6 px-6">20</td>
              <td className="py-6 px-6">30</td>
              <td className="py-6 px-6">20</td>
              <td className="py-6 px-6">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
