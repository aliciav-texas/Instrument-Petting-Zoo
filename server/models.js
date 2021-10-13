const pool = require("../database/index.js");

// === Get
const getListOfStudents = async () => {
  try {
    const getListOfStudentNames = "select student_name from student";
    const listOfStudentNames = await pool.query(getListOfStudentNames);
    const studentNames = [];
    listOfStudentNames.rows.forEach((student) => [
      studentNames.push(student.student_name),
    ]);
    return studentNames;
  } catch (errorGettingListOfStudents) {
    return errorGettingListOfStudents;
  }
};

const getListOfAllRegisteredStudents = async () => {
  try {
    const getListOfAllRegisteredStudentsQuery = "SELECT * FROM student";
    const registedStudentRoster = await pool.query(
      getListOfAllRegisteredStudentsQuery
    );
    return registedStudentRoster.rows;
  } catch (errorRetrievingStudentRoster) {
    return errorRetrievingStudentRoster;
  }
};

const getStudentID = async (studentName) => {
  try {
    const getStudentIDQuery = "SELECT id FROM student WHERE student_name = $1";
    const studentID = await pool.query(getStudentIDQuery, ["Kristin G"]);
    return studentID;
    // Promise.all([getStudentFeedback(studentID.rows[0].id)]).then(
    //   (studentFeedback) => {
    //     console.log("feedback", studentFeedback);
    //   }
    // );
  } catch (error) {
    return error;
  }
};

const getStudentFeedback = (id) => {
  const getWoodwindFeedbackQuery =
    "SELECT * from woodwindFeedback where id = $1";

  const getBrassFeedbackQuery = "SELECT * from brassFeedback where id = $1";

  const getPercussionFeedbackQuery =
    "SELECT * from percussionFeedback where id = $1";
  Promise.all([
    pool.query(getWoodwindFeedbackQuery, [id]),
    pool.query(getBrassFeedbackQuery, [id]),
    pool.query(getPercussionFeedbackQuery, [id]),
  ])
    .then((feedbackResults) => {
      const allFeedback = [];
      feedbackResults.forEach((feedback) => allFeedback.push(feedback.rows[0]));

      return allFeedback;
    })
    .catch((errorGettingFeedback) => {
      return errorGettingFeedback;
    });
};

const postStudentInstrumentAssessment = async (
  instrument,
  assessmentValues
) => {
  try {
    const postStudentInstrumentAssessmentQuery = `INSERT INTO ${instrument}Feedback(teacher_name, student_id, instrument, feedback, rating) VALUES ($1, (select id from student where student_name=$2), $3, $4, $5)`;
    const successfulPost = await pool.query(
      postStudentInstrumentAssessmentQuery,
      assessmentValues
    );
    return successfulPost;
  } catch (errorPostingAssessment) {
    return errorPostingAssessment;
  }
};

module.exports = {
  postStudentInstrumentAssessment,
  getListOfStudents,
  getListOfAllRegisteredStudents,
  getStudentID,
  getStudentFeedback,
};
