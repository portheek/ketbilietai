import { Link } from "react-router-dom";
import UserInfo from "../../components/userinfo";
import TestStats from "../../components/teststats";
import AdminCPMenu from "../../components/admincpmenu";

function TestHistory() {
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
            <div className="card-header">Testų sprendimų istorija</div>
            <div className="card-body">
              <h5 className="card-title">Sprendimų sąrašas: </h5>

              <div class="card border-success mb-3">
                <div class="card-body text-success">
                  <h5 class="card-title">Kelio ženklai</h5>
                  <p class="card-text">
                    Išlaikytas! Rezultatas: 30/30 (100%) Data: 2024-10-10
                  </p>
                </div>
              </div>

              <div class="card border-success mb-3">
                <div class="card-body text-success">
                  <h5 class="card-title">Kelio ženklai</h5>
                  <p class="card-text">
                    Išlaikytas! Rezultatas: 30/30 (100%) Data: 2024-10-10
                  </p>
                </div>
              </div>

              <div class="card border-danger mb-3">
                <div class="card-body text-danger">
                  <h5 class="card-title">Pagrindinis testas</h5>
                  <p class="card-text">
                    Neišlaikytas! Rezultatas: 25/30 (83%) Data: 2024-10-09
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestHistory;
