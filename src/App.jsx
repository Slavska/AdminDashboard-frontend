import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Loader from "./shared/components/Loader/Loader";
// import NotFound from "./shared/components/PageNotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";

import { currentUser } from "./redux/auth/operations";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "./redux/auth/authSelectors";

import { PublicRoute } from "./PublicRoute";

import { PrivateRoute } from "./PrivateRoute";

import MainPage from "./pages/MainPage/MainPage";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!loggedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, loggedIn]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<PrivateRoute>{<MainPage />}</PrivateRoute>}
              ></Route>
              <Route
                path="/dashboard/:id"
                element={
                  <PrivateRoute>
                    <MainPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/:id"
                element={
                  <PublicRoute restricted>
                    <AuthPage />
                  </PublicRoute>
                }
              />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
