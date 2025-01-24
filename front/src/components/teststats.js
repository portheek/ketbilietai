import { Link } from "react-router-dom";

function TestStats() {
  return (
    <>
      <div className="card bg-light mb-3">
        <div className="card-header">Testų statistika</div>
        <div className="card-body">
          <p className="card-text">
            Paskutinio testo rezultatas: 90% Data: 2024-10-10
          </p>
          <Link to="/testhistory">
            <button type="button" className="btn btn-dark">
              Istorija
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TestStats;
