import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmount,
  setBasketAddDel,
  setBasketAddDellAll,
  setBasketClear,
  setBasketCountDell,
  setDetailsBoxDel,
  setSelectedOption,
  setTotalPrice,
  setboxCount,
  setboxCountDecr,
  setboxCountDel,
  setboxCountNumb,
} from "../components/store/feature";
import { NavLink } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";

const Basket = () => {
  const selector = useSelector((state) => state.bookData);
  const dispatch = useDispatch();

  let basketBox = useSelector((state) => state.bookData.basketAdd);

  const [basketCounts, setBasketCounts] = useState({});
  const [basketDecr, setBasketDecr] = useState({});

  const allAmount = [
    {
      name: "Metrodaxili çatdırılma haqqı:",
      price: "2.00 ₼",
      id: 1,
    },
    {
      name: "Şəhəriçi ünvana çatdırılma:",
      price: "3.00 ₼",
      id: 2,
    },
    {
      name: "Binəqədi, Biləcəri, Bakıxanov, Qaraçuxur, Yeni Günəşli:",
      price: "4.00 ₼",
      id: 3,
    },
    {
      name: "Xırdalan, Masazır, Hövsan, Sədərək və Binə bazarı, Lökbatan:",
      price: "5.00 ₼",
      id: 4,
    },
    {
      name: "Sumqayıt, Binə, Sabunçu, Zabrat:",
      price: "7.00 ₼",
      id: 5,
    },
    {
      name: "Mağazadan özün apar - PULSUZ",
      price: 0,
      id: 6,
      active: "active",
    },
    {
      name: "Poçtla sifariş et",
      price: 0,
      id: 7,
    },
  ];
  const amountFunc = (id) => {
    dispatch(setSelectedOption(id));
    const selectedAmount = allAmount.find((item) => item.id === id);
    if (selectedAmount) {
      dispatch(setAmount(parseFloat(selectedAmount.price)));
    }
  };

  const basketFunc = (id) => {
    dispatch(setBasketAddDel(id));
    dispatch(setboxCountNumb({ IdNumb: id }));
    basketBox?.map((item) => {
      if (item.isbn13 === id) {
        dispatch(setBasketCountDell());
      }
      return item;
    });
  };

  const basketIncrementFunc = (idIncr) => {
    dispatch(setboxCount({ productId: idIncr }));
  };

  const basketDecrFunc = (idDecr) => {
    dispatch(setboxCountDecr({ id: idDecr }));

    if ((selector.boxCount[idDecr] || 1) === 1) {
      dispatch(setBasketAddDel(idDecr));
      dispatch(setBasketCountDell());
    }
  };

  useEffect(() => {
    let newTotalPrice = 0;

    basketBox?.forEach((item) => {
      const quantity = selector.boxCount[item.isbn13] || 1;
      newTotalPrice +=
        parseFloat(item.price === "$0.00" ? 24.14 : item.price.slice(1)) *
        quantity;
    });

    dispatch(setTotalPrice(newTotalPrice));
  }, [selector.boxCount, selector.totalPrice]);

  const clearBasket = () => {
    dispatch(setBasketClear());
    dispatch(setBasketAddDellAll());
    dispatch(setboxCountDel());
    dispatch(setDetailsBoxDel());
  };

  const countReset = () => {
    dispatch(setDetailsBoxDel());
    window.scrollTo(0, 0);
  };

  const windowTo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {selector.basketAdd.length > 0 ? (
        <div className="mx-5 sm:mx-10 mb-20">
          <div className="text-blue-900 mt-5">{"Ana səhifə > Səbətim"}</div>
          <div className=" text-blue-900 flex gap-2 my-7">
            <p className="text-4xl ">Səbətim</p>
            <p className="">({selector.basketCount})</p>
          </div>

          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="flex flex-col gap-3">
              {basketBox?.map((item) => {
                return (
                  <div
                    key={item.isbn13}
                    className="basketMain md:h-36 h-auto flex md:flex-row flex-col justify-between gap-5 px-5 py-5 md:py-0 text-blue-900 border border-spacing-1"
                  >
                    <div className="flex justify-end w-full md:w-auto">
                      <button
                        onClick={() => basketFunc(item.isbn13)}
                        className="hover:text-orange-500 transition duration-500 ease-in-out"
                      >
                        <RxCross2 />
                      </button>
                    </div>
                    <div className="md:w-28 w-44">
                      <img className="w-full object-contain" src={item.image} />
                    </div>

                    <div className="text-center flex w-full md:w-2/5 justify-between gap-5">
                      <p className="block md:hidden">Məhsul:</p>
                      <p className="">{item.title}</p>
                    </div>

                    <div className="flex w-full md:w-auto justify-between gap-5">
                      <p className="block md:hidden">Qiymət:</p>
                      <p>
                        {item.price === "$0.00"
                          ? 24.14 + "₼"
                          : item.price.slice(1) + "₼"}
                      </p>
                    </div>

                    <div className="flex w-full md:w-auto justify-between gap-5 ">
                      <p className="block md:hidden">Miqdar:</p>
                      <div className="bg-gray-300 w-24 flex justify-center gap-5 px-5 py-2 rounded-full">
                        <button
                          className=""
                          onClick={() => basketDecrFunc(item.isbn13)}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span>{selector.boxCount[item.isbn13] || 1}</span>
                        <button
                          onClick={() => basketIncrementFunc(item.isbn13)}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full md:w-auto justify-between gap-5">
                      <p className="block md:hidden">Ümumi:</p>
                      <p>
                        {(
                          (item.price === "$0.00"
                            ? 24.14
                            : item.price.slice(1)) *
                          (selector.boxCount[item.isbn13] || 1)
                        ).toFixed(2) + "₼"}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-end mt-5">
                <button
                  onClick={clearBasket}
                  className="bg-blue-900 text-white px-10 py-2 rounded-full hover:bg-white hover:text-blue-900 hover:border border-blue-900 transition duration-500 ease-in-out font-medium"
                >
                  Təmizlə
                </button>
              </div>
            </div>

            <div className="border border-spacing-1 p-5 flex flex-col gap-2 h-auto lg:h-[630px]">
              <div className="flex justify-between text-blue-900">
                <p>Ümumi</p>
                <p className="text-lg">
                  {selector.totalPrice.toFixed(2) + " ₼"}
                </p>
              </div>
              <hr />
              <div>
                <p>Çatdırılma</p>
              </div>
              {allAmount?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 cursor-pointer"
                    onClick={() => amountFunc(item.id)}
                  >
                    <input
                      type="radio"
                      name="active"
                      id={item.id}
                      checked={selector.selectedOption === item.id}
                    />
                    <p>
                      {item.name}
                      <span> {item.price === 0 ? "" : item.price}</span>
                    </p>
                  </div>
                );
              })}
              <hr />

              <div className="flex justify-between text-blue-900">
                <p>Cəmi</p>
                <p className="text-xl">
                  {(
                    selector.totalPrice +
                    (selector.selectedOption === 1 ? 2 : selector.amount)
                  ).toFixed(2) + " ₼"}
                </p>
              </div>
              <hr />

              <div className="flex  flex-col gap-2 text-blue-900">
                <p>Endirim məbləği</p>
                <p className="">
                  {((selector.totalPrice + selector.amount) * 0.05).toFixed(2) +
                    " ₼"}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <NavLink to="/order">
                  <button
                    onClick={windowTo}
                    className="w-full transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full py-2 border hover:border-orange-400 mt-2"
                  >
                    Ödəmə səhifəsinə keç
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button
                    onClick={() => countReset()}
                    className="w-full transition duration-500 ease-in-out hover:bg-white hover:text-blue-900 text-white bg-blue-900 rounded-full py-2 border hover:border-blue-900 mt-2"
                  >
                    Alış-verişə davam et
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className=" text-blue-900 flex gap-2 my-7 mx-10">
            <p className="text-4xl ">Səbətim</p>
            <p className="">({selector.basketCount})</p>
          </div>
          <div className="flex flex-col justify-center my-32 gap-5">
            <BsFillBasket2Fill className="mx-auto text-9xl text-[#BDC4D2]" />
            <div className="text-2xl text-blue-900 font-medium mx-auto">
              Səbətiniz hazırda boşdur.
            </div>
            <NavLink className="mx-auto" to="/">
              <button className="px-10 transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full py-2 border hover:border-orange-400 mt-2">
                Mağazaya qayıt
              </button>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Basket;
