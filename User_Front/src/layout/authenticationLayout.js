import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/footer";

const AuthenticationLayout = () => {
  const user = useSelector((state) => state?.user?.user);

  return <div><Header /><Outlet /><Footer /></div>;
};

export default AuthenticationLayout;