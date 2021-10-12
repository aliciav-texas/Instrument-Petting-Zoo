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
      }}
    >
      {props.children}
    </AssessmentContext.Provider>
  );
};
