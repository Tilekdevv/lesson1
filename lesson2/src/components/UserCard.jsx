// import { users } from "react";

export const UserCard = ({ user }) => {
  console.log(user);

  return (
    <>
      <h4>Name:{user.name}</h4>
      <p>City:{user.address.city}</p>
      <h5>Phone:{user.phone}</h5>
      <p>email{user.email}</p>
    </>
  );
};
