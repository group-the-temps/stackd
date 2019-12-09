import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header.js";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
