import { useEffect, useState } from "react";
import axios from "axios";
import UserCards from "../components/UserCards";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      .then((res) => {
        console.log(res.data);
        setUsers([res?.data?.data]);;
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Users: {users.length}</h1>

      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Home;