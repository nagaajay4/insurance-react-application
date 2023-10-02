import React from "react"; 
import { useLocation } from "react-router-dom";


function ThanksPage() {
    const location = useLocation();
     const policy_number=location.state.cart_id;
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Thank You!</h1>
      <p className="lead">We appreciate your care for family.</p>
      <h3>Policy Number: {policy_number}</h3>
      <h6>Please save the policy number for future reference! </h6>
      <img
        src="/insurnacethanks.png" // Add your own image or use an image URL
        alt="Thanksgiving for Buying Insurnace"
        className="img-fluid"
      />
      <p className="mt-4">
        <a href="/" className="btn btn-primary">
          Back to Home
        </a>
      </p>
    </div>
  );
};

//export default ThankYouPage;


// function ThanksPage() {
//     const location = useLocation();
//     const policy_number=location.state.cart_id;
//     return (
//         <div className="container">
//             <h1>c:\Users\Naja Ajay\Downloads\Grey Light Blue Minimalist Family Insurance Logo.pngThanks! for buying the Premium..</h1>
//             <h3>Policy Number: {policy_number}</h3>
//             <h4>Please save the policy number for future reference! </h4>
//         </div>
//     )

// }
export default ThanksPage;