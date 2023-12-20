import React from "react";
import successImg from "../assets/success.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBasketAddDellAll, setBasketClear, setBasketCount, setDetailsBoxDel, setboxCountDel } from "../components/store/feature";

const OrderSend = () => {
  const dispatch = useDispatch();
  const allClear = () => {
    dispatch(setBasketClear());
    dispatch(setBasketAddDellAll());
    dispatch(setboxCountDel());
    dispatch(setDetailsBoxDel());
  };

  return (
    <div className="flex flex-col gap-5 justify-center h-screen mx-auto">
      <div className="w-[200px] mx-auto">
        <img src={successImg} alt="" className="object-cover" />
      </div>
      <div className="text-2xl text-blue-900 font-medium mx-auto">
        Sifarişiniz qeydə alındı !
      </div>
      <NavLink className="mx-auto" to="/">
        <button
          onClick={() => allClear()}
          className="px-10 transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full py-2 border hover:border-orange-400 mt-2"
        >
          Alış-verişə davam et
        </button>
      </NavLink>
    </div>
  );
};

export default OrderSend;
