import React, { useState } from "react";
import "./styles.scss";
import Search from "antd/es/input/Search";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd";
import { setDetailsBoxDel, setSearch } from "../store/feature";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.bookData);


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const searchFilter = (e) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };
  const countReset = () => {
    dispatch(setDetailsBoxDel());
    window.scrollTo(0,0)
  };

  const windowTo = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
      <Drawer
        placement="top"
        width={500}
        onClose={onClose}
        open={open}

      >
        <Search
          className="seacrchIcon"
          placeholder="Məhsullarda axtarış"
          onChange={searchFilter}
          value={selector.search}
          enterButton
        />

      </Drawer>

      <div className="header flex justify-between px-5 sm:px-10 sticky top-0 bg-white z-20">
        <NavLink to="/">
          <div
            onClick={() => countReset()}
            className="logo w-[200px] md:w-[300px]"
          >
            <img
              className="logoImg "
              src="https://kitabevim.az/wp-content/uploads/2021/02/kitabevim_logo.png"
            />
          </div>
        </NavLink>
        <div className="flex gap-20 w-full justify-end">
          <div className="search w-96">
            <Search
              className="seacrchIcon"
              placeholder="Məhsullarda axtarış"
              onChange={searchFilter}
              value={selector.search}
              enterButton
            />
          </div>
          <div className="icons basketMain cursor-pointer flex gap-6 text-2xl text-orange-500">
            <AiOutlineSearch onClick={showDrawer} className="AiOutlineSearch" />
            <NavLink onClick={windowTo} to="/favorite" className="relative">
              <AiOutlineHeart />
              {selector.favoriteCount ? (
                <div className="bg-blue-900 flex justify-center text-sm rounded-full w-5 absolute left-3 bottom-3 text-white">
                  {selector.favoriteCount}
                </div>
              ) : (
                <div></div>
              )}
            </NavLink>
            <NavLink onClick={windowTo} to="/basket" className="relative">
              {selector.basketCount ? (
                <div className="bg-blue-900 flex justify-center text-sm rounded-full w-5 absolute left-3 bottom-3 text-white">
                  {selector.basketCount}
                </div>
              ) : (
                <div></div>
              )}

              <BsFillBasket2Fill />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
