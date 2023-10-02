import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AddInsuranceUser from "./components/AddInsuranceUser";
import ShowInsurancePremium from './components/ShowInsurancePremium';
import VerifyPurchase from "./components/VerifyPurchase";
import ThanksPage from "./components/ThanksPage";
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<AddInsuranceUser />} />
                <Route path="/cart_premium" element={<ShowInsurancePremium />} />
                <Route path="/verify_purchase" element={<VerifyPurchase />} />
                <Route path="/thankspage" element={<ThanksPage />} />
            </Routes>


            {/* <AddInsuranceUser></AddInsuranceUser> */}
            {/* <ShowInsurancePremium></ShowInsurancePremium> */}
            {/* <VerifyPurchase></VerifyPurchase> */}
        </>
    )
}
export default App;