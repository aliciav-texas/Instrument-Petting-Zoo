const pool = require("../database/index.js");

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
};
