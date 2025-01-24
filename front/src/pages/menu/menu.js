import "./menu.css";
import { Link } from "react-router-dom";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import AdminCPMenu from "../../components/admincpmenu";
import api from "../../services/api"
import { useEffect, useState } from "react";


function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get(`/tests`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
            <div className="card-header">Testai</div>
            <div className="card-body">
              <h5 className="card-title">Pasirinkite testą</h5>
              {data.map((d, i) => {
                return (
                  <div className="card border-dark mb-3" key={i}>
                    <div className="card-header">{d.title}</div>
                    <div className=" card-body text-dark">
                      <p className="card-text">{d.summary}</p>
                      <p className="card-text">
                        Testą sudaro klausimų: <b>{d.questions_count}</b>.
                        Skirtas laikas: <b>{d.test_time} min.</b>
                        <Link to={`/test/${d.id}`}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="startbtn"
                          >
                            Pradėti
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
