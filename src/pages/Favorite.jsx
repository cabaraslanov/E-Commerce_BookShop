import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import {
  setBasketAdd,
  setBasketCount,
  setDetails,
  setFavoriteCountDell,
  setFavoriteDell,
} from "../components/store/feature";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Favorite = () => {
  const selector = useSelector((state) => state.bookData);
  const dispatch = useDispatch();

  let myBooks = selector.books.books;

  const basketAddFunc = (id) => {
    let booksFind = selector.basketAdd.find((item) => item.isbn13 === id);
    if (booksFind) {
    } else {
      myBooks?.map((item) => {
        if (item.isbn13 === id) {
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
          dispatch(setBasketAdd(item));
          dispatch(setBasketCount());
        }
      });
    }
  };
  const addDetails = (id) => {
    myBooks?.map((item) => {
      if (item.isbn13 === id) {
        dispatch(setDetails(item));
        window.scrollTo(0,0)
      }
    });
  };

  const favoriteBoxDell = (id) => {
    dispatch(setFavoriteDell(id));

    selector.favorite?.map((item) => {
      if (item.isbn13 === id) {
        dispatch(setFavoriteCountDell());
      }
    });
  };
  return (
    <>
      {selector.favorite.length > 0 ? (
        <div className="mainContainer w-3/4 flex justify-center sm:justify-normal flex-wrap gap-10 mx-auto my-10">
          {selector.favorite?.map((item, index) => {
            return (
              <div
                key={index}
                className="mainBox px-5 py-3 cursor-pointer relative"
              >
                <ToastContainer />
                <button onClick={() => favoriteBoxDell(item.isbn13)}>
                  <AiFillHeart className="absolute top-3 right-2 text-2xl z-10 text-orange-500" />
                </button>
                <NavLink to="/details">
                <div onClick={() => addDetails(item.isbn13)} className="boxImg">
                  <img
                    src={item.image}
                    alt=""
                    className="transition duration-500 ease-in-out"
                  />
                </div>
                </NavLink>
                <div className="boxText gap-5 mt-3">
                  <p>{item.title.slice(0, 30)}</p>
                  <button
                    onClick={() => basketAddFunc(item.isbn13)}
                    className="boxBtn bg-orange-500 text-white font-bold py-2 "
                  >
                    <p className="price">{item.price}</p>
                    <p className="basket">Sebete ekle</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center my-44 gap-5">
          <div className="text-2xl text-blue-900 font-medium mx-auto">
            Sevimlilər hazırda boşdur.
          </div>
          <NavLink className="mx-auto" to="/">
            <button className="px-10 transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full py-2 border hover:border-orange-400 mt-2">
              Mağazaya qayıt
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Favorite;
