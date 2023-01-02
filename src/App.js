
import { stateData } from "./data";
import { useState } from "react";
import Search from './Components/Search'

import Navbar from "./Components/Navbar";
import Sell from "./Components/Sell";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState(stateData);
  function filter(location, price, bhk, type) {
    let indexOfHypen;
    for (let i = 0; i < price.length; i++) {
      if (price[i] === "-") indexOfHypen = i;
    }
    let firstPrice = price.substring(0, indexOfHypen);
    let lastPrice = price.substring(indexOfHypen + 1, price.length);
    const res = stateData.filter((res) => {
      return (
        res.location === location &&
        res.price <= lastPrice &&
        res.price >= firstPrice &&
        res.bhk === parseInt(bhk) &&
        res.type === type
      );
    });
    setUserData(res);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Search filter={filter} data={userData} />} />
        <Route path='/sell' element={ <Sell/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
