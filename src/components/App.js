<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
<<<<<<< HEAD
      .then((response) => response.json())
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);
  function handleAddForm(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    setQuestions(questions.filter((question) => question.id !== deletedQuestion.id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      }
      return question;
    });
    setQuestions(updatedQuestions);
=======
      .then((r) => r.json())
      .then(setQuestions);
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedId) {
    setQuestions(questions.filter((q) => q.id !== deletedId));
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    ));
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
<<<<<<< HEAD
      {page === "Form" ? <QuestionForm onAddForm={handleAddForm}/> 
      : <QuestionList questions={questions}  onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>}
=======
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDelete={handleDeleteQuestion}
          onUpdate={handleUpdateQuestion}
        />
      )}
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
    </main>
  );
}

export default App;
