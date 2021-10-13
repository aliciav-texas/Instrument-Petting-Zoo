/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";

export const DirectorContext = createContext();

export const DirectorDataProvider = (props) => {
  const [studentRoster, updateStudentRoster] = useState([]);

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

  return (
    <DirectorContext.Provider
      value={{
        studentRoster: [studentRoster, updateStudentRoster],
      }}
    >
      {props.children}
    </DirectorContext.Provider>
  );
};
