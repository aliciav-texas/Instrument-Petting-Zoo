/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
import { DataGrid } from "@mui/x-data-grid";
//Material-UI
import { Typography } from "@mui/material";

// For future use
// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 150 },
//   { field: "lastName", headerName: "Last name", width: 150 },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstName") || ""} ${
//         params.getValue(params.id, "lastName") || ""
//       }`,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 120,
//   },
//   {
//     field: "piano",
//     headerName: "Piano",
//     width: 90,
//   },
//   { field: "parent", headerName: "Parent", width: 150 },
//   { field: "final", headerName: "Final Instrument", width: 150 },
// ];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "student_name", headerName: "Student Name", width: 150 },
  { field: "parent_name", headerName: "Parent name", width: 150 },
  {
    field: "parent_email",
    headerName: "Email",
    width: 120,
  },
  {
    field: "piano_experience",
    headerName: "Piano",
    width: 90,
  },
  { field: "instrument_interest", headerName: "Interest", width: 150 },
];

export default function StudentRoster() {
  const { studentRoster } = useContext(DirectorContext);
  const [studentRosterList, updateStudentRosterList] = studentRoster;
  console.log("roster", studentRosterList);

  // useEffect(() => {
  //   console.log("student", studentRosterList);
  // }, [studentRosterList]);

  // if (!studentRosterList) {
  //   return <Typography>Loading</Typography>;
  // } else {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={studentRosterList}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
