// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
// import Contact from "./pages/contact";
// import Shop from "./pages/shop";
// import Testimonial from "./pages/testimonial";
// import WhyWe from "./pages/why";
// import Login from "./pages/login";
// import Footer from "./component/footer";
// import Header from "./component/Header";
// import Register from "./pages/register";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Login />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import "./App.css";
// import Router from "./router";
// import { authState } from "./store/user/UserAction";
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