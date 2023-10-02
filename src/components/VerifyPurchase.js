import React, { useState } from "react";
import axios from "axios";
import { useLocation,useNavigate } from 'react-router-dom';

function VerifyPurchase() {

    const url = "https://insurance-react-app-d44b6fdb4c3b.herokuapp.com/api/v1";
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.cart_data_id);
    const [totalPremium,setTotalPremium]=useState(location.state.Total);
    const [premiumFinal, setPremiumFinal] = useState(location.state.cart_data);


    
    // {
    //     "age_range": "35",
    //     "discounted_rate": 4494.5,
    //     "floater_discount": "50",
    //     "member_csv": "1a",
    //     "name": "Banu reddy",
    //     "premium": "8989.0",
    //     "sum_assured": 2000000,
    //     "tier": "tier-1"
    // },
    async function submitConfirmDataAPI() {
        await axios.post(url + "/verify_purchase", {
            "cart_data_id": id,
            "cart_data": premiumFinal
          })
            .then((response) => {
              console.log(response);
              console.log(response.data.message);
              navigate('/thankspage', { state: { cart_id: id } });    
            })
            .catch((error) => console.log(error));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitConfirmDataAPI();
      }

    return (
        <>
            <div className="container">
                <div className=" align-items-center justify-content-center text-center">
                    <h3 style={{ color: 'blue' }}>Available  Insurance For You </h3>

                    <h6 style={{ color: 'darkblue' }}>This are the list of the available Insurances for you and your family in the cart</h6>
                </div>
                <div>
                    <div className="container mt-5">
                        <h1>Premium Order </h1>
                        {
                            premiumFinal ?
                                <>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name </th>
                                                <th>Type</th>
                                                <th>Sum Assured</th>
                                                <th>Base rate </th>
                                                <th>Floater Discount</th>
                                                <th>Discounted Rate</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {premiumFinal && premiumFinal.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.member_csv}</td>
                                                    <td>{item.sum_assured}</td>
                                                    <td>{item.premium}</td>
                                                    <td>{item.floater_discount=="00"?"NA":(item.floater_discount+"%")}</td>
                                                    <td>{item.discounted_rate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="col" >
                                        <div className="col-sm-12">
                                            <p>Total Premium Amount: {totalPremium}</p>
                                        </div>
                                    </div>
                                    <div className="col" >
                                        <div className="col-sm-12">
                                            <button className="btn btn-outline-success " onClick={(event) => handleSubmit(event)}>Confirm</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <p><h3>Currently No Available premiums for you, Will notify you once available</h3></p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default VerifyPurchase;