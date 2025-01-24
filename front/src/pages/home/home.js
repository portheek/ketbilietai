import logo from "./logo.png";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main role="main" className="d-flex justify-content-center">
        <div className="row">
          <div className="col-sm">
            <h1 className="mt-5">KET Bilietų sprendimas</h1>
            <p className="lead">
              Šioje svetainėje galima spręsti įvairius kelių eismo taisyklių
              testus.
            </p>
            <Link to="/login">
              <button type="button" className="btn btn-success">
                Prisijungti dabar
              </button>
            </Link>
          </div>
          <div className="col-sm">
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
