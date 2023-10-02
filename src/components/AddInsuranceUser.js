import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddInsuranceUser() {
    // const url = "http://127.0.0.1:5000/api/v1";
    const url="https://insurance-react-app-d44b6fdb4c3b.herokuapp.com/api/v1";
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState([{
        name: '',
        age_range: '',
        tier: '',
        member_csv: '',
        sum_assured: ''

    }]);

    const addInputField = () => {
        setInputFields([...inputFields, {
            name: '',
            age_range: '',
            tier: '',
            member_csv: '',
            sum_assured: ''
        }])

    }
    const removeInputFields = (event, index) => {
        event.preventDefault();
        const rows = [...inputFields];
        console.log("key", event.target.key);
        console.log("rows", rows);
        console.log("index", index);
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }

    async function submitDataAPI() {
        console.log("data",inputFields);
        await axios.post(url + "/user_input", { "user_data": inputFields })
            .then((response) => {
                console.log(response);
                console.log(response.data.message);
                navigate('/cart_premium', { state: { id: response.data.user_id } });
            })
            .catch((error) => console.log(error));
        setInputFields([{
            name: '',
            age_range: '',
            tier: '',
            member_csv: '',
            sum_assured: ''
        }]);
    }

    const handleSubmit = (event) => {
        //const { name, age_range, tier, member_csv, sum_assured } = data;
        event.preventDefault();
        console.log(inputFields);
        const userdata = [...inputFields];
        for (let i = 0; i < userdata.length; i++) {
            if (userdata[i].name === '' || userdata[i].age_range === '' || userdata[i].tier === '' || userdata[i].member_csv === '' || userdata[i].sum_assured === '') {
                console.log("provide proper values");
                alert("Provide valid values!");
                return;
            }
        }
        submitDataAPI();
    }
    return (
        <>
            <div className="container">
                <div className=" align-items-center justify-content-center text-center">
                    <h2 style={{ color: 'blue' }}>Premium  Insurance </h2>

                    <h6 style={{ color: 'darkblue' }}>Now you can buy Insurance at one click for you and your family</h6>
                </div>
                <div>
                    <p>You can buy premium for you and your family here.</p>
                    <p>Please give following details to see the available premiums</p>
                    <p>Details Needed:<br></br></p>
                    <ul>
                        <li>Name: Name of the person who is buying Insurance</li>
                        <li>Age: Age of the person at the time of buying Insurance</li>
                        <li>City: City of the Insurance person living like tier-1,teir-2 etc</li>
                        <li>Sum Insured: the maximum amount that the policyholder can claim</li>
                        <li>Type: Type of the person like adult(1a), child(1c) or old</li>
                    </ul>
                </div>

                {/* <div className="row">
                    <div className="col">
                        <div className="col-sm-12">
                            <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="col-sm-12">
                            <button className="btn btn-outline-success " onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-sm-7">
                        <div className="row my-3">
                            <div className="col">
                                <center><label> Name</label></center>
                            </div>
                            <div className="col">
                                <center><label>  Age</label></center>
                            </div>
                            <div className="col">
                                <label> City/Tier</label>
                            </div>
                            <div className="col">
                                <label> Type</label>
                            </div>
                            <div className="col">
                                <label> Sum Insured</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        {inputFields &&
                            inputFields.map((data, index) => {
                                const { name, age_range, tier, member_csv, sum_assured } = data;
                                return (
                                    <div className="row my-3" key={index}>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={name} name="name" className="form-control" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={age_range} name="age_range" className="form-control" placeholder="Age" required />
                                        </div>
                                        <div className="col">
                                            <select value={tier} onChange={(evnt) => handleChange(index, evnt)} name="tier" className="form-control" placeholder="City/Tier" required>
                                                <option style={{ backgroundColor: "black", color: "white" }}>Select</option>
                                                <option tier="tier-1" >tier-1</option>
                                                <option tier="tier-2">tier-2</option>
                                                <option tier="tier-3">tier-3</option>
                                            </select>

                                        </div>
                                        <div className="col">
                                            <select value={member_csv} onChange={(evnt) => handleChange(index, evnt)} name="member_csv" className="form-control" placeholder="member_csv" required>
                                                <option style={{ backgroundColor: "black", color: "white" }}>Select</option>
                                                <option member_csv="1a" >1a</option>
                                                <option member_csv="1c">1c</option>
                                            </select>

                                        </div>
                                        {/* <div className="col">
                                        <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={tier} name="tier" className="form-control" placeholder="City/Tier" />
                                    </div> */}

                                        {/* <div className="col">
                                    <label> Type</label>
                                        <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={person_type} name="person_type" className="form-control" placeholder="Type " />
                                    </div> */}
                                        <div className="col">
                                            <select value={sum_assured} onChange={(evnt) => handleChange(index, evnt)} name="sum_assured" className="form-control" placeholder="sum_assured" required>
                                                <option style={{ backgroundColor: "black", color: "white" }}>Select</option>
                                                <option sum_assured="500000" >500000</option>
                                                <option sum_assured="700000" >700000</option>
                                                <option sum_assured="1000000" >1000000</option>
                                                <option sum_assured="1500000" >1500000</option>
                                                <option sum_assured="2000000" >2000000</option>
                                                <option sum_assured="2500000" >2500000</option>
                                                <option sum_assured="3000000" >3000000</option>
                                                <option sum_assured="4000000" >4000000</option>
                                                <option sum_assured="5000000" >5000000</option>
                                                <option sum_assured="6000000" >6000000</option>
                                                <option sum_assured="7500000" >7500000</option>
                                            </select>

                                        </div>
                                        {/* <div className="col">
                                    <label> Sum Insured</label>
                                        <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={sum_assured} name="sum_assured" className="form-control" placeholder="sum_assured" />
                                    </div> */}
                                        {/* <div className="col">
                                        <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={salary} name="salary" className="form-control" placeholder="Salary" />
                                    </div> */}
                                        <div className="col">
                                            {/* <br></br> */}
                                            {inputFields && (inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={(event) => removeInputFields(event, index)}>Remove</button> : ''}
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="row">
                            <div className="col">
                                <div className="col-sm-12">
                                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                                </div>
                            </div>
                            <div className="col" >
                                <div className="col-sm-12">
                                    <button className="btn btn-outline-success " onClick={(event) => handleSubmit(event)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}
export default AddInsuranceUser;