// import axios from "axios";

async function getResponse() {
  const response = await fetch("http://localhost:3000/data", {
    method: "GET",
  });
  const content = await response.json();

  /// http://myjson.dit.upm.es/api/bins/9np0
  return content;
}

// eslint-disable-next-line no-undef
// server/data.json
// axios({
//   method: "GET",
//   url: "http://localhost:3000/data",
// }).then((response) => {
//   console.log(response.data);
// });
export default getResponse;
