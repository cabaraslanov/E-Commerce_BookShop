import React, { useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import {
  setBasketAdd,
  setBasketCount,
  setDetailsAndBasket,
  setDetailsAndBasket2,
  setDetailsBoxCount,
  setDetailsBoxCountDecr,
} from "../components/store/feature";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const selector = useSelector((state) => state.bookData);
  const dispatch = useDispatch();
  const detailsSelector = useSelector((state) => state.bookData.details);

  const navigate = useNavigate();
  const basketAddFunc = (id) => {
    let booksFind = selector.basketAdd.find((item) => item.isbn13 === id);

    if (booksFind) {
      //box artiq elave edilib
      dispatch(setDetailsAndBasket2({ DetailsAndBasketId2: id }));
      toast.success("Səbət yeniləndi", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Səbətə əlavə edildi", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(setBasketAdd(detailsSelector));
      dispatch(setBasketCount());
      dispatch(setDetailsAndBasket({ DetailsAndBasketId: id }));
    }
  };

  const plus = (id) => {
    dispatch(setDetailsBoxCount({ detailsId: id }));
  };
  const minus = (id) => {
    if ((selector.detailsBoxCount[detailsSelector.isbn13] || 1) === 1) {
    } else {
      dispatch(setDetailsBoxCountDecr({ detailsDecrId: id }));
    }
  };

  useEffect(() => {
    if (!detailsSelector) {
      navigate("/")
    }
  }, []);
  return (
    <>
      {detailsSelector ? (
        <div className="flex justify-center flex-col lg:flex-row gap-5 my-10">
          <div className="w-4/5 md:w-3/6 mx-auto">
            <img
              className="w-full object-cover"
              src={detailsSelector.image}
              alt=""
            />
          </div>
          <div className="detailsTexts flex mx-auto flex-col gap-5 justify-center lg:justify-start  w-4/5 lg:w-4/6 lg:pt-28">
            <p className="text-2xl text-blue-900 font-medium">
              {detailsSelector.title}
            </p>
            <hr />
            <p className="text-3xl text-orange-400 font-medium">
              {detailsSelector.price.slice(1) + "₼"}
            </p>
            <div className="flex basketMain gap-5">
              <div className=" bg-gray-300 h-10 w-24 flex justify-center gap-5 px-5 py-2 rounded-full">
                <button className="">
                  <AiOutlineMinus
                    onClick={() => minus(detailsSelector.isbn13)}
                  />
                </button>
                <span>
                  {selector.detailsBoxCount[detailsSelector.isbn13] || 1}
                </span>
                <button onClick={() => plus(detailsSelector.isbn13)}>
                  <AiOutlinePlus />
                </button>
              </div>

              <button
                onClick={() => basketAddFunc(detailsSelector.isbn13)}
                className="h-10 mb-2 transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full px-9 py-2 border hover:border-orange-400 mt-2"
              >
                <ToastContainer />
                Səbətə at
              </button>
            </div>
            <hr />

            <p>Teq : {detailsSelector?.title}</p>
            <p>Məhsul nömrəsi: {detailsSelector.isbn13}</p>

            <div className="flex gap-3 cursor-pointer ">
              <FaFacebookF className="bg-[#4267B2] px-1 text-white text-2xl" />
              <FaTwitter className="bg-[#55ACEE] px-1 text-white text-2xl" />
              <TbBrandPicsart className="bg-[#CB2027] px-1 text-white text-2xl" />
              <FaLinkedinIn className="bg-[#0070AC] px-1 text-white text-2xl" />
              <FaRedditAlien className="bg-[#F84301] px-1 text-white text-2xl" />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Details;
