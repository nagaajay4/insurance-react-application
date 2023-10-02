import React, { useState } from 'react';

const PremiumTable = ({ data }) => {
    const [tablePremium, setTablePremium]=useState(data);
  const handleDelete = (event,index) => {
    // event.preventDefault();
    const rows=[...tablePremium];
    rows.splice(index,1);
    setTablePremium(rows);
  };

  return (
    <>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name </th>
          <th>Age </th>
          <th>Type</th>
          <th>Sum Assured</th>
          <th>Tier/City</th>
          <th>Premium Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tablePremium ? tablePremium.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age_range}</td>
            <td>{item.member_csv}</td>
            <td>{item.sum_assured.toLocaleString('en-IN', {style: 'currency', currency: 'INR'})}</td>
            <td>{item.tier}</td>
            <td>₹{parseFloat(item.premium).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={(event) => handleDelete(event,index)}
              >
                Delete
              </button>
            </td>
          </tr>
        )):<h2>Currently No Available premiums for you, Will notify you once available</h2>}
      </tbody>
    </table>
    </>
  );
};

export default PremiumTable;
