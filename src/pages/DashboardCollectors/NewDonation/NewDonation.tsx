import {
  Button,
  Card,
  CardContent,
  Checkbox,
  createTheme,
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  ThemeProvider,
} from "@mui/material";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background from "../../../assets/background_complete.png";
import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redirecionamento

// Definir o esquema de validação com Zod
const donationSchema = z.object({
  selected: z
    .array(z.string())
    .min(1, "Você deve selecionar pelo menos uma doação"),
  quantities: z.object({
    roupas: z
      .number()
      .min(1, "A quantidade de Roupas deve ser maior que 0")
      .refine((val) => val > 0, {
        message: "A quantidade de Roupas deve ser maior que 0",
      })
      .optional(),
    brinquedos: z
      .number()
      .min(1, "A quantidade de Brinquedos deve ser maior que 0")
      .refine((val) => val > 0, {
        message: "A quantidade de Brinquedos deve ser maior que 0",
      })
      .optional(),
    alimento: z
      .number()
      .min(1, "A quantidade de Alimento deve ser maior que 0")
      .refine((val) => val > 0, {
        message: "A quantidade de Alimento deve ser maior que 0",
      })
      .optional(),
  }),
});

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
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCheckboxChange = (id: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleQuantityChange = (id: string, value: string) => {
    const quantity = parseInt(value, 10) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Verifique se algum checkbox está selecionado
    if (selected.length === 0) {
      newErrors["checkbox"] = "Você deve selecionar pelo menos uma doação.";
    }

    // Validação das quantidades
    options.forEach((option) => {
      if (selected.includes(option.id)) {
        const quantity = quantities[option.id];
        if (!quantity || quantity <= 0) {
          newErrors[
            option.id
          ] = `A quantidade de ${option.label} deve ser maior que 0`;
        }
      }
    });

    // Se houver erros, atualize o estado com os erros
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Se não houver erros, valida com o Zod
    try {
      donationSchema.parse({
        selected,
        quantities,
      });

      setErrors({}); // Limpa os erros

      navigate("/dashboard-collectors/confirm-donation");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newError = err.errors[0].message;
        setErrors({ checkbox: newError }); // Coloca o erro do Zod no estado
      }
    }
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
            <form onSubmit={handleSubmit}>
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
                        <FormControl
                          fullWidth
                          error={Boolean(errors[option.id])}
                        >
                          <Input
                            className="w-full mb-2"
                            placeholder="quantidade..."
                            type="number"
                            value={quantities[option.id] || ""}
                            onChange={(e) =>
                              handleQuantityChange(option.id, e.target.value)
                            }
                          />
                          {errors[option.id] && (
                            <FormHelperText>{errors[option.id]}</FormHelperText>
                          )}
                        </FormControl>
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

              {errors["checkbox"] && (
                <p className="text-red-500">{errors["checkbox"]}</p>
              )}

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
