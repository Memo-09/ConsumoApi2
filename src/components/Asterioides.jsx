import React, { useEffect, useState } from 'react';
import axios from 'axios';


const API_KEY = 'E5r6kqgcKXuHE5onbw4IjsOOW0vRQjxPNfp3yZti'; // Reemplaza con tu propia clave de API

const Asterioides = () => {
  const [asteriodes, setAsteroides] = useState([]);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const respuesta1 = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`
        );

        const asteroidesData = respuesta1.data.near_earth_objects;
        setAsteroides(asteroidesData);
      } catch (error) {
        console.error('Error al obtener los asteroides de la NASA:', error);
      }
    };

    fetchAsteroids();
  }, []);

  return (
    <div className='form-register2'>
      <h1>Asteroides de la NASA</h1>
      {Object.keys(asteriodes).map((date) => (
        <div>
        <h2>Asteroides del {date}</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Magnitud</th>
            </tr>
          </thead>
          <tbody>
            {asteriodes[date].map((asteroide) => (
              <tr key={asteroide.id}>
                <td>{asteroide.name}</td>
                <td>{asteroide.absolute_magnitude_h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      ))}
    </div>
  );
};

export default Asterioides;
