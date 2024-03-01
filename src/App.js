import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home/Home";
import Contacts from "@/pages/contacts/Contacts";
import AboutUs from "@/pages/about-us/AboutUs";
import JewelryToOrder from "@/pages/jewelry-to-order/JewelryToOrder";
import QuestionsAndAnswers from "@/pages/questions-and-answers/QuestionsAndAnswers";
import Services from "@/pages/services/Services";



function App() {
  return (
    <div className="app">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/services" element={<Services />} />
                <Route path="/jewelry-to-order" element={<JewelryToOrder />} />
                <Route path="/questions-and-answers" element={<QuestionsAndAnswers />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
