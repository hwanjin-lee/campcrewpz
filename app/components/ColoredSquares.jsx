function ColoredSquares({ number }) {
  const numSquares = 10; // Total number of squares

  // Generate an array of div elements with different colors
  const squares = Array.from({ length: numSquares }, (_, index) => {
    const isColored = index < number; // Check if this square should be colored

    return (
      <div
        key={index}
        style={{
          width: "12px",
          height: "12px",
          border: "1px solid #3e3e3e",
          borderRadius: "2px",
          backgroundImage: isColored
            ? "linear-gradient(to top, #9b7b34 0%, #fefd98 80%, #ebde85 100%)"
            : "transparent",
          margin: "0.5px",
        }}
      ></div>
    );
  });

  return <div style={{ display: "flex" }}>{squares}</div>;
}

export default ColoredSquares;
