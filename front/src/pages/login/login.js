import "./login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { login } from "../../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('registration') === "success") {
            setShowSuccessMessage(true);
        }
    }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      navigate('/menu', {replace: true});
    } catch (error) {
      setError("Klaidingi prisijungimo duomenys!");
      console.log("Klaida");
    }
  };

  return (
    <>
      <main role="main" className="d-flex flex-column justify-content-center">
        <h1>Prisijungimas</h1>
        
        <form className="mt-3" onSubmit={handleSubmit}>
        {
          error ? <div class="alert alert-danger" role="alert">
          {error}
          </div> : <></>
        }
        {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                    Registracija sėkminga! Dabar galite prisijungti.
                </div>
            )}
          <div className="form-group">
            <label for="exampleInputEmail1">El. pašto adresas</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Įveskite el. paštą"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Įveskite slaptažodį"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <center>
            <button type="submit" className="btn btn-primary mt-2">
              Prisijungti
            </button>
          </center>
        </form>
        <p className="mt-2">arba</p>
        <Link to="/register">
          <button type="submit" className="btn btn-secondary">
            Registruotis
          </button>
        </Link>
      </main>
    </>
  );
}

export default Login;
