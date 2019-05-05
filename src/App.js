import React, { Suspense, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBBtn } from "mdbreact";

import Navbar from "./Pages/Navbar"
import Footer from "./Pages/Footer"
import Routes from "./Routes";

// page uses the hook
function Page() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <Router className="App">
      <div className="flyout">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

/* LOADER */

/*
<MDBBtn color="elegant" fixed="top" style={{ marginTop: "5em" }} onClick={() => changeLanguage('en')}>en</MDBBtn>
<MDBBtn color="elegant" fixed="top" onClick={() => changeLanguage('fr')}>fr</MDBBtn>
*/

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}