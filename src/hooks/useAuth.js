import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const history = useNavigate();

  //Loading
  const [loading, setLoading] = useState(false);

  const login = (id) => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history("/home");
        } else {
          alert("not,User");
        }
      })
      .catch(() => alert("Unable to access"))
      .finally(() => setLoading(false));
  };
  return { login, loading };
};
