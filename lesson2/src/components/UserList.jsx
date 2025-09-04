import { UserCard } from "./UserCard";
import userData from "../db/data.json";
import { UserWrapperCard } from "./UserWrapperCard";

export const UserList = () => {
  // const users = [
  //   {
  //     id: 1,
  //     name: "Alisa",
  //     email: "alisa22@gmail.som",
  //     phone: 996221344222,
  //     city: "USA",
  //     Active: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Tom",
  //     email: "tom312@gmail.som",
  //     phone: 996221344222,
  //     city: "Germany",
  //     Active: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Lilli",
  //     email: "lilli44@gmail.som",
  //     phone: 996221344222,
  //     city: "Italy",
  //     Active: true,
  //   },
  // ];

  return (
    <div>
      {userData.map((user) => (
        <UserWrapperCard>
          <UserCard key={user.id} user={user} />
        </UserWrapperCard>
      ))}
    </div>
  );
};
