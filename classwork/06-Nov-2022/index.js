console.log("Start");

setTimeout(function () {
  console.log("I am a callback function 1");
  setTimeout(function () {
    console.log("I am a callback function 2");
  }, 1000);
}, 2000);

console.log("End");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

fetchData().then((data) => {
  console.log(data);
});
