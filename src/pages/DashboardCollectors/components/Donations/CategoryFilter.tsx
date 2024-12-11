import { Button, ButtonGroup } from "@mui/material";

interface CategoryFilterProps {
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
}

export function CategoryFilter({
  categoryFilter,
  setCategoryFilter,
}: CategoryFilterProps) {
  const categories = ["Alimentos", "Brinquedos", "Roupas"];
  return (
    <ButtonGroup sx={{ border: "1px #3f3f46" }}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={categoryFilter === category ? "contained" : "outlined"}
          onClick={() =>
            setCategoryFilter(categoryFilter === category ? null : category)
          }
          sx={{
            background: categoryFilter === category ? "#FF5266" : undefined,
            color: categoryFilter === category ? "#FFFFFF" : "#3f3f46",
            fontWeight: categoryFilter === category ? "700" : "normal",
            ":hover":
              categoryFilter === category
                ? undefined
                : { background: "#fee2e2" },
            borderColor: "#78716c",
          }}
        >
          {category}
        </Button>
      ))}
      {categoryFilter && (
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
          Limpar
        </Button>
      )}
    </ButtonGroup>
  );
}