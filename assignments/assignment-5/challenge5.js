
// 5. Write a program that accepts a userId and fetch
// user details from
// HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USER
// S endpoint using async function.
import fetch from "node-fetch";

const fetchUserDetails = async (id) => {
  if(!id) return; 
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
}

fetchUserDetails(3).then((data) => {
  console.log(data);
});