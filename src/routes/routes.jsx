import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Facilites from "../pages/Facilites/Facilites";
import Review from "../pages/review/review";
import AboutUs from "../pages/aboutUs/AboutUS";
import ContactUs from "../pages/ContactUs/ContactUs";
import RoomsDetail from "../pages/RoomsDetail/RoomsDetail";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/facilities", element: <Facilites /> },
  { path: "/review", element: <Review /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/rooms/:id", element: <RoomsDetail /> },
];

export default routes;
