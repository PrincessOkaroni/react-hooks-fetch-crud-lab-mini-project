import React from "react";
import QuestionItem from "./QuestionItem";

<<<<<<< HEAD
function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => 
      <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateQuestion={onUpdateQuestion}/>
      )}</ul>
=======
function QuestionList({ questions, onDelete, onUpdate }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
    </section>
  );
}

export default QuestionList;

