import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import { useEffect, useState } from "react";
import api from "../../services/api"


function QuestionsPreview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    api
      .get(`/categories`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
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
            <div className="card-header">Klausimų valdymas</div>
            <div className="card-body">
              <h5 className="card-title">Pasirinkite klausimų kategoriją:</h5>
              <ul className="list-group">
                {data.map((d, i) => {
                  return (
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      {d.title}
                      <Link to={`/admin/questionslist/${d.id}`}>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Peržiūrėti
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPreview;
