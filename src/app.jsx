import React, { useState } from "react";
import Users from "./component/users";
import SearchStatus from "./component/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((el) => el !== userId));
  };

  const handleToggleBookmark = (id) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === id) {
          if (user.bookmark === "bi bi-bookmark-fill") {
            user.bookmark = "bi bi-bookmark";
          } else {
            user.bookmark = "bi bi-bookmark-fill";
          }
        }
        return user;
      })
    );
  };

  return (
    <div>
      <h1>{SearchStatus(users.length)}</h1>
      <table className="table">
        <thead>
          <tr key = {0}>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Закладка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{Users(users, handleDelete, handleToggleBookmark)}</tbody>
      </table>
    </div>
  );
};

export default App;
