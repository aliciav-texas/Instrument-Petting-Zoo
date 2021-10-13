import React from "react";
import { Link } from "react-router-dom";

import StudentRosterTable from "./StudentRosterTable.jsx";
import CheckoutStudent from "./CheckoutStudent.jsx";
export default function DirectorMainPage() {
  return (
    <>
      <StudentRosterTable />
      <Link to="/finalCheckout">
        <CheckoutStudent />
      </Link>
    </>
  );
}
