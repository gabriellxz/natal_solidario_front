import { Box, Card, CardContent, Typography } from "@mui/material";
import food_icon from "../../../assets/food_icon.svg";
import toys_icon from "../../../assets/toys_icon.svg";
import clothing_icon from "../../../assets/clothing_icon.svg";

export default function TableCollectors() {
    return (
        <main className="mt-[50px]">
            <div className="flex justify-around">
                <Card className="w-full max-w-[248px]" sx={{ display: "flex", alignItems: "center", borderRadius: 5 }}>
                    <CardContent className="flex gap-5">
                        <img src={food_icon} alt="food_icon" className="bg-whiteChristmas-300 rounded-full p-3" />
                        <Box>
                            <Typography sx={{ fontSize: 16 }} className="text-whiteChristmas-400 font-poppins">
                                Alimentos
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: 24 }} className="text-darkChristmas-300 font-dmsans">
                                40
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card className="w-full max-w-[248px]" sx={{ display: "flex", alignItems: "center", borderRadius: 5 }}>
                    <CardContent className="flex gap-5">
                        <img src={toys_icon} alt="food_icon" className="bg-whiteChristmas-300 rounded-full p-3" />
                        <Box>
                            <Typography sx={{ fontSize: 16 }} className="text-whiteChristmas-400 font-poppins">
                                Brinquedos
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: 24 }} className="text-darkChristmas-300 font-dmsans">
                                3
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card className="w-full max-w-[248px]" sx={{ display: "flex", alignItems: "center", borderRadius: 5 }}>
                    <CardContent className="flex gap-5">
                        <img src={clothing_icon} alt="food_icon" className="bg-whiteChristmas-300 rounded-full p-3" />
                        <Box>
                            <Typography sx={{ fontSize: 16 }} className="text-whiteChristmas-400 font-poppins">
                                Roupas
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: 24 }} className="text-darkChristmas-300 font-dmsans">
                                6
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}