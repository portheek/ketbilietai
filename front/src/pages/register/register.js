import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { register } from "../../services/authService";

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (password !== passwordConfirm) {
      setErrors({ passwordConfirm: ["Passwords do not match"] });
      return;
    }
    try {
      await register(name, surname, email, password);
      navigate('/login?registration=success'); 
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error('Registration failed', error);
      }
    }
  };

  return (
    <main role="main" className="d-flex flex-column justify-content-center">
      <h1>Registracija</h1>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputName">Vardas</label>
          <input
            type="text"
            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Įveskite savo vardą"
            required
          />
          {errors.first_name && <div className="invalid-feedback">{errors.first_name[0]}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="inputSurname">Pavardė</label>
          <input
            type="text"
            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
            id="inputSurname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Įveskite savo pavardę"
            required
          />
          {errors.last_name && <div className="invalid-feedback">{errors.last_name[0]}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">El. pašto adresas</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Įveskite el. paštą"
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Slaptažodis</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Įveskite slaptažodį"
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Slaptažodžio patvirtinimas</label>
          <input
            type="password"
            className={`form-control ${errors.passwordConfirm ? 'is-invalid' : ''}`}
            id="exampleInputPassword2"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Pakartokite slaptažodį"
            required
          />
          {errors.passwordConfirm && <div className="invalid-feedback">{errors.passwordConfirm[0]}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Registruotis
        </button>
      </form>
    </main>
  );
}

export default Register;
