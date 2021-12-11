import React from "react";

function Bookmark(id, bookmarkStyles, handleToggleBookmark) {
  return (
    <i
      className={bookmarkStyles ? bookmarkStyles : "bi bi-bookmark"}
      onClick={() => handleToggleBookmark(id)}
    ></i>
  );
}

export default Bookmark;
