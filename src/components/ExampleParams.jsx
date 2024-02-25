import { useParams } from "react-router";

function ExampleParams() {
  const { id, name } = useParams();
  console.log(id, name);

  return (
    <>
      <h1 style={{ marginTop: "100px" }}> This is {name}</h1>
    </>
  );
}

export default ExampleParams;
