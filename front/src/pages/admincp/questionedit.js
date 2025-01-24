import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import api from "../../services/api"
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function QuestionEdit() {
  const [formData, setFormData] = useState({
    question: "",
    image: null,
    category: -1,
    answers: [{ answerName: "", isCorrect: false }],
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const [categoryData, categorySetData] = useState([]);
  const [questionsData, questionsSetData] = useState([]);
  const [answersData, answersSetData] = useState([]);
  const [answersDeleteData, answersDeleteSetData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/categories`)
      .then((res) => categorySetData(res.data))
      .catch((err) => console.log(err));

    api
      .get(`/questions/${id}`)
      .then((res) => questionsSetData(res.data))
      .catch((err) => console.log(err));

    api
      .get(`/answers/getAllFromQuestion/${id}`)
      .then((res) => answersSetData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Load the question data
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      question: questionsData.question,
      category: questionsData.categories_id,
    }));
  }, [questionsData]);

  // Load the answers data
  useEffect(() => {
    const mappedAnswers = answersData.map((a) => ({
      ansId: a.id,
      answerName: a.answer,
      isCorrect: a.is_correct,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: mappedAnswers,
    }));
    console.log(answersData);
  }, [answersData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, 
    }));

    console.log(formData.category);
  };

  const addAnswer = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: [
        ...prevFormData.answers,
        { ansId: -1, answerName: "", isCorrect: false },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setSuccess({});
      setErrors(validationErrors);
    } else {
      setErrors("");
      setSuccess({ added: "Klausimas atnaujintas sėkmingai." });
      submitForm(formData);
    }
  };

  async function submitForm(form) {
    try {
      const _data = {
        categories_id: formData.category,
        question: formData.question,
        image: formData.image,
      };

      console.log(_data);

      api.put(`/questions/${id}`, _data);

      formData.answers.map((ans) => {
        let answer = {
          questions_id: id,
          answer: ans.answerName,
          is_correct: ans.isCorrect,
        };

        if (ans.ansId === -1) {
          api.post(`/answers`, answer);
        } else if (ans.ansId > -1) {
          api.put(`/answers/${ans.ansId}`, answer);
        }
      });

      console.log(answersDeleteData);
      if (Array.isArray(answersDeleteData)) {
        answersDeleteData.map((ans) => {
          api.delete(`/answers/${ans.ansId}`);
        });
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const validate = () => {
    const errors = {};
    if (formData.question.length < 5)
      errors.question = "Klausimo laukas turi būti užpildytas.";
    if (formData.category == -1)
      errors.category = "Turi būti pasirinkta kategorija.";
    if (formData.answers.length < 2)
      errors.answers = "Turi būti bent 2 atsakymai.";

    return errors;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const removeAnswer = (index) => {
    if (formData.answers[index].ansId > -1) {
      let newData = { ansId: formData.answers[index].ansId };

      answersDeleteSetData((prevData) =>
        Array.isArray(prevData) ? [...prevData, newData] : [newData]
      );
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: prevFormData.answers.filter((_, i) => i !== index),
    }));
  };

  const handleAnswerChange = (index, key, value) => {
    setFormData((prevFormData) => {
      const updatedAnswers = prevFormData.answers.map((answer, i) =>
        i === index ? { ...answer, [key]: value } : answer
      );

      return {
        ...prevFormData,
        answers: updatedAnswers,
      };
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
            <div className="card-header">Klausimo redagavimas</div>

            <div className="container-sm mt-3">
              {success.added && (
                <div className="alert alert-success" role="alert">
                  {success.added}
                </div>
              )}
              {errors.question && (
                <div className="alert alert-danger" role="alert">
                  {errors.question}
                </div>
              )}
              {errors.category && (
                <div className="alert alert-danger" role="alert">
                  {errors.category}
                </div>
              )}
              {errors.answers && (
                <div className="alert alert-danger" role="alert">
                  {errors.answers}
                </div>
              )}
            </div>

            <div className="card-body">
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputName">Klausimas</label>
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="inputName"
                    placeholder="Įveskite klausimą"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Paveikslėlio talpinimas
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleImageChange}
                  />
                </div>

                <label className="form-label">Kategorija</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="-1">Pasirinkite kategoriją</option>
                  {categoryData.map((d, i) => {
                    return (
                      <option value={d.id} key={i}>
                        {d.title}
                      </option>
                    );
                  })}
                </select>

                <div className="mt-3">
                  <label>Atsakymai</label>

                  {formData.answers.map((answer, index) => (
                    <div className="input-group mb-3" key={index}>
                      <div className="input-group-text">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          value=""
                          aria-label="Checkbox for following text input"
                          checked={answer.isCorrect}
                          onChange={(e) =>
                            handleAnswerChange(
                              index,
                              "isCorrect",
                              e.target.checked
                            )
                          }
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with checkbox"
                        value={answer.answerName}
                        onChange={(e) =>
                          handleAnswerChange(
                            index,
                            "answerName",
                            e.target.value
                          )
                        }
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeAnswer(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={addAnswer}
                >
                  Pridėti
                </button>

                <center>
                  <button
                    type="submit"
                    className="btn btn-success mt-4"
                    style={{ float: "left" }}
                  >
                    Išsaugoti
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionEdit;
