import { Link } from "react-router-dom";
import './testend.css'
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom"

function TestEnd() {

  const location = useLocation();
  const { questions, answers } = location.state || { questions: [], answers: {} }; 
  const [ correctUserAnswers, setCorrectUserAnswers ] = useState(0);

  useEffect(() => {
    calculateScore();
  });

  const calculateScore = () => {
    var correctAnswers = 0;
    questions.forEach(question => {
      var correctAnswersCount = 0;
      question.answers.forEach(qanswer =>{
        var userAnswer = answers[question.id]?.[qanswer.id] === undefined ? false : answers[question.id][qanswer.id];
        if((qanswer.is_correct === 1 ? true : false) === userAnswer)
        {
          correctAnswersCount++;
        }
      });
      if(correctAnswersCount === question.answers.length)
      {
        correctAnswers++;
      }
    });

    setCorrectUserAnswers(correctAnswers);
  };

  const percentage = (correctUserAnswers / questions.length) * 100;
  const formattedPercentage = percentage.toFixed(2);

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            
            <h2>Testas</h2>
            <h1 id="result" style={{ color: percentage >= 0.8 ? 'green' : 'red'}}>{percentage >= 0.8 ? `Išlaikytas!` : `Neišlaikytas!` }</h1>
            <h5>Teisingai atsakyta: {correctUserAnswers} / {questions.length} ({formattedPercentage}%)</h5>
          </div>
          <div className="d-flex justify-content-center m-4">
            <Link to="/testreview" state={{questions, answers}}>
                <button className="btn btn-success">Peržiūrėti bilietą</button>
            </Link>
            <Link to="/menu">
                <button style={{marginLeft: "10px"}} className="btn btn-primary">Grįžti į pagrindinį</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestEnd;
