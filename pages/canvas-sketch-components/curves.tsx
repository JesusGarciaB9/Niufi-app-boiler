'use client';
// @ts-ignore
import canvasSketch from 'canvas-sketch';
import { useEffect, useRef, useState } from 'react';
import { math, random } from 'canvas-sketch-util';

// Sketch parameters



export const CanvasExample = () => {
    const canvasRef = useRef(null)
    const CreateCanvasInstance = async () => {
        const settings = {
            canvas: canvasRef.current,
            context: canvasRef.current.getContext('2d'),
        };
        const a = await canvasSketch(Sketch, settings);
    }
    useEffect(() => {
        CreateCanvasInstance();
    }, [])
    return <canvas ref={canvasRef} />
};


// Artwork function
const Sketch = async ({ context, width, height }) => {
    let x, y, w, h, color, n;

    return async ({ context, width, height }: any) => {

    };
};

