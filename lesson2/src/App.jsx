// import { Space } from "antd";
// import "./App.css";
// import { Card as CustomCard } from "./components/Card";
// import cards from "./db/data.json";

// function App() {
//   console.log(cards);

//   return (
//     <>
//       <Space direction="vertical" size={16}>
//         {cards.map((el) => (
//           <CustomCard key={el.id} title={el.name} description={el.phone} />
//         ))}
//       </Space>
//     </>
//   );
// }

// export default App;

import { Space } from "antd";

import "./App.css";
import { UserList } from "./components/UserList";

function App() {
  return (
    <>
      <UserList />
    </>
  );
}

export default App;
