import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";

//Pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route //Page Home
          path= "/"
          element={<Home />}
        />
        <Route //Page Sobre
          path= "/Sobre"
          element= {<Sobre />}
        />

        <Route // Error HTTP 404 page
          path= "*"
          element= {<Page404 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
