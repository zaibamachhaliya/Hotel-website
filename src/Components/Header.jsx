import TopBar from "./topBar";
import Nav from "./nav";

function Header() {
  return (
    <header style={{position:'sticky',left:'0',top:'0',zIndex:'1000'}}>
      <TopBar />
      <Nav />
    </header>
  );
}

export default Header;
