import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import { useEffect, useState } from "react";
import api from "../../services/api"

function TestEdit() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  const deleteTest = async (testId) => {
    try {
      await api.delete(`/testscategories/${testId}`);
      await api.delete(`/tests/${testId}`);
      
      setData((prevData) => prevData.filter((test) => test.id !== testId));

      setSelectedId(null);
    } catch (error) {
      console.error("Error deleting test:", error);
    }
  };

  useEffect(() => {
    api
      .get(`/tests`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <UserInfo />
            <TestStats />
            <AdminCPMenu />
          </div>
          <div className="col col-9">
            <div className="card bg-light mb-3">
              <div className="card-header">Testų valdymas</div>
              <div className="card-body">
                <h5 className="card-title">Testų sąrašas</h5>
                {data && data.length > 0 ? (
                  data.map((d, i) => (
                    <div className="card border-dark mb-3" key={i}>
                      <div className="card-header">{d.title}</div>
                      <div className="card-body text-dark">
                        <p className="card-text">{d.summary}</p>
                        <p className="card-text">
                          Testą sudaro klausimų: <b>{d.questions_count}</b>.
                          Skirtas laikas: <b>{d.test_time} min.</b>
                          <Link to={`/admin/testedit/${d.id}`}>
                            <button
                              type="button"
                              className="btn btn-dark"
                              id="startbtn"
                            >
                              Redaguoti
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            id="startbtn"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleButtonClick(d.id)}
                          >
                            Naikinti
                          </button>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>...</p>
                )}

                <Link to="/admin/createtest">
                  <center>
                    <button
                      type="submit"
                      className="btn btn-success mt-1"
                      style={{ float: "left" }}
                    >
                      Sukurti naują testą
                    </button>
                  </center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Naikinti testą
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Ar tikrai norite panaikinti pasirinktą testą?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Uždaryti
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal" 
                onClick={() => deleteTest(selectedId)}
              >
                Naikinti
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestEdit;
