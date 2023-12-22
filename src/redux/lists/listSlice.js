import { createSlice } from "@reduxjs/toolkit";
import {
  customerGet,
  customerIdGet,
  dashboardGet,
  ordersGet,
  productsAdd,
  productsGet,
  productsIdDelete,
  productsIdEdit,
  productsIdGet,
  suppliersAdd,
  suppliersGet,
  suppliersIdEdit,
  suppliersIdGet,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  dashboards: [],
  customers: [],
  suppliersLength: null,
  productsLength: null,
  customerId: [],
  orders: [],
  products: [],
  productId: [],
  suppliers: [],
  supplierId: [],
  page: null,
  totalPages: null,
  perPage: null,
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const listsSlice = createSlice({
  name: "lists",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(dashboardGet.pending, handlePending)
      .addCase(dashboardGet.rejected, handleRejected)
      .addCase(dashboardGet.fulfilled, (state, action) => {
        state.dashboards = action.payload.dashboards.dashboards;
        state.customers = action.payload.customers;
        state.suppliersLength = action.payload.suppliers;
        state.productsLength = action.payload.products;
        state.page = action.payload.dashboards.currentPage;
        state.totalPages = action.payload.dashboards.totalPages;
        state.perPage = action.payload.dashboards.perPage;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(customerGet.pending, handlePending)
      .addCase(customerGet.rejected, handleRejected)
      .addCase(customerGet.fulfilled, (state, action) => {
        state.customers = action.payload.customers;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.pageSize;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(customerIdGet.pending, handlePending)
      .addCase(customerIdGet.rejected, handleRejected)
      .addCase(customerIdGet.fulfilled, (state, action) => {
        state.customerId = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(ordersGet.pending, handlePending)
      .addCase(ordersGet.rejected, handleRejected)
      .addCase(ordersGet.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.page = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.pageSize;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(productsGet.pending, handlePending)
      .addCase(productsGet.rejected, handleRejected)
      .addCase(productsGet.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.page = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.pageSize;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(productsAdd.pending, handlePending)
      .addCase(productsAdd.rejected, handleRejected)
      .addCase(productsAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = [action.payload, ...state.products];
        state.productId = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(productsIdGet.pending, handlePending)
      .addCase(productsIdGet.rejected, handleRejected)
      .addCase(productsIdGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productId = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(productsIdEdit.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        state.isLoading = false;
        state.isLoggedIn = true;

        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(productsIdDelete.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(suppliersGet.pending, handlePending)
      .addCase(suppliersGet.rejected, handleRejected)
      .addCase(suppliersGet.fulfilled, (state, action) => {
        state.suppliers = action.payload.suppliers;
        state.page = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.pageSize;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(suppliersAdd.pending, handlePending)
      .addCase(suppliersAdd.rejected, handleRejected)
      .addCase(suppliersAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suppliers = [action.payload, ...state.suppliers];
        state.supplierId = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(suppliersIdGet.pending, handlePending)
      .addCase(suppliersIdGet.rejected, handleRejected)
      .addCase(suppliersIdGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.supplierId = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(suppliersIdEdit.fulfilled, (state, action) => {
        const updatedSupplier = action.payload;
        const index = state.suppliers.findIndex(
          (supplier) => supplier._id === updatedSupplier._id
        );
        state.isLoading = false;
        state.isLoggedIn = true;

        if (index !== -1) {
          state.suppliers[index] = updatedSupplier;
        }
      });
  },
});

export const listsReducer = listsSlice.reducer;
