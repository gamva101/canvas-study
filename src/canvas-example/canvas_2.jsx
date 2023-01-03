import React from 'react';
import { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import styled from 'styled-components';

export default function Canvas2() {
    const [canvas, setCanvas] = useState('');
    const circle = new fabric.Circle({ radius: 75, fill: 'blue' });
    const rect = new fabric.Canvas('canvas', {
        height: 400,
        width: 400,
        backgroundColor: 'pink',
    });
    rect.add(circle);
    circle.on('selected', function () {
        console.log('selected a circle');
    });
    circle.on('mouse:down', (options) => {
        if (options.target) {
            console.log('circle mouse down');
        }
    });

    useEffect(() => {
        setCanvas(rect);
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
