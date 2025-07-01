import React from "react";

function BotaoColorido({ cor, texto }) {
  return (
    <button
      style={{
        backgroundColor: cor,
        color: "white",
        margin: "10px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {texto}
    </button>
  );
}

export default BotaoColorido;
