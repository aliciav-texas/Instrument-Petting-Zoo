/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
//Material-UI
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "student_name",
    headerName: "Student Name",
    width: 150,
  },
  { field: "parent_name", headerName: "Parent name", width: 150 },
  {
    field: "parent_email",
    headerName: "Email",
    width: 120,
  },
  {
    field: "piano_experience",
    headerName: "Piano",
    width: 150,
  },
  { field: "instrument_interest", headerName: "Interest", width: 150 },
  { field: "finalinstrument", headerName: "Final Instrument", width: 200 },
];

export default function StudentRoster() {
  const { studentRoster } = useContext(DirectorContext);
  const [studentRosterList, updateStudentRosterList] = studentRoster;

  let rosterToMap = studentRosterList;

  // useEffect(() => {
  //   return (
  //     <>
  //       <h3>Student Roster</h3>
  //       <div style={{ height: 400, width: "100%" }}>
  //         <DataGrid
  //           rows={studentRosterList}
  //           columns={columns}
  //           pageSize={8}
  //           rowsPerPageOptions={[5]}
  //           checkboxSelection
  //         />
  //       </div>
  //     </>
  //   );
  // }, [studentRosterList]);

  return (
    <>
      <h3>Student Roster</h3>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={studentRosterList}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
