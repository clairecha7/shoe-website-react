import "./App.css";

import LatestProducts from "./components/Latest Products/LatestProducts";
import Main from "./components/Main/Main";
import CustomNavbar from "./components/Navbar/CustomNavbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Main />

      <LatestProducts />
    </div>
  );
}

export default App;
