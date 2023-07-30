import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Router from "./routes";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authState());
  // }, []);

  const routing = useRoutes(Router);
  return <>{routing}</>;
};
export default App;