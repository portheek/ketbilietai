import { Link } from "react-router-dom";
import AdminCPMenu from "../../components/admincpmenu";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";

function TestEdit() {
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
            <div className="card-header">Testo redagavimas</div>
            <div className="card-body">
              <h5>Testo „Pagrindinis testas“ redagavimas</h5>
              <form className="mt-3">
                <div className="form-group">
                  <label for="inputName">Pavadinimas</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Įveskite testo pavadinimą"
                    value="Pagrindinis testas"
                  />
                </div>
                <div className="form-group">
                  <label for="inputSurname">Aprašymas</label>
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="inputSurname"
                    placeholder="Įveskite testo aprašymą"
                    value="Pagrindinis testas, apimantis klausimus iš visų kategorijų."
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Klausimų kiekis</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Įveskite klausimų kiekį"
                    value="30"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">
                    Skirtas testo laikas
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Įveskite laiką minutėmis"
                    value="30"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword2">
                    Pasirinkite kategorijas
                  </label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Kelio ženklai
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckDefault2">
                      Dalyvavimas eisme
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault3"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckDefault3">
                      Eismo saugumas
                    </label>
                  </div>
                </div>
              </form>

              <Link to="/admin/testlist">
                <center>
                  <button
                    type="submit"
                    className="btn btn-success mt-1"
                    style={{ float: "left" }}
                  >
                    Išsaugoti
                  </button>
                </center>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestEdit;
