/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBqU9lZAm1JAi-vCpE22IbS2S3Me6Or7ng"; // Reemplaza con tu clave de API

const App2 = () => {
  const [listaVideos, setlistaVideos] = useState("");
  const [videos, setVideos] = useState([]);
  const [seleccionarVideo, setSeleccionarVideo] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${listaVideos}`
      );
      setVideos(response.data.items);
      setSeleccionarVideo(null);
    } catch (error) {
      console.error(error);
    }
  };

  const clicVideos = (video) => {
    setSeleccionarVideo(video);
  };

  return (
    <div className="form-register">
      <center>
        <h1>BUSCADOR DE VIDEOS DE YOUTUBE</h1>
      </center>
      <form onSubmit={handleSearch}>
        <label for="exampleFormControlInput1" class="form-label">
          DESCRIBE EL VIDEO O LO QUE QUIERES BUSCAR
        </label>
        <input
          type="text"
          class="form-control mb-2"
          id="exampleFormControlInput1"
          value={listaVideos}
          onChange={(event) => setlistaVideos(event.target.value)}
          placeholder="Buscar videos..."
        />
        <br />
        <center>
          <button type="submit" class="btn btn-success">
            <h3>BUSCAR VIDEO(S)</h3>
          </button>
        </center>
        <br />
        <br />
      </form>

      {seleccionarVideo ? (
        <div className="centrado">
          <div className="video-container">
            <hr />
            <h2>{seleccionarVideo.snippet.title}</h2>
            <iframe
              width="915"
              height="515"
              src={`https://www.youtube.com/embed/${seleccionarVideo.id.videoId}`}
              frameBorder="0"
              allowFullScreen
              className="videoClic"
            ></iframe>
            <p>{seleccionarVideo.snippet.description}</p>
            <hr />
          </div>
        </div>
      ) : null}

      {videos.map((video) => (
        <div className="centrado">
          <div key={video.id.videoId} className="video-container2">
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              onClick={() => clicVideos(video)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App2;
