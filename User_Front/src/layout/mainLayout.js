import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/footer";
// import Header from "../Header";

const MainLayout = () => {
  const user = useSelector((state) => state?.user?.user);
//   if (user) {
    return (
      <div>
        {/* {user !== null && user?.role === "user" ? ( */}
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        {/* ) : (
          <Navigate to="/admin/Dashboard" />
        )} */}
      </div>
    );
//   } else {
//     return <Navigate to="/auth/login" />;
//   }
};

export default MainLayout;