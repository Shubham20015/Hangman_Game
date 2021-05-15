import React from "react";

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <svg height="300" width="250" className="figure-container">
      {/* Rod */}
      <line x1="50" y1="40" x2="150" y2="40" />
      <line x1="150" y1="40" x2="150" y2="70" />
      <line x1="50" y1="40" x2="50" y2="240" />
      <line x1="20" y1="240" x2="100" y2="240" />

      {/* Head */}
      {errors > 0 && <circle cx="150" cy="90" r="20" />}

      {/* Body */}
      {errors > 1 && <line x1="150" y1="110" x2="150" y2="170" />}

      {/* Arms */}
      {errors > 4 && <line x1="150" y1="140" x2="110" y2="110" />}
      {errors > 5 && <line x1="150" y1="140" x2="190" y2="110" />}

      {/* Legs */}
      {errors > 2 && <line x1="150" y1="170" x2="130" y2="200" />}
      {errors > 3 && <line x1="150" y1="170" x2="170" y2="200" />}
    </svg>
  );
};

export default Figure;
