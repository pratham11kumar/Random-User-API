import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCards";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        let arr = [];

     
        for (let i = 0; i < 6; i++) {
          const res = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomusers/user/random"
          );

          if (res?.data?.data) {
            arr.push(res.data.data);
          }
        }

        console.log("FINAL USERS:", arr);
        setUsers(arr);
      } catch (e) {
        console.error("ERROR:", e);
      }
    };

    load();
  }, []);

  return (
    <div className="container">
      <h1>Users: {users.length}</h1>

      {users.length === 0 && <h2>Loading...</h2>}

      <div className="grid">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
    </div>
  );
}

export default App;
      

//.get("https://api.freeapi.app/api/v1/public/randomusers/user/random")