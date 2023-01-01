import MyDryer from "./draw";
import Menu from "./menu";

import Box from "@mui/material/Box";
import React from "react";
import Home from "./Home";
import MyCanvas from "./canvas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CanvasList from "./canvas-list";

export interface DrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
    handleDrawerOpen: () => void;
}

function App() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BrowserRouter>
            <Box sx={{ display: "flex" }}>
                <MyDryer open={open} handleDrawerClose={handleDrawerClose}></MyDryer>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Menu open={open} handleDrawerOpen={handleDrawerOpen}></Menu>
                </Box>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="canvas" element={<MyCanvas />} />
                <Route path="canvas-list" element={<CanvasList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
