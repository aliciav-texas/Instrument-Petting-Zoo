import React from "react";
import CheckoutSelectStudentDropdown from "./CheckoutSelectStudentDropdown.jsx";
import FinalStudentTable from "./FinalStudentTable.jsx";
import FinalInstrumentSelection from "./FinalInstrumentSelection.jsx";
import SubmitFinalSelectionButton from "./SubmitFinalSelectionButton.jsx";

export default function FinalCheckout() {
  return (
    <>
      <h1>Final Checkout</h1>
      <CheckoutSelectStudentDropdown />
      <FinalStudentTable />
      <FinalInstrumentSelection />
      <SubmitFinalSelectionButton />
    </>
  );
}
