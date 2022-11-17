import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Child from "./Child";
//https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=989aeb61637efc432e57044c6c5bd577
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/:locationId" element={<Child />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
