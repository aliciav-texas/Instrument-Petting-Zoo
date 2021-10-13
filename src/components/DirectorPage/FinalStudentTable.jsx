/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [{ instrument: "Woodwind", rating: 3, feedback: "no air suport" }];

export default function FinalStudentTable() {
  const { finalStudentFeedbackState } = useContext(DirectorContext);

  const [studentFeedback, setStudentFeedback] = finalStudentFeedbackState;

  console.log("sf", studentFeedback);

  if (Array.isArray(studentFeedback)) {
    const sortedFeedback = studentFeedback.filter((feedback) => {
      if (feedback) return feedback;
    });
    console.log("sortedFeedback", sortedFeedback);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Teacher Name</StyledTableCell>
              <StyledTableCell>Instrument</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              <StyledTableCell align="right">Feedback</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentFeedback.map((instrumentFeedback) => (
              <StyledTableRow key={instrumentFeedback.instrument}>
                <StyledTableCell component="th" scope="row">
                  {instrumentFeedback.teacher_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {instrumentFeedback.instrument}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {instrumentFeedback.rating}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {instrumentFeedback.feedback}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <h6>loading</h6>;
  }
}
