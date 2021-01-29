import React, { Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/hoc/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import MainGallery from "./Pages/MainGallery/MainGallery";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <Suspense fallback={<div>Loading...</div>}>
              <NavBar />
              <ScrollToTop />
              <Switch location={location}>
                <Route path="/" exact component={Landing} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/gallery" exact component={MainGallery} />
                {/* <Route path="/linkedinauth" component={Linkedinauth} /> */}
              </Switch>

              <Footer />
            </Suspense>
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
