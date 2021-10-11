DROP DATABASE IF EXISTS incoming_beginners_2022;

CREATE DATABASE incoming_beginners_2022;

\c incoming_beginners_2022;

CREATE TABLE student (
    id serial UNIQUE NOT NULL,
    studentName varchar(70),
    parent_name varchar(70),
    parent_email varchar(80),
    piano_experience boolean,
    instrument_interest varchar(30),
    additionalExperience varchar(2500),
    PRIMARY KEY (id)
);

CREATE INDEX student_index ON student(studentName);
CREATE INDEX instrument_interest_index ON student(instrument_interest);



CREATE TABLE woodwindFeedback (
    id serial UNIQUE NOT NULL,
    teacherName varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_ww ON woodwindFeedback(student_id);

CREATE TABLE brassFeedback (
    id serial UNIQUE NOT NULL,
    teacherName varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_br ON brassFeedback(student_id);


CREATE TABLE percussionFeedback (
    id serial UNIQUE NOT NULL,
    teacherName varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_perc ON percussionFeedback(student_id);

CREATE TABLE finalInstrumentRoster (
    id serial UNIQUE NOT NULL,
    studentName varchar(70),
    instrument varchar(70),
    emailed boolean,
    PRIMARY KEY (id)
);
CREATE INDEX studentName ON finalInstrumentRoster(studentName);
CREATE INDEX instrument_index ON finalInstrumentRoster(instrument);

