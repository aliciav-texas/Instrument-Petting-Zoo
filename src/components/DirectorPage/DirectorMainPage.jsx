import React from "react";
import StudentRosterTable from "./StudentRosterTable.jsx";
import { DirectorDataProvider } from "./DirectorContext.jsx";
export default function DirectorMainPage() {
  return (
    <DirectorDataProvider>
      <StudentRosterTable />
    </DirectorDataProvider>
  );
}
