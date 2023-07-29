import MainLayout from "../layout/mainLayout";
import AuthenticationLayout from "../layout/authenticationLayout";
import Login from "../pages/login";
import Register from "../pages/register";
import Contact from "../pages/contact";
import Home from "../pages/Home";
import Shop from "../pages/shop";
import WhyWe from "../pages/why";

const Router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "/Profile/:uid", element: <Profile /> },
    //   { path: "/Blog/:id", element: <BlogDetails /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/shop", element: <Shop /> },
      { path: "/why-we", element: <WhyWe /> },
    ],
  },
  {
    path: "auth",
    element: <AuthenticationLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    //   { path: "forgotepassword", element: <ForgotPass /> },
    ],
  },
//   {
//     path: "admin",
//     element: <Admin />,
//     children: [
//       { path: "dashboard", element: <Dashboard /> },
//       { path: "blogs", element: <BlogsForAdmin /> },
//       { path: "users", element: <UsersInfoForAdmin /> },
//       { path: "Comments", element: <CommentsForAdmin /> },
//     ],
//   },
];

export default Router;