import { useContext } from "react";
import { Navbar,Footer } from "./Components/ComponentsPaths";
import { LandingPage,AboutUs,Shop } from "./Pages/PagesPaths";
import themeContext from "./Contexts/themeContext";
import { Routes ,Route } from "react-router-dom";
function App() {
  const {theme}=useContext(themeContext)

  return (
    <div className="App" data-theme={theme}>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<LandingPage/>}/>
          <Route path ="/aboutus" element={<AboutUs/>}/>
          <Route path ="/shop" element={<Shop/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
