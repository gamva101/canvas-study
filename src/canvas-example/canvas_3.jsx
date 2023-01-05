import React from 'react';
import { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import styled from 'styled-components';

export default function Canvas3() {
    const [canvas, setCanvas] = useState('');
    const bg = new fabric.Canvas('canvas', {
        height: 500,
        width: 500,
        backgroundColor: 'pink',
    });

    const circle = new fabric.Circle({
        radius: 100,
        fill: '#eef',
        scaleY: 0.5,
        originX: 'center',
        originY: 'center',
    });

    const text = new fabric.Text('hello world', {
        fontSize: 30,
        originX: 'center',
        originY: 'center',
    });

    const group = new fabric.Group([circle, text], {
        left: 150,
        top: 100,
        angle: -10,
    });
    bg.add(group);

    group.item(0).set('fill', 'red');
    group.item(1).set({ text: 'trololo', fill: 'white' });

    const circle1 = new fabric.Circle({
        radius: 50,
        fill: 'red',
        left: 0,
    });
    const circle2 = new fabric.Circle({
        radius: 50,
        fill: 'green',
        left: 100,
    });
    const circle3 = new fabric.Circle({
        radius: 50,
        fill: 'blue',
        left: 200,
    });

    const group2 = new fabric.Group([circle1, circle2, circle3], {
        left: 200,
        top: 200,
    });

    group2.add(
        new fabric.Circle({
            radius: 50,
            left: 20,
            top: 20,
            originX: 'center',
            originY: 'center',
            fill: '#998877',
        })
    );

    group2.addWithUpdate(
        new fabric.Circle({
            radius: 50,
            left: group.get('left') + 100,
            top: group.get('top') + 100,
            originX: 'center',
            originY: 'center',
            fill: '#998877',
        })
    );

    bg.add(group2);
    console.log(JSON.stringify(bg));
    useEffect(() => {
        setCanvas(bg);
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
