import { createSlice } from "@reduxjs/toolkit";

const feature = createSlice({
  name: "counter",
  initialState: {
    books: "",
    basketCount: localStorage.getItem("basketCount")
      ? JSON.parse(localStorage.getItem("basketCount"))
      : 0,
    basketAdd: localStorage.getItem("setBasketAdd")
      ? JSON.parse(localStorage.getItem("setBasketAdd")) || []
      : [],
    favoriteCount: localStorage.getItem("favoriteCount")
      ? JSON.parse(localStorage.getItem("favoriteCount") || 0)
      : 0,
    favorite: localStorage.getItem("favorite")
      ? JSON.parse(localStorage.getItem("favorite") || [])
      : [],
    basketIncr: {},
    amount: 0,
    selectedOption: 1,
    totalPrice: 0,
    test: "",
    details: null,
    detailsCount: 1,
    boxCount: localStorage.getItem("boxCount")
      ? JSON.parse(localStorage.getItem("boxCount")) || {}
      : {},
    detailsBoxCount: {},
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setboxCount: (state, action) => {
      const { productId } = action.payload;
      state.boxCount[productId] = (state.boxCount[productId] || 1) + 1;
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },
    setboxCountDecr: (state, action) => {
      const { id } = action.payload;
      state.boxCount[id] = state.boxCount[id] - 1;
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },

    setboxCountNumb: (state, action) => {
      const { IdNumb } = action.payload;
      state.boxCount[IdNumb] = "";
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },
    setboxCountDel: (state) => {
      state.boxCount = {};
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },

    setDetailsBoxCount: (state, action) => {
      const { detailsId } = action.payload;
      state.detailsBoxCount[detailsId] =
        (state.detailsBoxCount[detailsId] || 1) + 1;
    },

    setDetailsBoxCountDecr: (state, action) => {
      const { detailsDecrId } = action.payload;
      state.detailsBoxCount[detailsDecrId] =
        state.detailsBoxCount[detailsDecrId] - 1;
    },

    setDetailsAndBasket: (state, action) => {
      const { DetailsAndBasketId } = action.payload;
      state.boxCount[DetailsAndBasketId] =
        (state.boxCount[DetailsAndBasketId] || 0) +
        (state.detailsBoxCount[DetailsAndBasketId] || 1);
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },
    setDetailsAndBasket2: (state, action) => {
      const { DetailsAndBasketId2 } = action.payload;
      state.boxCount[DetailsAndBasketId2] =
        (state.boxCount[DetailsAndBasketId2] || 1) +
        (state.detailsBoxCount[DetailsAndBasketId2] || 1);
      localStorage.setItem("boxCount", JSON.stringify(state.boxCount));
    },

    setDetailsBoxDel: (state) => {
      state.detailsBoxCount = {};
    },

    setBooks: (state, action) => {
      state.books = action.payload;
    },

    setBasketCount: (state) => {
      state.basketCount += 1;
      localStorage.setItem("basketCount", JSON.stringify(state.basketCount));
    },
    setBasketCountDell: (state) => {
      state.basketCount -= 1;
      localStorage.setItem("basketCount", JSON.stringify(state.basketCount));
    },
    setBasketAddDellAll: (state) => {
      state.basketCount = 0;
      localStorage.setItem("basketCount", JSON.stringify(state.basketCount));
    },
    setFavoriteCount: (state) => {
      state.favoriteCount += 1;
      localStorage.setItem(
        "favoriteCount",
        JSON.stringify(state.favoriteCount)
      );
    },
    setFavoriteCountDell: (state) => {
      state.favoriteCount -= 1;
      localStorage.setItem(
        "favoriteCount",
        JSON.stringify(state.favoriteCount)
      );
    },

    setBasketAdd: (state, action) => {
      state.basketAdd = [...state.basketAdd, action.payload];
      localStorage.setItem("setBasketAdd", JSON.stringify(state.basketAdd));
    },
    setBasketAddDel: (state, action) => {
      state.basketAdd = state.basketAdd.filter(
        (item) => item.isbn13 !== action.payload
      );
      localStorage.setItem("setBasketAdd", JSON.stringify(state.basketAdd));
    },
    setBasketClear: (state, action) => {
      state.basketAdd = [];
      localStorage.setItem("setBasketAdd", JSON.stringify(state.basketAdd));
    },
    setFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    setFavoriteDell: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.isbn13 !== action.payload
      );
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setDetailsCountIncr: (state) => {
      state.detailsCount += 1;
    },
    setDetailsCountDecr: (state) => {
      state.detailsCount -= 1;
    },
  },
});

export const {
  setBooks,
  setBasketCount,
  setBasketCountDell,
  setFavoriteCount,
  setFavoriteCountDell,
  setBasketAdd,
  setBasketAddDel,
  setBasketAddDell,
  setFavorite,
  setFavoriteDell,
  setBasketClear,
  setBasketAddDellAll,
  setAmount,
  setSelectedOption,
  setTotalPrice,
  setBasketIncr,
  setTest,
  setDetails,
  setDetal,
  setDetailsCountIncr,
  setDetailsCountDecr,
  setTestIncr,
  setTestDecr,
  setNumbs,
  setNumbsDel,
  setboxCount,
  setboxCountDecr,
  setboxCountNumb,
  setboxCountDel,
  setDetailsBoxCount,
  setDetailsBoxCountDecr,
  setDetailsAndBasket,
  setDetailsAndBasket2,
  setDetailsBoxDel,
  setSearch,
  setSearchBoxes,
} = feature.actions;

export default feature.reducer;
