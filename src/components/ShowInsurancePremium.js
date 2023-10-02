import React, { useState, useEffect } from "react";
import PremiumTable from "./PremiumTable";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";


function ShowInsurancePremium() {
  // const url = "http://127.0.0.1:5000/api/v1";
  const url = "https://insurance-react-app-d44b6fdb4c3b.herokuapp.com/api/v1";

  const location = useLocation();
  const navigate = useNavigate();
  const [premium, setPremium] = useState();
  const [id, setId] = useState(location.state.id);
  const [cartData, setCartData] = useState({
    "primaryID": null,
    "user_premium_data": []
  })
  useEffect(() => {
    async function submitDataAPI() {
      const data = {
        '_id': String(id)
      }
      console.log(data)
      await axios.post(url + "/calculate_premium", data)
        .then((response) => {
          console.log(response.data.premium);
          setPremium(response.data.premium)
        })
        .catch((error) => console.log(error.response.data));
    }
    submitDataAPI();
  }, []);

  async function submitCartDataAPI() {
    setCartData({
      "primaryID": id,
      "user_premium_data": premium
    });
    await axios.post(url + "/add_to_cart", {
      "primaryID": id,
      "user_premium_data": premium
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        navigate('/verify_purchase', { state: { cart_data_id: response.data.cart_data_id, cart_data: response.data.cart_data, Total: response.data.Total } });
      })
      .catch((error) => console.log(error));

  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    submitCartDataAPI();
  }

  return (

    <div className="container">
      <div className=" align-items-center justify-content-center text-center">
        <h3 style={{ color: 'blue' }}>Available  Insurance For You </h3>

        <h6 style={{ color: 'darkblue' }}>This are the list of the available Insurances for you and your family in the cart</h6>
      </div>
      <div>
        <div className="container mt-5">
          <h1>Premium Cart</h1>
          {
            premium ? <PremiumTable data={premium} />

              : <><p><h3>Currently No Available premiums for you, Will notify you once available</h3></p></>
          }
          <div className="col" >
            <div className="col-sm-12">
              <button className="btn btn-outline-success " onClick={(event) => handleSubmit(event)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default ShowInsurancePremium;