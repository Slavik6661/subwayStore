let user = {
  name: "John",
  age: 36,
  size: {
    a: { b: 100 },
    b: 100,
  },
  adress: {
    c: 55,
    d: 66,
  },
};
let clone2 = {};
function clone(obj) {
  const clone2 = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      clone2[i] = clone(obj[i]);
    } else {
      clone2[i] = obj[i];
    }
  }
  return clone2;
}

function clone2(obj) {
  return JSON.parse(JSON.stringify(obj));
}

clone(user, clone2);
console.log(clone(user, clone2));

// display: grid;
// grid-template-rows: 121px 1fr;
