import { Link } from "react-router-dom";
import api from "../../services/api"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function TestReview() {
  const [test, setTest] = useState();
  const location = useLocation();
  const { questions, answers } = location.state || {
    questions: [],
    answers: {},
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const testResponse = await api.get(`/tests/${id}`);
        const testData = testResponse.data;
        setTest(testData);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTest();
  }, [id]);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
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

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h3>Klausimas nr. {currentQuestionIndex + 1}</h3>
          <img
            src="https://www.ketbilietai.lt/assets/Uploads/ket/_resampled/Fit600300-wm130-26758.gif"
            alt="question"
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
                    key={i}
                    type="checkbox"
                    name="checkbox"
                    id={`q${currentQuestionIndex}-input${i}`}
                    value={ans}
                    checked={
                      Boolean(answers[questions[currentQuestionIndex].id]?.[ans.id])
                    }
                    disabled
                  />
                  <label
                    htmlFor={`q${currentQuestionIndex}-input${i}`}
                    style={{
                      background:
                      Boolean(answers[questions[currentQuestionIndex].id]?.[ans.id]) ? Boolean(ans.is_correct)
                          ? "#b7f4b7"
                          : "#ffd9d9"
                          : ""
                    }}
                  >
                    <div style={{color: Boolean(ans.is_correct) === true ? "green" : "red"}}>{ans.answer}</div>
                    
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
                      key={i}
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
            <Link to="/menu">
              <button className="btn btn-success m-2">Baigti peržiūrą</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestReview;
