import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import api from "../../services/api"
import { useEffect, useState } from "react";
import { getUser } from "../../services/authService";


function CreateTest() {

  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    questions_count: 0,
    test_time: 0,
    categories: [],
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [categories, categoriesSetData] = useState("");

  useEffect(() => {
      const fetchUser = async () => {
        try {
          const data = await getUser();
          setUser(data);
        } catch (error) {}
      };
  
      fetchUser();
    }, []);

  useEffect(() => {
    api
      .get(`/categories`)
      .then((res) => categoriesSetData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Dynamically update the field based on the input's name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    console.log(formData);
    /*const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setSuccess({});
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccess({ added: "Naujas klausimas pridėtas sėkmingai!" });
      //submitForm(formData);
    }*/
  };

  async function submitForm(form) {
    try {
      const testData = {
        title: formData.title,
        summary: formData.summary,
        questions_count: formData.questions_count,
        test_time: formData.test_time,
        users_id: user.id, 
      };

      const res = await api.post(`/tests`, testData);
      const returnId = res.data.id;

      formData.categories.map((ans) => {
        let _data = {
          tests_id: returnId,
          categories_id: ans
        };
        api.post(`/testscategories`, _data);
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    setFormData((prevFormData) => {
      if (checked) {
        return {
          ...prevFormData,
          categories: [...prevFormData.categories, id],
        };
      } else {
        return {
          ...prevFormData,
          categories: prevFormData.categories.filter(
            (categoryId) => categoryId !== id
          ),
        };
      }
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
            <div className="card-header">Naujo testo kūrimas</div>
            <div className="card-body">
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputName">Pavadinimas</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Įveskite testo pavadinimą"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSurname">Aprašymas</label>
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="inputSurname"
                    placeholder="Įveskite testo aprašymą"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Klausimų kiekis</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Įveskite klausimų kiekį"
                    name="questions_count"
                    value={formData.questions_count}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Skirtas testo laikas
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Įveskite laiką minutėmis"
                    name="test_time"
                    value={formData.test_time}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">
                    Pasirinkite kategorijas
                  </label>

                  {categories && categories.length > 0 ? (
                    categories.map((d, i) => (
                      <div className="form-check" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`category-${d.id}`}
                          onChange={(event) =>
                            handleCheckboxChange(event, d.id)
                          }
                          checked={formData.categories.includes(d.id)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`category-${d.id}`}
                        >
                          {d.title}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p>...</p>
                  )}
                </div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-success mt-1"
                    style={{ float: "left" }}
                  >
                    Sukurti naują testą
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

export default CreateTest;
