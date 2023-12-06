console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
      errorElement.innerHTML = "    ";
    } catch {
      console.log("ERROR");
      errorElement.innerHTML = "<h2>ERROR</h2>";
    }
  })
);

/* 
This application fetches information from the https://reqres.in API, but some buttons are trying to retrieve information from problematic URLs.

Handle the corresponding exceptions in the JS code and display an error message in the `.error` element accordingly.

Don't forget to clear the error if the fetch operation is successful!

Code Originale:
********VVV********

console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);


*****
      
*/
