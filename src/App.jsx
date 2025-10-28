import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import CallIcon from "./Components/callIcon";
import BookNow from "./Components/BooNow";

function App() {
  return (
    <div className="pageContainer">
      <ScrollToTop />
      <Header />
      <CallIcon />
      <BookNow />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
