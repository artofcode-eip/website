import React, { Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Pages/Navbar"
import Footer from "./Pages/Footer"
import Routes from "./Routes";

function Page() {
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