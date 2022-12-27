async function getResponse() {
  const response = await fetch("http://localhost:3000/data", {
    method: "GET",
  });
  const content = await response.json();
  console.log("!!!", content);
  /// http://myjson.dit.upm.es/api/bins/9np0

  const response2 = await fetch("http://localhost:3000/modalData", {
    method: "GET",
  });
  const content2 = await response2.json();
  console.log("!!!", content2);

  return { content, content2 };
}

export default getResponse;
