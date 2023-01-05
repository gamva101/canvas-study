import React from 'react';
import MyDryer from './draw';
import Menu from './menu';
import Box from '@mui/material/Box';

import Home from './Home';
import MyCanvas from './canvas-example/canvas_1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CanvasList from './canvas-example/canvas-list';
import Canvas2 from './canvas-example/canvas_2';
import Canvas3 from './canvas-example/canvas_3';

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
            <Box sx={{ display: 'flex' }}>
                <MyDryer open={open} handleDrawerClose={handleDrawerClose}></MyDryer>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Menu open={open} handleDrawerOpen={handleDrawerOpen}></Menu>
                </Box>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="canvas-list" element={<CanvasList />} />
                <Route path="canvas-list/1" element={<MyCanvas />} />
                <Route path="canvas-list/2" element={<Canvas2 />} />
                <Route path="canvas-list/3" element={<Canvas3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
