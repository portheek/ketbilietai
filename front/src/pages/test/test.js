import { Link } from "react-router-dom";
import "./test.css";
import api from "../../services/api"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Test() {
  const [test, setTest] = useState();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const localStorageKey = `test-${id}-questions`;
  const localStorageKeyTest = `test-${id}-questions-test`;

  useEffect(() => {
    localStorage.removeItem(localStorageKey);

    const fetchQuestions = async () => {
      try {
        const storedQuestions = localStorage.getItem(localStorageKey);
        const storedTest = localStorage.getItem(localStorageKeyTest);
        if (storedQuestions) {
          setQuestions(JSON.parse(storedQuestions));
          setQuestions(JSON.parse(storedTest));
          console.log(questions);
        } else {
          const testResponse = await api.get(`/tests/${id}`);
          const testData = testResponse.data;
          setTest(testData);
          localStorage.setItem(localStorageKeyTest, JSON.stringify(testResponse.data));

          const questionsResponse = await api.get(
            `/tests/${id}/questions/${testData.questions_count}`
          );
          const questionsData = questionsResponse.data;
          setQuestions(questionsData.questions);
          localStorage.setItem(localStorageKey, JSON.stringify(questionsResponse.data));
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
    console.log(questions);
  }, [id]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        ...prevAnswers[questionId],
        [answer.id]: !prevAnswers[questionId]?.[answer.id],
      },
    }));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
    console.log(questions[currentQuestionIndex].image);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  if (loading) {
    return (
      <div>
        <center>Kraunama...</center>
      </div>
    );
  }

  if(questions === null){
    return (
      <div>
        <center>Kraunama...</center>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h3>Klausimas nr. {currentQuestionIndex + 1}</h3>
          <img
            src={questions[currentQuestionIndex].image}
            alt="Paveikslėlis"
          />

          <h2 className="mt-2">{questions[currentQuestionIndex].question}</h2>

          <div className="funkyradio">
            <form id="questionsForm" method="post">
              <input
                type="hidden"
                id="QuestionID"
                name="QuestionID"
                value="@questionID"
              />

              {questions[currentQuestionIndex].answers.map((ans, i) => (
                <div className="funkyradio-primary">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id={`q${currentQuestionIndex}-input${i}`}
                    value={ans}
                    onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, ans)}
                    checked={answers[questions[currentQuestionIndex].id]?.[ans.id]}
                  />
                  <label htmlFor={`q${currentQuestionIndex}-input${i}`}>
                    {ans.answer}
                  </label>
                </div>
              ))}
            </form>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <table>
              <tbody className="pagination d-inline">
                <tr>
                  {questions.map((q, i) => (
                    <th
                      className={
                        currentQuestionIndex === i
                          ? `page-item active`
                          : `page-item`
                      }
                    >
                      <button
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentQuestionIndex(i)}
                      >
                        {i + 1}
                      </button>
                    </th>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center mt-2">
            <button
              className="btn btn-primary m-2"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Atgal
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={handleNext}
              disabled={currentQuestionIndex === test.questions_count - 1}
            >
              Kitas
            </button>
            <Link to="/testend" state={{questions, answers}}>
              <button className="btn btn-success m-2">Baigti testą</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
