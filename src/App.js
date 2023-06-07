import App1 from "./components/App1";
import App2 from "./components/App2";
import Asterioides from "./components/Asterioides";
import "./components/css/style.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="form-register">
          <div className="barraNavegacion">
            <div>
              <h1>CONSUMO DE API(S)</h1>
            </div>
            <Link
              to={"/Asterioides"}
              type="button"
              class="btn btn-secondary mx-3 btn-lg"
            >
              ASTERIOIDES
            </Link>
            <Link
              to={"/Informacion"}
              type="button"
              class="btn btn-secondary mx-3 btn-lg"
            >
              INFORMACION
            </Link>
            <Link
              to={"/Youtube"}
              type="button"
              class="btn btn-secondary mx-3 btn-lg"
            >
              YOUTUBE
            </Link>
            <hr />
          </div>
        </div>
        <div className="barraNavegacion2">
          <Routes>
            <Route path="/Asterioides" exact element={<Asterioides />} />
            <Route path="/Informacion" element={<App1 />} />
            <Route path="/Youtube" element={<App2 />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
