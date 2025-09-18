export function Todo({ title, description , isDone }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{isDone}</p>
    </>
  );
}
