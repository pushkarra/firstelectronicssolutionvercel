import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import CataloguePage from "./CataloguePage";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Privacy from "./components/Privacy";
// git push origin master 
const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#b22222",

      bg: "#F6F8FA",
      // bg: "#CD9575",
      footer_bg: "#0a1435",
      btn: "#b22222",
      border: "#8b0000",
      hr: "#ffffff",
      gradient:
        // "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        "linear-gradient(0deg, #8b0000 0%, #8b0000 100%)",

      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/singleproduct/:ide" element={<SingleProduct />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );

  
};

export default App;
