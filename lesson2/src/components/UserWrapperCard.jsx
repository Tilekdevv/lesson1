export const UserWrapperCard = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid green",
        width: "400px",
        height: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
