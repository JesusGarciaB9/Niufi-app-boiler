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
const drawSkewedRect = (context, w, h, deg) => {
  const angle = math.degToRad(deg);
  const rx = Math.cos(angle) * w;
  const ry = Math.sin(angle) * w;
  context.save();

  context.translate(rx * -0.5, (ry + h) * -0.5);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(rx, ry);
  context.lineTo(rx, ry + h);
  context.lineTo(0, h);
  context.closePath();
  context.stroke();

  context.restore();

}

// Artwork function
const Sketch = async ({ context, width, height }) => {
  let x, y, w, h, color, n;
  const items = []
  const palette = ["#DCD6F7", "#A6B1E1", "#424874", 'white']
  for (let index = 0; index < 100; index++) {
    x = random.range(0, width)
    y = random.range(0, height)
    w = random.range(100, 400)
    h = random.range(50, 200)
    color = palette[random.rangeFloor(0, 3)];
    console.log("color ", color)
    items.push({ x, y, w, h, color })
  }
  return async ({ context, width, height }: any) => {

    //primera lección rectangulo
    //context.strokeRect(width / 4, height / 4, width / 2, height / 2);

    context.fillStyle = '#F4EEFF';
    context.lineWidth = 4;
    context.fillRect(0, 0, width, height);

    items.forEach(({ x, y, w, h, color }) => {

      context.save();
      context.translate(x, y);

      context.strokeStyle = color;
      context.fillStyle = color;

      drawSkewedRect(context, w, h, 30);
      context.shadowColor = "black";
      context.shadowOffsetX = -10;
      context.shadowOffsetY = 20;
      context.lineWidth = 6;
      context.fill();
      context.shadowColor = null;
      context.stroke();
      context.restore();
    });


  };
};

