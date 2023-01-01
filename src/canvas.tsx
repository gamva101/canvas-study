import { useEffect, useState } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

export default function MyCanvas() {
    const [canvas, setCanvas] = useState("");

    const initCanvas = () =>
        new fabric.Canvas("canvas", {
            height: 400,
            width: 400,
            backgroundColor: "pink",
        });

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);
    return (
        <StyledComponent>
            <canvas id="canvas"></canvas>
        </StyledComponent>
    );
}

const StyledComponent = styled.header`
    margin-left: 100px;
`;
