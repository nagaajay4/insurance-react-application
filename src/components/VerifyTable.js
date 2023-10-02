import React, { useState } from 'react';

const VerifyTable = ({ data }) => {
    const [tableVerifyData, setTableVerifyData]=useState(data);
  

  return (
    <>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>   </th>
          <th>Base rate </th>
          <th>Floater Discount</th>
          <th>Discounted Rate</th>
          {/* <th>Premium Amount</th> */}
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {tableVerifyData && tableVerifyData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age_range}</td>
            <td>{item.member_csv}</td>
            <td>{item.sum_assured.toLocaleString('en-IN', {style: 'currency', currency: 'INR'})}</td>
            <td>{item.tier}</td>
            <td>₹{parseFloat(item.premium).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default VerifyTable;
