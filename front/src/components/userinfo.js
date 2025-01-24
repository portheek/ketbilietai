import { Link } from "react-router-dom";
import { logout, getUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserInfo() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {}
    };

    fetchUser();
  }, []);

  const handleLogout = async (e) => {
      e.preventDefault();
      try{
        if(logout()){
          navigate('/', {replace: true});
        }
      }
      catch{
      }
    };

  return (
    <>
      <div className="card bg-light mb-3">
        <div className="card-header">Vartotojo informacija</div>
        <div className="card-body">
          <h5 className="card-title ">
            {user ? `${user.first_name} ${user.last_name}` : "Vartotojo vardas..."}
          </h5>

          <div className=" btn-group-vertical">
            <Link to="/menu">
              <button type="button" className="btn btn-primary">
                Pagrindinis
              </button>
            </Link>
            <Link to="/home">
              <button type="button" className="btn btn-danger mt-2" onClick={handleLogout}>
                Atsijungti
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
