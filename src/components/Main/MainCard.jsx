import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBasketAdd,
  setBasketCount,
  setBooks,
  setDetails,
  setFavorite,
  setFavoriteCount,
  setFavoriteCountDell,
  setFavoriteDell,
  setSearch,
} from "../store/feature";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainCard = () => {
  // https://api.itbook.store/1.0/new
  const selector = useSelector((state) => state.bookData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((resp) => resp.json())
      .then((data) => dispatch(setBooks(data)));
  }, []);

  let myBooks = selector.books.books;
  const basketAddFunc = (id) => {
    let booksFind = selector.basketAdd.find((item) => item.isbn13 === id);
    if (booksFind) {
    } else {
      myBooks?.map((item) => {
        if (item.isbn13 === id) {
          toast.success('Səbətə əlavə edildi', {
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

  const favoriteAddFunc = (id) => {
    dispatch(setFavoriteDell(id));
    let favoriteFind = selector.favorite.find((item) => item.isbn13 === id);
    if (favoriteFind) {
      dispatch(setFavoriteCountDell());
    } else {
      myBooks?.map((item) => {
        if (item.isbn13 === id) {
          toast.success('Sevimlilərə əlavə edildi', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          dispatch(setFavorite(item));
          dispatch(setFavoriteCount());
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

  const filtered = myBooks?.filter((item) =>
    item.title?.toLowerCase().includes(selector.search?.toLowerCase())
  );
  const [isModalOpen, setIsModalOpen] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    dispatch(setSearch(""));
  };

  const navigate = useNavigate()

  return (
    <>
      {filtered?.length > 0 ? (
        filtered.map((item, index) => {
          return (
            <div
              key={index}
              className="mainBox px-5 py-3 cursor-pointer relative"
            >
              <ToastContainer/>
              <button onClick={() => favoriteAddFunc(item.isbn13)}>
                {selector.favorite.find((id) => id.isbn13 === item.isbn13) ? (
                  <AiFillHeart className="absolute  top-3 right-2 text-2xl z-10 text-orange-500" />
                ) : (
                  <AiOutlineHeart className="absolute top-3 right-2 text-2xl z-10 text-orange-500 " />
                )}
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
                  <p className="price">
                    {item.price === "$0.00"
                      ? 24.14 + "₼"
                      : item.price.slice(1) + "₼"}
                  </p>
                  <p className="basket">Sebete ekle</p>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full mx-auto">

          <Modal title="" open={true} onOk={handleOk} onCancel={handleCancel}>
            <p>Heç bir nəticə tapılmadı</p>
          </Modal>
        </div>
      )}
    </>
  );
};

export default MainCard;
