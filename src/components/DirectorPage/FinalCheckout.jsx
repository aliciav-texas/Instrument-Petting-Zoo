import React from "react";
import CheckoutSelectStudentDropdown from "./CheckoutSelectStudentDropdown.jsx";
import FinalStudentTable from "./FinalStudentTable.jsx";

export default function FinalCheckout() {
  return (
    <>
      <h1>Final Checkout</h1>
      <CheckoutSelectStudentDropdown />
      <FinalStudentTable />
    </>
  );
}
