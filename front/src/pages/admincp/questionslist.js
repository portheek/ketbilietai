import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import api from "../../services/api"
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function QuestionsList() {
  const [categoryData, categorySetData] = useState([]);
  const [questionData, questionSetData] = useState([]);
  const [answersData, answersSetData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/categories/${id}`)
      .then((res) => categorySetData(res.data))
      .catch((err) => console.log(err));

    api
      .get(`/questions/getAllByCategory/${id}`)
      .then((res) => {
        questionSetData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (questionData.length > 0) {
      fetchAnswersData(questionData).then((data) => {
        answersSetData(data);
      });
    }
  }, [questionData]);

  const fetchAnswersData = async (questionData) => {
    try {
      const answersPromises = questionData.map((q) => {
        const url = `/answers/getAllFromQuestion/${q.id}`;
        console.log("Requesting URL:", url);
        return api
          .get(url)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            console.error(`Error fetching data for question ID ${q.id}:`, err);
            return [];
          });
      });

      const answersResponses = await Promise.all(answersPromises);

      const answersData = answersResponses;

      return answersData;
    } catch (error) {
      console.error("Error fetching answers:", error);
      return [];
    }
  };

  const deleteItem = (id) => {
    api
      .delete(`/answers/deleteByQuestionId/${id}`)
      .then((response) => {
        console.log("Answers deleted");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });

    api
      .delete(`/questions/${id}`)
      .then((response) => {
        console.log("Question deleted");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-3">
          <UserInfo />
          <TestStats />
          <AdminCPMenu />
        </div>
        <div className="col col-9">
          <div className="card bg-light mb-3">
            <div className="card-header">Klausimų sąrašas</div>
            <div className="card-body">
              <h5 className="card-title">
                Kategorijos „{categoryData.title}“ klausimai:
              </h5>

              <Link to={`/admin/questionadd/${id}`}>
                <button type="button" className="btn btn-success mt-2">
                  Pridėti naują klausimą
                </button>
              </Link>

              <div
                className="accordion accordion-flush mt-3"
                id="accordionFlushExample"
              >
                {questionData.map((q, i) => {
                  return (
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${i}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${i}`}
                        >
                          {q.question}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <h5>Atsakymai:</h5>
                          <ul className="list-group">
                            {answersData && answersData.length > 0 ? (
                              answersData[i].map((a, i) => {
                                return (
                                  <li
                                    className="list-group-item"
                                    style={{
                                      backgroundColor: a.is_correct
                                        ? "#a8f7b5"
                                        : "#fc9a9a",
                                    }}
                                  >
                                    {a.answer}
                                  </li>
                                );
                              })
                            ) : (
                              <p>Kraunama informacija...</p>
                            )}
                          </ul>

                          <Link to={`/admin/questionedit/${q.id}`}>
                            <button
                              type="button"
                              className="btn btn-warning mt-2"
                            >
                              Redaguoti
                            </button>
                          </Link>

                          <Link to={`/admin/questionslist/${id}`}>
                            <button
                              type="button"
                              class="btn btn-danger mt-2"
                              style={{ marginLeft: "0.5rem" }}
                              onClick={() => deleteItem(q.id)}
                            >
                              Šalinti
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsList;
