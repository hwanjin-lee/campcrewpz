"use client";
import React, { useEffect, useRef } from "react";

const Heatmap = ({ coordinates, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    coordinates.forEach((coord) => {
      let x, y;
      if (Array.isArray(coord)) {
        [x, y] = coord;
      } else {
        x = coord.x;
        y = coord.y;
      }
      const radius = 20; // Adjust the radius as needed
      const heatmapGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      heatmapGradient.addColorStop(0, "rgba(122, 22, 19, 1)"); //center
      heatmapGradient.addColorStop(0.1, "rgba(135, 44, 16, 0.8)"); //center
      heatmapGradient.addColorStop(0.2, "rgba(195, 159, 13, 0.7)"); //center
      heatmapGradient.addColorStop(0.3, "rgba(184, 137, 5, 0.4)"); //center
      heatmapGradient.addColorStop(0.4, "rgba(172, 115, 8, 0.3)"); //center
      heatmapGradient.addColorStop(0.5, "rgba(159, 90, 11, 0.2)"); //center
      //   heatmapGradient.addColorStop(0.6, "rgba(147, 67, 13, 0.1)"); //center
      //   heatmapGradient.addColorStop(0.7, "rgba(135, 44, 16, 0.08)"); //center
      //   heatmapGradient.addColorStop(0.8, "rgba(122, 22, 19, 0.04)"); //center
      //   heatmapGradient.addColorStop(0.9, "rgba(79, 47, 46, 0.02)"); //center
      heatmapGradient.addColorStop(1, "rgba(60, 58, 58, 0)"); //very outer

      ctx.fillStyle = heatmapGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [coordinates, width, height]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
};

export default Heatmap;
