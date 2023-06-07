import React, { useState } from "react";
import axios from "axios";

const App1 = () => {
  const [buscarDato, setbuscarDato] = useState("");
  const [resultado, setResultado] = useState([]);

  const buscador = async () => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${buscarDato}`
      );
      setResultado(response.data.collection.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-register">
      <center>
        <h1>BUSCADOR DATOS DE LA NASA</h1>
      </center>
      <input
        type="text"
        value={buscarDato}
        onChange={(e) => setbuscarDato(e.target.value)}
        placeholder="Ingrese su búsqueda"
        class="form-control mb-2"
        id="exampleFormControlInput1"
      />
      <br />
      <center>
        <button onClick={buscador} class="btn btn-success">
          <h3>BUSCAR</h3>
        </button>
      </center>
      <br />

      {resultado.length === 0 ? (
        <center>
          <div>
            <h1>ESPERANDO RESPUESTA</h1>
          </div>
        </center>
      ) : (
        <div>
          {resultado.map((item) => (
            <div className="centrado">
              <div
                className="video-container3"
                style={{ height: "560px", width: "1200px" }}
              >
                <div key={item.data[0].nasa_id}>
                  <center>
                    <h1>{item.data[0].title}</h1>
                    <img
                      src={item.links[0].href}
                      alt={item.data[0].title}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <p>{item.data[0].description}</p>
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App1;
