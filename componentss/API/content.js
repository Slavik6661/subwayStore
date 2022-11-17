async function getResponse() {
  let response = await fetch("/server/data.json", {
    method: "GET",
  });
  let content = await response.json();
  /// http://myjson.dit.upm.es/api/bins/9np0
  return content;
}

export default getResponse;
