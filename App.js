import React from 'react';
import Contador from './Contador';
import BotaoColorido from './BotaoColorido';

function App() {
  return (
    <div style={{textAlign: 'center', marginTop: '50px' }}>
      <h1> Meu Contador React</h1>
      <Contador/>
      <hr/>
      <h2> Botões Coloridos</h2>
      <BotaoColorido cor='red' texto='Vermelho' />
      <BotaoColorido cor='blue' texto='Azul' />
      <BotaoColorido cor='green' texto='Verde'/>
    </div>
  );
}
export default App;