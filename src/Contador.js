import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>
        Você clicou <strong>{contador}</strong> vezes.
      </p>
      <button onClick={() => setContador(contador + 1)}>
        Clique Para Somar +1{" "}
      </button>
    </div>
  );
}

export default Contador;
