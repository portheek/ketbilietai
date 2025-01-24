import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../services/authService";
import api from "../services/api"

function AdminCPMenu() {
  const [questionsCount, questionsCountSetData] = useState({questionsCount: 0});
  const [testsCount, testsCountSetData] = useState({testsCount: 0});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    if (!user.is_admin) return;

    const fetchData = async () => {
      try {
        const questionsResponse = await api.get(`/questions/count`);
        if (questionsResponse.data > 0) {
          questionsCountSetData(questionsResponse.data);
        }

        const testsResponse = await api.get(`/tests/count`);
        if (testsResponse.data > 0) {
          testsCountSetData(testsResponse.data);
        }

      } catch (error) {
        console.error("Failed to fetch counts:", error);
      }
    };

    fetchData();
  }, []);

  if(user === null || !user.is_admin){
    return (<></>);
  }

  return (
    <>
      <div className="card border-success mb-3">
        <div className="card-header">Administratoriams</div>
        <div className="card-body text-success">
          <p className="card-text">
            Iš viso testų: {testsCount.testsCount}<br />
            Iš viso klausimų: {questionsCount.questionsCount}
            <br />
          </p>
          <Link to="/admin/testlist">
            <button type="button" className="btn btn-success">
              Testų valdymas
            </button>
          </Link>
          <Link to="/admin/categories">
            <button type="button" className="btn btn-success mt-2">
              Kategorijų valdymas
            </button>
          </Link>
          <Link to="/admin/questionspreview">
            <button type="button" className="btn btn-success mt-2">
              Klausimų valdymas
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminCPMenu;
