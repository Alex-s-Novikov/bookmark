import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

function User (user, handleDelete, handleToggleBookmark) {
  return (
    <tr key = {user._id}>
      <th scope="row">{user.name}</th>
      <td>
        <span>
          {user.qualities.map((quality) =>
            Qualitie(quality)
          )}
        </span>
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>{Bookmark(user._id, user.bookmark, handleToggleBookmark)}</td>
      <td>
        <button
          type="button"
          className="btn position-relative bg-danger"
          onClick={() => handleDelete(user)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
