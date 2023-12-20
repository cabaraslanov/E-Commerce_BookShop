import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import "./index.css";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Favorite from "./pages/Favorite";
import Order from "./pages/Order";
import OrderSend from "./pages/OrderSend";
import Details from "./pages/Details";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)

  }, [])

  return (
    <>
    {
      loading ? 
      <div className="spinner">
        <BeatLoader color="#ffb566" size={30} loading={loading}/>
      </div>
      :
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index={true} element={<Main />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<Order />} />
          <Route path="/details" element={<Details />}/>
        </Route>
        <Route path="/orderSend" element={<OrderSend />} />
      </Routes>
    </div>

    }  
    </>
  );
}

export default App;
