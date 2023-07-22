import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";

import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

import Homepage from "./cmp/Homepage/Homepage";

const App = ()=>{
  const design =(
    <>
      <Router>
        <Header />
        <div>
          <>
            <Routes>
              <Route path="/"  element={< Homepage />}/>
              <Route path="/contact"  element={<h1>Welcome to Contact Page</h1>}/>
              <Route path="/about"  element={<h1>Welcome to About us page</h1>}/>
              <Route path="/gallery"  element={<h1>Welcome to Gallery</h1>}/>
              <Route path="/blog"  element={<h1>Welcome to My Blog</h1>}/>
            </Routes>
          </>
        </div>
        {/* <Footer /> */}
      </Router>
    </>
  );
  return design;
}


export default App;
