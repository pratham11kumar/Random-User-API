const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="card">
        <img
         src={user?.picture?.large || "https://via.placeholder.com/100"}
         alt="user"
         width="100"
/>
      <p>{user?.name?.first || "No Name"}</p>
      <p>{user?.email || "No Email"}</p>
    </div>
  );
};

export default UserCard;