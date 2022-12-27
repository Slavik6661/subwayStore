async function getProducts() {
  const response = await fetch("http://localhost:3000/data", {
    method: "GET",
  });
  const menu = await response.json();
  /// http://myjson.dit.upm.es/api/bins/9np0

  const response2 = await fetch("http://localhost:3000/modalData", {
    method: "GET",
  });
  const filings = await response2.json();

  return { menu, filings };
}

export default getProducts;
