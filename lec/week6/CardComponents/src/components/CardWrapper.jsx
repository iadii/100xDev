export function CardWrapper({ innerComponent }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "7px 15px",
      }}
    >
      {innerComponent}
    </div>
  );
}
