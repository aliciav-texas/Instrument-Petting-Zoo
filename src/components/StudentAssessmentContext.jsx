import React, { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";

export const AssessmentContext = createContext();

export const StudentAssessmentProvider = (props) => {
  const [assessedStudent, setAssessedStudent] = useState("");
  const [instrumentOfAssesment, setInstrumentOfAssesment] = useState("");
  const [directorOfAssesment, setDirectorOfAssesment] = useState("");
  const [instrumentScore, setInstrumentScore] = useState(null);
  const [writtenInstrumentFeedback, setWrittenInstrumentFeedback] =
    useState("");
  const [listOfStudentsState, updateListOfStudentsState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/students")
      .then((listOfStudents) => {
        updateListOfStudentsState(listOfStudents.data);
      })
      .catch((errorGettingStudentList) => {
        console.log(errorGettingStudentList);
      });
  }, []);

  const submitStudentInstrumentAssessment = () => {
    axios.post(`http://localhost:3030/${instrumentOfAssesment}Assessment`, {
      directorOfAssesment: directorOfAssesment,
      instrument: instrumentOfAssesment,
      writtenInstrumentFeedback: writtenInstrumentFeedback,
      rating: instrumentScore,
    });
  };

  return (
    <AssessmentContext.Provider
      value={{
        assessedStudent: [assessedStudent, setAssessedStudent],
        instrumentOfAssesment: [
          instrumentOfAssesment,
          setInstrumentOfAssesment,
        ],
        directorOfAssesment: [directorOfAssesment, setDirectorOfAssesment],
        instrumentScore: [instrumentScore, setInstrumentScore],
        writtenInstrumentFeedback: [
          writtenInstrumentFeedback,
          setWrittenInstrumentFeedback,
        ],
        submitAssessment: [submitStudentInstrumentAssessment],
      }}
    >
      {props.children}
    </AssessmentContext.Provider>
  );
};
