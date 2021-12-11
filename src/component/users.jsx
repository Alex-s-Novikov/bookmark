import User from "./user";

function Users (users, handleDelete, handleToggleBookmark) {
    return users.map((user) => User(user, handleDelete, handleToggleBookmark));
}

export default Users;
