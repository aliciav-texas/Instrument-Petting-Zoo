import React, { useState, createContext } from "react";
// import axios from "axios";

export const AssessmentContext = createContext();

export const StudentAssessmentProvider = (props) => {
  const [assessedStudent, setAssessedStudent] = useState("");
  const [instrumentOfAssesment, setInstrumentOfAssesment] = useState("");
  const [directorOfAssesment, setDirectorOfAssesment] = useState("");
  const [instrumentScore, setInstrumentScore] = useState(null);
  const [writtenInstrumentFeedback, setWrittenInstrumentFeedback] =
    useState("");

  const submitStudentInstrumentAssessment = () => {
    console.log(
      "final submit",
      assessedStudent,
      instrumentOfAssesment,
      directorOfAssesment,
      instrumentScore,
      writtenInstrumentFeedback
    );
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
