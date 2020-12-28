/**
 * Output: JSON Data
 */
const json = fetch("https://api.github.com/users/denoland");

json.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});

/**
 * Output: HTML Data
 */
const text = fetch("https://deno.land/");

text.then((response) => {
  return response.text();
}).then((textData) => {
  console.log(textData);
});

/**
 * Output: Error Message
 */
const error = fetch("https://does.not.exist/");

error.catch((error) => console.log(error.message));