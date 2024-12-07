import {
  Button,
  Card,
  CardContent,
  Checkbox,
  createTheme,
  Input,
  InputLabel,
  ThemeProvider,
} from "@mui/material";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background from "../../../assets/background_complete.png";

import { useState } from "react";

interface CheckboxItem {
  id: string;
  label: string;
}

const options: CheckboxItem[] = [
  { id: "roupas", label: "Roupas" },
  { id: "brinquedos", label: "Brinquedos" },
  { id: "alimento", label: "Alimento" },
];

const theme = createTheme({
  palette: {
    primary: { main: "#FF4444" },
    secondary: { main: "#3F51B5" },
    background: { default: "#F5F5F5" },
    error: { main: "#F44336" },
    success: { main: "#4CAF50" },
  },
});
export function NewDonation() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="space-y-7 flex flex-col justify-center items-center w-full h-full font-poppins bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="text-3xl text-red-500 font-semibold">
            Faça uma doação
          </h1>
          <span className="text-sm opacity-60">Cadastre uma nova doação</span>
        </div>
        <Card className="w-1/3 rounded-2xl">
          <CardContent className="flex flex-col space-y-3">
            <h1 className="font-semibold text-xl">Nova Doação</h1>
            <hr />
            <form action="">
              <div>
                <span>Tipo de doação</span>
                {options.map((option) => (
                  <div key={option.id}>
                    <InputLabel>
                      <Checkbox
                        id={option.id}
                        onChange={() => handleCheckboxChange(option.id)}
                        checked={selected.includes(option.id)}
                      />
                      <span>{option.label}</span>
                    </InputLabel>

                    {selected.includes(option.id) && (
                      <div className="px-6">
                        <Input
                          className="w-full mb-2"
                          placeholder="quantidade..."
                          required
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <p>Descrição da doação</p>
                <textarea
                  className="resize-none h-20 border border-1 border-zinc-400 w-full p-2 rounded-lg"
                  placeholder="opicional"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                // endIcon={<ArrowForwardIcon />}
                className="w-full"
                type="submit"
              >
                Avançar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
