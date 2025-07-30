import React from "react";

<<<<<<< HEAD
function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
=======
function QuestionItem({ question, onDelete, onUpdate }) {
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

<<<<<<< HEAD
  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteQuestion(question);
      });
  }

  function handleUpdate(event) {
    const newIndex = parseInt(event.target.value, 10);
=======
  function handleChange(e) {
    const newIndex = parseInt(e.target.value);
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: newIndex }),
    })
<<<<<<< HEAD
      .then((response) => response.json())
      .then((updatedQuestion) => {
        onUpdateQuestion(updatedQuestion);
      });
=======
      .then((r) => r.json())
      .then(onUpdate);
  }

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
<<<<<<< HEAD
        <select defaultValue={correctIndex} onChange={handleUpdate}>{options}</select>
=======
        <select value={correctIndex} onChange={handleChange}>
          {options}
        </select>
>>>>>>> 9788d1c8a376e6ddddd5580ab46e6d7f86b49d0f
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

