import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setSelectedOption } from "../components/store/feature";
import { NavLink, useParams, Re, Link, useNavigate } from "react-router-dom";

const Order = () => {
  const selector = useSelector((state) => state.bookData);
  const dispatch = useDispatch();

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

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surName: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const orderSend = (e) => {
    window.scrollTo(0, 0);
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "e-poçt tələb olunur";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "e-poçt tələb olunur";
    }

    if (!formData.name.trim()) {
      validationErrors.name = "ad tələb olunur";
    }

    if (!formData.surName.trim()) {
      validationErrors.surName = "soyad tələb olunur";
    }

    if (!formData.address.trim()) {
      validationErrors.address = "ünvan tələb olunur";
    }

    if (!formData.surName.trim()) {
      validationErrors.phone = "telefon tələb olunur";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // alert("Form Submitted successfully");
      e.preventDefault();
      navigate("/orderSend");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-5 sm:m-10 ">
      <div className="text-blue-900">Ana səhifə {">"} Alış-veriş</div>
      <div className=" text-blue-900 flex gap-2 my-7">
        <p className="text-3xl lg:text-4xl ">Alış-veriş</p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="lg:w-3/5 h-auto lg:h-[650px] text-blue-900 flex flex-col gap-5 border border-spacing-10  p-5">
          <h1 className="text-2xl font-medium">Hesablaşma Məlumatları</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4"
          >
            <label htmlFor="">
              <p>E-poçt ünvanı *</p>
              <input
                className="w-full mt-2 bg-[#F0F2F5] rounded-full py-2 px-3 outline-none"
                type="email"
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </label>
            <label
              htmlFor=""
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <label htmlFor="" className="w-full">
                <p>Adınız *</p>
                <input
                  className="w-full mt-2 bg-[#F0F2F5] rounded-full py-2 px-3 outline-none"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </label>
              <label htmlFor="" className="w-full">
                <p>Soyadınız *</p>
                <input
                  className="w-full mt-2 bg-[#F0F2F5] rounded-full py-2 px-3 outline-none"
                  type="text"
                  name="surName"
                  onChange={handleChange}
                />
                {errors.surName && (
                  <span style={{ color: "red" }}>{errors.surName}</span>
                )}
              </label>
            </label>
            <label htmlFor="">
              <p>Ünvan *</p>
              <input
                className="w-full mt-2 bg-[#F0F2F5] rounded-full py-2 px-3 outline-none"
                type="text"
                name="address"
                placeholder="Bina nömrəsi və ya küçə adı"
                onChange={handleChange}
              />
              {errors.address && (
                <span style={{ color: "red" }}>{errors.address}</span>
              )}
            </label>
            <label htmlFor="">
              <p>Telefon *</p>
              <input
                className="w-full mt-2 bg-[#F0F2F5] rounded-full py-2 px-3 outline-none"
                type="text"
                name="phone"
                onChange={handleChange}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone}</span>
              )}
            </label>
            <label htmlFor="">
              <p>Sifariş Qeydləri (istəyə bağlı)</p>
              <textarea
                className="w-full h-20 mt-2 bg-[#F0F2F5] rounded-3xl py-2 px-4  outline-none"
                name="comment"
                form="usrform"
                placeholder="Sifarişiniz haqqında qeydlər, məs. çatdırılma üçün xüsusi qeydlər."
              ></textarea>
            </label>

          </form>
        </div>

        <div className="lg:w-2/5 flex flex-col gap-3 p-5  border-2 border-orange-500 text-blue-900">
          <h1 className="text-2xl font-medium">Sizin sifarişiniz</h1>
          <div className="flex justify-between">
            <p>Məhsul</p>
            <p>Ümumi</p>
          </div>
          <hr />

          {selector.basketAdd?.map((item, index) => {
            return (
              <>
                <div key={index} className="flex justify-between">
                  <div className="flex gap-3">
                    <p>{item.title.slice(0, 25)}</p>
                    <p>{"x " + (selector.boxCount[item.isbn13] || 1)}</p>
                  </div>
                  <p>
                    {(
                      (item.price === "$0.00" ? 24.14 : item.price.slice(1)) *
                      (selector.boxCount[item.isbn13] || 1)
                    ).toFixed(2) + "₼"}
                  </p>
                </div>
                <hr />
              </>
            );
          })}

          <div className="flex justify-between">
            <p className="font-bold">Ümumi</p>
            <p className="text-lg">{selector.totalPrice.toFixed(2)} ₼</p>
          </div>
          <hr />

          <div>
            <p className="font-bold">Çatdırılma</p>
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
                  checked={selector.selectedOption === item.id}
                  onChange={(e) => selector.selectedOption(e.target.checked)}
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
            <p className="font-bold">Cəmi</p>
            <p className="text-xl">
              {(selector.totalPrice + selector.amount).toFixed(2) + " ₼"}
            </p>
          </div>
          <hr />
          <div className="flex  flex-col gap-2 text-blue-900">
            <p className="font-bold">Endirim məbləği</p>
            <p className="">
              {((selector.totalPrice + selector.amount) * 0.05).toFixed(2) +
                " ₼"}
            </p>
          </div>
          <button
            type="submit"
            className="w-full transition duration-500 ease-in-out hover:bg-white hover:text-orange-400 bg-orange-400 text-white rounded-full py-2 border hover:border-orange-400 mt-2"
            onClick={orderSend}
          >
            Sifarişi Tamamla
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
