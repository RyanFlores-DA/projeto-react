import React, { useState, useEffect } from 'react';

function App() {
  const [dados, setDados] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InRlc3QiLCJkYm5hbWUiOiIxNDEwNTgiLCJpYXQiOjE2OTY1MjA4NDAsImV4cCI6MTY5NjUyNDQ0MH0.iJzqHu_EH9bnl51SiRboW9tj8pbmvKndarwGiCu87YU'; // Substitua pelo seu token real
  const url = 'http://localhost:6000/priori/'; // Substitua pelo URL da sua API

  useEffect(() => {
    // Configura o cabeçalho com o token de autorização
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Realiza a solicitação HTTP com o cabeçalho personalizado
    fetch(url, { headers })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Exibe os dados no console para depuração
        setDados(data);
      })
      .catch(error => console.error('Erro na solicitação:', error));
  }, [token, url]);

  return (
    <div>
      {/* Use os dados do estado aqui */}
      {dados.map(item => (
        <div key={item.id}>{item.priori}</div>
      ))}
    </div>
  );
}

export default App;
