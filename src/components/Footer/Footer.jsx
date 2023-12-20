import React from "react";
import logoFooter from "../../assets/kitabevim_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsTelegram, BsTelephone } from "react-icons/bs";
import cardsImg from "../../assets/cards.png";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="containerFooter mx-5 sm:mx-10 py-10 flex flex-wrap gap-10 justify-between">
        <div className="footerLeft flex flex-col gap-3">
          <div className="w-64 cursor-pointer">
            <img className="w-full" src={logoFooter} alt="" />
          </div>
          <p>28 may Puşkin k., 32A Bakı, 1009</p>
          <a
            target="_blanc"
            className="hover:text-orange-500"
            href="https://www.google.com/maps/place/kitabevim.az/@40.3796081,49.851642,17z/data=!3m1!4b1!4m6!3m5!1s0x40307da2b607d551:0x1c5e1a9c410b9461!8m2!3d40.3796081!4d49.851642!16s%2Fg%2F1pzsfsd_n?entry=ttu"
          >
            Xəritədə bax
          </a>
          <div className="icons flex gap-3 text-xl ">
            <FaFacebookSquare className="hover:text-orange-500 cursor-pointer" />
            <BsInstagram className="hover:text-orange-500 cursor-pointer" />
            <BsTelegram className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div className="footerMiddle flex gap-5">
          <ul className="flex flex-col gap-2">
            <li className="mb-2 text-lg">Məlumat</li>
            <li>Haqqımızda</li>
            <li>Şöbələrimiz</li>
            <li>Kitab xəbər</li>
            <li>Çatdırılma şərtləri</li>
            <li>Gizlilik şərtləri</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="mb-2 text-lg">Hesabım</li>
            <li>Hesabım</li>
            <li>Sifarişlər</li>
            <li>Yükləmələr</li>
            <li>Ünvan məlumatları</li>
            <li>Hesab detalları</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="mb-2 text-lg">Mağaza</li>
            <li>Bank rekvizitləri</li>
            <li>Sifarişi izlə</li>
            <li>Necə sifariş verə bilərəm?</li>
            <li>Səbət</li>
            <li>Bütün məhsullar</li>
          </ul>
        </div>

        <div className="footerRight">
          <div className="flex flex-col gap-3 ">
            <p className="text-xl">Bizimlə əlaqə</p>
            <div className="flex gap-3">
              <BsTelephone className="mt-1 text-orange-500" />{" "}
              <p>+994 XX XXX XX XX</p>
            </div>
          </div>
          <hr />
          <div className="cursor-pointer flex gap-3 my-3">
            <AiOutlineMail className="mt-1" />
            <span className="hover:text-orange-500">info@kitabevim.az</span>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              E-poçt daxil et <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="bg-slate-300 rounded-3xl px-3 py-1 outline-none"
            />
          </div>
          <button className="text-white bg-orange-400 border border-orange-400 px-5 py-2 rounded-3xl mt-5 hover:bg-white hover:text-orange-400 transition duration-150 ease-out hover:ease-in">
            Xəbərdar ol!
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row  justify-between basketMain mt-3 text-blue-900 font-medium mx-10">
        <p>Copyright © 2023 Kitabevim.az. Bütün hüquqları qorunur</p> 
        <div>
          <img src={cardsImg} alt="" className="object-contain pt-3" />
        </div>
      </div>
    </>
  );
};

export default Footer;
