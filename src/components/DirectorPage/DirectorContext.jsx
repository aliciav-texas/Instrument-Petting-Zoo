/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";

export const DirectorContext = createContext();

export const DirectorDataProvider = (props) => {
  const [studentRoster, updateStudentRoster] = useState([]);
  const [listOfStudentsState, updateListOfStudentsState] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedStudentID, setSelectedStudentID] = useState();

  const [finalStudentFeedbackState, setFinalStudentFeedbackState] = useState(
    []
  );

  useEffect(() => {
    axios
      .get("http://localhost:3030/roster")
      .then((studentRoster) => {
        updateStudentRoster(studentRoster.data);
      })
      .catch((errorGettingStudentList) => {
        console.log(errorGettingStudentList);
      });
  }, []);

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

  useEffect(() => {
    if (selectedStudent) {
      axios
        .get(`http://localhost:3030/student/${selectedStudent}/id`)
        .then((studentID) => {
          setSelectedStudentID(studentID.data.id);
        })
        .catch(() => {});
    }
  }, [selectedStudent]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/student/${selectedStudentID}/feedback`)
      .then((studentFeedback) => {
        setFinalStudentFeedbackState(studentFeedback.data);
      });
  }, [selectedStudentID]);

  return (
    <DirectorContext.Provider
      value={{
        studentRoster: [studentRoster, updateStudentRoster],
        listOfStudentsState: [listOfStudentsState, updateListOfStudentsState],
        selectedStudentState: [selectedStudent, setSelectedStudent],
        finalStudentFeedbackState: [
          finalStudentFeedbackState,
          setFinalStudentFeedbackState,
          (selectedStudentID: [selectedStudentID, setSelectedStudentID]),
        ],
      }}
    >
      {props.children}
    </DirectorContext.Provider>
  );
};
