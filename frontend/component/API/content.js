async function getResponse() {
  const response = await fetch("http://localhost:3000/data", {
    method: "GET",
  });
  const content = await response.json();

  /// http://myjson.dit.upm.es/api/bins/9np0
  return content;
}

export default getResponse;
