import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import { useEffect, useState } from "react";
import api from "../../services/api"


function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const [categoryName, setCategoryName] = useState("");


  const getData = () => {
    api
    .get(`/categories`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(categoryName.length < 3){
      return;
    }

    api
      .post(`/categories`, { title: categoryName })
      .then((response) => {
        console.log("Category added:", response.data);
        setCategoryName("");
        getData();
      })
      .catch((error) => {
        console.error("There was an error adding the category!", error);
      });
  };

  const deleteItem = (id) => {
    api.delete(`/categories/${id}`)
    .then(response => {
      console.log('Item deleted:', response.data);
      getData();
      }).catch(error => {
        console.error('Error deleting item:', error);
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
            <div className="card-header">Kategorijų valdymas</div>
            <div className="card-body">
              <h5 className="card-title">Kategorijų sąrašas:</h5>

              <ul class="list-group">
                {data.map((d, i) => {
                  return (
                    <li
                      key={i}
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {d.title}
                      <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteItem(d.id)}>
                        Šalinti
                      </button>
                    </li>
                  );
                })}
              </ul>

              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="newCategorie">Pridėti naują kategoriją</label>
                  <input
                    type="text"
                    className="form-control"
                    id="newCategory"
                    placeholder="Įveskite kategorijos pavadinimą"
                    value={categoryName}
                    onChange={handleInputChange}
                  />
                </div>

                <center>
                  <button
                    type="submit"
                    className="btn btn-success mt-1"
                    style={{ float: "left" }}
                  >
                    Pridėti
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

export default Categories;
